# CyberSource.ReportDefinitionsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResourceInfoByReportDefinition**](ReportDefinitionsApi.md#getResourceInfoByReportDefinition) | **GET** /reporting/v3/report-definitions/{reportDefinitionName} | Get Report Definition
[**getResourceV2Info**](ReportDefinitionsApi.md#getResourceV2Info) | **GET** /reporting/v3/report-definitions | Get Reporting Resource Information


<a name="getResourceInfoByReportDefinition"></a>
# **getResourceInfoByReportDefinition**
> ReportingV3ReportDefinitionsNameGet200Response getResourceInfoByReportDefinition(reportDefinitionName, opts)

Get Report Definition

View the attributes of an individual report type. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation/) 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportDefinitionsApi();

var reportDefinitionName = "reportDefinitionName_example"; // String | Name of the Report definition to retrieve

var opts = { 
  'subscriptionType': "subscriptionType_example", // String | The subscription type for which report definition is required. By default the type will be CUSTOM. Valid Values: - CLASSIC - CUSTOM - STANDARD 
  'reportMimeType': "reportMimeType_example", // String | The format for which the report definition is required. By default the value will be CSV. Valid Values: - application/xml - text/csv 
  'organizationId': "organizationId_example" // String | Valid Organization Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getResourceInfoByReportDefinition(reportDefinitionName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportDefinitionName** | **String**| Name of the Report definition to retrieve | 
 **subscriptionType** | **String**| The subscription type for which report definition is required. By default the type will be CUSTOM. Valid Values: - CLASSIC - CUSTOM - STANDARD  | [optional] 
 **reportMimeType** | **String**| The format for which the report definition is required. By default the value will be CSV. Valid Values: - application/xml - text/csv  | [optional] 
 **organizationId** | **String**| Valid Organization Id | [optional] 

### Return type

[**ReportingV3ReportDefinitionsNameGet200Response**](ReportingV3ReportDefinitionsNameGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

<a name="getResourceV2Info"></a>
# **getResourceV2Info**
> ReportingV3ReportDefinitionsGet200Response getResourceV2Info(opts)

Get Reporting Resource Information

View a list of supported reports and their attributes before subscribing to them. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportDefinitionsApi();

var opts = { 
  'subscriptionType': "subscriptionType_example", // String | Valid Values: - CLASSIC - CUSTOM - STANDARD 
  'organizationId': "organizationId_example" // String | Valid Organization Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getResourceV2Info(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscriptionType** | **String**| Valid Values: - CLASSIC - CUSTOM - STANDARD  | [optional] 
 **organizationId** | **String**| Valid Organization Id | [optional] 

### Return type

[**ReportingV3ReportDefinitionsGet200Response**](ReportingV3ReportDefinitionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

