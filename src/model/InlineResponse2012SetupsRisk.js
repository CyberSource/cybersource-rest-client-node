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
    define(['ApiClient', 'model/InlineResponse2012SetupsPaymentsCardProcessing'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2012SetupsPaymentsCardProcessing'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2012SetupsRisk = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2012SetupsPaymentsCardProcessing);
  }
}(this, function(ApiClient, InlineResponse2012SetupsPaymentsCardProcessing) {
  'use strict';




  /**
   * The InlineResponse2012SetupsRisk model module.
   * @module model/InlineResponse2012SetupsRisk
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2012SetupsRisk</code>.
   * @alias module:model/InlineResponse2012SetupsRisk
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2012SetupsRisk</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2012SetupsRisk} obj Optional instance to populate.
   * @return {module:model/InlineResponse2012SetupsRisk} The populated <code>InlineResponse2012SetupsRisk</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fraudManagementEssentials')) {
        obj['fraudManagementEssentials'] = InlineResponse2012SetupsPaymentsCardProcessing.constructFromObject(data['fraudManagementEssentials']);
      }
      if (data.hasOwnProperty('decisionManager')) {
        obj['decisionManager'] = InlineResponse2012SetupsPaymentsCardProcessing.constructFromObject(data['decisionManager']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2012SetupsPaymentsCardProcessing} fraudManagementEssentials
   */
  exports.prototype['fraudManagementEssentials'] = undefined;
  /**
   * @member {module:model/InlineResponse2012SetupsPaymentsCardProcessing} decisionManager
   */
  exports.prototype['decisionManager'] = undefined;



  return exports;
}));

