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
    instance = new CyberSource.TmsNetworkTokenServicesVisaTokenService();
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

  describe('TmsNetworkTokenServicesVisaTokenService', function() {
    it('should create an instance of TmsNetworkTokenServicesVisaTokenService', function() {
      // uncomment below and update the code to test TmsNetworkTokenServicesVisaTokenService
      //var instane = new CyberSource.TmsNetworkTokenServicesVisaTokenService();
      //expect(instance).to.be.a(CyberSource.TmsNetworkTokenServicesVisaTokenService);
    });

    it('should have the property enableService (base name: "enableService")', function() {
      // uncomment below and update the code to test the property enableService
      //var instane = new CyberSource.TmsNetworkTokenServicesVisaTokenService();
      //expect(instance).to.be();
    });

    it('should have the property enableTransactionalTokens (base name: "enableTransactionalTokens")', function() {
      // uncomment below and update the code to test the property enableTransactionalTokens
      //var instane = new CyberSource.TmsNetworkTokenServicesVisaTokenService();
      //expect(instance).to.be();
    });

    it('should have the property tokenRequestorId (base name: "tokenRequestorId")', function() {
      // uncomment below and update the code to test the property tokenRequestorId
      //var instane = new CyberSource.TmsNetworkTokenServicesVisaTokenService();
      //expect(instance).to.be();
    });

    it('should have the property relationshipId (base name: "relationshipId")', function() {
      // uncomment below and update the code to test the property relationshipId
      //var instane = new CyberSource.TmsNetworkTokenServicesVisaTokenService();
      //expect(instance).to.be();
    });

  });

}));
