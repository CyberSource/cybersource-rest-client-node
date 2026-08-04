# CyberSource.MerchantCapabilitiesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateMerchantKey**](MerchantCapabilitiesApi.md#activateMerchantKey) | **POST** /icc/v1/merchants/{merchantId}/keys/{keyId}/activate | Activate a merchant key
[**addMerchantKey**](MerchantCapabilitiesApi.md#addMerchantKey) | **POST** /icc/v1/merchants/{merchantId}/keys | Add a key to a merchant
[**deactivateMerchantKey**](MerchantCapabilitiesApi.md#deactivateMerchantKey) | **DELETE** /icc/v1/merchants/{merchantId}/keys/{keyId} | Deactivate a merchant key
[**getAllProducts**](MerchantCapabilitiesApi.md#getAllProducts) | **GET** /icc/v1/products | Get All Products
[**getMerchant**](MerchantCapabilitiesApi.md#getMerchant) | **GET** /icc/v1/merchants/{merchantId} | Get a merchant
[**getMerchantKey**](MerchantCapabilitiesApi.md#getMerchantKey) | **GET** /icc/v1/merchants/{merchantId}/keys/{keyId} | Get a key by merchant and key ID
[**getProduct**](MerchantCapabilitiesApi.md#getProduct) | **GET** /icc/v1/products/{product_id} | Get Product by ID
[**ingestProductFeedJson**](MerchantCapabilitiesApi.md#ingestProductFeedJson) | **POST** /icc/v1/products/feed | Ingest Product Feed
[**listMerchantKeys**](MerchantCapabilitiesApi.md#listMerchantKeys) | **GET** /icc/v1/merchants/{merchantId}/keys | List keys for a merchant
[**registerMerchant**](MerchantCapabilitiesApi.md#registerMerchant) | **POST** /icc/v1/merchants | Register a merchant
[**updateMerchant**](MerchantCapabilitiesApi.md#updateMerchant) | **PUT** /icc/v1/merchants/{merchantId} | Update a merchant
[**updateMerchantKey**](MerchantCapabilitiesApi.md#updateMerchantKey) | **PUT** /icc/v1/merchants/{merchantId}/keys/{keyId} | Update a merchant key


<a name="activateMerchantKey"></a>
# **activateMerchantKey**
> ActivateMerchantKeyResponse200 activateMerchantKey(merchantId, keyId)

Activate a merchant key

Activate a deactivated key. Raises 403 if merchant is deactivated, 404 if merchant or key not found, 409 if key is already active.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

Add a new encryption key for a merchant. Raises 401 if not authenticated, 403 if caller does not own the merchant, 404 if merchant not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

<a name="deactivateMerchantKey"></a>
# **deactivateMerchantKey**
> DeactivateMerchantKeyResponse200 deactivateMerchantKey(merchantId, keyId)

Deactivate a merchant key

Deactivate a key (soft delete). Raises 401 if not authenticated, 403 if caller does not own the merchant, 404 if key not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

var merchantId = "merchantId_example"; // String | Unique merchant identifier (UUID)

var keyId = "keyId_example"; // String | Unique key identifier (UUID)


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deactivateMerchantKey(merchantId, keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **String**| Unique merchant identifier (UUID) | 
 **keyId** | **String**| Unique key identifier (UUID) | 

### Return type

[**DeactivateMerchantKeyResponse200**](DeactivateMerchantKeyResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getAllProducts"></a>
# **getAllProducts**
> InlineResponse20020 getAllProducts(getAllProductsRequest, opts)

Get All Products

Returns the full product catalog stored in ACG.  **Note:** This endpoint is intended for catalog verification and merchant tooling. It is not a real-time product discovery API for end buyers. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

var getAllProductsRequest = null; // Object | Empty request body.

var opts = { 
  'page': 0, // Number | Page number to retrieve (0-based). Defaults to 0.
  'size': 300 // Number | Number of products per page. Defaults to 300. Server enforces a maximum of 1000; values above 1000 are capped. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllProducts(getAllProductsRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getAllProductsRequest** | **Object**| Empty request body. | 
 **page** | **Number**| Page number to retrieve (0-based). Defaults to 0. | [optional] [default to 0]
 **size** | **Number**| Number of products per page. Defaults to 300. Server enforces a maximum of 1000; values above 1000 are capped.  | [optional] [default to 300]

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getMerchant"></a>
# **getMerchant**
> MerchantRegistrationResponse201 getMerchant(merchantId)

Get a merchant

Get merchant by ID with all associated keys. Raises 404 if merchant not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

Get a specific key by merchant ID and key ID. Raises 401 if not authenticated, 404 if key not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

<a name="getProduct"></a>
# **getProduct**
> InlineResponse20021 getProduct(productId, getProductRequest)

Get Product by ID

Retrieves a single product from the ACG catalog by its unique product identifier (SKU).  Use this to verify that a product was ingested correctly, inspect its current field values, or check its syndication-eligibility flags (`is_eligible_search`, `is_eligible_checkout`). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

var productId = "productId_example"; // String | The unique product identifier (SKU) assigned by the merchant and provided during feed ingestion. Example: `SKU-1001`. 

var getProductRequest = null; // Object | Empty request body.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProduct(productId, getProductRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productId** | **String**| The unique product identifier (SKU) assigned by the merchant and provided during feed ingestion. Example: `SKU-1001`.  | 
 **getProductRequest** | **Object**| Empty request body. | 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ingestProductFeedJson"></a>
# **ingestProductFeedJson**
> InlineResponse20019 ingestProductFeedJson(productFeedRequest)

Ingest Product Feed

Uploads a merchant product catalog to ACG and triggers asynchronous syndication to all configured protocol backends (e.g. Google Merchant Center).  **Processing pipeline:** 1. Each product is validated against UCP/ACP schema requirements (required fields, format rules) 2. Valid products are saved to the ACG catalog 3. An async syndication job is triggered to push the catalog to configured backends 4. A `feed_id` is returned — use this with the Syndication Status endpoint to monitor progress  **Supported content types:** `application/json` (this endpoint). CSV and JSONL uploads are also supported via file upload endpoints.  **Partial success:** If some products fail validation, the response status is `PARTIAL_SUCCESS` and the `errors` array lists the per-product validation failures. Successfully validated products are still ingested and syndicated. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

var productFeedRequest = new CyberSource.ProductFeedRequest(); // ProductFeedRequest | Product feed payload. The `products` array is required and must contain at least one product. See `ProductInput` for the full list of required fields. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ingestProductFeedJson(productFeedRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFeedRequest** | [**ProductFeedRequest**](ProductFeedRequest.md)| Product feed payload. The `products` array is required and must contain at least one product. See `ProductInput` for the full list of required fields.  | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="listMerchantKeys"></a>
# **listMerchantKeys**
> ListMerchantKeysResponse200 listMerchantKeys(merchantId, opts)

List keys for a merchant

List all keys for a specific merchant with optional filtering by status. Raises 404 if merchant not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

Onboard a new merchant into the VMRS. The merchant declares how they want payment data delivered: cryptogram type (TAVV or DAVV), transaction indicator (TAP, ACG, or Both), whether credentials should be encrypted, and their public encryption key if encryption is enabled. Raises 409 if merchantUrl or vmid already exists.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

Update merchant configuration. Updatable fields: merchantName, merchantUrl, cryptogramType, acceptanceRelationships, protocolInteractions, webIntegrations, apiIntegrations. Partial updates are supported — only provided fields are changed. The vmid, indicator, and paymentPayloadType fields are not updatable here; use the enable/disable-payment-encryption endpoints for encryption changes. Raises 404 if merchant not found, 403 if merchant is deactivated, 409 if new merchantUrl already exists.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

Update key information. Updatable fields are keyName, encryptionKey, algorithm, encryptionType, and expirationDate. Raises 401 if not authenticated, 403 if caller does not own the merchant or if merchant/key is deactivated, 404 if merchant or key not found, 409 if new keyName already exists.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantCapabilitiesApi();

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

