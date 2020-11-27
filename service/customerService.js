const bcrypt = require("bcryptjs");
const { customerRepository } = require("../repository/customerRepository");
const { ErrorHandler } = require("../error");
const { Customer } = require("../model/Customer");
const { createCustomerMap } = require('../mapper/Mapper');
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
  static async  getCustomerById(customerId) {
    try {
      var customer = await customerRepository.getCustomerByIdFromDb(customerId);
      if(customer.length == 0){
        throw new ErrorHandler(401, 'Not logged in');
      }
      customer = createCustomerMap(customer[0]);  

      return customer;
    } catch (exception) {
      throw exception;
    }
  }
 

  static async login(customer) {
    try {
      if (!customer.customerEmail || !customer.customerPassword)
        throw new ErrorHandler(400, "Bad login format");



      var customerFromDb = await customerRepository.getCustomer(customer);

      //User not found:
      if (customerFromDb.length == 0) {
        throw new ErrorHandler(404, "User not found");
      }

      //Compare password:
      if (bcrypt.compareSync(customer.customerPassword, customerFromDb[0].customerPassword)) {
        var customerToReturn = createCustomerMap(customerFromDb[0]);

        return customerToReturn;
      } else {
        throw new ErrorHandler(400, "Wrong password");
      }
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
