# CyberSource.MerchantRegistrationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateMerchantKey**](MerchantRegistrationApi.md#activateMerchantKey) | **POST** /icc/v1/merchants/{merchantId}/keys/{keyId}/activate | Activate a merchant key
[**addMerchantKey**](MerchantRegistrationApi.md#addMerchantKey) | **POST** /icc/v1/merchants/{merchantId}/keys | Add a key to a merchant
[**getMerchant**](MerchantRegistrationApi.md#getMerchant) | **GET** /icc/v1/merchants/{merchantId} | Get a merchant
[**getMerchantKey**](MerchantRegistrationApi.md#getMerchantKey) | **GET** /icc/v1/merchants/{merchantId}/keys/{keyId} | Get a key by merchant and key ID
[**listMerchantKeys**](MerchantRegistrationApi.md#listMerchantKeys) | **GET** /icc/v1/merchants/{merchantId}/keys | List keys for a merchant
[**registerMerchant**](MerchantRegistrationApi.md#registerMerchant) | **POST** /icc/v1/merchants | Register a merchant
[**updateMerchant**](MerchantRegistrationApi.md#updateMerchant) | **PUT** /icc/v1/merchants/{merchantId} | Update a merchant
[**updateMerchantKey**](MerchantRegistrationApi.md#updateMerchantKey) | **PUT** /icc/v1/merchants/{merchantId}/keys/{keyId} | Update a merchant key


<a name="activateMerchantKey"></a>
# **activateMerchantKey**
> ActivateMerchantKeyResponse200 activateMerchantKey(merchantId, keyId)

Activate a merchant key

**Activate a Merchant Key**<br>Activates a deactivated encryption key for the specified merchant.<br><br> **Note:** Expired keys must be renewed via `PUT /merchants/{merchantId}/keys/{keyId}` before they can be activated.<br> Returns **403** if the merchant is deactivated or the key is expired, **404** if the merchant or key is not found, **409** if the key is already active. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var keyId = "keyId_example"; // String | Unique key identifier (UUID)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateMerchantKey(merchantId, keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **keyId** | **String**| Unique key identifier (UUID) | 

### Return type

[**ActivateMerchantKeyResponse200**](ActivateMerchantKeyResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="addMerchantKey"></a>
# **addMerchantKey**
> ActivateMerchantKeyResponse200 addMerchantKey(merchantId, keyRequest)

Add a key to a merchant

**Add a Key to a Merchant**<br>Adds a new encryption key for the specified merchant. The new key is created as ***active*** immediately.<br><br> **Note:** Adding a new key automatically deactivates all previously active keys for this merchant (single-active key invariant).<br> Returns **403** if the merchant is deactivated, **404** if the merchant is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var keyRequest = new CyberSource.KeyRequest1(); // KeyRequest1 | Key creation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addMerchantKey(merchantId, keyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **keyRequest** | [**KeyRequest1**](KeyRequest1.md)| Key creation request | 

### Return type

[**ActivateMerchantKeyResponse200**](ActivateMerchantKeyResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getMerchant"></a>
# **getMerchant**
> MerchantRegistrationResponse201 getMerchant(merchantId)

Get a merchant

**Get a Merchant**<br>Retrieves a single merchant by its unique identifier, including all associated encryption keys.<br><br> Returns **404** if the merchant is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMerchant(merchantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 

### Return type

[**MerchantRegistrationResponse201**](MerchantRegistrationResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getMerchantKey"></a>
# **getMerchantKey**
> ActivateMerchantKeyResponse200 getMerchantKey(merchantId, keyId)

Get a key by merchant and key ID

**Get a Merchant Key**<br>Retrieves a specific encryption key by merchant ID and key ID.<br><br> Returns **404** if the merchant or key is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var keyId = "keyId_example"; // String | Unique key identifier (UUID)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMerchantKey(merchantId, keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **keyId** | **String**| Unique key identifier (UUID) | 

### Return type

[**ActivateMerchantKeyResponse200**](ActivateMerchantKeyResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="listMerchantKeys"></a>
# **listMerchantKeys**
> ListMerchantKeysResponse200 listMerchantKeys(merchantId, opts)

List keys for a merchant

**List Keys for a Merchant**<br>Returns all encryption keys associated with the specified merchant, with optional filtering by key status.<br><br> Returns **404** if the merchant is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var opts = { 
  'status': "status_example" // String | Filter by key status: 'active', 'deactivated', or 'expired'. Omit to return all keys.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listMerchantKeys(merchantId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **status** | **String**| Filter by key status: 'active', 'deactivated', or 'expired'. Omit to return all keys. | [optional] 

### Return type

[**ListMerchantKeysResponse200**](ListMerchantKeysResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="registerMerchant"></a>
# **registerMerchant**
> MerchantRegistrationResponse201 registerMerchant(merchantRequest)

Register a merchant

**Register a Merchant**<br>Onboards a new merchant into the Visa Merchant Registry Service (VMRS). The merchant declares how payment credentials should be delivered: cryptogram type (TAVV or DAVV), transaction indicator (TAP — Trusted Agent Protocol, ACG — Agentic Checkout Gateway, or BOTH), and whether credentials should be encrypted.<br><br> If `paymentPayloadType` is set to ***ENCRYPTED***, an `encryptionKey` must be provided.<br> Returns **409** if a merchant with the same `merchantUrl` or `vmid` already exists. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantRequest = new CyberSource.MerchantRequest(); // MerchantRequest | Merchant registration request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerMerchant(merchantRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantRequest** | [**MerchantRequest**](MerchantRequest.md)| Merchant registration request | 

### Return type

[**MerchantRegistrationResponse201**](MerchantRegistrationResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateMerchant"></a>
# **updateMerchant**
> MerchantRegistrationResponse201 updateMerchant(merchantId, merchantUpdate)

Update a merchant

**Update a Merchant**<br>Updates merchant configuration. The following fields can be modified: `merchantName`, `merchantUrl`, `cryptogramType`, `paymentPayloadType`, `acceptanceRelationships`, `protocolInteractions`, `webIntegrations`, and `apiIntegrations`.<br><br> Partial updates are supported — only provided fields are changed. The `vmid` and `indicator` fields cannot be updated via this endpoint.<br> Returns **400** if switching to ***ENCRYPTED*** without an active encryption key, **403** if the merchant is deactivated, **404** if not found, **409** if the new `merchantUrl` already exists. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var merchantUpdate = new CyberSource.MerchantUpdate(); // MerchantUpdate | Merchant update request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMerchant(merchantId, merchantUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **merchantUpdate** | [**MerchantUpdate**](MerchantUpdate.md)| Merchant update request | 

### Return type

[**MerchantRegistrationResponse201**](MerchantRegistrationResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateMerchantKey"></a>
# **updateMerchantKey**
> ActivateMerchantKeyResponse200 updateMerchantKey(merchantId, keyId, keyUpdate)

Update a merchant key

**Update a Merchant Key**<br>Updates encryption key information. The following fields can be modified: `keyName`, `encryptionKey`, `algorithm`, `encryptionType`, and `expirationDate`.<br><br> Returns **403** if the merchant is deactivated, key is deactivated, or key is expired, **404** if the merchant or key is not found, **409** if the new `keyName` already exists. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantRegistrationApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var keyId = "keyId_example"; // String | Unique key identifier (UUID)

var keyUpdate = new CyberSource.KeyUpdate1(); // KeyUpdate1 | Key update request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateMerchantKey(merchantId, keyId, keyUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **keyId** | **String**| Unique key identifier (UUID) | 
 **keyUpdate** | [**KeyUpdate1**](KeyUpdate1.md)| Key update request | 

### Return type

[**ActivateMerchantKeyResponse200**](ActivateMerchantKeyResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

