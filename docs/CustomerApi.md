# CyberSource.CustomerApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /tms/v2/customers/{customerTokenId} | Delete a Customer
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /tms/v2/customers/{customerTokenId} | Retrieve a Customer
[**patchCustomer**](CustomerApi.md#patchCustomer) | **PATCH** /tms/v2/customers/{customerTokenId} | Update a Customer
[**postCustomer**](CustomerApi.md#postCustomer) | **POST** /tms/v2/customers | Create a Customer


<a name="deleteCustomer"></a>
# **deleteCustomer**
> deleteCustomer(customerTokenId, opts)

Delete a Customer

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var opts = { 
  'profileId': "profileId_example" // String | The id of a profile containing user specific TMS configuration.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCustomer(customerTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomer"></a>
# **getCustomer**
> TmsV2CustomersResponse getCustomer(customerTokenId, opts)

Retrieve a Customer

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var opts = { 
  'profileId': "profileId_example" // String | The id of a profile containing user specific TMS configuration.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomer(customerTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**TmsV2CustomersResponse**](TmsV2CustomersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchCustomer"></a>
# **patchCustomer**
> TmsV2CustomersResponse patchCustomer(customerTokenId, patchCustomerRequest, opts)

Update a Customer

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var patchCustomerRequest = new CyberSource.PatchCustomerRequest(); // PatchCustomerRequest | 

var opts = { 
  'profileId': "profileId_example", // String | The id of a profile containing user specific TMS configuration.
  'ifMatch': "ifMatch_example" // String | Contains an ETag value from a GET request to make the request conditional.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchCustomer(customerTokenId, patchCustomerRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **patchCustomerRequest** | [**PatchCustomerRequest**](PatchCustomerRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**TmsV2CustomersResponse**](TmsV2CustomersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postCustomer"></a>
# **postCustomer**
> TmsV2CustomersResponse postCustomer(postCustomerRequest, opts)

Create a Customer

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var postCustomerRequest = new CyberSource.PostCustomerRequest(); // PostCustomerRequest | 

var opts = { 
  'profileId': "profileId_example" // String | The id of a profile containing user specific TMS configuration.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postCustomer(postCustomerRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postCustomerRequest** | [**PostCustomerRequest**](PostCustomerRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**TmsV2CustomersResponse**](TmsV2CustomersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

