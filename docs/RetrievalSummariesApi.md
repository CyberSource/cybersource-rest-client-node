# CyberSource.RetrievalSummariesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRetrievalSummary**](RetrievalSummariesApi.md#getRetrievalSummary) | **GET** /reporting/v3/retrieval-summaries | Get Retrieval Summaries


<a name="getRetrievalSummary"></a>
# **getRetrievalSummary**
> ReportingV3RetrievalSummariesGet200Response getRetrievalSummary(startTime, endTime, opts)

Get Retrieval Summaries

Retrieval Summary Report Description

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.RetrievalSummariesApi();

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z) 

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
apiInstance.getRetrievalSummary(startTime, endTime, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **endTime** | **Date**| Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)  **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZ (e.g. 2018-01-01T00:00:00.000Z)  | 
 **organizationId** | **String**| Valid Organization Id | [optional] 

### Return type

[**ReportingV3RetrievalSummariesGet200Response**](ReportingV3RetrievalSummariesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json, application/xml

