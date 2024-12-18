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
    root.CyberSource.Riskv1exportcomplianceinquiriesOrderInformationLineItems = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Riskv1exportcomplianceinquiriesOrderInformationLineItems model module.
   * @module model/Riskv1exportcomplianceinquiriesOrderInformationLineItems
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1exportcomplianceinquiriesOrderInformationLineItems</code>.
   * @alias module:model/Riskv1exportcomplianceinquiriesOrderInformationLineItems
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Riskv1exportcomplianceinquiriesOrderInformationLineItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1exportcomplianceinquiriesOrderInformationLineItems} obj Optional instance to populate.
   * @return {module:model/Riskv1exportcomplianceinquiriesOrderInformationLineItems} The populated <code>Riskv1exportcomplianceinquiriesOrderInformationLineItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('unitPrice')) {
        obj['unitPrice'] = ApiClient.convertToType(data['unitPrice'], 'String');
      }
      if (data.hasOwnProperty('allowedExportCountries')) {
        obj['allowedExportCountries'] = ApiClient.convertToType(data['allowedExportCountries'], ['String']);
      }
      if (data.hasOwnProperty('restrictedExportCountries')) {
        obj['restrictedExportCountries'] = ApiClient.convertToType(data['restrictedExportCountries'], ['String']);
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
      if (data.hasOwnProperty('productSKU')) {
        obj['productSKU'] = ApiClient.convertToType(data['productSKU'], 'String');
      }
      if (data.hasOwnProperty('productRisk')) {
        obj['productRisk'] = ApiClient.convertToType(data['productRisk'], 'String');
      }
      if (data.hasOwnProperty('productName')) {
        obj['productName'] = ApiClient.convertToType(data['productName'], 'String');
      }
      if (data.hasOwnProperty('productCode')) {
        obj['productCode'] = ApiClient.convertToType(data['productCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Per-item price of the product. If line items are present in the request, the unit price is a mandatory field. 
   * @member {String} unitPrice
   */
  exports.prototype['unitPrice'] = undefined;
  /**
   * @member {Array.<String>} allowedExportCountries
   */
  exports.prototype['allowedExportCountries'] = undefined;
  /**
   * @member {Array.<String>} restrictedExportCountries
   */
  exports.prototype['restrictedExportCountries'] = undefined;
  /**
   * Number of units for this order. Must be a non-negative integer.  The default is `1`. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;
  /**
   * Product identifier code. Also known as the Stock Keeping Unit (SKU) code for the product.  For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not set to **default** or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S. and Canadian taxes. Not applicable to international and value added taxes. For an authorization or capture transaction (`processingOptions.capture` is set to `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the values related to shipping and/or handling. 
   * @member {String} productSKU
   */
  exports.prototype['productSKU'] = undefined;
  /**
   * Indicates the level of risk for the product. This field can contain one of the following values: - `low`: The product is associated with few chargebacks. - `normal`: The product is associated with a normal number of chargebacks. - `high`: The product is associated with many chargebacks. 
   * @member {String} productRisk
   */
  exports.prototype['productRisk'] = undefined;
  /**
   * For an authorization or capture transaction (`processingOptions.capture` is `true` or `false`), this field is required when `orderInformation.lineItems[].productCode` is not `default` or one of the other values that are related to shipping and/or handling.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes. 
   * @member {String} productName
   */
  exports.prototype['productName'] = undefined;
  /**
   * Type of product. The value for this field is used to identify the product category (electronic, handling, physical, service, or shipping). The default value is `default`.  If you are performing an authorization transaction (`processingOptions.capture` is set to `false`), and you set this field to a value other than `default` or one of the values related to shipping and/or handling, then `orderInformation.lineItems[].quantity`, `orderInformation.lineItems[].productName`, and `orderInformation.lineItems[].productSku` fields are required.  Optional field.  #### Tax Calculation Optional field for U.S., Canadian, international tax, and value added taxes.  The Product Codes for the tax service are located in the Cybersource Tax Codes guide. Contact Customer Support to request the guide. If you don't send a tax service Product Code in your tax request, product-based rules or exemptions will not be applied and the transaction will default to fully taxable in the locations where you've indicated you need to collect tax [by way of nexus, no nexus, or seller registration number fields]. 
   * @member {String} productCode
   */
  exports.prototype['productCode'] = undefined;



  return exports;
}));


