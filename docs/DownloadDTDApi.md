# CyberSource.DownloadDTDApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDTDV2**](DownloadDTDApi.md#getDTDV2) | **GET** /reporting/v3/dtds/{reportDefinitionNameVersion} | Download DTD for Report


<a name="getDTDV2"></a>
# **getDTDV2**
> getDTDV2(reportDefinitionNameVersion)

Download DTD for Report

Used to download DTDs for reports on no-auth.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DownloadDTDApi();

var reportDefinitionNameVersion = "reportDefinitionNameVersion_example"; // String | Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getDTDV2(reportDefinitionNameVersion, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportDefinitionNameVersion** | **String**| Name and version of DTD file to download. Some DTDs only have one version. In that case version name is not needed. Some example values are ctdr-1.0, tdr, pbdr-1.1 | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/xml-dtd

