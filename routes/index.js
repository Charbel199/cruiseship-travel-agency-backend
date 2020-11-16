const express = require("express");
const router = express.Router();

const { customerController } = require("../controller/customerController.js");
const customerControllerObject = new customerController();
const { cruiseShipController } = require("../controller/cruiseShipController.js");
const cruiseShipControllerObject = new cruiseShipController();


//Register + Login:

//tested
router
  .route("/register")
  .post(customerControllerObject.isNotLoggedIn, customerControllerObject.register);

//tested
router
  .route("/login")
  .post(customerControllerObject.isNotLoggedIn, customerControllerObject.login); //if logged in --> can't log in
//tested
router 
  .route("/logout")
  .post(customerControllerObject.isLoggedIn, customerControllerObject.logout);




//Cruiseships:

//tested
router.route("/cruiseships").get(
  cruiseShipControllerObject.getAllCruiseShips
); 

//tested
router.route("/cruiseships/:shipId").get(
  cruiseShipControllerObject.getCruiseShipById
);
//tested
router.route("/cruiseships/:shipId/travelplans").get(
  cruiseShipControllerObject.getCruiseShipTravelPlans
); //Get rooms and get travel plans

//tested
router.route("/rooms/:roomId").get(
  cruiseShipControllerObject.getRoompById

); //Join with roomPlan
//tested
router.route("/cruiseships/:shipId/crewmembers").get(
  cruiseShipControllerObject.getCrewMemberByShipId
);

/*
router.route("/cruiseships/:shipId/travelplan/:travelPlanId/stops").get(
  cruiseShipControllerObject.getCruiseShipTravelPlanStops
); 

router.route("/cruiseships/:shipId/travelplan/:travelPlanId/rooms").get(
  cruiseShipControllerObject.getCruiseShipTravelPlanRooms
); 

*/






//Travel plan:

router.route("/travelplans/:travelPlanId").get(
  cruiseShipControllerObject.getTravelPlanById
); 

router.route("/stops/:stopId").get(
  cruiseShipControllerObject.getStopById
);






//Reservation
//Ticket price
//Ticket info




//Rating:

//All tested
router.route("/cruiseships/:shipId/rating").post(
  customerControllerObject.isLoggedIn,cruiseShipControllerObject.rateCruiseShip
);
router.route("/cruiseships/:shipId/rating").get(
 cruiseShipControllerObject.getCruiseShipRatingByShipId
);


router.route("/travelplans/:travelPlanId/rating").post(
  customerControllerObject.isLoggedIn,cruiseShipControllerObject.rateTravelPlan
);
router.route("/travelplans/:travelPlanId/rating").get(
 cruiseShipControllerObject.getTravelPlanRatingByTravelPlanId

);










module.exports = router;
