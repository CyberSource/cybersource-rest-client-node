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
    define(['ApiClient', 'model/Ptsv2paymentsTokenInformationPaymentInstrument', 'model/Ptsv2paymentsTokenInformationShippingAddress', 'model/Ptsv2paymentsTokenInformationTokenProvisioningInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsTokenInformationPaymentInstrument'), require('./Ptsv2paymentsTokenInformationShippingAddress'), require('./Ptsv2paymentsTokenInformationTokenProvisioningInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsTokenInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsTokenInformationPaymentInstrument, root.CyberSource.Ptsv2paymentsTokenInformationShippingAddress, root.CyberSource.Ptsv2paymentsTokenInformationTokenProvisioningInformation);
  }
}(this, function(ApiClient, Ptsv2paymentsTokenInformationPaymentInstrument, Ptsv2paymentsTokenInformationShippingAddress, Ptsv2paymentsTokenInformationTokenProvisioningInformation) {
  'use strict';




  /**
   * The Ptsv2paymentsTokenInformation model module.
   * @module model/Ptsv2paymentsTokenInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsTokenInformation</code>.
   * @alias module:model/Ptsv2paymentsTokenInformation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>Ptsv2paymentsTokenInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsTokenInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsTokenInformation} The populated <code>Ptsv2paymentsTokenInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('jti')) {
        obj['jti'] = ApiClient.convertToType(data['jti'], 'String');
      }
      if (data.hasOwnProperty('transientTokenJwt')) {
        obj['transientTokenJwt'] = ApiClient.convertToType(data['transientTokenJwt'], 'String');
      }
      if (data.hasOwnProperty('paymentInstrument')) {
        obj['paymentInstrument'] = Ptsv2paymentsTokenInformationPaymentInstrument.constructFromObject(data['paymentInstrument']);
      }
      if (data.hasOwnProperty('shippingAddress')) {
        obj['shippingAddress'] = Ptsv2paymentsTokenInformationShippingAddress.constructFromObject(data['shippingAddress']);
      }
      if (data.hasOwnProperty('networkTokenOption')) {
        obj['networkTokenOption'] = ApiClient.convertToType(data['networkTokenOption'], 'String');
      }
      if (data.hasOwnProperty('tokenProvisioningInformation')) {
        obj['tokenProvisioningInformation'] = Ptsv2paymentsTokenInformationTokenProvisioningInformation.constructFromObject(data['tokenProvisioningInformation']);
      }
    }
    return obj;
  }

  /**
   * TMS Transient Token, 64 hexadecimal id value representing captured payment credentials (including Sensitive Authentication Data, e.g. CVV). 
   * @member {String} jti
   */
  exports.prototype['jti'] = undefined;
  /**
   * Flex API Transient Token encoded as JWT (JSON Web Token), e.g. Flex microform or Unified Payment checkout result. 
   * @member {String} transientTokenJwt
   */
  exports.prototype['transientTokenJwt'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTokenInformationPaymentInstrument} paymentInstrument
   */
  exports.prototype['paymentInstrument'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTokenInformationShippingAddress} shippingAddress
   */
  exports.prototype['shippingAddress'] = undefined;
  /**
   * Indicates whether a payment network token associated with a TMS token should be used for authorization. This field can contain one of following values:  - `ignore`: Use a tokenized card number for an authorization, even if the TMS token has an associated payment network token. - `prefer`: (Default) Use an associated payment network token for an authorization if the TMS token has one; otherwise, use the tokenized card number. 
   * @member {String} networkTokenOption
   */
  exports.prototype['networkTokenOption'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsTokenInformationTokenProvisioningInformation} tokenProvisioningInformation
   */
  exports.prototype['tokenProvisioningInformation'] = undefined;



  return exports;
}));


