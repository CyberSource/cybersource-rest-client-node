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
    define(['ApiClient', 'model/Riskv1decisionsMerchantInformationMerchantDescriptor'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1decisionsMerchantInformationMerchantDescriptor'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1decisionsMerchantInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1decisionsMerchantInformationMerchantDescriptor);
  }
}(this, function(ApiClient, Riskv1decisionsMerchantInformationMerchantDescriptor) {
  'use strict';




  /**
   * The Riskv1decisionsMerchantInformation model module.
   * @module model/Riskv1decisionsMerchantInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1decisionsMerchantInformation</code>.
   * @alias module:model/Riskv1decisionsMerchantInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Riskv1decisionsMerchantInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1decisionsMerchantInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1decisionsMerchantInformation} The populated <code>Riskv1decisionsMerchantInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('merchantDescriptor')) {
        obj['merchantDescriptor'] = Riskv1decisionsMerchantInformationMerchantDescriptor.constructFromObject(data['merchantDescriptor']);
      }
      if (data.hasOwnProperty('merchantName')) {
        obj['merchantName'] = ApiClient.convertToType(data['merchantName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1decisionsMerchantInformationMerchantDescriptor} merchantDescriptor
   */
  exports.prototype['merchantDescriptor'] = undefined;
  /**
   * Your company's name as you want it to appear to the customer in the issuing bank's authentication form. This value overrides the value specified by your merchant bank. 
   * @member {String} merchantName
   */
  exports.prototype['merchantName'] = undefined;



  return exports;
}));


