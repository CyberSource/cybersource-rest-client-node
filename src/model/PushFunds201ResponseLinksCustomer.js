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
    root.CyberSource.PushFunds201ResponseLinksCustomer = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushFunds201ResponseLinksCustomer model module.
   * @module model/PushFunds201ResponseLinksCustomer
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponseLinksCustomer</code>.
   * A GET link to the customer supplied in the OCT
   * @alias module:model/PushFunds201ResponseLinksCustomer
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PushFunds201ResponseLinksCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponseLinksCustomer} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponseLinksCustomer} The populated <code>PushFunds201ResponseLinksCustomer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('href')) {
        obj['href'] = ApiClient.convertToType(data['href'], 'String');
      }
      if (data.hasOwnProperty('method')) {
        obj['method'] = ApiClient.convertToType(data['method'], 'String');
      }
    }
    return obj;
  }

  /**
   * This is the endpoint of the resource that was created by the successful request.
   * @member {String} href
   */
  exports.prototype['href'] = undefined;
  /**
   * `method` refers to the HTTP method that you can send to the `self` endpoint to retrieve details of the resource.
   * @member {String} method
   */
  exports.prototype['method'] = undefined;



  return exports;
}));


