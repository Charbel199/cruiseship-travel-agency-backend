const pool = require("../pool");
const { Customer } = require("../model/Customer");
const { ErrorHandler } = require("../error");

class registerRepository {
  constructor() {}

  static async registerCustomerToDb(customer) {
    try {
      return await pool.query(`INSERT INTO customer
                (customerFirstName,
                customerLastName,
                customerDateOfBirth,
                customerGender,
                customerAddress,
                customerTelephoneNumber,
                customerEmail,
                customerPassword) VALUES(
                "${customer.customerFirstName}",
                "${customer.customerLastName}",
                "${customer.customerDateOfBirth}",
                "${customer.customerGender}",
                "${customer.customerAddress}",
                "${customer.customerTelephoneNumber}",
                "${customer.customerEmail}",
                "${customer.customerPassword}")`);
    } catch (exception) {
      throw new ErrorHandler(400, "Coudn't register");
    }
  }
  static async getCustomer(customer) {
    try {
      const [rows, fields] = await pool.query(
        `select * from customer where customerEmail="${cusomter.customerEmail}"`
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't check customer in Db");
    }
  }
}
module.exports.registerRepository = registerRepository;
