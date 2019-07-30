# CyberSource.SecureFileShareApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFile**](SecureFileShareApi.md#getFile) | **GET** /sfs/v1/files/{fileId} | Download a file with file identifier
[**getFileDetail**](SecureFileShareApi.md#getFileDetail) | **GET** /sfs/v1/file-details | Get list of files


<a name="getFile"></a>
# **getFile**
> getFile(fileId, opts)

Download a file with file identifier

Download a file for the given file identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SecureFileShareApi();

var fileId = "fileId_example"; // String | Unique identifier for each file

var opts = { 
  'organizationId': "organizationId_example" // String | Valid Cybersource Organization Id
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getFile(fileId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileId** | **String**| Unique identifier for each file | 
 **organizationId** | **String**| Valid Cybersource Organization Id | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/xml, text/csv, application/pdf

<a name="getFileDetail"></a>
# **getFileDetail**
> V1FileDetailsGet200Response getFileDetail(startDate, endDate, opts)

Get list of files

Get list of files and it&#39;s information of them available inside the report directory

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SecureFileShareApi();

var startDate = new Date("2013-10-20"); // Date | Valid start date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd 

var endDate = new Date("2013-10-20"); // Date | Valid end date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd 

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
apiInstance.getFileDetail(startDate, endDate, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startDate** | **Date**| Valid start date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd  | 
 **endDate** | **Date**| Valid end date in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format.[Rfc Date Format](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14)   **Example date format:**   - yyyy-MM-dd  | 
 **organizationId** | **String**| Valid Cybersource Organization Id | [optional] 

### Return type

[**V1FileDetailsGet200Response**](V1FileDetailsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

