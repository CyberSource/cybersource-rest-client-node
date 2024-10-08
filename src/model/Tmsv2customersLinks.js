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
    define(['ApiClient', 'model/Tmsv2customersLinksPaymentInstruments', 'model/Tmsv2customersLinksSelf', 'model/Tmsv2customersLinksShippingAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tmsv2customersLinksPaymentInstruments'), require('./Tmsv2customersLinksSelf'), require('./Tmsv2customersLinksShippingAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Tmsv2customersLinks = factory(root.CyberSource.ApiClient, root.CyberSource.Tmsv2customersLinksPaymentInstruments, root.CyberSource.Tmsv2customersLinksSelf, root.CyberSource.Tmsv2customersLinksShippingAddress);
  }
}(this, function(ApiClient, Tmsv2customersLinksPaymentInstruments, Tmsv2customersLinksSelf, Tmsv2customersLinksShippingAddress) {
  'use strict';




  /**
   * The Tmsv2customersLinks model module.
   * @module model/Tmsv2customersLinks
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Tmsv2customersLinks</code>.
   * @alias module:model/Tmsv2customersLinks
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Tmsv2customersLinks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tmsv2customersLinks} obj Optional instance to populate.
   * @return {module:model/Tmsv2customersLinks} The populated <code>Tmsv2customersLinks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('self')) {
        obj['self'] = Tmsv2customersLinksSelf.constructFromObject(data['self']);
      }
      if (data.hasOwnProperty('paymentInstruments')) {
        obj['paymentInstruments'] = Tmsv2customersLinksPaymentInstruments.constructFromObject(data['paymentInstruments']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = Tmsv2customersLinksShippingAddress.constructFromObject(data['shippingAddress']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Tmsv2customersLinksSelf} self
   */
  exports.prototype['self'] = undefined;
  /**
   * @member {module:model/Tmsv2customersLinksPaymentInstruments} paymentInstruments
   */
  exports.prototype['paymentInstruments'] = undefined;
  /**
   * @member {module:model/Tmsv2customersLinksShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;



  return exports;
}));


