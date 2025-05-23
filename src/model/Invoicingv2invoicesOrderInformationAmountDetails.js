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
    define(['ApiClient', 'model/Invoicingv2invoicesOrderInformationAmountDetailsFreight', 'model/Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Invoicingv2invoicesOrderInformationAmountDetailsFreight'), require('./Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Invoicingv2invoicesOrderInformationAmountDetails = factory(root.CyberSource.ApiClient, root.CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsFreight, root.CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails);
  }
}(this, function(ApiClient, Invoicingv2invoicesOrderInformationAmountDetailsFreight, Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails) {
  'use strict';




  /**
   * The Invoicingv2invoicesOrderInformationAmountDetails model module.
   * @module model/Invoicingv2invoicesOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Invoicingv2invoicesOrderInformationAmountDetails</code>.
   * Contains all of the amount-related fields.
   * @alias module:model/Invoicingv2invoicesOrderInformationAmountDetails
   * @class
   * @param totalAmount {String} Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  **Note** For CTV, FDCCompass, Paymentech processors, the maximum length for this field is 12.  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths.  If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen.   #### Card Present Required to include either this field or `orderInformation.lineItems[].unitPrice` for the order.  #### Invoicing / Pay By Link Required for creating a new invoice or payment link.  #### PIN Debit Amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount.  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit; however, for all other processors, these fields are required.  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either this field or the 1st line item in the order and the specific line-order amount in your request.   #### DCC for First Data Not used. 
   * @param currency {String} Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### PIN Debit Currency for the amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf). Returned by PIN debit purchase.  For PIN debit reversal requests, you must use the same currency that was used for the PIN debit purchase or PIN debit credit that you are reversing. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf).  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency.  #### Tax Calculation Required for international tax and value added tax only. Optional for U.S. and Canadian taxes. Your local currency. 
   */
  var exports = function(totalAmount, currency) {
    var _this = this;

    _this['totalAmount'] = totalAmount;
    _this['currency'] = currency;






  };

  /**
   * Constructs a <code>Invoicingv2invoicesOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoicingv2invoicesOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/Invoicingv2invoicesOrderInformationAmountDetails} The populated <code>Invoicingv2invoicesOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('discountAmount')) {
        obj['discountAmount'] = ApiClient.convertToType(data['discountAmount'], 'String');
      }
      if (data.hasOwnProperty('discountPercent')) {
        obj['discountPercent'] = ApiClient.convertToType(data['discountPercent'], 'String');
      }
      if (data.hasOwnProperty('subAmount')) {
        obj['subAmount'] = ApiClient.convertToType(data['subAmount'], 'String');
      }
      if (data.hasOwnProperty('minimumPartialAmount')) {
        obj['minimumPartialAmount'] = ApiClient.convertToType(data['minimumPartialAmount'], 'String');
      }
      if (data.hasOwnProperty('taxDetails')) {
        obj['taxDetails'] = Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails.constructFromObject(data['taxDetails']);
      }
      if (data.hasOwnProperty('freight')) {
        obj['freight'] = Invoicingv2invoicesOrderInformationAmountDetailsFreight.constructFromObject(data['freight']);
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places.  **Note** For CTV, FDCCompass, Paymentech processors, the maximum length for this field is 12.  **Important** Some processors have specific requirements and limitations, such as maximum amounts and maximum field lengths.  If your processor supports zero amount authorizations, you can set this field to 0 for the authorization to check if the card is lost or stolen.   #### Card Present Required to include either this field or `orderInformation.lineItems[].unitPrice` for the order.  #### Invoicing / Pay By Link Required for creating a new invoice or payment link.  #### PIN Debit Amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount.  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit; however, for all other processors, these fields are required.  #### DCC with a Third-Party Provider Set this field to the converted amount that was returned by the DCC provider. You must include either this field or the 1st line item in the order and the specific line-order amount in your request.   #### DCC for First Data Not used. 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency used for the order. Use the three-character [ISO Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf)  #### Used by **Authorization** Required field.  **Authorization Reversal** For an authorization reversal (`reversalInformation`) or a capture (`processingOptions.capture` is set to `true`), you must use the same currency that you used in your payment authorization request.  #### PIN Debit Currency for the amount you requested for the PIN debit purchase. This value is returned for partial authorizations. The issuing bank can approve a partial amount if the balance on the debit card is less than the requested transaction amount. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf). Returned by PIN debit purchase.  For PIN debit reversal requests, you must use the same currency that was used for the PIN debit purchase or PIN debit credit that you are reversing. For the possible values, see the [ISO Standard Currency Codes](https://developer.cybersource.com/library/documentation/sbc/quickref/currencies.pdf).  Required field for PIN Debit purchase and PIN Debit credit requests. Optional field for PIN Debit reversal requests.  #### GPX This field is optional for reversing an authorization or credit.  #### DCC for First Data Your local currency.  #### Tax Calculation Required for international tax and value added tax only. Optional for U.S. and Canadian taxes. Your local currency. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Total discount amount applied to the order. 
   * @member {String} discountAmount
   */
  exports.prototype['discountAmount'] = undefined;
  /**
   * The total discount percentage applied to the order.
   * @member {String} discountPercent
   */
  exports.prototype['discountPercent'] = undefined;
  /**
   * Sub-amount of the order.
   * @member {String} subAmount
   */
  exports.prototype['subAmount'] = undefined;
  /**
   * The minimum partial amount required to pay the invoice.
   * @member {String} minimumPartialAmount
   */
  exports.prototype['minimumPartialAmount'] = undefined;
  /**
   * @member {module:model/Invoicingv2invoicesOrderInformationAmountDetailsTaxDetails} taxDetails
   */
  exports.prototype['taxDetails'] = undefined;
  /**
   * @member {module:model/Invoicingv2invoicesOrderInformationAmountDetailsFreight} freight
   */
  exports.prototype['freight'] = undefined;



  return exports;
}));


