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
    root.CyberSource.Vasv2taxidClientReferenceInformationPartner = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Vasv2taxidClientReferenceInformationPartner model module.
   * @module model/Vasv2taxidClientReferenceInformationPartner
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Vasv2taxidClientReferenceInformationPartner</code>.
   * @alias module:model/Vasv2taxidClientReferenceInformationPartner
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Vasv2taxidClientReferenceInformationPartner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Vasv2taxidClientReferenceInformationPartner} obj Optional instance to populate.
   * @return {module:model/Vasv2taxidClientReferenceInformationPartner} The populated <code>Vasv2taxidClientReferenceInformationPartner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('solutionId')) {
        obj['solutionId'] = ApiClient.convertToType(data['solutionId'], 'String');
      }
      if (data.hasOwnProperty('developerId')) {
        obj['developerId'] = ApiClient.convertToType(data['developerId'], 'String');
      }
    }
    return obj;
  }

  /**
   * Identifier for the partner that is integrated to CyberSource.  Send this value in all requests that are sent through the partner solution. CyberSource assigns the ID to the partner.  **Note** When you see a solutionId of 999 in reports, the solutionId that was submitted is incorrect. 
   * @member {String} solutionId
   */
  exports.prototype['solutionId'] = undefined;
  /**
   * Identifier for the developer that helped integrate a partner solution to CyberSource.  Send this value in all requests that are sent through the partner solutions built by that developer. CyberSource assigns the ID to the developer.  **Note** When you see a developer ID of 999 in reports, the developer ID that was submitted is incorrect. 
   * @member {String} developerId
   */
  exports.prototype['developerId'] = undefined;



  return exports;
}));


