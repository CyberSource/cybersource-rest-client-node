# CyberSource.ProductFeedApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllProducts**](ProductFeedApi.md#getAllProducts) | **GET** /icc/v1/products | Get All Products
[**getFeedJobStatus**](ProductFeedApi.md#getFeedJobStatus) | **GET** /icc/v1/products/feed/bulk/{jobId} | Get Feed Job Status
[**getProduct**](ProductFeedApi.md#getProduct) | **GET** /icc/v1/products/{product_id} | Get Product by ID
[**submitProductFeedJson**](ProductFeedApi.md#submitProductFeedJson) | **POST** /icc/v1/products/feed | Ingest Product Feed


<a name="getAllProducts"></a>
# **getAllProducts**
> InlineResponse20020 getAllProducts(getAllProductsRequest, opts)

Get All Products

Returns the full product catalog stored in ACG.  **Note:** This endpoint is intended for catalog verification and merchant tooling. It is not a real-time product discovery API for end buyers. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ProductFeedApi();

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

<a name="getFeedJobStatus"></a>
# **getFeedJobStatus**
> InlineResponse20019 getFeedJobStatus(jobId, getFeedJobStatusRequest)

Get Feed Job Status

Returns the processing and syndication status of a previously submitted product feed job.  Use this to poll the `jobId` returned by the Ingest Product Feed endpoint until processing and syndication complete. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ProductFeedApi();

var jobId = "550e8400-e29b-41d4-a716-446655440000"; // String | Unique identifier of the feed submission job, returned by the Ingest Product Feed endpoint. 

var getFeedJobStatusRequest = null; // Object | Empty request body.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFeedJobStatus(jobId, getFeedJobStatusRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**String**](.md)| Unique identifier of the feed submission job, returned by the Ingest Product Feed endpoint.  | 
 **getFeedJobStatusRequest** | **Object**| Empty request body. | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

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

var apiInstance = new CyberSource.ProductFeedApi();

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

<a name="submitProductFeedJson"></a>
# **submitProductFeedJson**
> InlineResponse2021 submitProductFeedJson(productFeedRequest)

Ingest Product Feed

Submits a merchant product catalog to ACG for asynchronous processing and syndication to all configured protocol backends (e.g. Google Merchant Center).  **Processing pipeline:** 1. The request is accepted immediately and a `jobId` is returned — validation, ingestion,    and syndication all happen asynchronously in the background. 2. Each product is validated against UCP/ACP schema requirements (required fields, format rules) 3. Valid products are saved to the ACG catalog 4. An async syndication job is triggered to push the catalog to configured backends  **Supported content types:** `application/json` (this endpoint). CSV and JSONL uploads are also supported via file upload endpoints.  **Note:** This endpoint no longer returns per-product validation results or syndication outcomes synchronously — only the `jobId` acknowledgement shown below. Use that `jobId` to track processing and syndication status. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ProductFeedApi();

var productFeedRequest = new CyberSource.ProductFeedRequest(); // ProductFeedRequest | Product feed payload. The `products` array is required and must contain at least one product. See `ProductInput` for the full list of required fields. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.submitProductFeedJson(productFeedRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productFeedRequest** | [**ProductFeedRequest**](ProductFeedRequest.md)| Product feed payload. The `products` array is required and must contain at least one product. See `ProductInput` for the full list of required fields.  | 

### Return type

[**InlineResponse2021**](InlineResponse2021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

