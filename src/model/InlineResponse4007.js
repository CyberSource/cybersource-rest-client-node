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
    define(['ApiClient', 'model/InlineResponse4007Details'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse4007Details'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse4007 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse4007Details);
  }
}(this, function(ApiClient, InlineResponse4007Details) {
  'use strict';




  /**
   * The InlineResponse4007 model module.
   * @module model/InlineResponse4007
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse4007</code>.
   * @alias module:model/InlineResponse4007
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>InlineResponse4007</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4007} obj Optional instance to populate.
   * @return {module:model/InlineResponse4007} The populated <code>InlineResponse4007</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('submitTimeUtc')) {
        obj['submitTimeUtc'] = ApiClient.convertToType(data['submitTimeUtc'], 'Date');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('details')) {
        obj['details'] = ApiClient.convertToType(data['details'], [InlineResponse4007Details]);
      }
    }
    return obj;
  }

  /**
   * Time of request in UTC. `Format: YYYY-MM-DDThh:mm:ssZ`  Example 2016-08-11T22:47:57Z equals August 11, 2016, at 22:47:57 (10:47:57 p.m.). The T separates the date and the time. The Z indicates UTC. 
   * @member {Date} submitTimeUtc
   */
  exports.prototype['submitTimeUtc'] = undefined;
  /**
   * The http status description of the submitted request.
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Documented reason codes. Client should be able to use the key for generating their own error message Possible Values:   - 'INVALID_DATA'   - 'SYSTEM_ERROR'   - 'RESOURCE_NOT_FOUND' 
   * @member {String} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Descriptive message for the error.
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {Array.<module:model/InlineResponse4007Details>} details
   */
  exports.prototype['details'] = undefined;



  return exports;
}));


