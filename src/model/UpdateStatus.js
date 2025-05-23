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
    root.CyberSource.UpdateStatus = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UpdateStatus model module.
   * @module model/UpdateStatus
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>UpdateStatus</code>.
   * @alias module:model/UpdateStatus
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UpdateStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateStatus} obj Optional instance to populate.
   * @return {module:model/UpdateStatus} The populated <code>UpdateStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * The status the user intends to update the subscription to. The supported values are ACTIVE & INACTIVE. If the subscription status is INACTIVE, webhook notifications will not be sent. Webhooks will resume being sent once the subscription is ACTIVE again.  Possible values: - ACTIVE - INACTIVE
   * @member {String} status
   * @default 'INACTIVE'
   */
  exports.prototype['status'] = 'INACTIVE';



  return exports;
}));


