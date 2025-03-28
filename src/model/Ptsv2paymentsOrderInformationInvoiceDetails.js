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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsOrderInformationInvoiceDetails = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum) {
  'use strict';




  /**
   * The Ptsv2paymentsOrderInformationInvoiceDetails model module.
   * @module model/Ptsv2paymentsOrderInformationInvoiceDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsOrderInformationInvoiceDetails</code>.
   * @alias module:model/Ptsv2paymentsOrderInformationInvoiceDetails
   * @class
   */
  var exports = function() {
    var _this = this;



















  };

  /**
   * Constructs a <code>Ptsv2paymentsOrderInformationInvoiceDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsOrderInformationInvoiceDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsOrderInformationInvoiceDetails} The populated <code>Ptsv2paymentsOrderInformationInvoiceDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('invoiceNumber')) {
        obj['invoiceNumber'] = ApiClient.convertToType(data['invoiceNumber'], 'String');
      }
      if (data.hasOwnProperty('barcodeNumber')) {
        obj['barcodeNumber'] = ApiClient.convertToType(data['barcodeNumber'], 'String');
      }
      if (data.hasOwnProperty('expirationDate')) {
        obj['expirationDate'] = ApiClient.convertToType(data['expirationDate'], 'String');
      }
      if (data.hasOwnProperty('purchaseOrderNumber')) {
        obj['purchaseOrderNumber'] = ApiClient.convertToType(data['purchaseOrderNumber'], 'String');
      }
      if (data.hasOwnProperty('purchaseOrderDate')) {
        obj['purchaseOrderDate'] = ApiClient.convertToType(data['purchaseOrderDate'], 'String');
      }
      if (data.hasOwnProperty('purchaseContactName')) {
        obj['purchaseContactName'] = ApiClient.convertToType(data['purchaseContactName'], 'String');
      }
      if (data.hasOwnProperty('taxable')) {
        obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
      }
      if (data.hasOwnProperty('vatInvoiceReferenceNumber')) {
        obj['vatInvoiceReferenceNumber'] = ApiClient.convertToType(data['vatInvoiceReferenceNumber'], 'String');
      }
      if (data.hasOwnProperty('commodityCode')) {
        obj['commodityCode'] = ApiClient.convertToType(data['commodityCode'], 'String');
      }
      if (data.hasOwnProperty('merchandiseCode')) {
        obj['merchandiseCode'] = ApiClient.convertToType(data['merchandiseCode'], 'Number');
      }
      if (data.hasOwnProperty('transactionAdviceAddendum')) {
        obj['transactionAdviceAddendum'] = ApiClient.convertToType(data['transactionAdviceAddendum'], [Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum]);
      }
      if (data.hasOwnProperty('referenceDataCode')) {
        obj['referenceDataCode'] = ApiClient.convertToType(data['referenceDataCode'], 'String');
      }
      if (data.hasOwnProperty('referenceDataNumber')) {
        obj['referenceDataNumber'] = ApiClient.convertToType(data['referenceDataNumber'], 'String');
      }
      if (data.hasOwnProperty('salesSlipNumber')) {
        obj['salesSlipNumber'] = ApiClient.convertToType(data['salesSlipNumber'], 'Number');
      }
      if (data.hasOwnProperty('invoiceDate')) {
        obj['invoiceDate'] = ApiClient.convertToType(data['invoiceDate'], 'String');
      }
      if (data.hasOwnProperty('costCenter')) {
        obj['costCenter'] = ApiClient.convertToType(data['costCenter'], 'String');
      }
      if (data.hasOwnProperty('issuerMessage')) {
        obj['issuerMessage'] = ApiClient.convertToType(data['issuerMessage'], 'String');
      }
      if (data.hasOwnProperty('productDescription')) {
        obj['productDescription'] = ApiClient.convertToType(data['productDescription'], 'String');
      }
    }
    return obj;
  }

  /**
   * Invoice Number.
   * @member {String} invoiceNumber
   */
  exports.prototype['invoiceNumber'] = undefined;
  /**
   * Barcode Number.
   * @member {String} barcodeNumber
   */
  exports.prototype['barcodeNumber'] = undefined;
  /**
   * Expiration Date.
   * @member {String} expirationDate
   */
  exports.prototype['expirationDate'] = undefined;
  /**
   * Value used by your customer to identify the order. This value is typically a purchase order number. CyberSource recommends that you do not populate the field with all zeros or nines. 
   * @member {String} purchaseOrderNumber
   */
  exports.prototype['purchaseOrderNumber'] = undefined;
  /**
   * Date the order was processed. `Format: YYYY-MM-DD`. 
   * @member {String} purchaseOrderDate
   */
  exports.prototype['purchaseOrderDate'] = undefined;
  /**
   * The name of the individual or the company contacted for company authorized purchases. 
   * @member {String} purchaseContactName
   */
  exports.prototype['purchaseContactName'] = undefined;
  /**
   * Flag that indicates whether an order is taxable. This value must be true if the sum of all _lineItems[].taxAmount_ values > 0.  If you do not include any `lineItems[].taxAmount` values in your request, CyberSource does not include `invoiceDetails.taxable` in the data it sends to the processor.  Possible values:  - **true**  - **false** 
   * @member {Boolean} taxable
   */
  exports.prototype['taxable'] = undefined;
  /**
   * VAT invoice number associated with the transaction. 
   * @member {String} vatInvoiceReferenceNumber
   */
  exports.prototype['vatInvoiceReferenceNumber'] = undefined;
  /**
   * International description code of the overall order's goods or services or the Categorizes purchases for VAT reporting. Contact your acquirer for a list of codes. 
   * @member {String} commodityCode
   */
  exports.prototype['commodityCode'] = undefined;
  /**
   * Identifier for the merchandise. This field is supported only on the processors listed in this field description.  #### American Express Direct Possible value: - 1000: Gift card  #### CyberSource through VisaNet This value must be right justified. In Japan, this value is called a _goods code_.  #### JCN Gateway This value must be right justified. In Japan, this value is called a _goods code_. 
   * @member {Number} merchandiseCode
   */
  exports.prototype['merchandiseCode'] = undefined;
  /**
   * @member {Array.<module:model/Ptsv2paymentsOrderInformationInvoiceDetailsTransactionAdviceAddendum>} transactionAdviceAddendum
   */
  exports.prototype['transactionAdviceAddendum'] = undefined;
  /**
   * Code that identifies the value of the `referenceDataNumber` field.  This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. 
   * @member {String} referenceDataCode
   */
  exports.prototype['referenceDataCode'] = undefined;
  /**
   * Reference number. The meaning of this value is identified by the value of the `referenceDataCode` field.  This field is a pass-through, which means that CyberSource does not verify the value or modify it in any way before sending it to the processor. 
   * @member {String} referenceDataNumber
   */
  exports.prototype['referenceDataNumber'] = undefined;
  /**
   * Transaction identifier that is generated. You have the option of printing the sales slip number on the receipt. This field is supported only on Cybersource through Visanet and JCN gateway.  Optional field.  #### Card Present processing message If you included this field in the request, the returned value is the value that you sent in the request. If you did not include this field in the request, the system generated this value for you.  The difference between this reply field and the `processorInformation.systemTraceAuditNumber` field is that the system generates the system trace audit number (STAN), and you must print the receipt number on the receipt; whereas you can generate the sales slip number, and you can choose to print the sales slip number on the receipt. 
   * @member {Number} salesSlipNumber
   */
  exports.prototype['salesSlipNumber'] = undefined;
  /**
   * Date of the tax calculation. Use format YYYYMMDD. You can provide a date in the past if you are calculating tax for a refund and want to know what the tax was on the date the order was placed. You can provide a date in the future if you are calculating the tax for a future date, such as an upcoming tax holiday.  The default is the date, in Pacific time, that the bank receives the request. Keep this in mind if you are in a different time zone and want the tax calculated with the rates that are applicable on a specific date.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} invoiceDate
   */
  exports.prototype['invoiceDate'] = undefined;
  /**
   * Cost centre of the merchant
   * @member {String} costCenter
   */
  exports.prototype['costCenter'] = undefined;
  /**
   * Text message from the issuer. If you give the customer a receipt, display this value on the receipt.
   * @member {String} issuerMessage
   */
  exports.prototype['issuerMessage'] = undefined;
  /**
   * Brief description of item.
   * @member {String} productDescription
   */
  exports.prototype['productDescription'] = undefined;



  return exports;
}));


