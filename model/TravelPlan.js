class TravelPlan {

    constructor(travelPlanId, travelPlanDescription, travelPlanRegion, travelPlanPrice, travelPlanPictureURL, shipId, departureDate, returnDate) {
      
      this.travelPlanId = travelPlanId;
      this.travelPlanDescription = travelPlanDescription;
      this.travelPlanRegion = travelPlanRegion;
      this.travelPlanPrice = travelPlanPrice;
      this.travelPlanPictureURL = travelPlanPictureURL;
      this.shipId = shipId;
      this.departureDate = departureDate;
      this.returnDate = returnDate;
    }
  
  }
  
  module.exports.TravelPlan = TravelPlan;
  