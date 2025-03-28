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
    root.CyberSource.TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults model module.
   * @module model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults</code>.
   * @alias module:model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults} obj Optional instance to populate.
   * @return {module:model/TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults} The populated <code>TssV2TransactionsGet200ResponseProcessorInformationElectronicVerificationResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('emailRaw')) {
        obj['emailRaw'] = ApiClient.convertToType(data['emailRaw'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nameRaw')) {
        obj['nameRaw'] = ApiClient.convertToType(data['nameRaw'], 'String');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('phoneNumberRaw')) {
        obj['phoneNumberRaw'] = ApiClient.convertToType(data['phoneNumberRaw'], 'String');
      }
      if (data.hasOwnProperty('street')) {
        obj['street'] = ApiClient.convertToType(data['street'], 'String');
      }
      if (data.hasOwnProperty('streetRaw')) {
        obj['streetRaw'] = ApiClient.convertToType(data['streetRaw'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('postalCodeRaw')) {
        obj['postalCodeRaw'] = ApiClient.convertToType(data['postalCodeRaw'], 'String');
      }
    }
    return obj;
  }

  /**
   * Mapped Electronic Verification response code for the customer's email address. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer's email address.
   * @member {String} emailRaw
   */
  exports.prototype['emailRaw'] = undefined;
  /**
   * #### Visa Platform Connect Mapped Electronic Verification response code for the customer's name.  Valid values :  'Y'   Yes, the data Matches 'N'   No Match 'O'   Partial Match 
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * #### Visa Platform Connect Raw Electronic Verification response code from the processor for the customer's name.  Valid values :  '01'     Match '50'     Partial Match '99'     No Match 
   * @member {String} nameRaw
   */
  exports.prototype['nameRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer's phone number. 
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer's phone number.
   * @member {String} phoneNumberRaw
   */
  exports.prototype['phoneNumberRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer's street address. 
   * @member {String} street
   */
  exports.prototype['street'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer's street address.
   * @member {String} streetRaw
   */
  exports.prototype['streetRaw'] = undefined;
  /**
   * Mapped Electronic Verification response code for the customer's postal code. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * Raw Electronic Verification response code from the processor for the customer's postal code.
   * @member {String} postalCodeRaw
   */
  exports.prototype['postalCodeRaw'] = undefined;



  return exports;
}));


