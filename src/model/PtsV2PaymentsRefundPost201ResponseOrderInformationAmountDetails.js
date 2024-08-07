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
    root.CyberSource.PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails model module.
   * @module model/PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails</code>.
   * @alias module:model/PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails} The populated <code>PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('settlementAmount')) {
        obj['settlementAmount'] = ApiClient.convertToType(data['settlementAmount'], 'String');
      }
      if (data.hasOwnProperty('settlementCurrency')) {
        obj['settlementCurrency'] = ApiClient.convertToType(data['settlementCurrency'], 'String');
      }
      if (data.hasOwnProperty('exchangeRate')) {
        obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'String');
      }
      if (data.hasOwnProperty('foreignAmount')) {
        obj['foreignAmount'] = ApiClient.convertToType(data['foreignAmount'], 'String');
      }
      if (data.hasOwnProperty('foreignCurrency')) {
        obj['foreignCurrency'] = ApiClient.convertToType(data['foreignCurrency'], 'String');
      }
    }
    return obj;
  }

  /**
   * This is a multicurrency field. It contains the transaction amount (field 4), converted to the Currency used to bill the cardholder's account. This field is returned for OCT transactions. 
   * @member {String} settlementAmount
   */
  exports.prototype['settlementAmount'] = undefined;
  /**
   * This is a multicurrency-only field. It contains a 3-digit numeric code that identifies the currency used by the issuer to bill the cardholder's account. This field is returned for OCT transactions. 
   * @member {String} settlementCurrency
   */
  exports.prototype['settlementCurrency'] = undefined;
  /**
   * Exchange rate returned by the DCC service. Includes a decimal point and a maximum of 4 decimal places. 
   * @member {String} exchangeRate
   */
  exports.prototype['exchangeRate'] = undefined;
  /**
   * Set this field to the converted amount that was returned by the DCC provider. 
   * @member {String} foreignAmount
   */
  exports.prototype['foreignAmount'] = undefined;
  /**
   * Set this field to the converted amount that was returned by the DCC provider. 
   * @member {String} foreignCurrency
   */
  exports.prototype['foreignCurrency'] = undefined;



  return exports;
}));


