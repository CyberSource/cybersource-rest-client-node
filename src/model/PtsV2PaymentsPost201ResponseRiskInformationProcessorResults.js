/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.CyberSource.PtsV2PaymentsPost201ResponseRiskInformationProcessorResults = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsPost201ResponseRiskInformationProcessorResults model module.
   * @module model/PtsV2PaymentsPost201ResponseRiskInformationProcessorResults
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsPost201ResponseRiskInformationProcessorResults</code>.
   * @alias module:model/PtsV2PaymentsPost201ResponseRiskInformationProcessorResults
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PtsV2PaymentsPost201ResponseRiskInformationProcessorResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsPost201ResponseRiskInformationProcessorResults} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsPost201ResponseRiskInformationProcessorResults} The populated <code>PtsV2PaymentsPost201ResponseRiskInformationProcessorResults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fraudDecision')) {
        obj['fraudDecision'] = ApiClient.convertToType(data['fraudDecision'], 'String');
      }
      if (data.hasOwnProperty('fraudDecisionReason')) {
        obj['fraudDecisionReason'] = ApiClient.convertToType(data['fraudDecisionReason'], 'String');
      }
    }
    return obj;
  }

  /**
   * Type of filter. Possible values: - ACCEPT - PENDING - DENY - REPORT 
   * @member {String} fraudDecision
   */
  exports.prototype['fraudDecision'] = undefined;
  /**
   * possible values - AVS_NO_MATCH - AVS_PARTIAL_MATCH - AVS_UNAVAILABLE_OR_UNSUPPORTED - CARD_SECURITY_CODE_MISMATCH - MAXIMUM_TRANSACTION_AMOUNT - UNCONFIRMED_ADDRESS - COUNTRY_MONITOR - LARGE_ORDER_NUMBER - BILLING_OR_SHIPPING_ADDRESS_MISMATCH - RISKY_ZIP_CODE - SUSPECTED_FREIGHT_FORWARDER_CHECK - TOTAL_PURCHASE_PRICE_MINIMUM - IP_ADDRESS_VELOCITY - RISKY_EMAIL_ADDRESS_DOMAIN_CHECK - RISKY_BANK_IDENTIFICATION_NUMBER_CHECK, RISKY_IP_ADDRESS_RANGE - PAYPAL_FRAUD_MODEL 
   * @member {String} fraudDecisionReason
   */
  exports.prototype['fraudDecisionReason'] = undefined;



  return exports;
}));

