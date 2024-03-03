/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    instance = new CyberSource.PayerAuthConfigCardTypes();
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

  describe('PayerAuthConfigCardTypes', function() {
    it('should create an instance of PayerAuthConfigCardTypes', function() {
      // uncomment below and update the code to test PayerAuthConfigCardTypes
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be.a(CyberSource.PayerAuthConfigCardTypes);
    });

    it('should have the property verifiedByVisa (base name: "verifiedByVisa")', function() {
      // uncomment below and update the code to test the property verifiedByVisa
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property masterCardSecureCode (base name: "masterCardSecureCode")', function() {
      // uncomment below and update the code to test the property masterCardSecureCode
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property amexSafeKey (base name: "amexSafeKey")', function() {
      // uncomment below and update the code to test the property amexSafeKey
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property jCBJSecure (base name: "jCBJSecure")', function() {
      // uncomment below and update the code to test the property jCBJSecure
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property dinersClubInternationalProtectBuy (base name: "dinersClubInternationalProtectBuy")', function() {
      // uncomment below and update the code to test the property dinersClubInternationalProtectBuy
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property ELO (base name: "ELO")', function() {
      // uncomment below and update the code to test the property ELO
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property UPI (base name: "UPI")', function() {
      // uncomment below and update the code to test the property UPI
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

    it('should have the property CB (base name: "CB")', function() {
      // uncomment below and update the code to test the property CB
      //var instane = new CyberSource.PayerAuthConfigCardTypes();
      //expect(instance).to.be();
    });

  });

}));