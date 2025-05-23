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
    define(['ApiClient', 'model/GetSubscriptionResponse1BuyerInformation', 'model/GetSubscriptionResponse1Links', 'model/GetSubscriptionResponse1PaymentInstrument', 'model/GetSubscriptionResponse1ShippingAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetSubscriptionResponse1BuyerInformation'), require('./GetSubscriptionResponse1Links'), require('./GetSubscriptionResponse1PaymentInstrument'), require('./GetSubscriptionResponse1ShippingAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.GetSubscriptionResponse1 = factory(root.CyberSource.ApiClient, root.CyberSource.GetSubscriptionResponse1BuyerInformation, root.CyberSource.GetSubscriptionResponse1Links, root.CyberSource.GetSubscriptionResponse1PaymentInstrument, root.CyberSource.GetSubscriptionResponse1ShippingAddress);
  }
}(this, function(ApiClient, GetSubscriptionResponse1BuyerInformation, GetSubscriptionResponse1Links, GetSubscriptionResponse1PaymentInstrument, GetSubscriptionResponse1ShippingAddress) {
  'use strict';




  /**
   * The GetSubscriptionResponse1 model module.
   * @module model/GetSubscriptionResponse1
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GetSubscriptionResponse1</code>.
   * @alias module:model/GetSubscriptionResponse1
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>GetSubscriptionResponse1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetSubscriptionResponse1} obj Optional instance to populate.
   * @return {module:model/GetSubscriptionResponse1} The populated <code>GetSubscriptionResponse1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = GetSubscriptionResponse1Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('buyerInformation')) {
        obj['buyerInformation'] = GetSubscriptionResponse1BuyerInformation.constructFromObject(data['buyerInformation']);
      }
      if (data.hasOwnProperty('paymentInstrument')) {
        obj['paymentInstrument'] = GetSubscriptionResponse1PaymentInstrument.constructFromObject(data['paymentInstrument']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = GetSubscriptionResponse1ShippingAddress.constructFromObject(data['shippingAddress']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/GetSubscriptionResponse1Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/GetSubscriptionResponse1BuyerInformation} buyerInformation
   */
  exports.prototype['buyerInformation'] = undefined;
  /**
   * @member {module:model/GetSubscriptionResponse1PaymentInstrument} paymentInstrument
   */
  exports.prototype['paymentInstrument'] = undefined;
  /**
   * @member {module:model/GetSubscriptionResponse1ShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;



  return exports;
}));


