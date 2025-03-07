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
    define(['ApiClient', 'model/TmsNetworkTokenServices', 'model/TmsNullify', 'model/TmsSensitivePrivileges', 'model/TmsTokenFormats', 'model/TokenPermissions'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TmsNetworkTokenServices'), require('./TmsNullify'), require('./TmsSensitivePrivileges'), require('./TmsTokenFormats'), require('./TokenPermissions'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault = factory(root.CyberSource.ApiClient, root.CyberSource.TmsNetworkTokenServices, root.CyberSource.TmsNullify, root.CyberSource.TmsSensitivePrivileges, root.CyberSource.TmsTokenFormats, root.CyberSource.TokenPermissions);
  }
}(this, function(ApiClient, TmsNetworkTokenServices, TmsNullify, TmsSensitivePrivileges, TmsTokenFormats, TokenPermissions) {
  'use strict';




  /**
   * The CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault model module.
   * @module model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault</code>.
   * @alias module:model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault} obj Optional instance to populate.
   * @return {module:model/CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault} The populated <code>CommerceSolutionsProductsTokenManagementConfigurationInformationConfigurationsVault</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('defaultTokenType')) {
        obj['defaultTokenType'] = ApiClient.convertToType(data['defaultTokenType'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('tokenFormats')) {
        obj['tokenFormats'] = TmsTokenFormats.constructFromObject(data['tokenFormats']);
      }
      if (data.hasOwnProperty('tokenPermissions')) {
        obj['tokenPermissions'] = TokenPermissions.constructFromObject(data['tokenPermissions']);
      }
      if (data.hasOwnProperty('sensitivePrivileges')) {
        obj['sensitivePrivileges'] = TmsSensitivePrivileges.constructFromObject(data['sensitivePrivileges']);
      }
      if (data.hasOwnProperty('nullify')) {
        obj['nullify'] = TmsNullify.constructFromObject(data['nullify']);
      }
      if (data.hasOwnProperty('networkTokenServices')) {
        obj['networkTokenServices'] = TmsNetworkTokenServices.constructFromObject(data['networkTokenServices']);
      }
    }
    return obj;
  }

  /**
   * Default token type to be used. Possible Values:   - 'CUSTOMER'  - 'PAYMENT_INSTRUMENT'  - 'INSTRUMENT_IDENTIFIER' 
   * @member {String} defaultTokenType
   */
  exports.prototype['defaultTokenType'] = undefined;
  /**
   * Location where the vault will be stored.  Use 'IDC' (the Indian Data Centre) when merchant is storing token data in India  or 'GDC' (the Global Data Centre) for all other cases.  Possible Values:    - 'IDC'   - 'GDC' 
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * @member {module:model/TmsTokenFormats} tokenFormats
   */
  exports.prototype['tokenFormats'] = undefined;
  /**
   * @member {module:model/TokenPermissions} tokenPermissions
   */
  exports.prototype['tokenPermissions'] = undefined;
  /**
   * @member {module:model/TmsSensitivePrivileges} sensitivePrivileges
   */
  exports.prototype['sensitivePrivileges'] = undefined;
  /**
   * @member {module:model/TmsNullify} nullify
   */
  exports.prototype['nullify'] = undefined;
  /**
   * @member {module:model/TmsNetworkTokenServices} networkTokenServices
   */
  exports.prototype['networkTokenServices'] = undefined;



  return exports;
}));


