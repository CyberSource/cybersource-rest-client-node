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
    root.CyberSource.Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig model module.
   * @module model/Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig</code>.
   * Additional, free form configuration data.
   * @alias module:model/Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig} obj Optional instance to populate.
   * @return {module:model/Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig} The populated <code>Notificationsubscriptionsv1webhooksSecurityPolicy1ConfigAdditionalConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aud')) {
        obj['aud'] = ApiClient.convertToType(data['aud'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('keyId')) {
        obj['keyId'] = ApiClient.convertToType(data['keyId'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} aud
   */
  exports.prototype['aud'] = undefined;
  /**
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {String} keyId
   */
  exports.prototype['keyId'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;



  return exports;
}));

