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
    define(['ApiClient', 'model/ECheckConfigFeaturesAccountValidationServiceInternalOnlyProcessors'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ECheckConfigFeaturesAccountValidationServiceInternalOnlyProcessors'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ECheckConfigFeaturesAccountValidationServiceInternalOnly = factory(root.CyberSource.ApiClient, root.CyberSource.ECheckConfigFeaturesAccountValidationServiceInternalOnlyProcessors);
  }
}(this, function(ApiClient, ECheckConfigFeaturesAccountValidationServiceInternalOnlyProcessors) {
  'use strict';




  /**
   * The ECheckConfigFeaturesAccountValidationServiceInternalOnly model module.
   * @module model/ECheckConfigFeaturesAccountValidationServiceInternalOnly
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ECheckConfigFeaturesAccountValidationServiceInternalOnly</code>.
   * @alias module:model/ECheckConfigFeaturesAccountValidationServiceInternalOnly
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ECheckConfigFeaturesAccountValidationServiceInternalOnly</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ECheckConfigFeaturesAccountValidationServiceInternalOnly} obj Optional instance to populate.
   * @return {module:model/ECheckConfigFeaturesAccountValidationServiceInternalOnly} The populated <code>ECheckConfigFeaturesAccountValidationServiceInternalOnly</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('processors')) {
        obj['processors'] = ApiClient.convertToType(data['processors'], {'String': ECheckConfigFeaturesAccountValidationServiceInternalOnlyProcessors});
      }
    }
    return obj;
  }

  /**
   * *NEW* Payment Processing connection used to support eCheck, aka ACH, payment methods. Example * \"bofaach\" * \"wellsfargoach\" 
   * @member {Object.<String, module:model/ECheckConfigFeaturesAccountValidationServiceInternalOnlyProcessors>} processors
   */
  exports.prototype['processors'] = undefined;



  return exports;
}));


