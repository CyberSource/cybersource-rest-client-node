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
    root.CyberSource.Ptsv2paymentsSenderInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsSenderInformation model module.
   * @module model/Ptsv2paymentsSenderInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsSenderInformation</code>.
   * @alias module:model/Ptsv2paymentsSenderInformation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Ptsv2paymentsSenderInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsSenderInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsSenderInformation} The populated <code>Ptsv2paymentsSenderInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('middleName')) {
        obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * First name of the sender.  **Applicable for Barclays AFT transactions only.** The field is mandatory for Visa and not applicable for Mastercard AFT.   Only alpha numeric values are supported.  Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to Barclays.  For Visa, the maximum length of First Name, Middle Name and Last Name is 30 characters.         Values exceeding the above limits will be truncated. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Last name of the sender.  **Applicable for Barclays AFT transactions only.** This field is optional for Visa and not applicable for Mastercard AFT.  Only alpha numeric values are supported.  Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to Barclays.  For Visa, the maximum length of First Name, Middle Name and Last Name is 30 characters.  Values exceeding these limits will be truncated. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * Middle name of the sender.  **Applicable for Barclays AFT transactions only.** The field is mandatory for Visa and not applicable for Mastercard AFT.   Only alpha numeric values are supported.  Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to Barclays.  For Visa, the maximum length of First Name, Middle Name and Last Name is 30 characters.        Values exceeding these limits will be truncated. 
   * @member {String} middleName
   */
  exports.prototype['middleName'] = undefined;
  /**
   * The street address of the sender.    **Applicable for Barclays AFT transactions only.** The field is mandatory for Visa and not applicable for Mastercard AFT.     Only alpha numeric values are supported.  Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to Barclays.             The field has a maximum length of 35 characters.  Values exceeding these limits will be truncated. 
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * The city or locality of the sender.in  **Applicable for Barclays AFT transactions only.** The field is optional for Visa and not applicable for Mastercard AFT.   Only alpha numeric values are supported.  Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to Barclays.  The field has a maximum length of 25 characters.  Values exceeding these limits will be truncated. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;
  /**
   * The state or province of the sender.  **Applicable for Barclays AFT transactions only.** The field is mandatory for Visa AFT when the sender country is US or CA else it is optional for Visa AFT. This field is not applicable for Mastercard AFT.  Must be a two character value 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * The country associated with the address of the sender.  **Applicable for Barclays AFT transactions only.** The field is mandatory for Visa and not applicable for Mastercard AFT.   Must be a two character ISO country code.  For example, see [ISO Country Code](https://developer.cybersource.com/docs/cybs/en-us/country-codes/reference/all/na/country-codes/country-codes.html) 
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;



  return exports;
}));

