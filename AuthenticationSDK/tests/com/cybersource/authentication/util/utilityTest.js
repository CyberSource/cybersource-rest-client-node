var Chai = require('chai');
var expect = Chai.expect;
var Utility = require('../../../../../src/com/cybersource/authentication/util/Utility');

it('should return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(200);
    expect("Transaction Successful").to.equal(statusInfo);
});

it('should return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(201);
    expect("Transaction Successful").to.equal(statusInfo);    
});

it('should return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(400);
    expect("Bad Request").to.equal(statusInfo);
});

it('should return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(401);
    expect("Authentication Failed").to.equal(statusInfo);
});

it('should return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(404);
    expect("URL not found").to.equal(statusInfo);
});

it('should return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(500);
    expect("Internal Server Error").to.equal(statusInfo);
});

it('should not return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(510);
    expect(null).to.equal(statusInfo);
    
});

it('should not return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(403);
    expect("Forbidden").to.equal(statusInfo);   
});

it('should not return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(502);
    expect("Bad Gateway").to.equal(statusInfo);
});

it('should not return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(503);
    expect("Service Unavailable").to.equal(statusInfo);   
});

it('should not return statusInformation', function () {
    var statusInfo = Utility.getResponseCodeMessage(504);
    expect("Gateway Timeout").to.equal(statusInfo);
});