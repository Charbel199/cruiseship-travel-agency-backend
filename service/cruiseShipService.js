const bcrypt = require("bcryptjs");
const { cruiseShipRepository } = require("../repository/cruiseShipRepository");
const { ErrorHandler } = require("../error");
const { CruiseShip } = require("../model/CruiseShip");
const { createCruiseShipMap, createRoomMap } = require('../mapper/Mapper');
class cruiseShipService {
  
  

  static async getAllCruiseShips() {
    try {
      var cruiseShipsFromDb = await cruiseShipRepository.getAllCruiseShipsFromDb();
      var cruiseShips = [];
      for(var i=0;i<cruiseShipsFromDb.length;i++)
        cruiseShips[i] = createCruiseShipMap(cruiseShipsFromDb[i]);


      
      return cruiseShips;


    } catch (exception) {
      throw exception;
    }
  }


  static async  getCruiseShipById(shipId) {
    try {
      var cruiseShipFromDb = await cruiseShipRepository.getCruiseShipByIdFromDb(shipId);
      var cruiseShip = createCruiseShipMap(cruiseShipFromDb[0]);


      
      return cruiseShip;


    } catch (exception) {
      throw exception;
    }
  }

  
  
  static async  getCruiseShipTravelPlans(shipId) {
    try {
      var travelPlansFromDb = await cruiseShipRepository.getCruiseShipByIdFromDb(shipId);

      var travelPlans = [];
      for(var i=0;i<travelPlansFromDb.length;i++)
        travelPlans[i] = createTravelPlanMap(travelPlansFromDb[i]);



      
      return travelPlans;


    } catch (exception) {
      throw exception;
    }
  }
  static async getRoomById(roomId) {
    try {
      var roomFromDb = await cruiseShipRepository.getRoomByIdFromDb(roomId);

      var room = createRoomMap(roomFromDb[0]);

      return room;

      
      


    } catch (exception) {
      throw exception;
    }
  }


  s
}
module.exports.cruiseShipService = cruiseShipService;


