# CyberSource.KeyManagementPasswordApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatePassword**](KeyManagementPasswordApi.md#updatePassword) | **PATCH** /kms/v2/keys-password/{keyId} | Activate or De-activate Password


<a name="updatePassword"></a>
# **updatePassword**
> Object updatePassword(keyId, updatePasswordKeysRequest)

Activate or De-activate Password

Activate or De-activate key of type password 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.KeyManagementPasswordApi();

var keyId = "keyId_example"; // String | Key ID. 

var updatePasswordKeysRequest = new CyberSource.UpdatePasswordKeysRequest(); // UpdatePasswordKeysRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePassword(keyId, updatePasswordKeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | **String**| Key ID.  | 
 **updatePasswordKeysRequest** | [**UpdatePasswordKeysRequest**](UpdatePasswordKeysRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

