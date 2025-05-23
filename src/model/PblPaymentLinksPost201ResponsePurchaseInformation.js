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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PblPaymentLinksPost201ResponsePurchaseInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PblPaymentLinksPost201ResponsePurchaseInformation model module.
   * @module model/PblPaymentLinksPost201ResponsePurchaseInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PblPaymentLinksPost201ResponsePurchaseInformation</code>.
   * Contains link specific detail.
   * @alias module:model/PblPaymentLinksPost201ResponsePurchaseInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PblPaymentLinksPost201ResponsePurchaseInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PblPaymentLinksPost201ResponsePurchaseInformation} obj Optional instance to populate.
   * @return {module:model/PblPaymentLinksPost201ResponsePurchaseInformation} The populated <code>PblPaymentLinksPost201ResponsePurchaseInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('purchaseNumber')) {
        obj['purchaseNumber'] = ApiClient.convertToType(data['purchaseNumber'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
      if (data.hasOwnProperty('paymentLink')) {
        obj['paymentLink'] = ApiClient.convertToType(data['paymentLink'], 'String');
      }
    }
    return obj;
  }

  /**
   * The purchase number
   * @member {String} purchaseNumber
   */
  exports.prototype['purchaseNumber'] = undefined;
  /**
   * Date and time (UTC) the invoice was created.  Format: YYYY-MM-DDThh:mm:ssZ Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * Returns the link to a purchase or donation link when the status is `ACTIVE`.
   * @member {String} paymentLink
   */
  exports.prototype['paymentLink'] = undefined;



  return exports;
}));


