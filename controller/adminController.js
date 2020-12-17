const { adminRepository } = require("../repository/adminRepository");
const { createResponse } = require("../response");
const { Customer } = require('../model/Customer');
const { createCustomerMap, createCruiseShipRatingMap } = require('../mapper/Mapper');
const { ErrorHandler } = require("../error");

class adminController {
  constructor() {}


  async login(req, res, next) {
    try {
        console.log("IN ADMIN LOGIN") 
      var adminLogin = {
          email: req.body.email,
          password: req.body.password
      };
      console.log(adminLogin);
      const admin = await adminRepository.getAdminByIdFromDb(adminLogin.email);
      console.log(admin);
      if(admin.length == 0){
        throw new ErrorHandler(401, 'Not registered');
      }
      if(admin[0].password != adminLogin.password){
        throw new ErrorHandler(401, 'Wrong password');
      }
      console.log(admin)
      //Set session id
      req.session.adminId = admin[0].adminId;

      //Response:

      createResponse(res, 200, `Successfully logged in`, {
        adminLogin
      });
    } catch (exception) {
      next(exception);
    }
  }



//plans
  async pushPlan(req, res, next) {
    try {
      
      const travelPlan = req.body;
      await adminRepository.pushTravelPlanInDb(travelPlan)
      
      createResponse(res, 200, "Successfully created travelPlan", {
        travelPlan
      });
    } catch (exception) {
      next(exception);
    }
  }
  async deletePlan(req, res, next) {
    try {
      
      var travelPlanId =  req.params.travelPlanId;
      await adminRepository.deleteTravelPlanInDb(req.params.travelPlanId);
      
      createResponse(res, 200, "Successfully deleted travelPlan", {
        travelPlanId 
      });
    } catch (exception) {
      next(exception);
    }
  }




//Stops
  async pushStop(req, res, next) {
    try {
      
      const stop = req.body;
      await adminRepository.pushStopInDb(stop)
      
      createResponse(res, 200, "Successfully created stop", {
        stop
      });
    } catch (exception) {
      next(exception);
    }
  }
  async deleteStop(req, res, next) {
    try {
      
      var stopId =  req.params.stopId;
      await adminRepository.deleteStopInDb(req.params.stopId);
      
      createResponse(res, 200, "Successfully deleted stop", {
        stopId 
      });
    } catch (exception) {
      next(exception);
    }
  }

//CREW
  async pushCrewMember(req, res, next) {
    try {
      
      const crewMember = req.body;
      await adminRepository.pushCrewMemberInDb(crewMember)
      
      createResponse(res, 200, "Successfully created crewMember", {
        crewMember
      });
    } catch (exception) {
      next(exception);
    }
  }
  async deleteCrewMember(req, res, next) {
    try {
      
      var crewMemberId =  req.params.crewMemberId;
      await adminRepository.deleteCrewMemberInDb(req.params.crewMemberId);
      
      createResponse(res, 200, "Successfully deleted crewMember", {
        crewMemberId 
      });
    } catch (exception) {
      next(exception);
    }
  }

  async linkShipTravelPlan(req, res, next) {
    try {
      
      const link = req.body;
      await adminRepository.linkShipTravelPlanInDb(req.params.shipId,req.params.travelPlanId,link)
      
      createResponse(res, 200, "Successfully linked travel plan and ship", {
        link
      });
    } catch (exception) {
      next(exception);
    }
  }
  async linkTravelPlanStop(req, res, next) {
    try {
      
      const link = req.body;
      await adminRepository.linkTravelPlanStopInDb(req.params.travelPlanId,req.params.stopId,link)
      
      createResponse(res, 200, "Successfully linked travel plan and stop", {
        link
      });
    } catch (exception) {
      next(exception);
    }
  }
}

module.exports.adminController = adminController;
