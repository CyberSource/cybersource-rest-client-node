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
    define(['Authentication/MLEUtility', 'ApiClient', 'model/InlineResponse400', 'model/InlineResponse403', 'model/InlineResponse409', 'model/InlineResponse410', 'model/InlineResponse412', 'model/InlineResponse424', 'model/InlineResponse500', 'model/PatchInstrumentIdentifierRequest', 'model/PaymentInstrumentList1', 'model/PostInstrumentIdentifierEnrollmentRequest', 'model/PostInstrumentIdentifierRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../authentication/util/MLEUtility'), require('../ApiClient'), require('../model/InlineResponse400'), require('../model/InlineResponse403'), require('../model/InlineResponse409'), require('../model/InlineResponse410'), require('../model/InlineResponse412'), require('../model/InlineResponse424'), require('../model/InlineResponse500'), require('../model/PatchInstrumentIdentifierRequest'), require('../model/PaymentInstrumentList1'), require('../model/PostInstrumentIdentifierEnrollmentRequest'), require('../model/PostInstrumentIdentifierRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.InstrumentIdentifierApi = factory(root.Authentication.MLEUtility, root.CyberSource.ApiClient, root.CyberSource.InlineResponse400, root.CyberSource.InlineResponse403, root.CyberSource.InlineResponse409, root.CyberSource.InlineResponse410, root.CyberSource.InlineResponse412, root.CyberSource.InlineResponse424, root.CyberSource.InlineResponse500, root.CyberSource.PatchInstrumentIdentifierRequest, root.CyberSource.PaymentInstrumentList1, root.CyberSource.PostInstrumentIdentifierEnrollmentRequest, root.CyberSource.PostInstrumentIdentifierRequest);
  }
}(this, function(MLEUtility, ApiClient, InlineResponse400, InlineResponse403, InlineResponse409, InlineResponse410, InlineResponse412, InlineResponse424, InlineResponse500, PatchInstrumentIdentifierRequest, PaymentInstrumentList1, PostInstrumentIdentifierEnrollmentRequest, PostInstrumentIdentifierRequest) {
  'use strict';

  /**
   * InstrumentIdentifier service.
   * @module api/InstrumentIdentifierApi
   * @version 0.0.1
   */

  /**
   * Constructs a new InstrumentIdentifierApi. 
   * @alias module:api/InstrumentIdentifierApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the deleteInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~deleteInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an Instrument Identifier
     * |  |  |  | | --- | --- | --- | |**Instrument Identifiers**<br>An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing <br>and account numbers.<br>The same token Id is returned for a specific card number or bank account & routing number allowing the <br>Instrument Identifier Id to be used for cross-channel payment tracking.<br>An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) <br>or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Deleting an Instrument Identifier**<br>Your system can use this API to delete an existing Instrument Identifier.<br>An Instrument Identifier cannot be deleted if it is linked to any Payment Instruments.<br>You can [retrieve all Payment Instruments associated with an Instrument Identifier](#token-management_instrument-identifier_list-payment-instruments-for-an-instrument-identifier). 
     * @param {String} instrumentIdentifierId The Id of an Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/InstrumentIdentifierApi~deleteInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteInstrumentIdentifier = function(instrumentIdentifierId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('DELETE' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'instrumentIdentifierId' is set
      if (instrumentIdentifierId === undefined || instrumentIdentifierId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierId' when calling deleteInstrumentIdentifier");
      }



      var pathParams = {
        'instrumentIdentifierId': instrumentIdentifierId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      //check isMLE for an api method 'this.deleteInstrumentIdentifier'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'deleteInstrumentIdentifier');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}', 'DELETE',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~getInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostInstrumentIdentifierRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an Instrument Identifier
     * |  |  |  | | --- | --- | --- | |**Instrument Identifiers**<br>An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.<br>The same token Id is returned for a specific card number or bank account & routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.<br>An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).<br><br>**Retrieving an Instrument Identifier**<br>Your system can use this API to retrieve an Instrument Identifier.<br>**Note: the actual card data will be masked.**<br>The Instrument Identifier will also be returned when retrieving a [Customer](#token-management_customer_retrieve-a-customer), [Customer Payment Instrument](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_retrieve-a-payment-instrument).|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Payment Network Tokens**<br>Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.<br>A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.<br>A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).<br>For more information about Payment Network Tokens see the Developer Guide.<br><br>**Payments with Instrument Identifiers**<br>To perform a payment with an Instrument Identifier simply specify the [Instrument Identifier Id in the payments request along with the expiration date, card type, & billing address](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-instrument-identifier-token-id_liveconsole-tab-request-body).<br>When an Instrument Identifier is used in a payment the **_previousTransactionId_** and **_originalAuthorizedAmount_** values are automatically recorded.<br>These values will be added for you to future Merchant Initiated Transaction payments. 
     * @param {String} instrumentIdentifierId The Id of an Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {Boolean} opts.retrieveBinDetails Retrieve the Bin Details of PAN or network token
     * @param {module:api/InstrumentIdentifierApi~getInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostInstrumentIdentifierRequest}
     */
    this.getInstrumentIdentifier = function(instrumentIdentifierId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'instrumentIdentifierId' is set
      if (instrumentIdentifierId === undefined || instrumentIdentifierId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierId' when calling getInstrumentIdentifier");
      }



      var pathParams = {
        'instrumentIdentifierId': instrumentIdentifierId
      };
      var queryParams = {
        'retrieveBinDetails': opts['retrieveBinDetails']
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PostInstrumentIdentifierRequest;

      //check isMLE for an api method 'this.getInstrumentIdentifier'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getInstrumentIdentifier');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getInstrumentIdentifierPaymentInstrumentsList operation.
     * @callback module:api/InstrumentIdentifierApi~getInstrumentIdentifierPaymentInstrumentsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PaymentInstrumentList1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Payment Instruments for an Instrument Identifier
     * |  |  |  | | --- | --- | --- | |**Instrument Identifiers**<br>An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing <br>and account numbers.<br>The same token Id is returned for a specific card number or bank account & routing number allowing the <br>Instrument Identifier Id to be used for cross-channel payment tracking.<br>An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) <br>or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving all Payment Instruments associated with an Instrument Identifier**<br>Your system can use this API to retrieve all Payment Instruments linked to an Instrument Identifier. 
     * @param {String} instrumentIdentifierId The Id of an Instrument Identifier.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {Boolean} opts.retrieveBinDetails Retrieve the Bin Details of PAN or network token
     * @param {Number} opts.offset Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. (default to 0)
     * @param {Number} opts.limit The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. (default to 20)
     * @param {module:api/InstrumentIdentifierApi~getInstrumentIdentifierPaymentInstrumentsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PaymentInstrumentList1}
     */
    this.getInstrumentIdentifierPaymentInstrumentsList = function(instrumentIdentifierId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'instrumentIdentifierId' is set
      if (instrumentIdentifierId === undefined || instrumentIdentifierId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierId' when calling getInstrumentIdentifierPaymentInstrumentsList");
      }



      var pathParams = {
        'instrumentIdentifierId': instrumentIdentifierId
      };
      var queryParams = {
        'retrieveBinDetails': opts['retrieveBinDetails'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PaymentInstrumentList1;

      //check isMLE for an api method 'this.getInstrumentIdentifierPaymentInstrumentsList'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getInstrumentIdentifierPaymentInstrumentsList');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}/paymentinstruments', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}/paymentinstruments', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the patchInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~patchInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PatchInstrumentIdentifierRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Instrument Identifier
     * |  |  |  | | --- | --- | --- | |**Instrument Identifiers**<br>An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.<br>The same token Id is returned for a specific card number or bank account & routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.<br>An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Updating an Instrument Identifier**<br>When an Instrument Identifier is used in a payment the **_previousTransactionId_** and **_originalAuthorizedAmount_** values are automatically recorded.<br>These values will be added for you to future Merchant Initiated Transaction payments.<br>Your system can use this API to update these values. 
     * @param {String} instrumentIdentifierId The Id of an Instrument Identifier.
     * @param {module:model/PatchInstrumentIdentifierRequest} patchInstrumentIdentifierRequest Specify the previous transaction Id to update.
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {Boolean} opts.retrieveBinDetails Retrieve the Bin Details of PAN or network token
     * @param {String} opts.ifMatch Contains an ETag value from a GET request to make the request conditional.
     * @param {module:api/InstrumentIdentifierApi~patchInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PatchInstrumentIdentifierRequest}
     */
    this.patchInstrumentIdentifier = function(instrumentIdentifierId, patchInstrumentIdentifierRequest, opts, callback) {
      opts = opts || {};
      var postBody = patchInstrumentIdentifierRequest;

      // verify the required parameter 'instrumentIdentifierId' is set
      if (instrumentIdentifierId === undefined || instrumentIdentifierId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierId' when calling patchInstrumentIdentifier");
      }

      // verify the required parameter 'patchInstrumentIdentifierRequest' is set
      if (patchInstrumentIdentifierRequest === undefined || patchInstrumentIdentifierRequest === null) {
        throw new Error("Missing the required parameter 'patchInstrumentIdentifierRequest' when calling patchInstrumentIdentifier");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PatchInstrumentIdentifierRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
        'instrumentIdentifierId': instrumentIdentifierId
      };
      var queryParams = {
        'retrieveBinDetails': opts['retrieveBinDetails']
      };
      var headerParams = {
        'profile-id': opts['profileId'],
        'if-match': opts['ifMatch']
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PatchInstrumentIdentifierRequest;

      //check isMLE for an api method 'this.patchInstrumentIdentifier'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'patchInstrumentIdentifier');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}', 'PATCH',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the postInstrumentIdentifier operation.
     * @callback module:api/InstrumentIdentifierApi~postInstrumentIdentifierCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PostInstrumentIdentifierRequest} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Instrument Identifier
     * |  |  |  | | --- | --- | --- | |**Instrument Identifiers**<br>An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.<br>The same token Id is returned for a specific card number or bank account & routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.<br>An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).<br><br>**Creating an Instrument Identifier**<br>It is recommended you [create an Instrument Identifier via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-instrument-identifier-token-creation_liveconsole-tab-request-body), this can be for a zero amount.<br>An Instrument Identifier will also be created if you [create a Customer via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-customer-token-creation_liveconsole-tab-request-body)<br>In Europe: You should perform Payer Authentication alongside the Authorization.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Payment Network Tokens**<br>Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.<br>A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.<br>A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).<br>For more information about Payment Network Tokens see the Developer Guide.<br><br>**Payments with Instrument Identifiers**<br>To perform a payment with an Instrument Identifier simply specify the [Instrument Identifier Id in the payments request along with the expiration date, card type, & billing address](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-instrument-identifier-token-id_liveconsole-tab-request-body).<br>When an Instrument Identifier is used in a payment the **_previousTransactionId_** and **_originalAuthorizedAmount_** values are automatically recorded.<br>These values will be added for you to future Merchant Initiated Transaction payments. 
     * @param {module:model/PostInstrumentIdentifierRequest} postInstrumentIdentifierRequest Specify either a Card, Bank Account or Enrollable Card
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {Boolean} opts.retrieveBinDetails Retrieve the Bin Details of PAN or network token
     * @param {module:api/InstrumentIdentifierApi~postInstrumentIdentifierCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PostInstrumentIdentifierRequest}
     */
    this.postInstrumentIdentifier = function(postInstrumentIdentifierRequest, opts, callback) {
      opts = opts || {};
      var postBody = postInstrumentIdentifierRequest;

      // verify the required parameter 'postInstrumentIdentifierRequest' is set
      if (postInstrumentIdentifierRequest === undefined || postInstrumentIdentifierRequest === null) {
        throw new Error("Missing the required parameter 'postInstrumentIdentifierRequest' when calling postInstrumentIdentifier");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PostInstrumentIdentifierRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
      };
      var queryParams = {
        'retrieveBinDetails': opts['retrieveBinDetails']
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = PostInstrumentIdentifierRequest;

      //check isMLE for an api method 'this.postInstrumentIdentifier'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'postInstrumentIdentifier');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/tms/v1/instrumentidentifiers', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/tms/v1/instrumentidentifiers', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the postInstrumentIdentifierEnrollment operation.
     * @callback module:api/InstrumentIdentifierApi~postInstrumentIdentifierEnrollmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enroll an Instrument Identifier for Payment Network Token
     * |  |  |  | | --- | --- | --- | |**Instrument Identifiers**<br>An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.<br>The same token Id is returned for a specific card number or bank account & routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.<br>An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Enroll an Instrument Identifier for a Payment Network Token**<br>Your system can use this API to provision a Network token for an existing Instrument Identifier.<br>Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.<br>A Network token can be [provisioned when creating an Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier_samplerequests-dropdown_create-instrument-identifier-card-enroll-for-network-token_liveconsole-tab-request-body).This will occur automatically when creating a [Customer](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-customer-token-creation_liveconsole-tab-request-body), [Payment Instrument](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-create-default-payment-instrument-shipping-address-for-existing-customer_liveconsole-tab-request-body) or [Instrument Identifier](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-instrument-identifier-token-creation_liveconsole-tab-request-body) via the Payments API.<br>For more information about Payment Network Tokens see the Developer Guide. 
     * @param {String} instrumentIdentifierId The Id of an Instrument Identifier.
     * @param {module:model/PostInstrumentIdentifierEnrollmentRequest} postInstrumentIdentifierEnrollmentRequest Specify Enrollable Card details
     * @param {Object} opts Optional parameters
     * @param {String} opts.profileId The Id of a profile containing user specific TMS configuration.
     * @param {module:api/InstrumentIdentifierApi~postInstrumentIdentifierEnrollmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.postInstrumentIdentifierEnrollment = function(instrumentIdentifierId, postInstrumentIdentifierEnrollmentRequest, opts, callback) {
      opts = opts || {};
      var postBody = postInstrumentIdentifierEnrollmentRequest;

      // verify the required parameter 'instrumentIdentifierId' is set
      if (instrumentIdentifierId === undefined || instrumentIdentifierId === null) {
        throw new Error("Missing the required parameter 'instrumentIdentifierId' when calling postInstrumentIdentifierEnrollment");
      }

      // verify the required parameter 'postInstrumentIdentifierEnrollmentRequest' is set
      if (postInstrumentIdentifierEnrollmentRequest === undefined || postInstrumentIdentifierEnrollmentRequest === null) {
        throw new Error("Missing the required parameter 'postInstrumentIdentifierEnrollmentRequest' when calling postInstrumentIdentifierEnrollment");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/PostInstrumentIdentifierEnrollmentRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
        'instrumentIdentifierId': instrumentIdentifierId
      };
      var queryParams = {
      };
      var headerParams = {
        'profile-id': opts['profileId']
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = null;

      //check isMLE for an api method 'this.postInstrumentIdentifierEnrollment'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'postInstrumentIdentifierEnrollment');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}/enrollment', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/tms/v1/instrumentidentifiers/{instrumentIdentifierId}/enrollment', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }
  };

  return exports;
}));
