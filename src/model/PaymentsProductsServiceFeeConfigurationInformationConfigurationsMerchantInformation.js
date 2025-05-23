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
    root.CyberSource.PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation model module.
   * @module model/PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation</code>.
   * @alias module:model/PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation} The populated <code>PaymentsProductsServiceFeeConfigurationInformationConfigurationsMerchantInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * Name of the merchant account.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Phone number of the primary contact for the merchant account.
   * @member {String} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * 2-character ISO code for the U.S. state in which the merchant is registered
   * @member {String} state
   */
  exports.prototype['state'] = undefined;



  return exports;
}));


