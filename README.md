# CruiseShipTravelAgencyBackend
====================================
API DOCUMENTATION
====================================

              MODELS:

===========
CREW MEMBER
===========
      this.crewMemberId = crewMemberId;
      this.crewMemberFirstName = crewMemberFirstName;
      this.crewMemberLastName = crewMemberLastName;
      this.crewMemberDateOfBirth = crewMemberDateOfBirth;
      this.crewMemberGender = crewMemberGender;
      this.crewMemberAddress = crewMemberAddress;
      this.crewMemberTelephoneNumber = crewMemberTelephoneNumber;
      this.crewMemberPosition = crewMemberPosition;
============
CRUISE SHIP
===========
      this.shipId = shipId;
      this.shipName = shipName;
      this.shipEntertainmentInfo = shipEntertainmentInfo;
      this.shipNumberOfFloors = shipNumberOfFloors;
      this.shipTonnage = shipTonnage;
      this.shipSpeed = shipSpeed;
      this.shipVolume = shipVolume;
      this.shipNumberOfRooms = shipNumberOfRooms;
      this.shipCrewCapacity = shipCrewCapacity;
      this.shipPictureURL = shipPictureURL;

============
CUSTOMER
===========
    this.customerId = customerId;
    this.customerFirstName = customerFirstName;
    this.customerLastName = customerLastName;
    this.customerDateOfBirth = customerDateOfBirth;
    this.customerGender = customerGender;
    this.customerAddress = customerAddress;
    this.customerTelephoneNumber = customerTelephoneNumber;
    this.customerEmail = customerEmail;
    this.customerPassword = customerPassword;

============
RATING
===========
      this.entityId = entityId;
      this.rating = rating;
      this.customerReview = customerReview;


============
RESERVATION
===========
        this.reservationId = reservationId;
        this.reservationTicketId = reservationTicketId; 
        this.reservationRoomId = reservationRoomId; 
        this.reservationTravelPlanId = reservationTravelPlanId; 
        this.reservationPrice = reservationPrice;
        this.ticketDateOfPurchase = ticketDateOfPurchase;
        this.departureDate = departureDate;
        this.ticketCustomerId = ticketCustomerId;

============
ROOM
===========
      this.roomId = roomId;
      this.roomFloor = roomFloor;
      this.roomShipId = roomShipId;
      this.roomCapacity = roomCapacity;
      this.roomClass = roomClass;
      this.roomInfo = roomInfo;
      this.roomPrice = roomPrice;
      this.roomPictureURL = roomPictureURL;
      this.roomStatus = roomStatus; //ONLY USED WHEN GETTING ALL ROOMS OF A SPECIFIC TRIP

============
STOP
===========
      this.stopId = stopId;
      this.stopDestination = stopDestination;
      this.stopGoogleURL = stopGoogleURL;
      this.stopPictureURL = stopPictureURL;
      this.stopArrivalDate = stopArrivalDate;
      this.stopDepartureDate = stopDepartureDate;
      this.stopRank = stopRank;

============
TRAVEL PLAN
===========
      this.travelPlanId = travelPlanId;
      this.travelPlanDescription = travelPlanDescription;
      this.travelPlanRegion = travelPlanRegion;
      this.travelPlanPrice = travelPlanPrice;
      this.shipId = shipId;
      this.departureDate = departureDate;
      this.returnDate = returnDate;








              APIs:



====================================
//Register + Login:
====================================
//tested
router
  .route("/register")
  .post(customerControllerObject.isNotLoggedIn, customerControllerObject.register);

//tested
router
  .route("/login")
  .post(customerControllerObject.isNotLoggedIn, customerControllerObject.login); 

//tested
router 
  .route("/logout")
  .post(customerControllerObject.isLoggedIn, customerControllerObject.logout);

=====================================
EXAMPLES:
====================================
### Register User

POST http://localhost:8080/register
Content-Type: application/json

{
    "customerFirstName":"khokho",
    "customerLastName":"mayer",
    "customerDateOfBirth":"2000",
    "customerGender":"M",
    "customerAddress":"Fanar",
    "customerTelephoneNumber":"03532816",
    "customerEmail":"tester@gmail.com",
    "customerPassword":"password"
}

### Login User

POST http://localhost:8080/login
Content-Type: application/json

{
    "customerEmail":"tester@gmail.com",
    "customerPassword":"password"
}


### Logout User

POST http://localhost:8080/logout

===========================================================================









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
router.route("/travelplan/:travelPlanId/stops").get(
  cruiseShipControllerObject.getTravelPlanStops
); 

//tested
router.route("/cruiseships/:shipId/travelplan/:travelPlanId/rooms").get(
  cruiseShipControllerObject.getCruiseShipTravelPlanRooms
)

=====================================
EXAMPLES:
====================================

### Get all cruiseships

GET http://localhost:8080/cruiseships
--> List of CRUISESHIPS

### Get specific ship

GET http://localhost:8080/cruiseships/1
--> One CRUISESHIP

### Get specific room

GET http://localhost:8080/rooms/1
--> One ROOM


### Get ship travelplans

GET http://localhost:8080/cruiseships/1/travelplans
-->List of TRAVEL PLANS


### Get travel plan stops

GET http://localhost:8080/travelplan/2/stops
-->List of STOPS


### Get ship crewmembers

GET http://localhost:8080/cruiseships/1/crewmembers
-->List of CREWMEMBERS whose contract did not end


### Get all rooms with info

GET http://localhost:8080/cruiseships/1/travelplan/1/rooms
Content-Type: application/json

{
    "departureDate":"2020-12-19"
}
-->Get list of ROOMS with roomStatus



===========================================================================
//Travel plan specific:

//tested
router.route("/travelplans/:travelPlanId").get(
  cruiseShipControllerObject.getTravelPlanById
); 

//test
router.route("/stops/:stopId").get(
  cruiseShipControllerObject.getStopById
);



=====================================
EXAMPLES:
====================================


### Get travel plan by id

GET http://localhost:8080/travelplans/1
-->Get one TRAVEL PLAN (No dates)

### Get stop by id

GET http://localhost:8080/stops/3
-->Get one TRAVEL PLAN (No dates or rank)










===========================================================================
//Reservation

//tested
router.route("/reservations").get(
  customerControllerObject.isLoggedIn,reservationControllerObject.getAllReservations
); //Returns price with it 

//tested
router.route("/reservations").post(
  customerControllerObject.isLoggedIn,reservationControllerObject.makeReservation
);



=====================================
EXAMPLES:
====================================




### Get all reservations

GET http://localhost:8080/reservations
-->Get list of RESERVATIONS of logged in user

### Make a reservation

POST http://localhost:8080/reservations
Content-Type: application/json

{
    "departureDate":"2020-12-19",
    "reservationRoomId":"1",
    "reservationTravelPlanId":"2"
}









===========================================================================
//Rating:
//All tested

router.route("/cruiseships/:shipId/rating").post(
  customerControllerObject.isLoggedIn,cruiseShipControllerObject.rateCruiseShip
);

router.route("/cruiseships/:shipId/rating").get(
 cruiseShipControllerObject.getCruiseShipRatingByShipId
);
-->Get list of RATINGS

router.route("/travelplans/:travelPlanId/rating").post(
  customerControllerObject.isLoggedIn,cruiseShipControllerObject.rateTravelPlan
);

router.route("/travelplans/:travelPlanId/rating").get(
 cruiseShipControllerObject.getTravelPlanRatingByTravelPlanId
);
-->Get list of RATINGS



=====================================
EXAMPLES:
====================================

### Get ship rating

GET http://localhost:8080/cruiseships/1/rating


### Rate a ship

POST http://localhost:8080/cruiseships/1/rating
Content-Type: application/json

{
    "shipRating":"5",
    "shipCustomerReview":"Very nice ship and good vibes"
}


### Get travel plan rating

GET http://localhost:8080/travelplans/1/rating


### Rate a travel plan

POST http://localhost:8080/travelPlans/1/rating
Content-Type: application/json

{
    "travelPlanRating":"5",
    "travelPlanCustomerReview":"Very nice nice trip"
}


