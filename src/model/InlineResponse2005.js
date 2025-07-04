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
    define(['ApiClient', 'model/InlineResponse2005Devices'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2005Devices'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2005 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2005Devices);
  }
}(this, function(ApiClient, InlineResponse2005Devices) {
  'use strict';




  /**
   * The InlineResponse2005 model module.
   * @module model/InlineResponse2005
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2005</code>.
   * @alias module:model/InlineResponse2005
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>InlineResponse2005</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005} The populated <code>InlineResponse2005</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalCount')) {
        obj['totalCount'] = ApiClient.convertToType(data['totalCount'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('devices')) {
        obj['devices'] = ApiClient.convertToType(data['devices'], [InlineResponse2005Devices]);
      }
    }
    return obj;
  }

  /**
   * Total number of results.
   * @member {Number} totalCount
   */
  exports.prototype['totalCount'] = undefined;
  /**
   * Controls the starting point within the collection of results, which defaults to 0. The first item in the collection is retrieved by setting a zero offset.  For example, if you have a collection of 15 items to be retrieved from a resource and you specify limit=5, you can retrieve the entire set of results in 3 successive requests by varying the offset value like this:  `offset=0` `offset=5` `offset=10`  **Note:** If an offset larger than the number of results is provided, this will result in no embedded object being returned. 
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Controls the maximum number of items that may be returned for a single request. The default is 20, the maximum is 2500. 
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * A comma separated list of the following form:  `submitTimeUtc:desc` 
   * @member {String} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * Results for this page, this could be below the limit.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * A collection of devices
   * @member {Array.<module:model/InlineResponse2005Devices>} devices
   */
  exports.prototype['devices'] = undefined;



  return exports;
}));


