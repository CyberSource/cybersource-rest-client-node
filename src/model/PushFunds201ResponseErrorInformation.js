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
    define(['ApiClient', 'model/PushFunds201ResponseErrorInformationDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PushFunds201ResponseErrorInformationDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PushFunds201ResponseErrorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PushFunds201ResponseErrorInformationDetails);
  }
}(this, function(ApiClient, PushFunds201ResponseErrorInformationDetails) {
  'use strict';




  /**
   * The PushFunds201ResponseErrorInformation model module.
   * @module model/PushFunds201ResponseErrorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponseErrorInformation</code>.
   * @alias module:model/PushFunds201ResponseErrorInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PushFunds201ResponseErrorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponseErrorInformation} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponseErrorInformation} The populated <code>PushFunds201ResponseErrorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [PushFunds201ResponseErrorInformationDetails]);
      }
    }
    return obj;
  }

  /**
   * The reason of the status.  Possible values:  - CONTACT_PROCESSOR - INVALID_MERCHANT_CONFIGURATION - STOLEN_LOST_CARD - PROCESSOR_DECLINED - PARTIAL_APPROVAL - PAYMENT_REFUSED - INVALID_ACCOUNT - ISSUER_UNAVAILABLE - INSUFFICIENT_FUND - EXPIRED_CARD - INVALID_PIN - UNAUTHORIZED_CARD - EXCEEDS_CREDIT_LIMIT - DEBIT_CARD_USAGE_LIMIT_EXCEEDED - CVN_NOT_MATCH - DUPLICATE_REQUEST - GENERAL_DECLINE - BLACKLISTED_CUSTOMER - GATEWAY_TIMEOUT - INVALID_DATA - SYSTEM_ERROR - SERVICE_UNAVAILABLE - GATEWAY_TIMEOUT - DAGGDENIED 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * The detail message related to the status and reason listed above. 
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/PushFunds201ResponseErrorInformationDetails>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));


