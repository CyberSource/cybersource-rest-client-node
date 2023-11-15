/**
 * CyberSource Merged Spec
 * All CyberSource API specs merged together. These are available at https://developer.cybersource.com/api/reference/api-reference.html
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Boardingv1registrationsOrganizationInformationBusinessInformation', 'model/Boardingv1registrationsOrganizationInformationKYC', 'model/Boardingv1registrationsOrganizationInformationOwners'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Boardingv1registrationsOrganizationInformationBusinessInformation'), require('./Boardingv1registrationsOrganizationInformationKYC'), require('./Boardingv1registrationsOrganizationInformationOwners'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.Boardingv1registrationsOrganizationInformation = factory(root.CyberSource.ApiClient, root.CyberSource.Boardingv1registrationsOrganizationInformationBusinessInformation, root.CyberSource.Boardingv1registrationsOrganizationInformationKYC, root.CyberSource.Boardingv1registrationsOrganizationInformationOwners);
  }
}(this, function(ApiClient, Boardingv1registrationsOrganizationInformationBusinessInformation, Boardingv1registrationsOrganizationInformationKYC, Boardingv1registrationsOrganizationInformationOwners) {
  'use strict';




  /**
   * The Boardingv1registrationsOrganizationInformation model module.
   * @module model/Boardingv1registrationsOrganizationInformation
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Boardingv1registrationsOrganizationInformation</code>.
   * @alias module:model/Boardingv1registrationsOrganizationInformation
   * @class
   * @param businessInformation {module:model/Boardingv1registrationsOrganizationInformationBusinessInformation} 
   */
  var exports = function(businessInformation) {
    var _this = this;







    _this['businessInformation'] = businessInformation;


  };

  /**
   * Constructs a <code>Boardingv1registrationsOrganizationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Boardingv1registrationsOrganizationInformation} obj Optional instance to populate.
   * @return {module:model/Boardingv1registrationsOrganizationInformation} The populated <code>Boardingv1registrationsOrganizationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('organizationId')) {
        obj['organizationId'] = ApiClient.convertToType(data['organizationId'], 'String');
      }
      if (data.hasOwnProperty('parentOrganizationId')) {
        obj['parentOrganizationId'] = ApiClient.convertToType(data['parentOrganizationId'], 'String');
      }
      if (data.hasOwnProperty('childOrganizations')) {
        obj['childOrganizations'] = ApiClient.convertToType(data['childOrganizations'], ['String']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('configurable')) {
        obj['configurable'] = ApiClient.convertToType(data['configurable'], 'Boolean');
      }
      if (data.hasOwnProperty('businessInformation')) {
        obj['businessInformation'] = Boardingv1registrationsOrganizationInformationBusinessInformation.constructFromObject(data['businessInformation']);
      }
      if (data.hasOwnProperty('KYC')) {
        obj['KYC'] = Boardingv1registrationsOrganizationInformationKYC.constructFromObject(data['KYC']);
      }
      if (data.hasOwnProperty('owners')) {
        obj['owners'] = ApiClient.convertToType(data['owners'], [Boardingv1registrationsOrganizationInformationOwners]);
      }
    }
    return obj;
  }

  /**
   * @member {String} organizationId
   */
  exports.prototype['organizationId'] = undefined;
  /**
   * This field is required for Organization Types: MERCHANT, TRANSACTING 
   * @member {String} parentOrganizationId
   */
  exports.prototype['parentOrganizationId'] = undefined;
  /**
   * @member {Array.<String>} childOrganizations
   */
  exports.prototype['childOrganizations'] = undefined;
  /**
   * Determines the type of organization in the hirarchy that this registration will use to onboard this Organization Possible Values:   - 'TRANSACTING'   - 'STRUCTURAL'   - 'MERCHANT' 
   * @member {module:model/Boardingv1registrationsOrganizationInformation.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * Determines the status that the organization will be after being onboarded Possible Values:             - 'LIVE'             - 'TEST'             - 'DRAFT' 
   * @member {module:model/Boardingv1registrationsOrganizationInformation.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * This denotes the one organization, with exception to the TRANSACTING types, that is allowed to be used for configuration purposes against products.  Eventually this field will be deprecated and all organizations will be allowed for product configuration.
   * @member {Boolean} configurable
   * @default false
   */
  exports.prototype['configurable'] = false;
  /**
   * @member {module:model/Boardingv1registrationsOrganizationInformationBusinessInformation} businessInformation
   */
  exports.prototype['businessInformation'] = undefined;
  /**
   * @member {module:model/Boardingv1registrationsOrganizationInformationKYC} KYC
   */
  exports.prototype['KYC'] = undefined;
  /**
   * @member {Array.<module:model/Boardingv1registrationsOrganizationInformationOwners>} owners
   */
  exports.prototype['owners'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "TRANSACTING"
     * @const
     */
    "TRANSACTING": "TRANSACTING",
    /**
     * value: "STRUCTURAL"
     * @const
     */
    "STRUCTURAL": "STRUCTURAL",
    /**
     * value: "MERCHANT"
     * @const
     */
    "MERCHANT": "MERCHANT"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "LIVE"
     * @const
     */
    "LIVE": "LIVE",
    /**
     * value: "TEST"
     * @const
     */
    "TEST": "TEST",
    /**
     * value: "DRAFT"
     * @const
     */
    "DRAFT": "DRAFT"  };


  return exports;
}));

