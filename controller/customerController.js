const { customerService } = require("../service/customerService");
const { createResponse } = require("../response");
const { Customer } = require('../model/Customer');
const { createCustomerMap, createCruiseShipRatingMap } = require('../mapper/Mapper');
const { ErrorHandler } = require("../error");

class customerController {
  constructor() {}

  async register(req, res, next) {
    try {
      console.log("Registering ...");
      var customer = createCustomerMap(req.body);

      var customerReturned = await customerService.register(customer);
      //Login:
      req.session.customerId = customerReturned[0].insertId;

      createResponse(res, 201, "Successfully registered", {
        customer
      });
    } catch (exception) {
      next(exception);
    }
  }

  async login(req, res, next) {
    try {
      var customerLogin = createCustomerMap(req.body);


      const customer = await customerService.login(customerLogin);

      //Set session id
      req.session.customerId = customer.customerId;
 

      //Response:

      createResponse(res, 200, `Successfully logged in`, {
        customer
      });
    } catch (exception) {
      next(exception);
    }
  }
  
async loginPing(req,res,next){
  try {
    console.log("PINGING")
    const customerId = req.session.customerId;
    console.log(customerId);
    var customer = await customerService.getCustomerById(customerId);

    createResponse(res, 200, `You are logged in`, {
      customer
    });

  } catch (exception) {
    next(exception);
  }
}

  logout(req, res, next) {
    try {
      console.log("Logging out...");
   
      if (!req.session.customerId && !req.session.adminId) throw new ErrorHandler(400, "Not logged in");
      
     
      if(req.session.customerId){
        const customerId = req.session.customerId;
      req.session.destroy((err) => {
        if (err) {
          throw new ErrorHandler(400, "Couldn't log out");
        } else {
          res.clearCookie("sid");
          createResponse(res, 200, "Successfully logged out", {
            customerId
          });
        }
      });
    }else if(req.sessions.adminId){
      const adminId = req.session.customerId;
      req.session.destroy((err) => {
        if (err) {
          throw new ErrorHandler(400, "Couldn't log out");
        } else {
          res.clearCookie("sid");
          createResponse(res, 200, "Successfully logged out", {
            adminId
          });
        }
      });
    }



    } catch (exception) {
      next(exception);
    }
  }

  isLoggedIn(req, res, next) {
    if (req.session.customerId) {
      console.log("Logged in, customerId : ", req.session.customerId);
      next();
    } else {
      console.log("Not logged in.");
      try {
        throw new ErrorHandler(401, "Not logged in");
      } catch (exception) {
        next(exception);
      }
    }
  }

  
  isNotLoggedIn(req, res, next) {
    if (req.session.customerId) {
      try {
        console.log("Already logged in: ", req.session.customerId);
        throw new ErrorHandler(400, "Already logged in");
      } catch (exception) {
        next(exception);
      }
    } else {
      console.log("Not logged in.");
      next();
    }
  }
}

module.exports.customerController = customerController;
