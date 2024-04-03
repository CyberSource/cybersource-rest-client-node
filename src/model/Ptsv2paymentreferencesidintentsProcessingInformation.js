/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
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
    root.CyberSource.Ptsv2paymentreferencesidintentsProcessingInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentreferencesidintentsProcessingInformation model module.
   * @module model/Ptsv2paymentreferencesidintentsProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentreferencesidintentsProcessingInformation</code>.
   * @alias module:model/Ptsv2paymentreferencesidintentsProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentreferencesidintentsProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentreferencesidintentsProcessingInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentreferencesidintentsProcessingInformation} The populated <code>Ptsv2paymentreferencesidintentsProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('actionList')) {
        obj['actionList'] = ApiClient.convertToType(data['actionList'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Array of actions (one or more) to be included in the order to invoke bundled services along with order. Possible values: - `AP_ORDER`: Use this when Alternative Payment Order service is requested. 
   * @member {Array.<String>} actionList
   */
  exports.prototype['actionList'] = undefined;



  return exports;
}));

