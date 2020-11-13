const util = require("util");
const mysql = require("mysql2");
const dotenv = require("dotenv");
const { ErrorHandler } = require("./error");
dotenv.config();

/**
 * Connection to the database.
 *  */

var pool = mysql.createPool({
  connectionLimit: 10000,
  host: process.env.SQL_HOST,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  multipleStatements: true,
});
 
pool.getConnection((err, connection) => {
  try {
    if (err) {
      console.error("Something went wrong connecting to the database ..: ",err);
      throw new ErrorHandler(500, "Can't connect to database");
    }
    if (connection) connection.release();
    return;
  } catch (exception) {
    throw exception;
  }
});

pool = pool.promise();

module.exports = pool;
