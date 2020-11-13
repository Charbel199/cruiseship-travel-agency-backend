class Customer {

  constructor(customerId, customerFirstName, customerLastName, customerDateOfBirth, customerGender, customerAddress, customerTelephoneNumber, customerEmail, customerPassword) {
    
    this.customerId = customerId;
    this.customerFirstName = customerFirstName;
    this.customerLastName = customerLastName;
    this.customerDateOfBirth = customerDateOfBirth;
    this.customerGender = customerGender;
    this.customerAddress = customerAddress;
    this.customerTelephoneNumber = customerTelephoneNumber;
    this.customerEmail = customerEmail;
    this.customerPassword = customerPassword;

  }

}

module.exports.Customer = Customer;
