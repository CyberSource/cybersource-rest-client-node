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
    root.CyberSource.TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation model module.
   * @module model/TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation</code>.
   * @alias module:model/TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation} The populated <code>TssV2TransactionsGet200ResponsePaymentInformationIssuerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('binLength')) {
        obj['binLength'] = ApiClient.convertToType(data['binLength'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('transactionInformation')) {
        obj['transactionInformation'] = ApiClient.convertToType(data['transactionInformation'], 'String');
      }
    }
    return obj;
  }

  /**
   * This field contains the issuer name. 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * This field contains [2-character ISO Country Codes](http://apps.cybersource.com/library/documentation/sbc/quickref/countries_alpha_list.pdf) for the issuer. 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * This field contains the length of the BIN. 
   * @member {String} binLength
   */
  exports.prototype['binLength'] = undefined;
  /**
   * This field contains the customer service phone number for the issuer. 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * In a Mastercard Transaction, this field contains the unique identifier (Transaction Link ID) for the first transaction in a transaction life cycle.  This ID is crucial for maintaining continuity and linking subsequent operations to the original transaction. 
   * @member {String} transactionInformation
   */
  exports.prototype['transactionInformation'] = undefined;



  return exports;
}));


