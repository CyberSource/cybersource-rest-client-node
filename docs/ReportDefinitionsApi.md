# CyberSource.ReportDefinitionsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getResourceInfoByReportDefinition**](ReportDefinitionsApi.md#getResourceInfoByReportDefinition) | **GET** /reporting/v3/report-definitions/{reportDefinitionName} | Get report definition
[**getResourceV2Info**](ReportDefinitionsApi.md#getResourceV2Info) | **GET** /reporting/v3/report-definitions | Get reporting resource information


<a name="getResourceInfoByReportDefinition"></a>
# **getResourceInfoByReportDefinition**
> ReportingV3ReportDefinitionsNameGet200Response getResourceInfoByReportDefinition(reportDefinitionName, opts)

Get report definition

View the attributes of an individual report type. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation/) 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportDefinitionsApi();

var reportDefinitionName = "reportDefinitionName_example"; // String | Name of the Report definition to retrieve

var opts = { 
  'organizationId': "organizationId_example" // String | Valid Cybersource Organization Id
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
 **organizationId** | **String**| Valid Cybersource Organization Id | [optional] 

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

Get reporting resource information

View a list of supported reports and their attributes before subscribing to them. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportDefinitionsApi();

var opts = { 
  'organizationId': "organizationId_example" // String | Valid Cybersource Organization Id
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
 **organizationId** | **String**| Valid Cybersource Organization Id | [optional] 

### Return type

[**ReportingV3ReportDefinitionsGet200Response**](ReportingV3ReportDefinitionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

