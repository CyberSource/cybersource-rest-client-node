# CyberSource.AsymmetricKeyManagementApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createP12Keys**](AsymmetricKeyManagementApi.md#createP12Keys) | **POST** /kms/v2/keys-asym | Create one or more PKCS12 keys
[**deleteBulkP12Keys**](AsymmetricKeyManagementApi.md#deleteBulkP12Keys) | **POST** /kms/v2/keys-asym/deletes | Delete one or more PKCS12 keys
[**getP12KeyDetails**](AsymmetricKeyManagementApi.md#getP12KeyDetails) | **GET** /kms/v2/keys-asym/{keyId} | Retrieves PKCS12 key details


<a name="createP12Keys"></a>
# **createP12Keys**
> KmsV2KeysAsymPost201Response createP12Keys(createP12KeysRequest)

Create one or more PKCS12 keys

&#39;Create one or more PKCS12 keys&#39; 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AsymmetricKeyManagementApi();

var createP12KeysRequest = new CyberSource.CreateP12KeysRequest(); // CreateP12KeysRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createP12Keys(createP12KeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createP12KeysRequest** | [**CreateP12KeysRequest**](CreateP12KeysRequest.md)|  | 

### Return type

[**KmsV2KeysAsymPost201Response**](KmsV2KeysAsymPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="deleteBulkP12Keys"></a>
# **deleteBulkP12Keys**
> KmsV2KeysAsymDeletesPost200Response deleteBulkP12Keys(deleteBulkP12KeysRequest)

Delete one or more PKCS12 keys

&#39;Delete one or more PKCS12 keys&#39; 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AsymmetricKeyManagementApi();

var deleteBulkP12KeysRequest = new CyberSource.DeleteBulkP12KeysRequest(); // DeleteBulkP12KeysRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBulkP12Keys(deleteBulkP12KeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBulkP12KeysRequest** | [**DeleteBulkP12KeysRequest**](DeleteBulkP12KeysRequest.md)|  | 

### Return type

[**KmsV2KeysAsymDeletesPost200Response**](KmsV2KeysAsymDeletesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getP12KeyDetails"></a>
# **getP12KeyDetails**
> KmsV2KeysAsymGet200Response getP12KeyDetails(keyId)

Retrieves PKCS12 key details

Retrieves keys details by providing the key id.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AsymmetricKeyManagementApi();

var keyId = "keyId_example"; // String | Key ID. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getP12KeyDetails(keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | **String**| Key ID.  | 

### Return type

[**KmsV2KeysAsymGet200Response**](KmsV2KeysAsymGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

