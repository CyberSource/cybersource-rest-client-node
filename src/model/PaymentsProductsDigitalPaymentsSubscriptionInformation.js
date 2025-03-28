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
    define(['ApiClient', 'model/PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentsProductsDigitalPaymentsSubscriptionInformation = factory(root.CyberSource.ApiClient, root.CyberSource.PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures);
  }
}(this, function(ApiClient, PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures) {
  'use strict';




  /**
   * The PaymentsProductsDigitalPaymentsSubscriptionInformation model module.
   * @module model/PaymentsProductsDigitalPaymentsSubscriptionInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PaymentsProductsDigitalPaymentsSubscriptionInformation</code>.
   * @alias module:model/PaymentsProductsDigitalPaymentsSubscriptionInformation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PaymentsProductsDigitalPaymentsSubscriptionInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentsProductsDigitalPaymentsSubscriptionInformation} obj Optional instance to populate.
   * @return {module:model/PaymentsProductsDigitalPaymentsSubscriptionInformation} The populated <code>PaymentsProductsDigitalPaymentsSubscriptionInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('selfServiceability')) {
        obj['selfServiceability'] = ApiClient.convertToType(data['selfServiceability'], 'String');
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], {'String': PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures});
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * Indicates if the organization can enable this product using self service.  Possible values: - SELF_SERVICEABLE - NOT_SELF_SERVICEABLE - SELF_SERVICE_ONLY
   * @member {String} selfServiceability
   * @default 'NOT_SELF_SERVICEABLE'
   */
  exports.prototype['selfServiceability'] = 'NOT_SELF_SERVICEABLE';
  /**
   * Allowed values are; <table>    <tr>       <td>visaCheckout</td>    </tr>    <tr>       <td>applePay</td>    </tr>    <tr>       <td>samsungPay</td>    </tr>    <tr>        <td>googlePay</td>     </tr> </table> 
   * @member {Object.<String, module:model/PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures>} features
   */
  exports.prototype['features'] = undefined;



  return exports;
}));


