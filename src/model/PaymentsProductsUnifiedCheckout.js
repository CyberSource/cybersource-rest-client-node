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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentsProductsUnifiedCheckoutConfigurationInformation', 'model/PaymentsProductsUnifiedCheckoutSubscriptionInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsUnifiedCheckoutConfigurationInformation'), require('./PaymentsProductsUnifiedCheckoutSubscriptionInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsUnifiedCheckout = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsUnifiedCheckoutConfigurationInformation, root.CyberSource.PaymentsProductsUnifiedCheckoutSubscriptionInformation);
  }
}(this, function(ApiClient, PaymentsProductsUnifiedCheckoutConfigurationInformation, PaymentsProductsUnifiedCheckoutSubscriptionInformation) {
  'use strict';




  /**
   * The PaymentsProductsUnifiedCheckout model module.
   * @module model/PaymentsProductsUnifiedCheckout
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsUnifiedCheckout</code>.
   * @alias module:model/PaymentsProductsUnifiedCheckout
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentsProductsUnifiedCheckout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsUnifiedCheckout} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsUnifiedCheckout} The populated <code>PaymentsProductsUnifiedCheckout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('subscriptionInformation')) {
        obj['subscriptionInformation'] = PaymentsProductsUnifiedCheckoutSubscriptionInformation.constructFromObject(data['subscriptionInformation']);
      }
      if (data.hasOwnProperty('configurationInformation')) {
        obj['configurationInformation'] = PaymentsProductsUnifiedCheckoutConfigurationInformation.constructFromObject(data['configurationInformation']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentsProductsUnifiedCheckoutSubscriptionInformation} subscriptionInformation
   */
  exports.prototype['subscriptionInformation'] = undefined;
  /**
   * @member {module:model/PaymentsProductsUnifiedCheckoutConfigurationInformation} configurationInformation
   */
  exports.prototype['configurationInformation'] = undefined;



  return exports;
}));


