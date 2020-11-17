const pool = require("../pool");
const { ErrorHandler } = require("../error");

class reservationRepository {
  constructor() {}


  static async getAllReservationsFromDb(customerId) {
    try {
      const [rows, fields] = await pool.query(
        `SELECT * 
        FROM ticket
        JOIN reservation ON ticket.ticketId = reservation.reservationTicketId
        WHERE ticketCustomerId = ${customerId};`
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get reservations");
    }
  }

  static async getTravelPlanPrice(travelPlanId) {
    try {
      const [rows, fields] = await pool.query(
        `
        SELECT travelplan.travelPlanPrice FROM travelPlan WHERE travelplanId = ${travelPlanId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get travel plan price");
    }
  }

  static async getRoomPrice(roomId) {
    try {
      const [rows, fields] = await pool.query(
        `
        SELECT roomPrice
        FROM room
        JOIN roomplan ON room.roomPlanId=roomplan.roomplanId
        WHERE roomId = ${roomId};
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get room price");
    }
  }


  

  static async createTicketInDb(reservation) {
    try {
      return await pool.query(`INSERT INTO ticket
                 VALUES(
                   0,
                "${reservation.ticketDateOfPurchase}",
                "${reservation.departureDate}",
                "${reservation.ticketCustomerId}");
        
                `);
    } catch (exception) {
      throw new ErrorHandler(400, "Coudn't create ticket");
    }
  }
  static async createReservationInDb(reservation,ticketId) {
    try {
      return await pool.query(`INSERT INTO reservation
                 VALUES(
                   0,
                "${ticketId}",
                "${reservation.reservationRoomId}",
                "${reservation.reservationTravelPlanId}");
        
                `);
    } catch (exception) {
      throw new ErrorHandler(400, "Coudn't create reservation");
    }
  }
      
}
module.exports.reservationRepository = reservationRepository;
