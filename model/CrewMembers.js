class CrewMember {

    constructor(crewMemberId, crewMemberFirstName, crewMemberLastName, crewMemberDateOfBirth, crewMemberGender, crewMemberAddress, crewMemberTelephoneNumber, crewMemberPosition) {
      
      this.crewMemberId = crewMemberId;
      this.crewMemberFirstName = crewMemberFirstName;
      this.crewMemberLastName = crewMemberLastName;
      this.crewMemberDateOfBirth = crewMemberDateOfBirth;
      this.crewMemberGender = crewMemberGender;
      this.crewMemberAddress = crewMemberAddress;
      this.crewMemberTelephoneNumber = crewMemberTelephoneNumber;
      this.crewMemberPosition = crewMemberPosition;
  
    }
  
  }
  
  module.exports.CrewMember = CrewMember;
  