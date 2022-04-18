# CyberSource.SymmetricKeyManagementApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createV2SharedSecretKeys**](SymmetricKeyManagementApi.md#createV2SharedSecretKeys) | **POST** /kms/v2/keys-sym | Create Shared-Secret Keys
[**createV2SharedSecretKeysVerifi**](SymmetricKeyManagementApi.md#createV2SharedSecretKeysVerifi) | **POST** /kms/v2/keys-sym/verifi | Create Shared-Secret Keys as per verifi spec
[**deleteBulkSymmetricKeys**](SymmetricKeyManagementApi.md#deleteBulkSymmetricKeys) | **POST** /kms/v2/keys-sym/deletes | Delete one or more Symmetric keys
[**getKeyDetails**](SymmetricKeyManagementApi.md#getKeyDetails) | **GET** /kms/v2/keys-sym/{keyId} | Retrieves shared secret key details


<a name="createV2SharedSecretKeys"></a>
# **createV2SharedSecretKeys**
> KmsV2KeysSymPost201Response createV2SharedSecretKeys(createSharedSecretKeysRequest)

Create Shared-Secret Keys

Create one or more Shared-Secret Keys 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SymmetricKeyManagementApi();

var createSharedSecretKeysRequest = new CyberSource.CreateSharedSecretKeysRequest(); // CreateSharedSecretKeysRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV2SharedSecretKeys(createSharedSecretKeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSharedSecretKeysRequest** | [**CreateSharedSecretKeysRequest**](CreateSharedSecretKeysRequest.md)|  | 

### Return type

[**KmsV2KeysSymPost201Response**](KmsV2KeysSymPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="createV2SharedSecretKeysVerifi"></a>
# **createV2SharedSecretKeysVerifi**
> KmsV2KeysSymPost201Response createV2SharedSecretKeysVerifi(vIcDomain, createSharedSecretKeysVerifiRequest)

Create Shared-Secret Keys as per verifi spec

Create one or more Shared-Secret Keys as per Verifi spec with 32 chars, store digest algo during key generation. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SymmetricKeyManagementApi();

var vIcDomain = "vIcDomain_example"; // String | domain

var createSharedSecretKeysVerifiRequest = new CyberSource.CreateSharedSecretKeysVerifiRequest(); // CreateSharedSecretKeysVerifiRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createV2SharedSecretKeysVerifi(vIcDomain, createSharedSecretKeysVerifiRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vIcDomain** | **String**| domain | 
 **createSharedSecretKeysVerifiRequest** | [**CreateSharedSecretKeysVerifiRequest**](CreateSharedSecretKeysVerifiRequest.md)|  | 

### Return type

[**KmsV2KeysSymPost201Response**](KmsV2KeysSymPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="deleteBulkSymmetricKeys"></a>
# **deleteBulkSymmetricKeys**
> KmsV2KeysSymDeletesPost200Response deleteBulkSymmetricKeys(deleteBulkSymmetricKeysRequest)

Delete one or more Symmetric keys

&#39;Delete one or more Symmetric keys&#39; 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SymmetricKeyManagementApi();

var deleteBulkSymmetricKeysRequest = new CyberSource.DeleteBulkSymmetricKeysRequest(); // DeleteBulkSymmetricKeysRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBulkSymmetricKeys(deleteBulkSymmetricKeysRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deleteBulkSymmetricKeysRequest** | [**DeleteBulkSymmetricKeysRequest**](DeleteBulkSymmetricKeysRequest.md)|  | 

### Return type

[**KmsV2KeysSymDeletesPost200Response**](KmsV2KeysSymDeletesPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getKeyDetails"></a>
# **getKeyDetails**
> KmsV2KeysSymGet200Response getKeyDetails(keyId)

Retrieves shared secret key details

Retrieves keys details by providing the key id.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SymmetricKeyManagementApi();

var keyId = "keyId_example"; // String | Key ID. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getKeyDetails(keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | **String**| Key ID.  | 

### Return type

[**KmsV2KeysSymGet200Response**](KmsV2KeysSymGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

