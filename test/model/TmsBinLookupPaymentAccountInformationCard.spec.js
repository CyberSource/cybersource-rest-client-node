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
    instance = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
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

  describe('TmsBinLookupPaymentAccountInformationCard', function() {
    it('should create an instance of TmsBinLookupPaymentAccountInformationCard', function() {
      // uncomment below and update the code to test TmsBinLookupPaymentAccountInformationCard
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be.a(CyberSource.TmsBinLookupPaymentAccountInformationCard);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property brandName (base name: "brandName")', function() {
      // uncomment below and update the code to test the property brandName
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property maxLength (base name: "maxLength")', function() {
      // uncomment below and update the code to test the property maxLength
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property credentialType (base name: "credentialType")', function() {
      // uncomment below and update the code to test the property credentialType
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be();
    });

    it('should have the property brands (base name: "brands")', function() {
      // uncomment below and update the code to test the property brands
      //var instane = new CyberSource.TmsBinLookupPaymentAccountInformationCard();
      //expect(instance).to.be();
    });

  });

}));
