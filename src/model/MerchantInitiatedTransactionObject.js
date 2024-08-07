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
    root.CyberSource.MerchantInitiatedTransactionObject = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MerchantInitiatedTransactionObject model module.
   * @module model/MerchantInitiatedTransactionObject
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>MerchantInitiatedTransactionObject</code>.
   * @alias module:model/MerchantInitiatedTransactionObject
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>MerchantInitiatedTransactionObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MerchantInitiatedTransactionObject} obj Optional instance to populate.
   * @return {module:model/MerchantInitiatedTransactionObject} The populated <code>MerchantInitiatedTransactionObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('previousTransactionId')) {
        obj['previousTransactionId'] = ApiClient.convertToType(data['previousTransactionId'], 'String');
      }
      if (data.hasOwnProperty('originalAuthorizedAmount')) {
        obj['originalAuthorizedAmount'] = ApiClient.convertToType(data['originalAuthorizedAmount'], 'String');
      }
      if (data.hasOwnProperty('agreementId')) {
        obj['agreementId'] = ApiClient.convertToType(data['agreementId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Reason for the merchant-initiated transaction or incremental authorization. Possible values: - `1`: Resubmission - `2`: Delayed charge - `3`: Reauthorization for split shipment - `4`: No show - `5`: Account top up This field is required only for the five kinds of transactions in the preceding list. This field is supported only for merchant-initiated transactions and incremental authorizations.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file5: - Record: CP01 TCR0 - Position: 160-163 - Field: Message Reason Code 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Network transaction identifier that was returned in the payment response field _processorInformation.transactionID_ in the reply message for either the original merchant-initiated payment in the series or the previous merchant-initiated payment in the series.  If the current payment request includes a token instead of an account number, the following time limits apply for the value of this field: - For a **resubmission**, the transaction ID must be less than 14 days old. - For a **delayed charge** or **reauthorization**, the transaction ID must be less than 30 days old.  **NOTE**: The value for this field does not correspond to any data in the TC 33 capture file5. This field is supported only for Visa transactions on CyberSource through VisaNet. 
   * @member {String} previousTransactionId
   */
  exports.prototype['previousTransactionId'] = undefined;
  /**
   * Amount of the original authorization.  This field is supported only for Apple Pay, Google Pay, and Samsung Pay transactions with Discover on FDC Nashville Global and Chase Paymentech. 
   * @member {String} originalAuthorizedAmount
   */
  exports.prototype['originalAuthorizedAmount'] = undefined;
  /**
   * This field contains the predetermined agrement id with the merchant 
   * @member {String} agreementId
   */
  exports.prototype['agreementId'] = undefined;



  return exports;
}));


