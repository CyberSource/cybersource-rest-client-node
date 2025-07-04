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
    define(['Authentication/MLEUtility', 'ApiClient', 'model/CreatePaymentLinkRequest', 'model/InvoicingV2InvoicesAllGet502Response', 'model/PblPaymentLinksAllGet200Response', 'model/PblPaymentLinksAllGet400Response', 'model/PblPaymentLinksAllGet404Response', 'model/PblPaymentLinksGet200Response', 'model/PblPaymentLinksPost201Response', 'model/UpdatePaymentLinkRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../authentication/util/MLEUtility'), require('../ApiClient'), require('../model/CreatePaymentLinkRequest'), require('../model/InvoicingV2InvoicesAllGet502Response'), require('../model/PblPaymentLinksAllGet200Response'), require('../model/PblPaymentLinksAllGet400Response'), require('../model/PblPaymentLinksAllGet404Response'), require('../model/PblPaymentLinksGet200Response'), require('../model/PblPaymentLinksPost201Response'), require('../model/UpdatePaymentLinkRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.PaymentLinksApi = factory(root.Authentication.MLEUtility, root.CyberSource.ApiClient, root.CyberSource.CreatePaymentLinkRequest, root.CyberSource.InvoicingV2InvoicesAllGet502Response, root.CyberSource.PblPaymentLinksAllGet200Response, root.CyberSource.PblPaymentLinksAllGet400Response, root.CyberSource.PblPaymentLinksAllGet404Response, root.CyberSource.PblPaymentLinksGet200Response, root.CyberSource.PblPaymentLinksPost201Response, root.CyberSource.UpdatePaymentLinkRequest);
  }
}(this, function(MLEUtility, ApiClient, CreatePaymentLinkRequest, InvoicingV2InvoicesAllGet502Response, PblPaymentLinksAllGet200Response, PblPaymentLinksAllGet400Response, PblPaymentLinksAllGet404Response, PblPaymentLinksGet200Response, PblPaymentLinksPost201Response, UpdatePaymentLinkRequest) {
  'use strict';

  /**
   * PaymentLinks service.
   * @module api/PaymentLinksApi
   * @version 0.0.1
   */

  /**
   * Constructs a new PaymentLinksApi. 
   * @alias module:api/PaymentLinksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createPaymentLink operation.
     * @callback module:api/PaymentLinksApi~createPaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PblPaymentLinksPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Payment Link
     * Create a new payment link.
     * @param {module:model/CreatePaymentLinkRequest} createPaymentLinkRequest 
     * @param {module:api/PaymentLinksApi~createPaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PblPaymentLinksPost201Response}
     */
    this.createPaymentLink = function(createPaymentLinkRequest, callback) {
      var postBody = createPaymentLinkRequest;

      // verify the required parameter 'createPaymentLinkRequest' is set
      if (createPaymentLinkRequest === undefined || createPaymentLinkRequest === null) {
        throw new Error("Missing the required parameter 'createPaymentLinkRequest' when calling createPaymentLink");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreatePaymentLinkRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


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
      var accepts = ['application/json', 'application/hal+json', 'application/json;charset=utf-8', 'application/hal+json;charset=utf-8'];
      var returnType = PblPaymentLinksPost201Response;

      //check isMLE for an api method 'this.createPaymentLink'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'createPaymentLink');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/ipl/v2/payment-links', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/ipl/v2/payment-links', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getAllPaymentLinks operation.
     * @callback module:api/PaymentLinksApi~getAllPaymentLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PblPaymentLinksAllGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Payment Links
     * Provides a (filtered) list of payment links that have been created in your account. You can filter the list based on the following status types:  - ACTIVE  - INACTIVE 
     * @param {Number} offset Page offset number.
     * @param {Number} limit Maximum number of items you would like returned.   Maximum limit: 1000 
     * @param {Object} opts Optional parameters
     * @param {String} opts.status The status of the purchase or donation link.  Possible values:   - ACTIVE   - INACTIVE 
     * @param {module:api/PaymentLinksApi~getAllPaymentLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PblPaymentLinksAllGet200Response}
     */
    this.getAllPaymentLinks = function(offset, limit, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'offset' is set
      if (offset === undefined || offset === null) {
        throw new Error("Missing the required parameter 'offset' when calling getAllPaymentLinks");
      }

      // verify the required parameter 'limit' is set
      if (limit === undefined || limit === null) {
        throw new Error("Missing the required parameter 'limit' when calling getAllPaymentLinks");
      }



      var pathParams = {
      };
      var queryParams = {
        'offset': offset,
        'limit': limit,
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json', 'application/hal+json', 'application/json;charset=utf-8', 'application/hal+json;charset=utf-8'];
      var returnType = PblPaymentLinksAllGet200Response;

      //check isMLE for an api method 'this.getAllPaymentLinks'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getAllPaymentLinks');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/ipl/v2/payment-links', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/ipl/v2/payment-links', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getPaymentLink operation.
     * @callback module:api/PaymentLinksApi~getPaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PblPaymentLinksGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Payment Link Details
     * You can retrieve details of a specific payment link. For each payment transaction you can use the Transaction Details API to get more details on the payment transaction.
     * @param {String} id The purchase number.
     * @param {module:api/PaymentLinksApi~getPaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PblPaymentLinksGet200Response}
     */
    this.getPaymentLink = function(id, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getPaymentLink");
      }



      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json', 'application/hal+json', 'application/json;charset=utf-8', 'application/hal+json;charset=utf-8'];
      var returnType = PblPaymentLinksGet200Response;

      //check isMLE for an api method 'this.getPaymentLink'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getPaymentLink');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/ipl/v2/payment-links/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/ipl/v2/payment-links/{id}', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the updatePaymentLink operation.
     * @callback module:api/PaymentLinksApi~updatePaymentLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PblPaymentLinksPost201Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Payment Link
     * You can update all information except the payment link number until any payment is received for a payment link.
     * @param {String} id The purchase number.
     * @param {module:model/UpdatePaymentLinkRequest} updatePaymentLinkRequest Updating the purchase or donation link does not resend the link automatically. You must resend the purchase or donation link separately.
     * @param {module:api/PaymentLinksApi~updatePaymentLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PblPaymentLinksPost201Response}
     */
    this.updatePaymentLink = function(id, updatePaymentLinkRequest, callback) {
      var postBody = updatePaymentLinkRequest;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updatePaymentLink");
      }

      // verify the required parameter 'updatePaymentLinkRequest' is set
      if (updatePaymentLinkRequest === undefined || updatePaymentLinkRequest === null) {
        throw new Error("Missing the required parameter 'updatePaymentLinkRequest' when calling updatePaymentLink");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/UpdatePaymentLinkRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json', 'application/hal+json', 'application/json;charset=utf-8', 'application/hal+json;charset=utf-8'];
      var returnType = PblPaymentLinksPost201Response;

      //check isMLE for an api method 'this.updatePaymentLink'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'updatePaymentLink');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/ipl/v2/payment-links/{id}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/ipl/v2/payment-links/{id}', 'PATCH',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }
  };

  return exports;
}));
