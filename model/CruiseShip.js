class CruiseShip {

    constructor(shipId, shipName, shipEntertainmentInfo, shipNumberOfFloors, shipTonnage, shipSpeed, shipVolume, shipNumberOfRooms, shipCrewCapacity, shipPictureURL) {
      
      this.shipId = shipId;
      this.shipName = shipName;
      this.shipEntertainmentInfo = shipEntertainmentInfo;
      this.shipNumberOfFloors = shipNumberOfFloors;
      this.shipTonnage = shipTonnage;
      this.shipSpeed = shipSpeed;
      this.shipVolume = shipVolume;
      this.shipNumberOfRooms = shipNumberOfRooms;
      this.shipCrewCapacity = shipCrewCapacity;
      this.shipPictureURL = shipPictureURL;
  
    }
  
  }
  
  module.exports.CruiseShip = CruiseShip;
  