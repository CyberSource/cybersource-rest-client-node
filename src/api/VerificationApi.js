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
    define(['Authentication/MLEUtility', 'ApiClient', 'model/PtsV2PaymentsPost502Response', 'model/RiskV1AddressVerificationsPost201Response', 'model/RiskV1DecisionsPost400Response1', 'model/RiskV1ExportComplianceInquiriesPost201Response', 'model/ValidateExportComplianceRequest', 'model/VerifyCustomerAddressRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../authentication/util/MLEUtility'), require('../ApiClient'), require('../model/PtsV2PaymentsPost502Response'), require('../model/RiskV1AddressVerificationsPost201Response'), require('../model/RiskV1DecisionsPost400Response1'), require('../model/RiskV1ExportComplianceInquiriesPost201Response'), require('../model/ValidateExportComplianceRequest'), require('../model/VerifyCustomerAddressRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.VerificationApi = factory(root.Authentication.MLEUtility, root.CyberSource.ApiClient, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.RiskV1AddressVerificationsPost201Response, root.CyberSource.RiskV1DecisionsPost400Response1, root.CyberSource.RiskV1ExportComplianceInquiriesPost201Response, root.CyberSource.ValidateExportComplianceRequest, root.CyberSource.VerifyCustomerAddressRequest);
  }
}(this, function(MLEUtility, ApiClient, PtsV2PaymentsPost502Response, RiskV1AddressVerificationsPost201Response, RiskV1DecisionsPost400Response1, RiskV1ExportComplianceInquiriesPost201Response, ValidateExportComplianceRequest, VerifyCustomerAddressRequest) {
  'use strict';

  /**
   * Verification service.
   * @module api/VerificationApi
   * @version 0.0.1
   */

  /**
   * Constructs a new VerificationApi. 
   * @alias module:api/VerificationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the validateExportCompliance operation.
     * @callback module:api/VerificationApi~validateExportComplianceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskV1ExportComplianceInquiriesPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate export compliance
     * This call checks customer data against specified watch lists to ensure export compliance. 
     * @param {module:model/ValidateExportComplianceRequest} validateExportComplianceRequest 
     * @param {module:api/VerificationApi~validateExportComplianceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RiskV1ExportComplianceInquiriesPost201Response}
     */
    this.validateExportCompliance = function(validateExportComplianceRequest, callback) {
      var postBody = validateExportComplianceRequest;

      // verify the required parameter 'validateExportComplianceRequest' is set
      if (validateExportComplianceRequest === undefined || validateExportComplianceRequest === null) {
        throw new Error("Missing the required parameter 'validateExportComplianceRequest' when calling validateExportCompliance");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/ValidateExportComplianceRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = RiskV1ExportComplianceInquiriesPost201Response;

      //check isMLE for an api method 'this.validateExportCompliance'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'validateExportCompliance');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/risk/v1/export-compliance-inquiries', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/risk/v1/export-compliance-inquiries', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the verifyCustomerAddress operation.
     * @callback module:api/VerificationApi~verifyCustomerAddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RiskV1AddressVerificationsPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Verify customer address
     * This call verifies that the customer address submitted is valid.
     * @param {module:model/VerifyCustomerAddressRequest} verifyCustomerAddressRequest 
     * @param {module:api/VerificationApi~verifyCustomerAddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RiskV1AddressVerificationsPost201Response}
     */
    this.verifyCustomerAddress = function(verifyCustomerAddressRequest, callback) {
      var postBody = verifyCustomerAddressRequest;

      // verify the required parameter 'verifyCustomerAddressRequest' is set
      if (verifyCustomerAddressRequest === undefined || verifyCustomerAddressRequest === null) {
        throw new Error("Missing the required parameter 'verifyCustomerAddressRequest' when calling verifyCustomerAddress");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/VerifyCustomerAddressRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = RiskV1AddressVerificationsPost201Response;

      //check isMLE for an api method 'this.verifyCustomerAddress'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'verifyCustomerAddress');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/risk/v1/address-verifications', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/risk/v1/address-verifications', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }
  };

  return exports;
}));
