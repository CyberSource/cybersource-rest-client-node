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
    root.CyberSource.TmsEmbeddedInstrumentIdentifierBankAccount = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TmsEmbeddedInstrumentIdentifierBankAccount model module.
   * @module model/TmsEmbeddedInstrumentIdentifierBankAccount
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsEmbeddedInstrumentIdentifierBankAccount</code>.
   * @alias module:model/TmsEmbeddedInstrumentIdentifierBankAccount
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TmsEmbeddedInstrumentIdentifierBankAccount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsEmbeddedInstrumentIdentifierBankAccount} obj Optional instance to populate.
   * @return {module:model/TmsEmbeddedInstrumentIdentifierBankAccount} The populated <code>TmsEmbeddedInstrumentIdentifierBankAccount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('routingNumber')) {
        obj['routingNumber'] = ApiClient.convertToType(data['routingNumber'], 'String');
      }
    }
    return obj;
  }

  /**
   * Account number.  When processing encoded account numbers, use this field for the encoded account number. 
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Bank routing number. This is also called the transit number.  # For details, see `ecp_rdfi` field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/) 
   * @member {String} routingNumber
   */
  exports.prototype['routingNumber'] = undefined;



  return exports;
}));


