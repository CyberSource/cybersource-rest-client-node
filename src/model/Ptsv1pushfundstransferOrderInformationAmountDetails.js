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
    define(['ApiClient', 'model/Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Ptsv1pushfundstransferOrderInformationAmountDetails = factory(root.CyberSource.ApiClient, root.CyberSource.Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge);
  }
}(this, function(ApiClient, Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge) {
  'use strict';




  /**
   * The Ptsv1pushfundstransferOrderInformationAmountDetails model module.
   * @module model/Ptsv1pushfundstransferOrderInformationAmountDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Ptsv1pushfundstransferOrderInformationAmountDetails</code>.
   * @alias module:model/Ptsv1pushfundstransferOrderInformationAmountDetails
   * @class
   * @param totalAmount {String} Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places. 
   * @param currency {String} Use a 3-character alpha currency code for currency of the funds transfer.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  Currency must be supported by the processor. 
   */
  var exports = function(totalAmount, currency) {
    var _this = this;

    _this['totalAmount'] = totalAmount;
    _this['currency'] = currency;



  };

  /**
   * Constructs a <code>Ptsv1pushfundstransferOrderInformationAmountDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ptsv1pushfundstransferOrderInformationAmountDetails} obj Optional instance to populate.
   * @return {module:model/Ptsv1pushfundstransferOrderInformationAmountDetails} The populated <code>Ptsv1pushfundstransferOrderInformationAmountDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('sourceCurrency')) {
        obj['sourceCurrency'] = ApiClient.convertToType(data['sourceCurrency'], 'String');
      }
      if (data.hasOwnProperty('destinationCurrency')) {
        obj['destinationCurrency'] = ApiClient.convertToType(data['destinationCurrency'], 'String');
      }
      if (data.hasOwnProperty('surcharge')) {
        obj['surcharge'] = Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge.constructFromObject(data['surcharge']);
      }
    }
    return obj;
  }

  /**
   * Grand total for the order. This value cannot be negative. You can include a decimal point (.), but no other special characters. CyberSource truncates the amount to the correct number of decimal places. 
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Use a 3-character alpha currency code for currency of the funds transfer.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf  Currency must be supported by the processor. 
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Use a 3-character alpha currency code for source currency of the funds transfer. Supported for card and bank account based cross border funds transfers.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf 
   * @member {String} sourceCurrency
   */
  exports.prototype['sourceCurrency'] = undefined;
  /**
   * Use a 3-character alpha currency code for destination currency of the funds transfer. Supported for card and bank account based cross border funds transfers.  ISO standard currencies: http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf 
   * @member {String} destinationCurrency
   */
  exports.prototype['destinationCurrency'] = undefined;
  /**
   * @member {module:model/Ptsv2paymentsOrderInformationAmountDetailsOctsurcharge} surcharge
   */
  exports.prototype['surcharge'] = undefined;



  return exports;
}));


