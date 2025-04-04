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
    root.CyberSource.Ptsv2paymentsPaymentInformationBankAccount = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsPaymentInformationBankAccount model module.
   * @module model/Ptsv2paymentsPaymentInformationBankAccount
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPaymentInformationBankAccount</code>.
   * @alias module:model/Ptsv2paymentsPaymentInformationBankAccount
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Ptsv2paymentsPaymentInformationBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPaymentInformationBankAccount} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPaymentInformationBankAccount} The populated <code>Ptsv2paymentsPaymentInformationBankAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('encoderId')) {
        obj['encoderId'] = ApiClient.convertToType(data['encoderId'], 'String');
      }
      if (data.hasOwnProperty('checkNumber')) {
        obj['checkNumber'] = ApiClient.convertToType(data['checkNumber'], 'String');
      }
      if (data.hasOwnProperty('checkImageReferenceNumber')) {
        obj['checkImageReferenceNumber'] = ApiClient.convertToType(data['checkImageReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('iban')) {
        obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
      }
    }
    return obj;
  }

  /**
   * Account type.  Possible values:  - **C**: Checking.  - **G**: General ledger. This value is supported only on Wells Fargo ACH.  - **S**: Savings (U.S. dollars only).  - **X**: Corporate checking (U.S. dollars only). 
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Account number.  When processing encoded account numbers, use this field for the encoded account number. 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Identifier for the bank that provided the customer's encoded account number.  To obtain the bank identifier, contact your processor. 
   * @member {String} encoderId
   */
  exports.prototype['encoderId'] = undefined;
  /**
   * Check number.  Chase Paymentech Solutions - Optional. CyberSource ACH Service - Not used. RBS WorldPay Atlanta - Optional on debits. Required on credits. TeleCheck - Strongly recommended on debit requests. Optional on credits. 
   * @member {String} checkNumber
   */
  exports.prototype['checkNumber'] = undefined;
  /**
   * Image reference number associated with the check. You cannot include any special characters. 
   * @member {String} checkImageReferenceNumber
   */
  exports.prototype['checkImageReferenceNumber'] = undefined;
  /**
   * International Bank Account Number (IBAN) for the bank account. For some countries you can provide this number instead of the traditional bank account information. You can use this field only when scoring a direct debit transaction. 
   * @member {String} iban
   */
  exports.prototype['iban'] = undefined;



  return exports;
}));


