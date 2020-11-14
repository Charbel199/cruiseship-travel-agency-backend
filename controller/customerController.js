const { customerService } = require("../service/customerService");
const { createResponse } = require("../response");
const { Customer } = require('../model/Customer');
const { createCustomerMap } = require('../mapper/CustomerMapper');
class customerController {
  constructor() {}

  async register(req, res, next) {
    try {
      console.log("Registering ...");
      var customer = createCustomerMap(req);

      var customerReturned = await customerService.register(customer);
      //Login:
      req.session.userId = customer.customerId;

      createResponse(res, 201, "Successfully registered", {
        customer
      });
    } catch (exception) {
      next(exception);
    }
  }
}

module.exports.customerController = customerController;
