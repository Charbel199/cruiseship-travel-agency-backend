const express = require("express");
const router = express.Router();

const { customerController } = require("../controller/customerController.js");
const customerControllerObject = new customerController();
const { cruiseShipController } = require("../controller/cruiseShipController.js");
const cruiseShipControllerObject = new cruiseShipController();
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
router.route("/cruiseships").get(
  cruiseShipControllerObject.getAllCruiseShips
); 

router.route("/cruiseships/:shipId").get(
  cruiseShipControllerObject.getCruiseShipById
); //Get rooms and get travel plans

router.route("/cruiseships/:shipId/travelplans").get(
  cruiseShipControllerObject.getCruiseShipTravelPlans
); //Get rooms and get travel plans

router.route("/rooms/:roomId").get(
  cruiseShipControllerObject.getRoompById
); //Join with roomPlan






router.route("/cruiseships/:shipId/crewmembers").get(
  cruiseShipControllerObject.getCrewMemberByShipId
);

router.route("/cruisehips/:shipId/rating").post(
  cruiseShipControllerObject.rateCruiseShip
);




//TravelPlans

router.route("/travelplans/:travelPlanId").get(); //Gets travel plan details + stops

router.route("/stops/:stopId").get();

router.route("/travelplan/:travelPlanId/rating").post();



//Ticket price
//Ticket info



module.exports = router;
