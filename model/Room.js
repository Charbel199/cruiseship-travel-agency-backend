class Room {
  //Add if available
    constructor(roomId,roomFloor,roomShipId,roomCapacity,roomClass,roomInfo,roomPrice,roomPictureURL,roomStatus) {
      
      this.roomId = roomId;
      this.roomFloor = roomFloor;
      this.roomShipId = roomShipId;
      this.roomCapacity = roomCapacity;
      this.roomClass = roomClass;
      this.roomInfo = roomInfo;
      this.roomPrice = roomPrice;
      this.roomPictureURL = roomPictureURL;
      this.roomStatus = roomStatus;
      
    }
  
  }
  
  module.exports.Room = Room;
  