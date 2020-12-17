
const pool = require("../pool");
const { Customer } = require("../model/Customer");
const { ErrorHandler } = require("../error");

class adminRepository {
  constructor() {}
  
  static async getAdminByIdFromDb(email) {
    try {
      const [rows, fields] = await pool.query(
        `select * from admin where email='${email}'`
      );
      return rows;
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't check admin in Db");
    }
  }


  
  static async pushTravelPlanInDb(travelPlan) {
    try {
      return await pool.query(`INSERT INTO travelplan
      (travelPlanDescription,
      travelPlanRegion,
      travelPlanPrice,
      travelPlanPictureURL)
       VALUES(
      "${travelPlan.travelPlanDescription}",
      "${travelPlan.travelPlanRegion}",
      "${travelPlan.travelPlanPrice}",
      "${travelPlan.travelPlanPictureURL}")`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't add travel plan" + exception);
    }
  }

  
  static async deleteTravelPlanInDb(travelPlanId) {
    try {
      return await pool.query(`DELETE FROM travelplan WHERE
      travelPlanId =  "${travelPlanId}";`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't delete travel plan");
    }
  }




  static async pushStopInDb(stop) {
    try {
      return await pool.query(`INSERT INTO stop
      (stopDestination,
      stopGoogleURL,
      stopPictureURL)
       VALUES(
      "${stop.stopDestination}",
      "${stop.stopGoogleURL}",
      "${stop.stopPictureURL}")
`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't add stop");
    }
  }

  
  static async deleteStopInDb(stopId) {
    try {
      return await pool.query(`DELETE FROM stop WHERE
      stopId =  "${stopId}";`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't delete stop");
    }
  }





  
  static async pushCrewMemberInDb(crewMember) {
    try {
      return await pool.query(`INSERT INTO crewmember
      (crewMemberFirstName,
        crewMemberLastName,
        crewMemberDateOfBirth,
        crewMemberGender,
        crewMemberAddress,
        crewMemberTelephoneNumber,
        crewMemberPosition)
       VALUES(
      "${crewMember.crewMemberFirstName}",
      "${crewMember.crewMemberLastName}",
      "${crewMember.crewMemberDateOfBirth}",
      "${crewMember.crewMemberGender}",
      "${crewMember.crewMemberAddress}",
      "${crewMember.crewMemberTelephoneNumber}",
      "${crewMember.crewMemberPosition}")
`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't add crew"+exception);
    }
  }

  
  static async deleteCrewMemberInDb(crewMemberId) {
    try {
      return await pool.query(`DELETE FROM crewmember WHERE crewMemberId="${crewMemberId}"`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't delete crew"+exception);
    }
  }

 
  static async  linkShipTravelPlanInDb(shipId,travelPlanId,link) {
    try {
      return await pool.query(`INSERT INTO cruisetravelplan
       VALUES(
         "0",
      "${shipId}",
      "${travelPlanId}",
      "${link.departureDate}",
      "${link.returnDate}"
      )
`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't add link");
    }
  }


  static async  linkTravelPlanStopInDb(travelPlanId,stopId,link) {
    try {
      return await pool.query(`INSERT INTO travelplanstop
       VALUES(
         "0",
      "${link.stopDuration}",
      "${link.stopRank}",
      "${travelPlanId}",
      "${stopId}"
      )
`);
    } catch (exception) {
      throw new ErrorHandler(400, "Couldn't add link");
    }
  }
}
module.exports.adminRepository = adminRepository;
