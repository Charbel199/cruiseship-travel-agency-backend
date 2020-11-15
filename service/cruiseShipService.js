const bcrypt = require("bcryptjs");
const { cruiseShipRepository } = require("../repository/cruiseShipRepository");
const { ErrorHandler } = require("../error");
const { CruiseShip } = require("../model/CruiseShip");
const { createCruiseShipMap, createRoomMap, createTravelPlanMap, createCrewMemberMap, createCruiseShipRatingMap, createTravelPlanRatingMap } = require('../mapper/Mapper');
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

  
  
  static async getCruiseShipTravelPlans(shipId) {
    try {
      var travelPlansFromDb = await cruiseShipRepository.getCruiseShipTravelPlansFromDb(shipId);

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

  static async getCrewMemberByShipId(shipId) {
    try {
      var crewMembersFromDb = await cruiseShipRepository.getCrewMemberByShipIdFromDb(shipId);
      var crewMembers = [];
      for(var i=0;i<crewMembersFromDb.length;i++)
        crewMembers[i] = createCrewMemberMap(crewMembersFromDb[i]);

      return crewMembers;

      
      


    } catch (exception) {
      throw exception;
    }
  }


  static async rateCruiseShip(customerId,shipId,rating) {
    try {
      var ratingResponse = await cruiseShipRepository.rateCruiseShipInDb(customerId,shipId,rating);


      return ratingResponse;

      
      


    } catch (exception) {
      throw exception;
    }
  }
  
  static async getCruiseShipRatingByShipId(shipId) {
    try {
      var ratingsFromDb = await cruiseShipRepository.getCruiseShipRatingByShipIdFromDb(shipId);
      var ratings = [];
      for(var i=0;i<ratingsFromDb.length;i++)
        ratings[i] = createCruiseShipRatingMap(ratingsFromDb[i]);

      return ratings;

      
      


    } catch (exception) {
      throw exception;
    }
  }


  static async rateTravelPlan(customerId,travelPlanId,rating) {
    try {
      var ratingResponse = await cruiseShipRepository.rateTravelPlanInDb(customerId,travelPlanId,rating);


      return ratingResponse;

      
      


    } catch (exception) {
      throw exception;
    }
  }
  
  static async getTravelPlanRatingByTravelPlanId(travelPlanId) {
    try {
      var ratingsFromDb = await cruiseShipRepository.getTravelPlanRatingByTravelPlanIdFromDb(travelPlanId);
      var ratings = [];
      for(var i=0;i<ratingsFromDb.length;i++)
        ratings[i] = createTravelPlanRatingMap(ratingsFromDb[i]);

      return ratings; 

      
      


    } catch (exception) {
      throw exception;
    }
  }
  

}
module.exports.cruiseShipService = cruiseShipService;


