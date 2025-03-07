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
    define(['ApiClient', 'model/PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount);
  }
}(this, function(ApiClient, PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount) {
  'use strict';




  /**
   * The PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds model module.
   * @module model/PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds</code>.
   * Formatted as *{payoutsAcquirerName}. The property name field should be the same as the processor name for which the pull funds or push funds feature is being configured. Here is the list of valid processor names [TBD]
   * @alias module:model/PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds
   * @class
   * @param acquirerCountryCode {Number} TBD
   * @param acquiringBIN {Number} TBD
   * @param originatorBusinessApplicationId {String} TBD
   * @param processorAccount {Array.<module:model/PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount>} TBD
   */
  var exports = function(acquirerCountryCode, acquiringBIN, originatorBusinessApplicationId, processorAccount) {
    var _this = this;

    _this['acquirerCountryCode'] = acquirerCountryCode;
    _this['acquiringBIN'] = acquiringBIN;




    _this['originatorBusinessApplicationId'] = originatorBusinessApplicationId;

    _this['processorAccount'] = processorAccount;
  };

  /**
   * Constructs a <code>PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds} The populated <code>PaymentsProductsPayoutsConfigurationInformationConfigurationsPushfunds</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('acquirerCountryCode')) {
        obj['acquirerCountryCode'] = ApiClient.convertToType(data['acquirerCountryCode'], 'Number');
      }
      if (data.hasOwnProperty('acquiringBIN')) {
        obj['acquiringBIN'] = ApiClient.convertToType(data['acquiringBIN'], 'Number');
      }
      if (data.hasOwnProperty('allowCryptoCurrencyPurchase')) {
        obj['allowCryptoCurrencyPurchase'] = ApiClient.convertToType(data['allowCryptoCurrencyPurchase'], 'Boolean');
      }
      if (data.hasOwnProperty('financialInstitutionId')) {
        obj['financialInstitutionId'] = ApiClient.convertToType(data['financialInstitutionId'], 'String');
      }
      if (data.hasOwnProperty('networkOrder')) {
        obj['networkOrder'] = ApiClient.convertToType(data['networkOrder'], 'String');
      }
      if (data.hasOwnProperty('nationalReimbursementFee')) {
        obj['nationalReimbursementFee'] = ApiClient.convertToType(data['nationalReimbursementFee'], 'String');
      }
      if (data.hasOwnProperty('originatorBusinessApplicationId')) {
        obj['originatorBusinessApplicationId'] = ApiClient.convertToType(data['originatorBusinessApplicationId'], 'String');
      }
      if (data.hasOwnProperty('originatorPseudoAbaNumber')) {
        obj['originatorPseudoAbaNumber'] = ApiClient.convertToType(data['originatorPseudoAbaNumber'], 'String');
      }
      if (data.hasOwnProperty('processorAccount')) {
        obj['processorAccount'] = ApiClient.convertToType(data['processorAccount'], [PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount]);
      }
    }
    return obj;
  }

  /**
   * TBD
   * @member {Number} acquirerCountryCode
   */
  exports.prototype['acquirerCountryCode'] = undefined;
  /**
   * TBD
   * @member {Number} acquiringBIN
   */
  exports.prototype['acquiringBIN'] = undefined;
  /**
   * This configuration allows a transaction to be flagged for cryptocurrency funds transfer.
   * @member {Boolean} allowCryptoCurrencyPurchase
   */
  exports.prototype['allowCryptoCurrencyPurchase'] = undefined;
  /**
   * TBD
   * @member {String} financialInstitutionId
   */
  exports.prototype['financialInstitutionId'] = undefined;
  /**
   * TBD
   * @member {String} networkOrder
   */
  exports.prototype['networkOrder'] = undefined;
  /**
   * TBD
   * @member {String} nationalReimbursementFee
   */
  exports.prototype['nationalReimbursementFee'] = undefined;
  /**
   * TBD
   * @member {String} originatorBusinessApplicationId
   */
  exports.prototype['originatorBusinessApplicationId'] = undefined;
  /**
   * TBD
   * @member {String} originatorPseudoAbaNumber
   */
  exports.prototype['originatorPseudoAbaNumber'] = undefined;
  /**
   * TBD
   * @member {Array.<module:model/PaymentsProductsPayoutsConfigurationInformationConfigurationsProcessorAccount>} processorAccount
   */
  exports.prototype['processorAccount'] = undefined;



  return exports;
}));


