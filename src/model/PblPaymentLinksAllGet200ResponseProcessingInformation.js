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
    root.CyberSource.PblPaymentLinksAllGet200ResponseProcessingInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PblPaymentLinksAllGet200ResponseProcessingInformation model module.
   * @module model/PblPaymentLinksAllGet200ResponseProcessingInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PblPaymentLinksAllGet200ResponseProcessingInformation</code>.
   * Contains processing information, such as the type and collection details.
   * @alias module:model/PblPaymentLinksAllGet200ResponseProcessingInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PblPaymentLinksAllGet200ResponseProcessingInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PblPaymentLinksAllGet200ResponseProcessingInformation} obj Optional instance to populate.
   * @return {module:model/PblPaymentLinksAllGet200ResponseProcessingInformation} The populated <code>PblPaymentLinksAllGet200ResponseProcessingInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('linkType')) {
        obj['linkType'] = ApiClient.convertToType(data['linkType'], 'String');
      }
    }
    return obj;
  }

  /**
   * linkType defines what type of link you want to create.  Possible Values:   - `PURCHASE`   - `DONATION` 
   * @member {String} linkType
   */
  exports.prototype['linkType'] = undefined;



  return exports;
}));


