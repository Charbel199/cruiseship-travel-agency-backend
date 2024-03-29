const express = require("express");
const router = express.Router();

const { customerController } = require("../controller/customerController.js");
const customerControllerObject = new customerController();
const { cruiseShipController } = require("../controller/cruiseShipController.js");
const cruiseShipControllerObject = new cruiseShipController();
const { reservationController } = require("../controller/reservationController.js");
const reservationControllerObject = new reservationController();
const { adminController } = require("../controller/adminController.js");
const adminControllerObject = new adminController();



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
.route("/login")
.get(customerControllerObject.loginPing); //if logged in --> can't log in
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

//tested
router.route("/travelplans/:travelPlanId/stops").get(
  cruiseShipControllerObject.getTravelPlanStops
); 


//tested
router.route("/cruiseships/:shipId/travelplans/:travelPlanId/rooms").get(
  cruiseShipControllerObject.getCruiseShipTravelPlanRooms
)








//Travel plan:
//tested
router.route("/travelplans/:travelPlanId").get(
  cruiseShipControllerObject.getTravelPlanById
); 
//test
router.route("/stops/:stopId").get(
  cruiseShipControllerObject.getStopById
);






//Reservation
//tested
router.route("/reservations").get(
  customerControllerObject.isLoggedIn,reservationControllerObject.getAllReservations
); //Returns price with it 
//tested
router.route("/reservations").post(
  customerControllerObject.isLoggedIn,reservationControllerObject.makeReservation
);






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

router.route("/admin/login").post(
  customerControllerObject.isNotLoggedIn, adminControllerObject.login
);

router.route("/admin/travelPlan").post(
  adminControllerObject.pushPlan

);
router.route("/admin/travelPlan/:travelPlanId").delete(
  adminControllerObject.deletePlan
);
router.route("/admin/stop").post(
  adminControllerObject.pushStop
);

router.route("/admin/stop/:stopId").delete(
  adminControllerObject.deleteStop
);

router.route("/admin/crewMember").post(
  adminControllerObject.pushCrewMember
);
router.route("/admin/crewMember/:crewMemberId").delete(
  adminControllerObject.deleteCrewMember
)


router.route("/admin/ship/:shipId/travelPlan/:travelPlanId").post(
  adminControllerObject.linkShipTravelPlan
)
router.route("/admin/travelPlan/:travelPlanId/stop/:stopId").post(
  adminControllerObject.linkTravelPlanStop
)






module.exports = router;
