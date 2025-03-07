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
    root.CyberSource.Ptsv2paymentsRecipientInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsRecipientInformation model module.
   * @module model/Ptsv2paymentsRecipientInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsRecipientInformation</code>.
   * @alias module:model/Ptsv2paymentsRecipientInformation
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>Ptsv2paymentsRecipientInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsRecipientInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsRecipientInformation} The populated <code>Ptsv2paymentsRecipientInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('middleName')) {
        obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('administrativeArea')) {
        obj['administrativeArea'] = ApiClient.convertToType(data['administrativeArea'], 'String');
      }
      if (data.hasOwnProperty('postalCode')) {
        obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('dateOfBirth')) {
        obj['dateOfBirth'] = ApiClient.convertToType(data['dateOfBirth'], 'String');
      }
      if (data.hasOwnProperty('beneficiaryId')) {
        obj['beneficiaryId'] = ApiClient.convertToType(data['beneficiaryId'], 'String');
      }
      if (data.hasOwnProperty('beneficiaryName')) {
        obj['beneficiaryName'] = ApiClient.convertToType(data['beneficiaryName'], 'String');
      }
      if (data.hasOwnProperty('beneficiaryAddress')) {
        obj['beneficiaryAddress'] = ApiClient.convertToType(data['beneficiaryAddress'], 'String');
      }
      if (data.hasOwnProperty('aliasName')) {
        obj['aliasName'] = ApiClient.convertToType(data['aliasName'], 'String');
      }
      if (data.hasOwnProperty('nationality')) {
        obj['nationality'] = ApiClient.convertToType(data['nationality'], 'String');
      }
      if (data.hasOwnProperty('countryOfBirth')) {
        obj['countryOfBirth'] = ApiClient.convertToType(data['countryOfBirth'], 'String');
      }
      if (data.hasOwnProperty('occupation')) {
        obj['occupation'] = ApiClient.convertToType(data['occupation'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('locality')) {
        obj['locality'] = ApiClient.convertToType(data['locality'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier for the recipient's account. This field is applicable for AFT transactions. 
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * Identifies the recipient's account type. This field is applicable for AFT transactions.  Valid values are:   - `00` for Other   - `01` for Routing Transit Number (RTN) + Bank Account Number (BAN)   - `02` for International Bank Account Number (IBAN)   - `03` for Card Account   - `06` for Bank Account Number (BAN) + Bank Identification Code (BIC), also known as a SWIFT code 
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * First name of the recipient. This field is applicable for AFT transactions.    Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor. 
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * Middle name of the recipient. This field is applicable for AFT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor. 
   * @member {String} middleName
   */
  exports.prototype['middleName'] = undefined;
  /**
   * Last name of the recipient. This field is applicable for AFT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set, are not supported and will be stripped before being sent to sent to the processor. 
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * The street address of the recipient This field is applicable for AFT and OCT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor.          
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;
  /**
   * The state or province of the recipient. This field is applicable for AFT transactions when the recipient country is US or CA. Else it is optional.  Must be a two character value 
   * @member {String} administrativeArea
   */
  exports.prototype['administrativeArea'] = undefined;
  /**
   * Partial postal code for the recipient's address. For example, if the postal code is **NN5 7SG**, the value for this field should be the first part of the postal code: **NN5**. This field is a _pass-through_, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor. 
   * @member {String} postalCode
   */
  exports.prototype['postalCode'] = undefined;
  /**
   * The country associated with the address of the recipient. This field is applicable for AFT and OCT transactions.  Must be a two character ISO country code.  For example, see [ISO Country Code](https://developer.cybersource.com/docs/cybs/en-us/country-codes/reference/all/na/country-codes/country-codes.html) 
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Recipient's date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor. 
   * @member {String} dateOfBirth
   */
  exports.prototype['dateOfBirth'] = undefined;
  /**
   * Only for e-wallets: ID, username, hash or anything uniquely identifying the ultimate beneficiary. 
   * @member {String} beneficiaryId
   */
  exports.prototype['beneficiaryId'] = undefined;
  /**
   * Only for e-wallets: The ultimate beneficiary's full name. 
   * @member {String} beneficiaryName
   */
  exports.prototype['beneficiaryName'] = undefined;
  /**
   * Only for e-wallets: The ultimate beneficiary's street address (street, zip code, city), excluding the country. Example: \"Main street 1, 12345, Barcelona 
   * @member {String} beneficiaryAddress
   */
  exports.prototype['beneficiaryAddress'] = undefined;
  /**
   * Account owner alias name. 
   * @member {String} aliasName
   */
  exports.prototype['aliasName'] = undefined;
  /**
   * Account Owner Nationality
   * @member {String} nationality
   */
  exports.prototype['nationality'] = undefined;
  /**
   * Account Owner Country of Birth
   * @member {String} countryOfBirth
   */
  exports.prototype['countryOfBirth'] = undefined;
  /**
   * Account Owner Occupation
   * @member {String} occupation
   */
  exports.prototype['occupation'] = undefined;
  /**
   * Account Owner email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The city of the recipient. This field is applicable for AFT transactions.  Only alpha numeric values are supported. Special characters not in the standard ASCII character set are not supported and will be stripped before being sent to sent to the processor. 
   * @member {String} locality
   */
  exports.prototype['locality'] = undefined;



  return exports;
}));


