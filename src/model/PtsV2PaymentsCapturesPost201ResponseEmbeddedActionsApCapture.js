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
    root.CyberSource.PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture model module.
   * @module model/PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture</code>.
   * @alias module:model/PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture} obj Optional instance to populate.
   * @return {module:model/PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture} The populated <code>PtsV2PaymentsCapturesPost201ResponseEmbeddedActionsApCapture</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
    }
    return obj;
  }

  /**
   * The reason why the captured payment status is PENDING or DENIED. BUYER_COMPLAINT The payer initiated a dispute for this captured payment with processor. CHARGEBACK The captured funds were reversed in response to the payer disputing this captured payment with the issuer of the financial instrument used to pay for this captured payment. ECHECK The payer paid by an eCheck that has not yet cleared. INTERNATIONAL_WITHDRAWAL Visit your online account. In your Account Overview, accept and deny this payment. OTHER No additional specific reason can be provided. For more information about this captured payment, visit your account online or contact processor. PENDING_REVIEW The captured payment is pending manual review. RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION The payee has not yet set up appropriate receiving preferences for their account. For more information about how to accept or deny this payment, visit your account online. This reason is typically offered in scenarios such as when the currency of the captured payment is different from the primary holding currency of the payee. REFUNDED The captured funds were refunded. TRANSACTION_APPROVED_AWAITING_FUNDING The payer must send the funds for this captured payment. This code generally appears for manual EFTs. UNILATERAL The payee does not have a processor account. VERIFICATION_REQUIRED The payee's processor account is not verified. String with values,  `BUYER_COMPLAINT`  `CHARGEBACK`  `ECHECK`  `INTERNATIONAL_WITHDRAWAL`  `OTHER`  `PENDING_REVIEW`  `RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION`  `REFUNDED`  `TRANSACTION_APPROVED_AWAITING_FUNDING`  `UNILATERAL`  `VERIFICATION_REQUIRED` 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;



  return exports;
}));

