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
    define(['ApiClient', 'model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice', 'model/PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice'), require('./PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice, root.CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection);
  }
}(this, function(ApiClient, PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice, PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection) {
  'use strict';




  /**
   * The PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation model module.
   * @module model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation</code>.
   * @alias module:model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation} obj Optional instance to populate.
   * @return {module:model/PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation} The populated <code>PtsV2IncrementalAuthorizationPatch201ResponseProcessorInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('approvalCode')) {
        obj['approvalCode'] = ApiClient.convertToType(data['approvalCode'], 'String');
      }
      if (data.hasOwnProperty('transactionId')) {
        obj['transactionId'] = ApiClient.convertToType(data['transactionId'], 'String');
      }
      if (data.hasOwnProperty('networkTransactionId')) {
        obj['networkTransactionId'] = ApiClient.convertToType(data['networkTransactionId'], 'String');
      }
      if (data.hasOwnProperty('responseCode')) {
        obj['responseCode'] = ApiClient.convertToType(data['responseCode'], 'String');
      }
      if (data.hasOwnProperty('systemTraceAuditNumber')) {
        obj['systemTraceAuditNumber'] = ApiClient.convertToType(data['systemTraceAuditNumber'], 'String');
      }
      if (data.hasOwnProperty('responseDetails')) {
        obj['responseDetails'] = ApiClient.convertToType(data['responseDetails'], 'String');
      }
      if (data.hasOwnProperty('merchantAdvice')) {
        obj['merchantAdvice'] = PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice.constructFromObject(data['merchantAdvice']);
      }
      if (data.hasOwnProperty('merchantRiskPrediction')) {
        obj['merchantRiskPrediction'] = ApiClient.convertToType(data['merchantRiskPrediction'], 'String');
      }
      if (data.hasOwnProperty('sellerProtection')) {
        obj['sellerProtection'] = PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection.constructFromObject(data['sellerProtection']);
      }
    }
    return obj;
  }

  /**
   * Authorization code. Returned only when the processor returns this value.  The length of this value depends on your processor.  Returned by authorization service.  #### PIN debit Authorization code that is returned by the processor.  Returned by PIN debit credit.  #### Elavon Encrypted Account Number Program The returned value is OFFLINE.  #### TSYS Acquiring Solutions The returned value for a successful zero amount authorization is 000000. 
   * @member {String} approvalCode
   */
  exports.prototype['approvalCode'] = undefined;
  /**
   * Network transaction identifier (TID). You can use this value to identify a specific transaction when you are discussing the transaction with your processor. Not all processors provide this value.  Returned by the authorization service.  #### PIN debit Transaction identifier generated by the processor.  Returned by PIN debit credit.  #### GPX Processor transaction ID.  #### Cielo For Cielo, this value is the non-sequential unit (NSU) and is supported for all transactions. The value is generated by Cielo or the issuing bank.  #### Comercio Latino For Comercio Latino, this value is the proof of sale or non-sequential unit (NSU) number generated by the acquirers Cielo and Rede, or the issuing bank.  #### CyberSource through VisaNet and GPN For details about this value for CyberSource through VisaNet and GPN, see \"processorInformation.networkTransactionId\" in [REST API Fields](https://developer.cybersource.com/content/dam/docs/cybs/en-us/apifields/reference/all/rest/api-fields.pdf)  #### Moneris This value identifies the transaction on a host system. It contains the following information: - Terminal used to process the transaction - Shift during which the transaction took place - Batch number - Transaction number within the batch You must store this value. If you give the customer a receipt, display this value on the receipt.  **Example** For the value 66012345001069003: - Terminal ID = 66012345 - Shift number = 001 - Batch number = 069 - Transaction number = 003 
   * @member {String} transactionId
   */
  exports.prototype['transactionId'] = undefined;
  /**
   * Same value as `processorInformation.transactionId`
   * @member {String} networkTransactionId
   */
  exports.prototype['networkTransactionId'] = undefined;
  /**
   * For most processors, this is the error message sent directly from the bank. Returned only when the processor returns this value.  **Important** Do not use this field to evaluate the result of the authorization.  #### PIN debit Response value that is returned by the processor or bank. **Important** Do not use this field to evaluate the results of the transaction request.  Returned by PIN debit credit, PIN debit purchase, and PIN debit reversal.  #### AIBMS If this value is `08`, you can accept the transaction if the customer provides you with identification.  #### Atos This value is the response code sent from Atos and it might also include the response code from the bank. Format: `aa,bb` with the two values separated by a comma and where: - `aa` is the two-digit error message from Atos. - `bb` is the optional two-digit error message from the bank.  #### Comercio Latino This value is the status code and the error or response code received from the processor separated by a colon. Format: [status code]:E[error code] or [status code]:R[response code] Example `2:R06`  #### JCN Gateway Processor-defined detail error code. The associated response category code is in the `processorInformation.responseCategoryCode` field. String (3)  #### paypalgateway Processor generated ID for the itemized detail. 
   * @member {String} responseCode
   */
  exports.prototype['responseCode'] = undefined;
  /**
   * This field is returned only for **American Express Direct** and **CyberSource through VisaNet**. Returned by authorization and incremental authorization services.  #### American Express Direct  System trace audit number (STAN). This value identifies the transaction and is useful when investigating a chargeback dispute.  #### CyberSource through VisaNet  System trace number that must be printed on the customer's receipt. 
   * @member {String} systemTraceAuditNumber
   */
  exports.prototype['systemTraceAuditNumber'] = undefined;
  /**
   * This field might contain information about a decline. This field is supported only for **CyberSource through VisaNet**. 
   * @member {String} responseDetails
   */
  exports.prototype['responseDetails'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationMerchantAdvice} merchantAdvice
   */
  exports.prototype['merchantAdvice'] = undefined;
  /**
   * Mastercard is introducing the Merchant Risk Predict Service in the middle East/Africa Region. A newly launched service comprised of seven independent artificial intelligence (AI)-powered scores intended to augment existing merchant risk management practices. 
   * @member {String} merchantRiskPrediction
   */
  exports.prototype['merchantRiskPrediction'] = undefined;
  /**
   * @member {module:model/PtsV2PaymentsPost201ResponseProcessorInformationSellerProtection} sellerProtection
   */
  exports.prototype['sellerProtection'] = undefined;



  return exports;
}));


