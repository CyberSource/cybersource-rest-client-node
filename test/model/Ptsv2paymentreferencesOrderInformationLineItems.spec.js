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
    instance = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
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

  describe('Ptsv2paymentreferencesOrderInformationLineItems', function() {
    it('should create an instance of Ptsv2paymentreferencesOrderInformationLineItems', function() {
      // uncomment below and update the code to test Ptsv2paymentreferencesOrderInformationLineItems
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentreferencesOrderInformationLineItems);
    });

    it('should have the property productSku (base name: "productSku")', function() {
      // uncomment below and update the code to test the property productSku
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property productName (base name: "productName")', function() {
      // uncomment below and update the code to test the property productName
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unitPrice")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property discountAmount (base name: "discountAmount")', function() {
      // uncomment below and update the code to test the property discountAmount
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property discountRate (base name: "discountRate")', function() {
      // uncomment below and update the code to test the property discountRate
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property taxAmount (base name: "taxAmount")', function() {
      // uncomment below and update the code to test the property taxAmount
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property taxRate (base name: "taxRate")', function() {
      // uncomment below and update the code to test the property taxRate
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property totalAmount (base name: "totalAmount")', function() {
      // uncomment below and update the code to test the property totalAmount
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property productCode (base name: "productCode")', function() {
      // uncomment below and update the code to test the property productCode
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

    it('should have the property productDescription (base name: "productDescription")', function() {
      // uncomment below and update the code to test the property productDescription
      //var instane = new CyberSource.Ptsv2paymentreferencesOrderInformationLineItems();
      //expect(instance).to.be();
    });

  });

}));