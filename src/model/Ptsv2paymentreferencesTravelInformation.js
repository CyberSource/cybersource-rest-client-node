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
    define(['ApiClient', 'model/Ptsv2paymentreferencesTravelInformationAutoRental'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentreferencesTravelInformationAutoRental'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentreferencesTravelInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentreferencesTravelInformationAutoRental);
  }
}(this, function(ApiClient, Ptsv2paymentreferencesTravelInformationAutoRental) {
  'use strict';




  /**
   * The Ptsv2paymentreferencesTravelInformation model module.
   * @module model/Ptsv2paymentreferencesTravelInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentreferencesTravelInformation</code>.
   * @alias module:model/Ptsv2paymentreferencesTravelInformation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentreferencesTravelInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentreferencesTravelInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentreferencesTravelInformation} The populated <code>Ptsv2paymentreferencesTravelInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('autoRental')) {
        obj['autoRental'] = Ptsv2paymentreferencesTravelInformationAutoRental.constructFromObject(data['autoRental']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentreferencesTravelInformationAutoRental} autoRental
   */
  exports.prototype['autoRental'] = undefined;



  return exports;
}));

