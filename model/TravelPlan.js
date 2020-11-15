class TravelPlan {

    constructor(travelPlanId, travelPlanDescription, travelPlanRegion, travelPlanPrice, shipId, departureDate, returnDate) {
      
      this.travelPlanId = travelPlanId;
      this.travelPlanDescription = travelPlanDescription;
      this.travelPlanRegion = travelPlanRegion;
      this.travelPlanPrice = travelPlanPrice;
      this.shipId = shipId;
      this.departureDate = departureDate;
      this.returnDate = returnDate;
    }
  
  }
  
  module.exports.TravelPlan = TravelPlan;
  