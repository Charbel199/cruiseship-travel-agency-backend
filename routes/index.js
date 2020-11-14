const express = require("express");
const router = express.Router();

const { customerController } = require("../controller/customerController.js");
const customerControllerObject = new customerController();

//Register
router
  .route("/register")
  .post(customerControllerObject.isNotLoggedIn, customerControllerObject.register);

//Login
router
  .route("/login")
  .post(customerControllerObject.isNotLoggedIn, customerControllerObject.login); //if logged in --> can't log in

router
  .route("/logout")
  .post(customerControllerObject.isLoggedIn, customerControllerObject.logout);


//Cruiseships
router.route("/cruiseships").get(); 

router.route("/cruisehips/:shipId").get();

router.route("/rooms/:roomId").get(); //Join with roomPlan

router.route("/cruiseships/:shipId/crewmembers").get();

router.route("/cruisehips/:shipId/rating").get();

router.route("/cruisehips/:shipId/travelplans").get();


//TravelPlans

router.route("/travelplans/:travelPlanId").get(); //Gets travel plan details + stops

router.route("/stops/:stopId").get();

router.route("/travelplan/:travelPlanId/rating").get();





module.exports = router;
