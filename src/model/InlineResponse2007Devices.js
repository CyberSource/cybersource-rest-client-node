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
    define(['ApiClient', 'model/InlineResponse2007PaymentProcessorToTerminalMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse2007PaymentProcessorToTerminalMap'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InlineResponse2007Devices = factory(root.CyberSource.ApiClient, root.CyberSource.InlineResponse2007PaymentProcessorToTerminalMap);
  }
}(this, function(ApiClient, InlineResponse2007PaymentProcessorToTerminalMap) {
  'use strict';




  /**
   * The InlineResponse2007Devices model module.
   * @module model/InlineResponse2007Devices
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>InlineResponse2007Devices</code>.
   * @alias module:model/InlineResponse2007Devices
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>InlineResponse2007Devices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007Devices} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007Devices} The populated <code>InlineResponse2007Devices</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('readerId')) {
        obj['readerId'] = ApiClient.convertToType(data['readerId'], 'String');
      }
      if (data.hasOwnProperty('serialNumber')) {
        obj['serialNumber'] = ApiClient.convertToType(data['serialNumber'], 'String');
      }
      if (data.hasOwnProperty('model')) {
        obj['model'] = ApiClient.convertToType(data['model'], 'String');
      }
      if (data.hasOwnProperty('make')) {
        obj['make'] = ApiClient.convertToType(data['make'], 'String');
      }
      if (data.hasOwnProperty('hardwareRevision')) {
        obj['hardwareRevision'] = ApiClient.convertToType(data['hardwareRevision'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('statusChangeReason')) {
        obj['statusChangeReason'] = ApiClient.convertToType(data['statusChangeReason'], 'String');
      }
      if (data.hasOwnProperty('merchantId')) {
        obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'String');
      }
      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'String');
      }
      if (data.hasOwnProperty('terminalCreationDate')) {
        obj['terminalCreationDate'] = ApiClient.convertToType(data['terminalCreationDate'], 'Date');
      }
      if (data.hasOwnProperty('terminalUpdationDate')) {
        obj['terminalUpdationDate'] = ApiClient.convertToType(data['terminalUpdationDate'], 'Date');
      }
      if (data.hasOwnProperty('paymentProcessorToTerminalMap')) {
        obj['paymentProcessorToTerminalMap'] = InlineResponse2007PaymentProcessorToTerminalMap.constructFromObject(data['paymentProcessorToTerminalMap']);
      }
    }
    return obj;
  }

  /**
   * @member {String} readerId
   */
  exports.prototype['readerId'] = undefined;
  /**
   * @member {String} serialNumber
   */
  exports.prototype['serialNumber'] = undefined;
  /**
   * @member {String} model
   */
  exports.prototype['model'] = undefined;
  /**
   * @member {String} make
   */
  exports.prototype['make'] = undefined;
  /**
   * @member {String} hardwareRevision
   */
  exports.prototype['hardwareRevision'] = undefined;
  /**
   * Status of the device. Possible Values:   - 'ACTIVE'   - 'INACTIVE' 
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Reason for change in status.
   * @member {String} statusChangeReason
   */
  exports.prototype['statusChangeReason'] = undefined;
  /**
   * ID of the merchant to whom this device is assigned.
   * @member {String} merchantId
   */
  exports.prototype['merchantId'] = undefined;
  /**
   * ID of the account to whom the device assigned.
   * @member {String} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * Timestamp in which the device was created.
   * @member {Date} terminalCreationDate
   */
  exports.prototype['terminalCreationDate'] = undefined;
  /**
   * Timestamp in which the device was updated/modified.
   * @member {Date} terminalUpdationDate
   */
  exports.prototype['terminalUpdationDate'] = undefined;
  /**
   * @member {module:model/InlineResponse2007PaymentProcessorToTerminalMap} paymentProcessorToTerminalMap
   */
  exports.prototype['paymentProcessorToTerminalMap'] = undefined;



  return exports;
}));


