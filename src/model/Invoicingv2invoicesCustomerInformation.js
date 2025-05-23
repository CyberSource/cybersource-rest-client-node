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
    define(['ApiClient', 'model/Invoicingv2invoicesCustomerInformationCompany'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Invoicingv2invoicesCustomerInformationCompany'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Invoicingv2invoicesCustomerInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Invoicingv2invoicesCustomerInformationCompany);
  }
}(this, function(ApiClient, Invoicingv2invoicesCustomerInformationCompany) {
  'use strict';




  /**
   * The Invoicingv2invoicesCustomerInformation model module.
   * @module model/Invoicingv2invoicesCustomerInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Invoicingv2invoicesCustomerInformation</code>.
   * Contains all of the customer-related fields for the invoice.
   * @alias module:model/Invoicingv2invoicesCustomerInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Invoicingv2invoicesCustomerInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoicingv2invoicesCustomerInformation} obj Optional instance to populate.
   * @return {module:model/Invoicingv2invoicesCustomerInformation} The populated <code>Invoicingv2invoicesCustomerInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('merchantCustomerId')) {
        obj['merchantCustomerId'] = ApiClient.convertToType(data['merchantCustomerId'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Invoicingv2invoicesCustomerInformationCompany.constructFromObject(data['company']);
      }
    }
    return obj;
  }

  /**
   * Payer name for the invoice.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Customer's email address, including the full domain name.  #### CyberSource through VisaNet Credit card networks cannot process transactions that contain non-ASCII characters. CyberSource through VisaNet accepts and stores non-ASCII characters correctly and displays them correctly in reports. However, the limitations of the credit card networks prevent CyberSource through VisaNet from transmitting non-ASCII characters to the credit card networks. Therefore, CyberSource through VisaNet replaces non-ASCII characters with meaningless ASCII characters for transmission to the credit card networks.  **Important** It is your responsibility to determine whether a field is required for the transaction you are requesting.  #### Invoicing Email address for the customer for sending the invoice. If the invoice is in SENT status and email is updated, the old email customer payment link won't work and you must resend the invoice with the new payment link.  #### Chase Paymentech Solutions Optional field.  ####  Credit Mutuel-CIC Optional field.  #### OmniPay Direct Optional field.  #### SIX Optional field.  #### TSYS Acquiring Solutions Required when `processingInformation.billPaymentOptions.billPayment=true` and `pointOfSaleInformation.entryMode=keyed`.  #### Worldpay VAP Optional field.  #### All other processors Not used. 
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * Your identifier for the customer.  When a subscription or customer profile is being created, the maximum length for this field for most processors is 30. Otherwise, the maximum length is 100.  #### Comercio Latino For recurring payments in Mexico, the value is the customer's contract number. Note Before you request the authorization, you must inform the issuer of the customer contract numbers that will be used for recurring transactions.  #### Worldpay VAP For a follow-on credit with Worldpay VAP, CyberSource checks the following locations, in the order given, for a customer account ID value and uses the first value it finds: 1. `customer_account_id` value in the follow-on credit request 2. Customer account ID value that was used for the capture that is being credited 3. Customer account ID value that was used for the original authorization If a customer account ID value cannot be found in any of these locations, then no value is used. 
   * @member {String} merchantCustomerId
   */
  exports.prototype['merchantCustomerId'] = undefined;
  /**
   * @member {module:model/Invoicingv2invoicesCustomerInformationCompany} company
   */
  exports.prototype['company'] = undefined;



  return exports;
}));


