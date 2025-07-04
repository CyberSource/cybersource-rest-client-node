/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.38
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CyberSource);
  }
}(this, function(expect, CyberSource) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TssV2TransactionsGet200ResponseProcessorInformation', function() {
    it('should create an instance of TssV2TransactionsGet200ResponseProcessorInformation', function() {
      // uncomment below and update the code to test TssV2TransactionsGet200ResponseProcessorInformation
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be.a(CyberSource.TssV2TransactionsGet200ResponseProcessorInformation);
    });

    it('should have the property processor (base name: "processor")', function() {
      // uncomment below and update the code to test the property processor
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property multiProcessorRouting (base name: "multiProcessorRouting")', function() {
      // uncomment below and update the code to test the property multiProcessorRouting
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property transactionId (base name: "transactionId")', function() {
      // uncomment below and update the code to test the property transactionId
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkTransactionId (base name: "networkTransactionId")', function() {
      // uncomment below and update the code to test the property networkTransactionId
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property retrievalReferenceNumber (base name: "retrievalReferenceNumber")', function() {
      // uncomment below and update the code to test the property retrievalReferenceNumber
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property responseId (base name: "responseId")', function() {
      // uncomment below and update the code to test the property responseId
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property approvalCode (base name: "approvalCode")', function() {
      // uncomment below and update the code to test the property approvalCode
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property responseCode (base name: "responseCode")', function() {
      // uncomment below and update the code to test the property responseCode
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property avs (base name: "avs")', function() {
      // uncomment below and update the code to test the property avs
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property cardVerification (base name: "cardVerification")', function() {
      // uncomment below and update the code to test the property cardVerification
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property achVerification (base name: "achVerification")', function() {
      // uncomment below and update the code to test the property achVerification
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property electronicVerificationResults (base name: "electronicVerificationResults")', function() {
      // uncomment below and update the code to test the property electronicVerificationResults
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property eventStatus (base name: "eventStatus")', function() {
      // uncomment below and update the code to test the property eventStatus
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property systemTraceAuditNumber (base name: "systemTraceAuditNumber")', function() {
      // uncomment below and update the code to test the property systemTraceAuditNumber
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property responseCodeSource (base name: "responseCodeSource")', function() {
      // uncomment below and update the code to test the property responseCodeSource
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentAccountReferenceNumber (base name: "paymentAccountReferenceNumber")', function() {
      // uncomment below and update the code to test the property paymentAccountReferenceNumber
      //var instane = new CyberSource.TssV2TransactionsGet200ResponseProcessorInformation();
      //expect(instance).to.be();
    });

  });

}));
