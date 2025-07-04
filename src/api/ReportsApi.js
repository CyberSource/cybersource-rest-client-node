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
    define(['Authentication/MLEUtility', 'ApiClient', 'model/CreateAdhocReportRequest', 'model/ReportingV3ReportsGet200Response', 'model/ReportingV3ReportsIdGet200Response', 'model/Reportingv3ReportDownloadsGet400Response'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../authentication/util/MLEUtility'), require('../ApiClient'), require('../model/CreateAdhocReportRequest'), require('../model/ReportingV3ReportsGet200Response'), require('../model/ReportingV3ReportsIdGet200Response'), require('../model/Reportingv3ReportDownloadsGet400Response'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.ReportsApi = factory(root.Authentication.MLEUtility, root.CyberSource.ApiClient, root.CyberSource.CreateAdhocReportRequest, root.CyberSource.ReportingV3ReportsGet200Response, root.CyberSource.ReportingV3ReportsIdGet200Response, root.CyberSource.Reportingv3ReportDownloadsGet400Response);
  }
}(this, function(MLEUtility, ApiClient, CreateAdhocReportRequest, ReportingV3ReportsGet200Response, ReportingV3ReportsIdGet200Response, Reportingv3ReportDownloadsGet400Response) {
  'use strict';

  /**
   * Reports service.
   * @module api/ReportsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new ReportsApi. 
   * @alias module:api/ReportsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(configObject, apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

	this.apiClient.setConfiguration(configObject);
	

    /**
     * Callback function to receive the result of the createReport operation.
     * @callback module:api/ReportsApi~createReportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Adhoc Report
     * Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation) 
     * @param {module:model/CreateAdhocReportRequest} createAdhocReportRequest Report subscription request payload
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportsApi~createReportCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createReport = function(createAdhocReportRequest, opts, callback) {
      opts = opts || {};
      var postBody = createAdhocReportRequest;

      // verify the required parameter 'createAdhocReportRequest' is set
      if (createAdhocReportRequest === undefined || createAdhocReportRequest === null) {
        throw new Error("Missing the required parameter 'createAdhocReportRequest' when calling createReport");
      }

      var SdkTracker = require('../utilities/tracking/SdkTracker');

      var sdkTracker = new SdkTracker();
      postBody = sdkTracker.insertDeveloperIdTracker(postBody, 'module:model/CreateAdhocReportRequest', this.apiClient.merchantConfig.runEnvironment, this.apiClient.merchantConfig.defaultDeveloperId);


      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json'];
      var returnType = null;

      //check isMLE for an api method 'this.createReport'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'createReport');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/reporting/v3/reports', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/reporting/v3/reports', 'POST',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the getReportByReportId operation.
     * @callback module:api/ReportsApi~getReportByReportIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3ReportsIdGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Report Based on Report Id
     * Download a report using the reportId value. If you don't already know this value, you can obtain it using the Retrieve available reports call. 
     * @param {String} reportId Valid Report Id
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {module:api/ReportsApi~getReportByReportIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3ReportsIdGet200Response}
     */
    this.getReportByReportId = function(reportId, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'reportId' is set
      if (reportId === undefined || reportId === null) {
        throw new Error("Missing the required parameter 'reportId' when calling getReportByReportId");
      }



      var pathParams = {
        'reportId': reportId
      };
      var queryParams = {
        'organizationId': opts['organizationId']
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json', 'application/xml'];
      var returnType = ReportingV3ReportsIdGet200Response;

      //check isMLE for an api method 'this.getReportByReportId'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'getReportByReportId');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/reporting/v3/reports/{reportId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/reporting/v3/reports/{reportId}', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }

    /**
     * Callback function to receive the result of the searchReports operation.
     * @callback module:api/ReportsApi~searchReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ReportingV3ReportsGet200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Available Reports
     * Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report. 
     * @param {Date} startTime Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {Date} endTime Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 
     * @param {String} timeQueryType Specify time you would like to search  Valid values: - reportTimeFrame - executedTime 
     * @param {Object} opts Optional parameters
     * @param {String} opts.organizationId Valid Organization Id
     * @param {String} opts.reportMimeType Valid Report Format  Valid values: - application/xml - text/csv 
     * @param {String} opts.reportFrequency Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC 
     * @param {String} opts.reportName Valid Report Name
     * @param {Number} opts.reportDefinitionId Valid Report Definition Id
     * @param {String} opts.reportStatus Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA 
     * @param {module:api/ReportsApi~searchReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ReportingV3ReportsGet200Response}
     */
    this.searchReports = function(startTime, endTime, timeQueryType, opts, callback) {
      opts = opts || {};
      var postBody = null;
      if ('GET' == 'POST') {
        postBody = '{}';
      }

      // verify the required parameter 'startTime' is set
      if (startTime === undefined || startTime === null) {
        throw new Error("Missing the required parameter 'startTime' when calling searchReports");
      }

      // verify the required parameter 'endTime' is set
      if (endTime === undefined || endTime === null) {
        throw new Error("Missing the required parameter 'endTime' when calling searchReports");
      }

      // verify the required parameter 'timeQueryType' is set
      if (timeQueryType === undefined || timeQueryType === null) {
        throw new Error("Missing the required parameter 'timeQueryType' when calling searchReports");
      }



      var pathParams = {
      };
      var queryParams = {
        'organizationId': opts['organizationId'],
        'startTime': startTime,
        'endTime': endTime,
        'timeQueryType': timeQueryType,
        'reportMimeType': opts['reportMimeType'],
        'reportFrequency': opts['reportFrequency'],
        'reportName': opts['reportName'],
        'reportDefinitionId': opts['reportDefinitionId'],
        'reportStatus': opts['reportStatus']
      };
      var headerParams = {
      };
      var formParams = {
      };


      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/hal+json'];
      var returnType = ReportingV3ReportsGet200Response;

      //check isMLE for an api method 'this.searchReports'
      var isMLESupportedByCybsForApi = false;
      var isMLEForApi = MLEUtility.checkIsMLEForAPI(this.apiClient.merchantConfig, isMLESupportedByCybsForApi, 'searchReports');

      if (isMLEForApi === true) {
        MLEUtility.encryptRequestPayload(this.apiClient.merchantConfig, postBody).then(postBody => {
          return this.apiClient.callApi(
            '/reporting/v3/reports', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
          );
        });
      } else {
        return this.apiClient.callApi(
          '/reporting/v3/reports', 'GET',
          pathParams, queryParams, headerParams, formParams, postBody,
          authNames, contentTypes, accepts, returnType, callback
        );
      }
    }
  };

  return exports;
}));
