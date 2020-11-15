const { cruiseShipService } = require("../service/cruiseShipService");
const { createResponse } = require("../response");
const { CruiseShip } = require('../model/CruiseShip');
const { createCruiseShipMap } = require('../mapper/Mapper');
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
      var cruiseship = await cruiseShipService.getCruiseShipById(req.params.shipId);
      createResponse(res, 200, "Successfully fetched the cruiseship", {
        cruiseship
      });
    } catch (exception) {
      next(exception);
    }
  }

 
  async getCruiseShipTravelPlans(req, res, next) {
    try {
      console.log("Getting cruiseship travel plans ...");
      var travelPlans = await cruiseShipService.getCruiseShipTravelPlans(req.params.shipId);
      createResponse(res, 200, "Successfully fetched the travel plans", {
        travelPlans
      });
    } catch (exception) {
      next(exception);
    }
  }
  //Joined with room plan
  async getRoompById(req, res, next) {
    try {
      console.log("Getting the specific room ...");
      var room = await cruiseShipService.getRoomById(req.params.roomId);
      createResponse(res, 200, "Successfully fetched the room", {
        room
      });
    } catch (exception) {
      next(exception);
    }
  }


  async getCrewMemberByShipId(req, res, next) {
    try {
      console.log("Getting crew members ...");
      var crewMembers = await cruiseShipService.getCrewMemberByShipId(req.params.shipId);
      createResponse(res, 200, "Successfully fetched crew members", {
        crewMembers
      });
    } catch (exception) {
      next(exception);
    }
  }


  async rateCruiseShip(req, res, next) {
    try {
      console.log("Getting the specific room ...");
      //Map body to rating object

      var crewMembers = await cruiseShipService.rateCruiseShip(req.session.customerId,req.params.shipId); // rating object instead of shipId
      createResponse(res, 200, "Successfully rated the cruiseship", {
        //Add rating object
      });
    } catch (exception) {
      next(exception);
    }
  }


}

module.exports.cruiseShipController = cruiseShipController;
