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
    root.CyberSource.GetAllSubscriptionsResponsePaymentInformationCustomer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The GetAllSubscriptionsResponsePaymentInformationCustomer model module.
   * @module model/GetAllSubscriptionsResponsePaymentInformationCustomer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>GetAllSubscriptionsResponsePaymentInformationCustomer</code>.
   * @alias module:model/GetAllSubscriptionsResponsePaymentInformationCustomer
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>GetAllSubscriptionsResponsePaymentInformationCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetAllSubscriptionsResponsePaymentInformationCustomer} obj Optional instance to populate.
   * @return {module:model/GetAllSubscriptionsResponsePaymentInformationCustomer} The populated <code>GetAllSubscriptionsResponsePaymentInformationCustomer</code> instance.
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
   * Unique identifier for the Customer token used in the transaction. When you include this value in your request, many of the fields that are normally required for an authorization or credit become optional. 
   * @member {String} id
   */
  exports.prototype['id'] = undefined;



  return exports;
}));


