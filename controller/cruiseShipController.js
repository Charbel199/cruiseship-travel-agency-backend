const { cruiseShipService } = require("../service/cruiseShipService");
const { createResponse } = require("../response");
const { CruiseShip } = require('../model/CruiseShip');
const { createCruiseShipMap } = require('../mapper/CustomerMapper');
const { ErrorHandler } = require("../error");

class cruiseShipController {
  constructor() {}

  async getAllCruiseShips(req, res, next) {
    try {
      console.log("Getting all cruiseships ...");
      var cruiseships = await cruiseShipService.getAllCruiseships();
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
      console.log("Getting the specific room ...");
      var crewMembers = await cruiseShipService.getCrewMemberByShipId(req.params.shipId);
      createResponse(res, 200, "Successfully fetched the room", {
        crewMembers
      });
    } catch (exception) {
      next(exception);
    }
  }

}

module.exports.cruiseShipController = cruiseShipController;
