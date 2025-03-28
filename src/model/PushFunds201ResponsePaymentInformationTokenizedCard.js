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
    root.CyberSource.PushFunds201ResponsePaymentInformationTokenizedCard = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushFunds201ResponsePaymentInformationTokenizedCard model module.
   * @module model/PushFunds201ResponsePaymentInformationTokenizedCard
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponsePaymentInformationTokenizedCard</code>.
   * @alias module:model/PushFunds201ResponsePaymentInformationTokenizedCard
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PushFunds201ResponsePaymentInformationTokenizedCard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponsePaymentInformationTokenizedCard} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponsePaymentInformationTokenizedCard} The populated <code>PushFunds201ResponsePaymentInformationTokenizedCard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assuranceMethod')) {
        obj['assuranceMethod'] = ApiClient.convertToType(data['assuranceMethod'], 'String');
      }
    }
    return obj;
  }

  /**
   * Confidence level of the tokenization. This value is assigned by the token service provider.  Valid Values:  Spaces (No value set)  00 = No issuer ID&V  10 = Card issuer account verification  11 = Card issuer interactive cardholder authentication - 1 factor  12 = Card issuer interactive cardholder authentication - 2 factor  13 = Card issuer risk oriented non-interactive cardholder authentication  14 = Card issuer asserted authentication 
   * @member {String} assuranceMethod
   */
  exports.prototype['assuranceMethod'] = undefined;



  return exports;
}));


