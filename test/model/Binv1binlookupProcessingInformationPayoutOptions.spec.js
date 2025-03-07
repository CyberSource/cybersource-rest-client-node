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
    instance = new CyberSource.Binv1binlookupProcessingInformationPayoutOptions();
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

  describe('Binv1binlookupProcessingInformationPayoutOptions', function() {
    it('should create an instance of Binv1binlookupProcessingInformationPayoutOptions', function() {
      // uncomment below and update the code to test Binv1binlookupProcessingInformationPayoutOptions
      //var instane = new CyberSource.Binv1binlookupProcessingInformationPayoutOptions();
      //expect(instance).to.be.a(CyberSource.Binv1binlookupProcessingInformationPayoutOptions);
    });

    it('should have the property payoutInquiry (base name: "payoutInquiry")', function() {
      // uncomment below and update the code to test the property payoutInquiry
      //var instane = new CyberSource.Binv1binlookupProcessingInformationPayoutOptions();
      //expect(instance).to.be();
    });

    it('should have the property networkId (base name: "networkId")', function() {
      // uncomment below and update the code to test the property networkId
      //var instane = new CyberSource.Binv1binlookupProcessingInformationPayoutOptions();
      //expect(instance).to.be();
    });

    it('should have the property acquirerBin (base name: "acquirerBin")', function() {
      // uncomment below and update the code to test the property acquirerBin
      //var instane = new CyberSource.Binv1binlookupProcessingInformationPayoutOptions();
      //expect(instance).to.be();
    });

  });

}));
