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
    define(['Authentication/MLEUtility', 'ApiClient', 'model/ActivateSubscriptionResponse', 'model/CancelSubscriptionResponse', 'model/CreateSubscriptionRequest', 'model/CreateSubscriptionResponse', 'model/GetAllSubscriptionsResponse', 'model/GetSubscriptionCodeResponse', 'model/GetSubscriptionResponse', 'model/InlineResponse4003', 'model/InlineResponse4004', 'model/InlineResponse404', 'model/PtsV2PaymentsPost502Response', 'model/SuspendSubscriptionResponse', 'model/UpdateSubscription', 'model/UpdateSubscriptionResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../authentication/util/MLEUtility'), require('../ApiClient'), require('../model/ActivateSubscriptionResponse'), require('../model/CancelSubscriptionResponse'), require('../model/CreateSubscriptionRequest'), require('../model/CreateSubscriptionResponse'), require('../model/GetAllSubscriptionsResponse'), require('../model/GetSubscriptionCodeResponse'), require('../model/GetSubscriptionResponse'), require('../model/InlineResponse4003'), require('../model/InlineResponse4004'), require('../model/InlineResponse404'), require('../model/PtsV2PaymentsPost502Response'), require('../model/SuspendSubscriptionResponse'), require('../model/UpdateSubscription'), require('../model/UpdateSubscriptionResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.SubscriptionsApi = factory(root.Authentication.MLEUtility, root.CyberSource.ApiClient, root.CyberSource.ActivateSubscriptionResponse, root.CyberSource.CancelSubscriptionResponse, root.CyberSource.CreateSubscriptionRequest, root.CyberSource.CreateSubscriptionResponse, root.CyberSource.GetAllSubscriptionsResponse, root.CyberSource.GetSubscriptionCodeResponse, root.CyberSource.GetSubscriptionResponse, root.CyberSource.InlineResponse4003, root.CyberSource.InlineResponse4004, root.CyberSource.InlineResponse404, root.CyberSource.PtsV2PaymentsPost502Response, root.CyberSource.SuspendSubscriptionResponse, root.CyberSource.UpdateSubscription, root.CyberSource.UpdateSubscriptionResponse);
  }
}(this, function(MLEUtility, ApiClient, ActivateSubscriptionResponse, CancelSubscriptionResponse, CreateSubscriptionRequest, CreateSubscriptionResponse, GetAllSubscriptionsResponse, GetSubscriptionCodeResponse, GetSubscriptionResponse, InlineResponse4003, InlineResponse4004, InlineResponse404, PtsV2PaymentsPost502Response, SuspendSubscriptionResponse, UpdateSubscription, UpdateSubscriptionResponse) {
  'use strict';

  /**
   * Subscriptions service.
   * @module api/SubscriptionsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new SubscriptionsApi. 
   * @alias module:api/SubscriptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the activateSubscription operation.
     * @callback module:api/SubscriptionsApi~activateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ActivateSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate a Subscription
     * Activate a `SUSPENDED` Subscription 
     * @param {String} id Subscription Id
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.processSkippedPayments Indicates if skipped payments should be processed from the period when the subscription was suspended. By default, this is set to true. (default to true)
     * @param {module:api/SubscriptionsApi~activateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ActivateSubscriptionResponse}
     */
    this.activateSubscription = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling activateSubscription");
      }



      var pathParams = {
        'id': id
      };
      var queryParams = {
        'processSkippedPayments': opts['processSkippedPayments']
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json', 'application/hal+json', 'application/json;charset=utf-8', 'application/hal+json;charset=utf-8'];
      var returnType = ActivateSubscriptionResponse;

      //check isMLE for an api method 'this.activateSubscription'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'activateSubscription');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions/{id}/activate', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions/{id}/activate', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the cancelSubscription operation.
     * @callback module:api/SubscriptionsApi~cancelSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CancelSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel a Subscription
     * Cancel a Subscription
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~cancelSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CancelSubscriptionResponse}
     */
    this.cancelSubscription = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling cancelSubscription");
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
      var returnType = CancelSubscriptionResponse;

      //check isMLE for an api method 'this.cancelSubscription'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'cancelSubscription');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions/{id}/cancel', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions/{id}/cancel', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the createSubscription operation.
     * @callback module:api/SubscriptionsApi~createSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Subscription
     * Create a Recurring Billing Subscription
     * @param {module:model/CreateSubscriptionRequest} createSubscriptionRequest 
     * @param {module:api/SubscriptionsApi~createSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CreateSubscriptionResponse}
     */
    this.createSubscription = function(createSubscriptionRequest, callback) {
      var postBody = createSubscriptionRequest;

      // verify the required parameter 'createSubscriptionRequest' is set
      if (createSubscriptionRequest === undefined || createSubscriptionRequest === null) {
        throw new Error("Missing the required parameter 'createSubscriptionRequest' when calling createSubscription");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateSubscriptionRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


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
      var returnType = CreateSubscriptionResponse;

      //check isMLE for an api method 'this.createSubscription'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'createSubscription');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getAllSubscriptions operation.
     * @callback module:api/SubscriptionsApi~getAllSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetAllSubscriptionsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a List of Subscriptions
     * Retrieve Subscriptions by Subscription Code & Subscription Status. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Page offset number.
     * @param {Number} opts.limit Number of items to be returned. Default - `20`, Max - `100` 
     * @param {String} opts.code Filter by Subscription Code
     * @param {String} opts.status Filter by Subscription Status
     * @param {module:api/SubscriptionsApi~getAllSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetAllSubscriptionsResponse}
     */
    this.getAllSubscriptions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }



      var pathParams = {
      };
      var queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'code': opts['code'],
        'status': opts['status']
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json', 'application/hal+json', 'application/json;charset=utf-8', 'application/hal+json;charset=utf-8'];
      var returnType = GetAllSubscriptionsResponse;

      //check isMLE for an api method 'this.getAllSubscriptions'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getAllSubscriptions');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getSubscription operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Subscription
     * Get a Subscription by Subscription Id
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~getSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSubscriptionResponse}
     */
    this.getSubscription = function(id, callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getSubscription");
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
      var returnType = GetSubscriptionResponse;

      //check isMLE for an api method 'this.getSubscription'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getSubscription');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions/{id}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions/{id}', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getSubscriptionCode operation.
     * @callback module:api/SubscriptionsApi~getSubscriptionCodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GetSubscriptionCodeResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Subscription Code
     * Get a Unique Subscription Code
     * @param {module:api/SubscriptionsApi~getSubscriptionCodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GetSubscriptionCodeResponse}
     */
    this.getSubscriptionCode = function(callback) {
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }



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
      var returnType = GetSubscriptionCodeResponse;

      //check isMLE for an api method 'this.getSubscriptionCode'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getSubscriptionCode');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions/code', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions/code', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the suspendSubscription operation.
     * @callback module:api/SubscriptionsApi~suspendSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuspendSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Suspend a Subscription
     * Suspend a Subscription
     * @param {String} id Subscription Id
     * @param {module:api/SubscriptionsApi~suspendSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuspendSubscriptionResponse}
     */
    this.suspendSubscription = function(id, callback) {
      var postBody = null;
      if ('POST' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling suspendSubscription");
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
      var returnType = SuspendSubscriptionResponse;

      //check isMLE for an api method 'this.suspendSubscription'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'suspendSubscription');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions/{id}/suspend', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions/{id}/suspend', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the updateSubscription operation.
     * @callback module:api/SubscriptionsApi~updateSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UpdateSubscriptionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Subscription
     * Update a Subscription by Subscription Id
     * @param {String} id Subscription Id
     * @param {module:model/UpdateSubscription} updateSubscription Update Subscription
     * @param {module:api/SubscriptionsApi~updateSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UpdateSubscriptionResponse}
     */
    this.updateSubscription = function(id, updateSubscription, callback) {
      var postBody = updateSubscription;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateSubscription");
      }

      // verify the required parameter 'updateSubscription' is set
      if (updateSubscription === undefined || updateSubscription === null) {
        throw new Error("Missing the required parameter 'updateSubscription' when calling updateSubscription");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/UpdateSubscription', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


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
      var returnType = UpdateSubscriptionResponse;

      //check isMLE for an api method 'this.updateSubscription'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'updateSubscription');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/rbs/v1/subscriptions/{id}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/rbs/v1/subscriptions/{id}', 'PATCH',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }
  };

  return exports;
}));
