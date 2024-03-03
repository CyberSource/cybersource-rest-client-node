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
    define(['ApiClient', 'model/VTConfigCardNotPresentReceiptInformationEmailReceipt', 'model/VTConfigCardNotPresentReceiptInformationHeader', 'model/VTConfigCardNotPresentReceiptInformationOrderInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VTConfigCardNotPresentReceiptInformationEmailReceipt'), require('./VTConfigCardNotPresentReceiptInformationHeader'), require('./VTConfigCardNotPresentReceiptInformationOrderInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VTConfigCardNotPresentReceiptInformation = factory(root.CyberSource.ApiClient, root.CyberSource.VTConfigCardNotPresentReceiptInformationEmailReceipt, root.CyberSource.VTConfigCardNotPresentReceiptInformationHeader, root.CyberSource.VTConfigCardNotPresentReceiptInformationOrderInformation);
  }
}(this, function(ApiClient, VTConfigCardNotPresentReceiptInformationEmailReceipt, VTConfigCardNotPresentReceiptInformationHeader, VTConfigCardNotPresentReceiptInformationOrderInformation) {
  'use strict';




  /**
   * The VTConfigCardNotPresentReceiptInformation model module.
   * @module model/VTConfigCardNotPresentReceiptInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VTConfigCardNotPresentReceiptInformation</code>.
   * @alias module:model/VTConfigCardNotPresentReceiptInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>VTConfigCardNotPresentReceiptInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VTConfigCardNotPresentReceiptInformation} obj Optional instance to populate.
   * @return {module:model/VTConfigCardNotPresentReceiptInformation} The populated <code>VTConfigCardNotPresentReceiptInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('header')) {
        obj['header'] = VTConfigCardNotPresentReceiptInformationHeader.constructFromObject(data['header']);
      }
      if (data.hasOwnProperty('orderInformation')) {
        obj['orderInformation'] = VTConfigCardNotPresentReceiptInformationOrderInformation.constructFromObject(data['orderInformation']);
      }
      if (data.hasOwnProperty('emailReceipt')) {
        obj['emailReceipt'] = VTConfigCardNotPresentReceiptInformationEmailReceipt.constructFromObject(data['emailReceipt']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VTConfigCardNotPresentReceiptInformationHeader} header
   */
  exports.prototype['header'] = undefined;
  /**
   * @member {module:model/VTConfigCardNotPresentReceiptInformationOrderInformation} orderInformation
   */
  exports.prototype['orderInformation'] = undefined;
  /**
   * @member {module:model/VTConfigCardNotPresentReceiptInformationEmailReceipt} emailReceipt
   */
  exports.prototype['emailReceipt'] = undefined;



  return exports;
}));

