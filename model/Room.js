class Room {

    constructor(roomId,roomFloor,roomShipId,roomCapacity,roomClass,roomInfo,roomPrice,roomPictureURL) {
      
      this.roomId = roomId;
      this.roomFloor = roomFloor;
      this.roomShipId = roomShipId;
      this.roomCapacity = roomCapacity;
      this.roomClass = roomClass;
      this.roomInfo = roomInfo;
      this.roomPrice = roomPrice;
      this.roomPictureURL = roomPictureURL;
  
    }
  
  }
  
  module.exports.Room = Room;
  