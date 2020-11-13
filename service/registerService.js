const bcrypt = require("bcryptjs");
const { registerRepository } = require("../repository/registerRepository");
const { ErrorHandler } = require("../error");
const { Customer } = require("../model/Customer");

class registerService {
  static async register(customer) {
    try {
      
      //Check requirements
      if (false) {
        throw new ErrorHandler(
          400,
          "Missing required username or password or user type fields"
        );
      }

      //Check if username already registered
     // const cusomterInDb = await registerRepository.getCustomer(customer);
/*
      if (customerInDb.length > 0) {
        throw new ErrorHandler(400, "Email already in use");
      }

*/
      const hashedPassword = await hashPassword(customer.customerPassword);


      customer.customerPassword = hashedPassword;
      console.log("CUSTOMER: ",customer)
      console.log("CUSTOMER NAME ",customer.customerFirstName)
      const customerToReturn = await registerRepository.registerCustomerToDb(customer);

      return customerToReturn;
    } catch (exception) {
      throw exception;
    }
  }
}
module.exports.registerService = registerService;

async function hashPassword(pass) {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(pass, salt);
  return hashedPassword;
}
