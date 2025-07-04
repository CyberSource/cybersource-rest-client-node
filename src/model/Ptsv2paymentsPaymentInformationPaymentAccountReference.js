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
    root.CyberSource.Ptsv2paymentsPaymentInformationPaymentAccountReference = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Ptsv2paymentsPaymentInformationPaymentAccountReference model module.
   * @module model/Ptsv2paymentsPaymentInformationPaymentAccountReference
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsPaymentInformationPaymentAccountReference</code>.
   * @alias module:model/Ptsv2paymentsPaymentInformationPaymentAccountReference
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Ptsv2paymentsPaymentInformationPaymentAccountReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsPaymentInformationPaymentAccountReference} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsPaymentInformationPaymentAccountReference} The populated <code>Ptsv2paymentsPaymentInformationPaymentAccountReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * A Payment Account Reference number (PAR) is a unique reference value associated with a specific card holder PAN. It identifies the card account, not just a card. PAR is a non-payment identifier that can be associated to PANs and tokens, as defined by EMVCo. PAR allows all participants in the payments chain to have a single, non-sensitive value assigned to a consumer. This value can be used in place of sensitive card holder identification fields, and transmitted across the payments ecosystem to facilitate card holder identification. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


