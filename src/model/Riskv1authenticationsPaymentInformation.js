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
    define(['ApiClient', 'model/Riskv1authenticationsPaymentInformationCustomer', 'model/Riskv1authenticationsPaymentInformationTokenizedCard', 'model/Riskv1authenticationsetupsPaymentInformationCard', 'model/Riskv1authenticationsetupsPaymentInformationFluidData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Riskv1authenticationsPaymentInformationCustomer'), require('./Riskv1authenticationsPaymentInformationTokenizedCard'), require('./Riskv1authenticationsetupsPaymentInformationCard'), require('./Riskv1authenticationsetupsPaymentInformationFluidData'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Riskv1authenticationsPaymentInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Riskv1authenticationsPaymentInformationCustomer, root.CyberSource.Riskv1authenticationsPaymentInformationTokenizedCard, root.CyberSource.Riskv1authenticationsetupsPaymentInformationCard, root.CyberSource.Riskv1authenticationsetupsPaymentInformationFluidData);
  }
}(this, function(ApiClient, Riskv1authenticationsPaymentInformationCustomer, Riskv1authenticationsPaymentInformationTokenizedCard, Riskv1authenticationsetupsPaymentInformationCard, Riskv1authenticationsetupsPaymentInformationFluidData) {
  'use strict';




  /**
   * The Riskv1authenticationsPaymentInformation model module.
   * @module model/Riskv1authenticationsPaymentInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Riskv1authenticationsPaymentInformation</code>.
   * @alias module:model/Riskv1authenticationsPaymentInformation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Riskv1authenticationsPaymentInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Riskv1authenticationsPaymentInformation} obj Optional instance to populate.
   * @return {module:model/Riskv1authenticationsPaymentInformation} The populated <code>Riskv1authenticationsPaymentInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card')) {
        obj['card'] = Riskv1authenticationsetupsPaymentInformationCard.constructFromObject(data['card']);
      }
      if (data.hasOwnProperty('tokenizedCard')) {
        obj['tokenizedCard'] = Riskv1authenticationsPaymentInformationTokenizedCard.constructFromObject(data['tokenizedCard']);
      }
      if (data.hasOwnProperty('fluidData')) {
        obj['fluidData'] = Riskv1authenticationsetupsPaymentInformationFluidData.constructFromObject(data['fluidData']);
      }
      if (data.hasOwnProperty('customer')) {
        obj['customer'] = Riskv1authenticationsPaymentInformationCustomer.constructFromObject(data['customer']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Riskv1authenticationsetupsPaymentInformationCard} card
   */
  exports.prototype['card'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsPaymentInformationTokenizedCard} tokenizedCard
   */
  exports.prototype['tokenizedCard'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsetupsPaymentInformationFluidData} fluidData
   */
  exports.prototype['fluidData'] = undefined;
  /**
   * @member {module:model/Riskv1authenticationsPaymentInformationCustomer} customer
   */
  exports.prototype['customer'] = undefined;



  return exports;
}));


