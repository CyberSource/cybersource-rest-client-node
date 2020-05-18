# CyberSource.DownloadXSDApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getXSDV2**](DownloadXSDApi.md#getXSDV2) | **GET** /reporting/v3/xsds/{reportDefinitionNameVersion} | Download XSD for Report


<a name="getXSDV2"></a>
# **getXSDV2**
> getXSDV2(reportDefinitionNameVersion)

Download XSD for Report

Used to download XSDs for reports on no-auth.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DownloadXSDApi();

var reportDefinitionNameVersion = "reportDefinitionNameVersion_example"; // String | Name and version of XSD file to download. Some XSDs only have one version. In that case version name is not needed. Some example values are DecisionManagerDetailReport, DecisionManagerTypes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getXSDV2(reportDefinitionNameVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportDefinitionNameVersion** | **String**| Name and version of XSD file to download. Some XSDs only have one version. In that case version name is not needed. Some example values are DecisionManagerDetailReport, DecisionManagerTypes | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: text/xml

