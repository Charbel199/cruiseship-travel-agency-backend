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


         

  
  static async rateCruiseShipInDb(customerId,shipId,rating) {
    try {
      const [rows, fields] = await pool.query(
        `
          INSERT INTO cruiseshiprating VALUES("0","${customerId}","${shipId}","${rating.rating}","${rating.customerReview}");
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't rate ship"+exception);
    }
  }
  static async getCruiseShipRatingByShipIdFromDb(shipId) {
    try {
      const [rows, fields] = await pool.query(
        `
          SELECT * from cruiseshiprating WHERE cruiseShipId = ${shipId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get ship ratings");
    }
  }






  
  static async rateTravelPlanInDb(customerId,travelPlanId,rating) {
    try {
      const [rows, fields] = await pool.query(
        `
          INSERT INTO travelplanrating VALUES("0","${customerId}","${travelPlanId}","${rating.rating}","${rating.customerReview}");
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't rate travelplan"+exception);
    }
  }
  static async getTravelPlanRatingByTravelPlanIdFromDb(travelPlanId) {
    try {
      const [rows, fields] = await pool.query(
        `
          SELECT * from travelPlanrating WHERE travelPlanId = ${travelPlanId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get travel plan ratings");
    }
  }

  static async getTravelPlanByIdFromDb(travelPlanId) {
    try {
      const [rows, fields] = await pool.query(
        `
          SELECT * from travelplan WHERE travelPlanId = ${travelPlanId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get travel plan");
    }
  }


  static async getStopByIdFromDb(stopId) {
    try {
      const [rows, fields] = await pool.query(
        `
          SELECT * from stop WHERE stopId = ${stopId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get stop");
    }
  }
  static async getTravelPlanStopsByTravelPlanIdFromDb(travelPlanId) {
    try {
      const [rows, fields] = await pool.query(
        `
        SELECT stop.stopId,stopDestination,stopGoogleURL,stopPictureURL,stopArrivalDate,stopDepartureDate,stopRank 
        FROM stop
        JOIN travelplanstop ON travelplanstop.stopId=stop.stopId
        WHERE travelplanstop.travelPlanId=${travelPlanId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get stop");
    }
  }
  

  static async getTravelPlanReservedRooms(shipId,travelPlanId,departureDate){
    try {
      const [rows, fields] = await pool.query(
        `
        SELECT roomId,roomFloor,roomShipId,roomCapacity,roomClass,roomInfo,roomPrice,roomPictureURL FROM
        (
        SELECT * FROM
        (SELECT reservationRoomId 
        FROM ticket
        JOIN reservation ON ticket.ticketId = reservation.reservationTicketId
        WHERE departureDate="${departureDate}" AND reservationTravelPlanId=${travelPlanId}) AS B
        JOIN room ON reservationRoomId=roomId
        WHERE room.roomShipId = ${shipId} ) AS C 
        JOIN roomplan ON C.roomplanId=roomplan.roomPlanId
        
        
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get reserved rooms");
    }
  }
  static async getRoomsByShipIdFromDb(shipId){
    try {
      const [rows, fields] = await pool.query(
        `
        SELECT roomId,roomFloor,roomShipId,roomCapacity,roomClass,roomInfo,roomPrice,roomPictureURL
        from room
        JOIN roomplan ON room.roomPlanId=roomplan.roomPlanId
        WHERE room.roomShipId = ${shipId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get rooms");
    }
  }
}
module.exports.cruiseShipRepository = cruiseShipRepository;
