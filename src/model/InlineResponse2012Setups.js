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
    define(['ApiClient', 'model/InlineResponse2012SetupsCommerceSolutions', 'model/InlineResponse2012SetupsPayments', 'model/InlineResponse2012SetupsRisk', 'model/InlineResponse2012SetupsValueAddedServices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2012SetupsCommerceSolutions'), require('./InlineResponse2012SetupsPayments'), require('./InlineResponse2012SetupsRisk'), require('./InlineResponse2012SetupsValueAddedServices'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2012Setups = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2012SetupsCommerceSolutions, root.CyberSource.InlineResponse2012SetupsPayments, root.CyberSource.InlineResponse2012SetupsRisk, root.CyberSource.InlineResponse2012SetupsValueAddedServices);
  }
}(this, function(ApiClient, InlineResponse2012SetupsCommerceSolutions, InlineResponse2012SetupsPayments, InlineResponse2012SetupsRisk, InlineResponse2012SetupsValueAddedServices) {
  'use strict';




  /**
   * The InlineResponse2012Setups model module.
   * @module model/InlineResponse2012Setups
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2012Setups</code>.
   * @alias module:model/InlineResponse2012Setups
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse2012Setups</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2012Setups} obj Optional instance to populate.
   * @return {module:model/InlineResponse2012Setups} The populated <code>InlineResponse2012Setups</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('payments')) {
        obj['payments'] = InlineResponse2012SetupsPayments.constructFromObject(data['payments']);
      }
      if (data.hasOwnProperty('risk')) {
        obj['risk'] = InlineResponse2012SetupsRisk.constructFromObject(data['risk']);
      }
      if (data.hasOwnProperty('commerceSolutions')) {
        obj['commerceSolutions'] = InlineResponse2012SetupsCommerceSolutions.constructFromObject(data['commerceSolutions']);
      }
      if (data.hasOwnProperty('valueAddedServices')) {
        obj['valueAddedServices'] = InlineResponse2012SetupsValueAddedServices.constructFromObject(data['valueAddedServices']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2012SetupsPayments} payments
   */
  exports.prototype['payments'] = undefined;
  /**
   * @member {module:model/InlineResponse2012SetupsRisk} risk
   */
  exports.prototype['risk'] = undefined;
  /**
   * @member {module:model/InlineResponse2012SetupsCommerceSolutions} commerceSolutions
   */
  exports.prototype['commerceSolutions'] = undefined;
  /**
   * @member {module:model/InlineResponse2012SetupsValueAddedServices} valueAddedServices
   */
  exports.prototype['valueAddedServices'] = undefined;



  return exports;
}));

