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
    instance = new CyberSource.SubscriptionsApi();
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

  describe('SubscriptionsApi', function() {
    describe('activateSubscription', function() {
      it('should call activateSubscription successfully', function(done) {
        //uncomment below and update the code to test activateSubscription
        //instance.activateSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cancelSubscription', function() {
      it('should call cancelSubscription successfully', function(done) {
        //uncomment below and update the code to test cancelSubscription
        //instance.cancelSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createSubscription', function() {
      it('should call createSubscription successfully', function(done) {
        //uncomment below and update the code to test createSubscription
        //instance.createSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllSubscriptions', function() {
      it('should call getAllSubscriptions successfully', function(done) {
        //uncomment below and update the code to test getAllSubscriptions
        //instance.getAllSubscriptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscription', function() {
      it('should call getSubscription successfully', function(done) {
        //uncomment below and update the code to test getSubscription
        //instance.getSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscriptionCode', function() {
      it('should call getSubscriptionCode successfully', function(done) {
        //uncomment below and update the code to test getSubscriptionCode
        //instance.getSubscriptionCode(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('suspendSubscription', function() {
      it('should call suspendSubscription successfully', function(done) {
        //uncomment below and update the code to test suspendSubscription
        //instance.suspendSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateSubscription', function() {
      it('should call updateSubscription successfully', function(done) {
        //uncomment below and update the code to test updateSubscription
        //instance.updateSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
