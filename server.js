const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var session = require("express-session");
var MySQLStore = require("express-mysql-session")(session);
const pool = require("./pool");
const routes = require("./routes/index");
const { ErrorHandler, handleError } = require("./error");

const app = express();
const port = process.env.PORT || 8080;

//For development
app.use(cors({ // enables CORS 
  credentials: true, 
  origin: true, 
  methods: ['GET','POST'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

//Session store options:
var options = {
  clearExpired: true,

  checkExpirationInterval: 900000,
  schema: {
    tableName: "sessions",
    columnNames: {
      session_id: "session_id",
      expires: "expires",
      data: "data",
    },
  },
};
var sessionStore = new MySQLStore(options, pool);

//Interpreting JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Using session
app.use(
  session({
    name: "sid",
    resave: false,
    saveUninitialized: false,
    secret: "it is a secret",
    store: sessionStore,
  
    cookie: {
      sameSite: 'lax',
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 10000, //to change (Max value)
    },
  })
);
 
//For debugging
app.use((req, res, next) => {
  console.log("====== PRINTING SESSION COOKIE: ============");
  console.log(req.session);
  console.log("=============  Starting request   =================");
  next();
});

//V1 routes
app.use("/", routes);
//For debugging
app.use((req, res, next) => {

  console.log("=============   Done with request    ================");
  next();
});

//If wrong URL
app.all("*", function (req, res) {
  throw new ErrorHandler(404, "Not found");
});

//Error and failure handler:
app.use((err, req, res, next) => {
  handleError(err, res);
});

app.listen(port, () => {
  console.log("We are live on " + port);
});
