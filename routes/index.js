const express = require("express");
const router = express.Router();
//const { loginController } = require("../controller/loginController.js");
//const loginControllerObject = new loginController();

const { customerController } = require("../controller/customerController.js");
const customerControllerObject = new customerController();

//Register
router
  .route("/register")
  .post( customerControllerObject.register);

//Login
/*router
  .route("/login")
  .post(loginControllerObject.isNotLoggedIn, loginControllerObject.login); //if logged in --> can't log in
router
  .route("/logout")
  .post(loginControllerObject.isLoggedIn, loginControllerObject.logout);
*/
module.exports = router;
