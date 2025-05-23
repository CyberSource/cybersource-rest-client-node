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
    root.CyberSource.Invoicingv2invoicesOrderInformationAmountDetailsFreight = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Invoicingv2invoicesOrderInformationAmountDetailsFreight model module.
   * @module model/Invoicingv2invoicesOrderInformationAmountDetailsFreight
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Invoicingv2invoicesOrderInformationAmountDetailsFreight</code>.
   * Contains all of the shipping-related fields for the order.
   * @alias module:model/Invoicingv2invoicesOrderInformationAmountDetailsFreight
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Invoicingv2invoicesOrderInformationAmountDetailsFreight</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Invoicingv2invoicesOrderInformationAmountDetailsFreight} obj Optional instance to populate.
   * @return {module:model/Invoicingv2invoicesOrderInformationAmountDetailsFreight} The populated <code>Invoicingv2invoicesOrderInformationAmountDetailsFreight</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('taxable')) {
        obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
      }
      if (data.hasOwnProperty('taxRate')) {
        obj['taxRate'] = ApiClient.convertToType(data['taxRate'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total freight or shipping and handling charges for the order. When you include this field in your request, you must also include the **totalAmount** field. 
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Flag that indicates whether an order is taxable. This value must be true if the sum of all _lineItems[].taxAmount_ values > 0.  If you do not include any `lineItems[].taxAmount` values in your request, CyberSource does not include `invoiceDetails.taxable` in the data it sends to the processor.  Possible values:  - **true**  - **false** 
   * @member {Boolean} taxable
   */
  exports.prototype['taxable'] = undefined;
  /**
   * Shipping Tax rate applied to the freight amount.  **Visa**: Valid range is 0.01 to 0.99 (1% to 99%, with only whole percentage values accepted; values with additional decimal places will be truncated).  **Mastercard**: Valid range is 0.00001 to 0.99999 (0.001% to 99.999%). 
   * @member {String} taxRate
   */
  exports.prototype['taxRate'] = undefined;



  return exports;
}));


