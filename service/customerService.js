const bcrypt = require("bcryptjs");
const { customerRepository } = require("../repository/customerRepository");
const { ErrorHandler } = require("../error");
const { Customer } = require("../model/Customer");

class customerService {
  static async register(customer) {
    try {
      
      //Check requirements
      if (!customer.customerEmail || !customer.customerPassword) {
        throw new ErrorHandler(
          400,
          "Missing required email or password or user type fields"
        );
      }

      //Check if email already registered
      const customerInDb = await customerRepository.getCustomer(customer);

      if (customerInDb.length > 0) {
        throw new ErrorHandler(400, "Email already in use");
      }


      const hashedPassword = await hashPassword(customer.customerPassword);


      customer.customerPassword = hashedPassword;
      const customerToReturn = await customerRepository.registerCustomerToDb(customer);

      return customerToReturn;
    } catch (exception) {
      throw exception;
    }
  }
}
module.exports.customerService = customerService;

async function hashPassword(pass) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(pass, salt);
  return hashedPassword;
}
