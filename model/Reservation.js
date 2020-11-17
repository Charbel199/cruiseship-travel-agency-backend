class Reservation {
    //Add if available
      constructor(reservationId, reservationTicketId, reservationRoomId, reservationTravelPlanId,reservationPrice,ticketDateOfPurchase,departureDate,ticketCustomerId) {
        
        this.reservationId = reservationId;
        this.reservationTicketId = reservationTicketId; 
        this.reservationRoomId = reservationRoomId; 
        this.reservationTravelPlanId = reservationTravelPlanId; 
        this.reservationPrice = reservationPrice;
        this.ticketDateOfPurchase = ticketDateOfPurchase;
        this.departureDate = departureDate;
        this.ticketCustomerId = ticketCustomerId;
      }
    
    }
    
    module.exports.Reservation = Reservation;
    