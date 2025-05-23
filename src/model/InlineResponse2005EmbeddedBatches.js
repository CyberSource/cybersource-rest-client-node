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
    define(['ApiClient', 'model/InlineResponse2005EmbeddedLinks', 'model/InlineResponse2005EmbeddedTotals'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2005EmbeddedLinks'), require('./InlineResponse2005EmbeddedTotals'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2005EmbeddedBatches = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2005EmbeddedLinks, root.CyberSource.InlineResponse2005EmbeddedTotals);
  }
}(this, function(ApiClient, InlineResponse2005EmbeddedLinks, InlineResponse2005EmbeddedTotals) {
  'use strict';




  /**
   * The InlineResponse2005EmbeddedBatches model module.
   * @module model/InlineResponse2005EmbeddedBatches
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2005EmbeddedBatches</code>.
   * @alias module:model/InlineResponse2005EmbeddedBatches
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>InlineResponse2005EmbeddedBatches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2005EmbeddedBatches} obj Optional instance to populate.
   * @return {module:model/InlineResponse2005EmbeddedBatches} The populated <code>InlineResponse2005EmbeddedBatches</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = InlineResponse2005EmbeddedLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('batchId')) {
        obj['batchId'] = ApiClient.convertToType(data['batchId'], 'String');
      }
      if (data.hasOwnProperty('batchCreatedDate')) {
        obj['batchCreatedDate'] = ApiClient.convertToType(data['batchCreatedDate'], 'String');
      }
      if (data.hasOwnProperty('batchModifiedDate')) {
        obj['batchModifiedDate'] = ApiClient.convertToType(data['batchModifiedDate'], 'String');
      }
      if (data.hasOwnProperty('batchSource')) {
        obj['batchSource'] = ApiClient.convertToType(data['batchSource'], 'String');
      }
      if (data.hasOwnProperty('tokenSource')) {
        obj['tokenSource'] = ApiClient.convertToType(data['tokenSource'], 'String');
      }
      if (data.hasOwnProperty('merchantReference')) {
        obj['merchantReference'] = ApiClient.convertToType(data['merchantReference'], 'String');
      }
      if (data.hasOwnProperty('batchCaEndpoints')) {
        obj['batchCaEndpoints'] = ApiClient.convertToType(data['batchCaEndpoints'], ['String']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('totals')) {
        obj['totals'] = InlineResponse2005EmbeddedTotals.constructFromObject(data['totals']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse2005EmbeddedLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * Unique identification number assigned to the submitted request.
   * @member {String} batchId
   */
  exports.prototype['batchId'] = undefined;
  /**
   * ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ
   * @member {String} batchCreatedDate
   */
  exports.prototype['batchCreatedDate'] = undefined;
  /**
   * ISO-8601 format: yyyy-MM-ddTHH:mm:ssZ
   * @member {String} batchModifiedDate
   */
  exports.prototype['batchModifiedDate'] = undefined;
  /**
   * Valid Values:   * SCHEDULER   * TOKEN_API   * CREDIT_CARD_FILE_UPLOAD   * AMEX_REGSITRY   * AMEX_REGISTRY_API   * AMEX_REGISTRY_API_SYNC   * AMEX_MAINTENANCE 
   * @member {String} batchSource
   */
  exports.prototype['batchSource'] = undefined;
  /**
   * Valid Values:   * SECURE_STORAGE   * TMS   * CYBERSOURCE 
   * @member {String} tokenSource
   */
  exports.prototype['tokenSource'] = undefined;
  /**
   * Reference used by merchant to identify batch.
   * @member {String} merchantReference
   */
  exports.prototype['merchantReference'] = undefined;
  /**
   * Valid Values:   * VISA   * MASTERCARD   * AMEX 
   * @member {Array.<String>} batchCaEndpoints
   */
  exports.prototype['batchCaEndpoints'] = undefined;
  /**
   * Valid Values:   * REJECTED   * RECEIVED   * VALIDATED   * DECLINED   * PROCESSING   * COMPLETE 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {module:model/InlineResponse2005EmbeddedTotals} totals
   */
  exports.prototype['totals'] = undefined;



  return exports;
}));


