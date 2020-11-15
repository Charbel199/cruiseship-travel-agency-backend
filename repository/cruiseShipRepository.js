const pool = require("../pool");
const { Customer } = require("../model/Customer");
const { ErrorHandler } = require("../error");

class cruiseShipRepository {
  constructor() {}


  static async getAllCruiseShipsFromDb() {
    try {
      const [rows, fields] = await pool.query(
        `select * 
        from cruiseship 
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get cruiseships from Db");
    }
  }

  
  static async getRoomByIdFromDb(roomId) {
    try {
      const [rows, fields] = await pool.query(
        `select * 
        from room
        INNER JOIN roomplan
        WHERE roomId=${roomId}
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get room from Db");
    }
  }
  static async getCruiseShipByIdFromDb(shipId) {
    try {
      const [rows, fields] = await pool.query(
        `select * 
        from cruiseship
        WHERE shipId=${shipId}
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get ship from Db");
    }
  }

  
  static async getCruiseShipTravelPlansFromDb(shipId) {
    try {
      const [rows, fields] = await pool.query(
        `SELECT travelplan.travelPlanId,travelplan.travelPlanDescription,travelplan.travelPlanRegion,travelplan.travelPlanPrice,cruisetravelplan.shipId,cruisetravelplan.departureDate,cruisetravelplan.returnDate
        FROM travelplan
        JOIN cruisetravelplan ON travelplan.travelPlanId = cruisetravelplan.travelPlanId
        WHERE shipId=${shipId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get travel plans from Db");
    }
  }


  static async getCrewMemberByShipIdFromDb(shipId) {
    try {
      const [rows, fields] = await pool.query(
        `SELECT crewmember.crewMemberId,crewMemberFirstName,crewMemberLastName,crewMemberDateOfBirth,crewMemberGender,crewMemberAddress,crewMemberTelephoneNumber,crewMemberPosition

        FROM (SELECT crewcruiseship.crewMemberId  
        FROM crewcruiseship 
        JOIN cruiseship ON cruiseship.shipId = crewcruiseship.shipId 
        WHERE crewcruiseship.shipId=${shipId} AND endDate >= current_date() ) AS B
        
        JOIN crewmember ON B.crewMemberId = crewmember.crewMemberId;
        
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get ship from Db");
    }
  }       
}
module.exports.cruiseShipRepository = cruiseShipRepository;
