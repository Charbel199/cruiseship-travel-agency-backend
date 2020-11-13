const { registerService } = require("../service/registerService");
const { createResponse } = require("../response");
const { Customer } = require('../model/Customer');
const { createCustomerMap } = require('./../mapper/CustomerMapper');
class registerController {
  constructor() {}

  async register(req, res, next) {
    try {
      console.log("Registering ...");
      var customer = createCustomerMap(req);


      var customerReturned = await registerService.register(customer);
      req.session.userId = customer.customerId;

      console.log("Customer registered: ");
      console.log(customer);

      createResponse(res, 201, "Successfully registered", {
        customer
      });
    } catch (exception) {
      next(exception);
    }
  }
}

module.exports.registerController = registerController;
