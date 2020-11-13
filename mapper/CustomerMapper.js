const { Customer } = require('../model/Customer');
function createCustomerMap(req){
    var customer = new Customer(
        req.body.customerId,
        req.body.customerFirstName, 
        req.body.customerLastName, 
        req.body.customerDateOfBirth, 
        req.body.customerGender, 
        req.body.customerAddress, 
        req.body.customerTelephoneNumber, 
        req.body.customerEmail,
        req.body.customerPassword
    )
        return customer;
}

module.exports.createCustomerMap = createCustomerMap;