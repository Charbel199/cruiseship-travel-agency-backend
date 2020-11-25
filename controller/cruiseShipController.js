const { cruiseShipService } = require("../service/cruiseShipService");
const { createResponse } = require("../response");
const { CruiseShip } = require('../model/CruiseShip');
const { createCruiseShipRatingMap } = require('../mapper/Mapper');
const { createTravelPlanRatingMap } = require('../mapper/Mapper');
const { ErrorHandler } = require("../error");

class cruiseShipController {
  constructor() {}

  async getAllCruiseShips(req, res, next) {
    try {
      console.log("Getting all cruiseships ...");
      var cruiseships = await cruiseShipService.getAllCruiseShips();
      createResponse(res, 200, "Successfully fetched all cruiseships", {
        cruiseships
      });
    } catch (exception) {
      next(exception);
    }
  }
  async getCruiseShipById(req, res, next) {
    try {
      console.log("Getting the specific cruiseship ...");
      var cruiseships = await cruiseShipService.getCruiseShipById(req.params.shipId);
      createResponse(res, 200, "Successfully fetched the cruiseship", {
        cruiseships
      });
    } catch (exception) {
      next(exception);
    }
  }

 
  async getCruiseShipTravelPlans(req, res, next) {
    try {
      console.log("Getting cruiseship travel plans ...");
      var travelplans = await cruiseShipService.getCruiseShipTravelPlans(req.params.shipId);
      createResponse(res, 200, "Successfully fetched the travel plans", {
        travelplans
      });
    } catch (exception) {
      next(exception);
    }
  }
  //Joined with room plan
  async getRoompById(req, res, next) {
    try {
      console.log("Getting the specific room ...");
      var rooms = await cruiseShipService.getRoomById(req.params.roomId);
      createResponse(res, 200, "Successfully fetched the room", {
        rooms
      });
    } catch (exception) {
      next(exception);
    }
  }


  async getCrewMemberByShipId(req, res, next) {
    try {
      console.log("Getting crew members ...");
      var crewmembers = await cruiseShipService.getCrewMemberByShipId(req.params.shipId);
      createResponse(res, 200, "Successfully fetched crew members", {
        crewmembers
      });
    } catch (exception) {
      next(exception);
    }
  }


  async rateCruiseShip(req, res, next) {
    try {
      console.log("Rating cruiseship ...");
      req.body.cruiseShipId = req.params.shipId;
      var rating = createCruiseShipRatingMap(req.body);
      console.log(rating);
      //Map body to rating object
    
      await cruiseShipService.rateCruiseShip(req.session.customerId,rating); // rating object instead of shipId
      createResponse(res, 200, "Successfully rated the cruiseship", {
        rating
      });
    } catch (exception) {
      next(exception);
    }
  }
  async getCruiseShipRatingByShipId(req, res, next) {
    try {
      console.log("Getting ship ratings ...");


      var ratings = await cruiseShipService.getCruiseShipRatingByShipId(req.params.shipId); // rating object instead of shipId
      createResponse(res, 200, "Successfully fetched cruiseship ratings", {
        ratings
      });
    } catch (exception) {
      next(exception);
    }
  }

  async rateTravelPlan(req, res, next) {
    try {
      console.log("Rating TravelPlan ...");
      req.body.travelPlanId = req.params.travelPlanId;
      var rating = createTravelPlanRatingMap(req.body);
      //Map body to rating object
    
      await cruiseShipService.rateTravelPlan(req.session.customerId,rating); // rating object instead of shipId
      createResponse(res, 200, "Successfully rated the TravelPlan", {
        rating
      });
    } catch (exception) {
      next(exception);
    }
  }
  async getTravelPlanRatingByTravelPlanId(req, res, next) {
    try {
      console.log("Getting travel plan ratings ...");


      var ratings = await cruiseShipService.getTravelPlanRatingByTravelPlanId(req.params.travelPlanId); 
      createResponse(res, 200, "Successfully fetched TravelPlan ratings", {
        ratings
      });
    } catch (exception) {
      next(exception);
    }
  }




  async getTravelPlanById(req, res, next) {
    try {
      console.log("Getting travel plan ...");


      var travelplans = await cruiseShipService.getTravelPlanById(req.params.travelPlanId); 
      createResponse(res, 200, "Successfully fetched travel plan", {
        travelplans
      });
    } catch (exception) {
      next(exception);
    }
  }

  async getStopById(req, res, next) {
    try {
      console.log("Getting stop ...");


      var stops = await cruiseShipService.getStopById(req.params.stopId); 
      createResponse(res, 200, "Successfully fetched stop", {
        stops
      });
    } catch (exception) {
      next(exception);
    }
  }
  async getTravelPlanStops(req, res, next) {
    try {
      console.log("Getting travel plan stops ...");

      
      var stops = await cruiseShipService.getTravelPlanStops(req.params.travelPlanId); 
      createResponse(res, 200, "Successfully fetched stops", {
        stops
      });
    } catch (exception) {
      next(exception);
    }
  }

  async  getCruiseShipTravelPlanRooms(req, res, next) {
    try {
      console.log("Getting travel plan rooms ...");
      var travelPlanId = req.params.travelPlanId;
      var shipId = req.params.shipId;
      var departureDate = req.query.departureDate;
      var rooms = await cruiseShipService.getCruiseShipTravelPlanRooms(shipId,travelPlanId,departureDate); 
      createResponse(res, 200, "Successfully fetched rooms", {
        rooms
      });
    } catch (exception) {
      next(exception);
    }
  }


  
}

module.exports.cruiseShipController = cruiseShipController;
