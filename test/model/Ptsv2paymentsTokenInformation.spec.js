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
    instance = new CyberSource.Ptsv2paymentsTokenInformation();
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

  describe('Ptsv2paymentsTokenInformation', function() {
    it('should create an instance of Ptsv2paymentsTokenInformation', function() {
      // uncomment below and update the code to test Ptsv2paymentsTokenInformation
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be.a(CyberSource.Ptsv2paymentsTokenInformation);
    });

    it('should have the property jti (base name: "jti")', function() {
      // uncomment below and update the code to test the property jti
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property transientTokenJwt (base name: "transientTokenJwt")', function() {
      // uncomment below and update the code to test the property transientTokenJwt
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property paymentInstrument (base name: "paymentInstrument")', function() {
      // uncomment below and update the code to test the property paymentInstrument
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property shippingAddress (base name: "shippingAddress")', function() {
      // uncomment below and update the code to test the property shippingAddress
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property networkTokenOption (base name: "networkTokenOption")', function() {
      // uncomment below and update the code to test the property networkTokenOption
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be();
    });

    it('should have the property tokenProvisioningInformation (base name: "tokenProvisioningInformation")', function() {
      // uncomment below and update the code to test the property tokenProvisioningInformation
      //var instane = new CyberSource.Ptsv2paymentsTokenInformation();
      //expect(instance).to.be();
    });

  });

}));
