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
    instance = new CyberSource.InlineResponse2005Devices();
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

  describe('InlineResponse2005Devices', function() {
    it('should create an instance of InlineResponse2005Devices', function() {
      // uncomment below and update the code to test InlineResponse2005Devices
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be.a(CyberSource.InlineResponse2005Devices);
    });

    it('should have the property readerId (base name: "readerId")', function() {
      // uncomment below and update the code to test the property readerId
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property terminalSerialNumber (base name: "terminalSerialNumber")', function() {
      // uncomment below and update the code to test the property terminalSerialNumber
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property terminalId (base name: "terminalId")', function() {
      // uncomment below and update the code to test the property terminalId
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property make (base name: "make")', function() {
      // uncomment below and update the code to test the property make
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property hardwareRevision (base name: "hardwareRevision")', function() {
      // uncomment below and update the code to test the property hardwareRevision
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

    it('should have the property pin (base name: "pin")', function() {
      // uncomment below and update the code to test the property pin
      //var instane = new CyberSource.InlineResponse2005Devices();
      //expect(instance).to.be();
    });

  });

}));
