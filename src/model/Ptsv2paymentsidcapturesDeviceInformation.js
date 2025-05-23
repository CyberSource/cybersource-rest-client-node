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
    root.CyberSource.Ptsv2paymentsidcapturesDeviceInformation = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesDeviceInformation model module.
   * @module model/Ptsv2paymentsidcapturesDeviceInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesDeviceInformation</code>.
   * @alias module:model/Ptsv2paymentsidcapturesDeviceInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesDeviceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesDeviceInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesDeviceInformation} The populated <code>Ptsv2paymentsidcapturesDeviceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('hostName')) {
        obj['hostName'] = ApiClient.convertToType(data['hostName'], 'String');
      }
      if (data.hasOwnProperty('ipAddress')) {
        obj['ipAddress'] = ApiClient.convertToType(data['ipAddress'], 'String');
      }
      if (data.hasOwnProperty('userAgent')) {
        obj['userAgent'] = ApiClient.convertToType(data['userAgent'], 'String');
      }
    }
    return obj;
  }

  /**
   * DNS resolved hostname from `ipAddress`.
   * @member {String} hostName
   */
  exports.prototype['hostName'] = undefined;
  /**
   * IP address of the customer.  #### Used by **Authorization, Capture, and Credit** Optional field. 
   * @member {String} ipAddress
   */
  exports.prototype['ipAddress'] = undefined;
  /**
   * Customer's browser as identified from the HTTP header data. For example, `Mozilla` is the value that identifies the Netscape browser. 
   * @member {String} userAgent
   */
  exports.prototype['userAgent'] = undefined;



  return exports;
}));


