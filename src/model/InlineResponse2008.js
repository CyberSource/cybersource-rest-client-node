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
    define(['ApiClient', 'model/InlineResponse2008Embedded', 'model/InlineResponse2008Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2008Embedded'), require('./InlineResponse2008Links'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2008 = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2008Embedded, root.CyberSource.InlineResponse2008Links);
  }
}(this, function(ApiClient, InlineResponse2008Embedded, InlineResponse2008Links) {
  'use strict';




  /**
   * The InlineResponse2008 model module.
   * @module model/InlineResponse2008
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2008</code>.
   * @alias module:model/InlineResponse2008
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>InlineResponse2008</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008} The populated <code>InlineResponse2008</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = ApiClient.convertToType(data['_links'], [InlineResponse2008Links]);
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'String');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
      if (data.hasOwnProperty('_embedded')) {
        obj['_embedded'] = InlineResponse2008Embedded.constructFromObject(data['_embedded']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/InlineResponse2008Links>} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {String} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;
  /**
   * @member {module:model/InlineResponse2008Embedded} _embedded
   */
  exports.prototype['_embedded'] = undefined;



  return exports;
}));


