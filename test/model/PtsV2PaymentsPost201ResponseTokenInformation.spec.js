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
    instance = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
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

  describe('PtsV2PaymentsPost201ResponseTokenInformation', function() {
    it('should create an instance of PtsV2PaymentsPost201ResponseTokenInformation', function() {
      // uncomment below and update the code to test PtsV2PaymentsPost201ResponseTokenInformation
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
      //expect(instance).to.be.a(CyberSource.PtsV2PaymentsPost201ResponseTokenInformation);
    });

    it('should have the property instrumentidentifierNew (base name: "instrumentidentifierNew")', function() {
      // uncomment below and update the code to test the property instrumentidentifierNew
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentInstrument (base name: "paymentInstrument")', function() {
      // uncomment below and update the code to test the property paymentInstrument
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property instrumentIdentifier (base name: "instrumentIdentifier")', function() {
      // uncomment below and update the code to test the property instrumentIdentifier
      //var instane = new CyberSource.PtsV2PaymentsPost201ResponseTokenInformation();
      //expect(instance).to.be();
    });

  });

}));