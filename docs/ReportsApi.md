# CyberSource.ReportsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReport**](ReportsApi.md#createReport) | **POST** /reporting/v3/reports | Create Adhoc Report
[**getReportByReportId**](ReportsApi.md#getReportByReportId) | **GET** /reporting/v3/reports/{reportId} | Get Report Based on Report Id
[**searchReports**](ReportsApi.md#searchReports) | **GET** /reporting/v3/reports | Retrieve Available Reports


<a name="createReport"></a>
# **createReport**
> createReport(createAdhocReportRequest, opts)

Create Adhoc Report

Create a one-time report. You must specify the type of report in reportDefinitionName. For a list of values for reportDefinitionName, see the [Reporting Developer Guide](https://www.cybersource.com/developers/documentation/reporting_and_reconciliation) 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportsApi();

var createAdhocReportRequest = new CyberSource.CreateAdhocReportRequest(); // CreateAdhocReportRequest | Report subscription request payload

var opts = { 
  'organizationId': "organizationId_example" // String | Valid Organization Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createReport(createAdhocReportRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAdhocReportRequest** | [**CreateAdhocReportRequest**](CreateAdhocReportRequest.md)| Report subscription request payload | 
 **organizationId** | **String**| Valid Organization Id | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json

<a name="getReportByReportId"></a>
# **getReportByReportId**
> ReportingV3ReportsIdGet200Response getReportByReportId(reportId, opts)

Get Report Based on Report Id

Download a report using the reportId value. If you don’t already know this value, you can obtain it using the Retrieve available reports call. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportsApi();

var reportId = "reportId_example"; // String | Valid Report Id

var opts = { 
  'organizationId': "organizationId_example" // String | Valid Organization Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getReportByReportId(reportId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | **String**| Valid Report Id | 
 **organizationId** | **String**| Valid Organization Id | [optional] 

### Return type

[**ReportingV3ReportsIdGet200Response**](ReportingV3ReportsIdGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json, application/xml

<a name="searchReports"></a>
# **searchReports**
> ReportingV3ReportsGet200Response searchReports(startTime, endTime, timeQueryType, opts)

Retrieve Available Reports

Retrieve a list of the available reports to which you are subscribed. This will also give you the reportId value, which you can also use to download a report. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ReportsApi();

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var timeQueryType = "timeQueryType_example"; // String | Specify time you would like to search  Valid values: - reportTimeFrame - executedTime 

var opts = { 
  'organizationId': "organizationId_example", // String | Valid Organization Id
  'reportMimeType': "reportMimeType_example", // String | Valid Report Format  Valid values: - application/xml - text/csv 
  'reportFrequency': "reportFrequency_example", // String | Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC 
  'reportName': "reportName_example", // String | Valid Report Name
  'reportDefinitionId': 56, // Number | Valid Report Definition Id
  'reportStatus': "reportStatus_example" // String | Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchReports(startTime, endTime, timeQueryType, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **endTime** | **Date**| Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **timeQueryType** | **String**| Specify time you would like to search  Valid values: - reportTimeFrame - executedTime  | 
 **organizationId** | **String**| Valid Organization Id | [optional] 
 **reportMimeType** | **String**| Valid Report Format  Valid values: - application/xml - text/csv  | [optional] 
 **reportFrequency** | **String**| Valid Report Frequency  Valid values: - DAILY - WEEKLY - MONTHLY - USER_DEFINED - ADHOC  | [optional] 
 **reportName** | **String**| Valid Report Name | [optional] 
 **reportDefinitionId** | **Number**| Valid Report Definition Id | [optional] 
 **reportStatus** | **String**| Valid Report Status  Valid values: - COMPLETED - PENDING - QUEUED - RUNNING - ERROR - NO_DATA  | [optional] 

### Return type

[**ReportingV3ReportsGet200Response**](ReportingV3ReportsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

