# CyberSource.KeyManagementScmpApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updateSCMP**](KeyManagementScmpApi.md#updateSCMP) | **PATCH** /kms/v2/keys-scmp/{keyId} | Update or Deactivate


<a name="updateSCMP"></a>
# **updateSCMP**
> Object updateSCMP(keyId, updatePGPKeysRequest)

Update or Deactivate

Update or Deactivate scmp api Key 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.KeyManagementScmpApi();

var keyId = "keyId_example"; // String | Key ID. 

var updatePGPKeysRequest = new CyberSource.UpdatePGPKeysRequest1(); // UpdatePGPKeysRequest1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSCMP(keyId, updatePGPKeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | **String**| Key ID.  | 
 **updatePGPKeysRequest** | [**UpdatePGPKeysRequest1**](UpdatePGPKeysRequest1.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

