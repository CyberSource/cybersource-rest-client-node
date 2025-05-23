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
    define(['ApiClient', 'model/Ptsv2paymentsidcapturesPointOfSaleInformationEmv'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsidcapturesPointOfSaleInformationEmv'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv2paymentsidcapturesPointOfSaleInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsidcapturesPointOfSaleInformationEmv);
  }
}(this, function(ApiClient, Ptsv2paymentsidcapturesPointOfSaleInformationEmv) {
  'use strict';




  /**
   * The Ptsv2paymentsidcapturesPointOfSaleInformation model module.
   * @module model/Ptsv2paymentsidcapturesPointOfSaleInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv2paymentsidcapturesPointOfSaleInformation</code>.
   * @alias module:model/Ptsv2paymentsidcapturesPointOfSaleInformation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Ptsv2paymentsidcapturesPointOfSaleInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv2paymentsidcapturesPointOfSaleInformation} obj Optional instance to populate.
   * @return {module:model/Ptsv2paymentsidcapturesPointOfSaleInformation} The populated <code>Ptsv2paymentsidcapturesPointOfSaleInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('emv')) {
        obj['emv'] = Ptsv2paymentsidcapturesPointOfSaleInformationEmv.constructFromObject(data['emv']);
      }
      if (data.hasOwnProperty('amexCapnData')) {
        obj['amexCapnData'] = ApiClient.convertToType(data['amexCapnData'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ptsv2paymentsidcapturesPointOfSaleInformationEmv} emv
   */
  exports.prototype['emv'] = undefined;
  /**
   * Point-of-sale details for the transaction. This value is returned only for **American Express Direct**. CyberSource generates this value, which consists of a series of codes that identify terminal capability, security data, and specific conditions present at the time the transaction occurred. To comply with the CAPN requirements, this value must be included in all subsequent follow-on requests, such as captures and follow-on credits.  When you perform authorizations, captures, and credits through CyberSource, CyberSource passes this value from the authorization service to the subsequent services for you. However, when you perform authorizations through CyberSource and perform subsequent services through other financial institutions, you must ensure that your requests for captures and credits include this value. 
   * @member {String} amexCapnData
   */
  exports.prototype['amexCapnData'] = undefined;



  return exports;
}));


