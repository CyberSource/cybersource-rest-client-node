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
    root.CyberSource.PushFunds201ResponseProcessorInformationRouting = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PushFunds201ResponseProcessorInformationRouting model module.
   * @module model/PushFunds201ResponseProcessorInformationRouting
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>PushFunds201ResponseProcessorInformationRouting</code>.
   * @alias module:model/PushFunds201ResponseProcessorInformationRouting
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>PushFunds201ResponseProcessorInformationRouting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PushFunds201ResponseProcessorInformationRouting} obj Optional instance to populate.
   * @return {module:model/PushFunds201ResponseProcessorInformationRouting} The populated <code>PushFunds201ResponseProcessorInformationRouting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('network')) {
        obj['network'] = ApiClient.convertToType(data['network'], 'String');
      }
    }
    return obj;
  }

  /**
   * Contains the ID of the debit network to which the transaction was routed.  Code: Network  0000 : Priority Routing or Generic File Update  0002: Visa programs, Private Label and non-Visa Authorization Gateway Services  0003: Interlink  0004: Plus  0008: Star  0009: Pulse  0010: Star  0011: Star  0012: Star (primary network ID)  0013: AFFN  0015: Star  0016: Maestro  0017: Pulse (primary network ID)  0018: NYCE (primary network ID)  0019: Pulse  0020: Accel  0023: NETS  0024: CU24  0025: Alaska Option  0027: NYCE  0028: Shazam  0029: EBT POS 
   * @member {String} network
   */
  exports.prototype['network'] = undefined;



  return exports;
}));

