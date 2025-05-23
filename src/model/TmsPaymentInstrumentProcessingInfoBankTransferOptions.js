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
    root.CyberSource.TmsPaymentInstrumentProcessingInfoBankTransferOptions = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TmsPaymentInstrumentProcessingInfoBankTransferOptions model module.
   * @module model/TmsPaymentInstrumentProcessingInfoBankTransferOptions
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>TmsPaymentInstrumentProcessingInfoBankTransferOptions</code>.
   * @alias module:model/TmsPaymentInstrumentProcessingInfoBankTransferOptions
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TmsPaymentInstrumentProcessingInfoBankTransferOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TmsPaymentInstrumentProcessingInfoBankTransferOptions} obj Optional instance to populate.
   * @return {module:model/TmsPaymentInstrumentProcessingInfoBankTransferOptions} The populated <code>TmsPaymentInstrumentProcessingInfoBankTransferOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('SECCode')) {
        obj['SECCode'] = ApiClient.convertToType(data['SECCode'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the authorization method for the transaction.  #### TeleCheck Possible Values: - `ARC`: account receivable conversion - `CCD`: corporate cash disbursement - `POP`: point of purchase conversion - `PPD`: prearranged payment and deposit entry - `TEL`: telephone-initiated entry - `WEB`: internet-initiated entry  # For details, see `ecp_sec_code` field description in the [Electronic Check Services Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/EChecks_SCMP_API/html/) 
   * @member {String} SECCode
   */
  exports.prototype['SECCode'] = undefined;



  return exports;
}));


