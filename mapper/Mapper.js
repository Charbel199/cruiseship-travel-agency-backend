const { Customer } = require('../model/Customer');
const { CruiseShip } = require('../model/CruiseShip');
const { Room } = require('../model/Room');
module.exports.createCustomerMap = function createCustomerMap(body){
    var customer = new Customer(
        body.customerId,
        body.customerFirstName, 
        body.customerLastName, 
        body.customerDateOfBirth, 
        body.customerGender, 
        body.customerAddress, 
        body.customerTelephoneNumber, 
        body.customerEmail,
        body.customerPassword
    )
        return customer;
}

module.exports.createCruiseShipMap = function createCruiseShipMap(body){
    var cruiseShip = new CruiseShip(
        body.shipId,
        body.shipName,
        body.shipEntertainmentInfo,
        body.shipNumberOfFloors,
        body.shipTonnage,
        body.shipSpeed,
        body.shipVolume,
        body.shipNumberOfRooms,
        body.shipCrewCapacity,
        body.shipPictureURL
    )
        return cruiseShip;
}

module.exports.createRoomMap = function createRoomMap(body){
    var room = new Room(
        body.roomId,
        body.roomFloor, 
        body.roomShipId,
        body.roomCapacity, 
        body.roomClass, 
        body.roomInfo,
        body.roomPrice, 
        body.roomPictureURL
    )
        return room;
}