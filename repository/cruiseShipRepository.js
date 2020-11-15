const pool = require("../pool");
const { Customer } = require("../model/Customer");
const { ErrorHandler } = require("../error");

class cruiseShipRepository {
  constructor() {}


  static async getAllCruiseShipsFromDb() {
    try {
      const [rows, fields] = await pool.query(
        `select * 
        from cruiseship 
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get cruiseships from Db");
    }
  }

  
  static async getRoomByIdFromDb(roomId) {
    try {
      const [rows, fields] = await pool.query(
        `select * 
        from room
        INNER JOIN roomplan
        WHERE roomId=${roomId}
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get room from Db");
    }
  }
  static async getCruiseShipByIdFromDb(shipId) {
    try {
      const [rows, fields] = await pool.query(
        `select * 
        from cruiseship
        WHERE shipId=${shipId}
        `
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't get ship from Db");
    }
  }
  
      
}
module.exports.cruiseShipRepository = cruiseShipRepository;
