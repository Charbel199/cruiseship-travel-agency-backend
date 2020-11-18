const { reservationService } = require("../service/reservationService");
const { createResponse } = require("../response");
const { ErrorHandler } = require("../error");
const { createReservationMap } = require("../mapper/Mapper");


class reservationController {
  constructor() {}
 
  async getAllReservations(req, res, next) {
    try {
      console.log("Getting all reservations ...");
      var reservations = await reservationService.getAllReservations(req.session.customerId);  
      createResponse(res, 200, "Successfully fetched all reservations", {
        reservations
      });

    } catch (exception) {
      next(exception);
    }
  }
 
  async makeReservation(req, res, next) {
    try {
      req.body.ticketCustomerId = req.session.customerId;
      let date_ob = new Date();
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      let date = ("0" + date_ob.getDate()).slice(-2);
      req.body.ticketDateOfPurchase = (date_ob.getFullYear()+"-"+month+"-"+date);
      var reservation = createReservationMap(req.body);
   
      await reservationService.makeReservation(reservation);
      
      createResponse(res, 200, "Successfully created reservation", {
        reservation
      });
    } catch (exception) {
      next(exception);
    }
  }
  
}

module.exports.reservationController = reservationController;
