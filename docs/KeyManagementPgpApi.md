# CyberSource.KeyManagementPgpApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**updatePGP**](KeyManagementPgpApi.md#updatePGP) | **PATCH** /kms/v2/keys-pgp/{keyId} | Activate or De-activate PGP Key


<a name="updatePGP"></a>
# **updatePGP**
> Object updatePGP(keyId, updatePGPKeysRequest)

Activate or De-activate PGP Key

Activate or De-activate PGP Key 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.KeyManagementPgpApi();

var keyId = "keyId_example"; // String | Key ID. 

var updatePGPKeysRequest = new CyberSource.UpdatePGPKeysRequest(); // UpdatePGPKeysRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePGP(keyId, updatePGPKeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | **String**| Key ID.  | 
 **updatePGPKeysRequest** | [**UpdatePGPKeysRequest**](UpdatePGPKeysRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

