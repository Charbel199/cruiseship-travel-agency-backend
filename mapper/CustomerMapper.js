const { Customer } = require('../model/Customer');
function createCustomerMap(body){
    var customer = new Customer(
        body.customerId,
        body.customerFirstName, 
        body.customerLastName, 
        body.customerDateOfBirth, 
        body.customerGender, 
        body.customerAddress, 
        body.customerTelephoneNumber, 
        body.customerEmail,
        body.customerPassword
    )
        return customer;
}

module.exports.createCustomerMap = createCustomerMap;