const bcrypt = require("bcryptjs");
const { reservationRepository } = require("../repository/reservationRepository");
const { ErrorHandler } = require("../error");
const { createReservationMap } = require("./../mapper/Mapper")

class reservationService {
  
  

  static async getAllReservations(customerId) {
    try {
      var reservationsFromDb = await reservationRepository.getAllReservationsFromDb(customerId);

      var reservations = [];
      var totalPrice;
      for(var i=0;i<reservationsFromDb.length;i++){
        totalPrice = await reservationService.getReservationPrice(
          reservationsFromDb[i].reservationTravelPlanId,reservationsFromDb[i].reservationRoomId
          )
        reservationsFromDb[i].reservationPrice = totalPrice; 
        reservations[i] = createReservationMap(reservationsFromDb[i]);
        
        
    }
      return reservations;


    } catch (exception) {
      throw exception;
    }
  }


  static async getReservationPrice(travelPlanId,roomId){
    try {
      var travelPlanPrice = await reservationRepository.getTravelPlanPrice(travelPlanId);
      var roomPrice = await reservationRepository.getRoomPrice(roomId);
      var totalPrice = travelPlanPrice[0].travelPlanPrice+ roomPrice[0].roomPrice;
      return totalPrice;

    } catch (exception) {
      throw exception;
    }
  }



  static async makeReservation(reservation){
    try {
      var reservationResponse = await reservationRepository.createTicketInDb(reservation);
      console.log("First reservation response ",reservationResponse)
      reservationResponse = await reservationRepository.createReservationInDb(reservation,reservationResponse[0].insertId);
      return reservationResponse;

    } catch (exception) {
      throw exception;
    }
  }
  


}
module.exports.reservationService = reservationService;


