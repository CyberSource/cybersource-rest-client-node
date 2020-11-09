# CyberSource.CustomerShippingAddressApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomerShippingAddress**](CustomerShippingAddressApi.md#deleteCustomerShippingAddress) | **DELETE** /tms/v2/customers/{customerTokenId}/shipping-addresses/{shippingAddressTokenId} | Delete a Customer Shipping Address
[**getCustomerShippingAddress**](CustomerShippingAddressApi.md#getCustomerShippingAddress) | **GET** /tms/v2/customers/{customerTokenId}/shipping-addresses/{shippingAddressTokenId} | Retrieve a Customer Shipping Address
[**getCustomerShippingAddressesList**](CustomerShippingAddressApi.md#getCustomerShippingAddressesList) | **GET** /tms/v2/customers/{customerTokenId}/shipping-addresses | List Shipping Addresses for a Customer
[**patchCustomersShippingAddress**](CustomerShippingAddressApi.md#patchCustomersShippingAddress) | **PATCH** /tms/v2/customers/{customerTokenId}/shipping-addresses/{shippingAddressTokenId} | Update a Customer Shipping Address
[**postCustomerShippingAddress**](CustomerShippingAddressApi.md#postCustomerShippingAddress) | **POST** /tms/v2/customers/{customerTokenId}/shipping-addresses | Create a Customer Shipping Address


<a name="deleteCustomerShippingAddress"></a>
# **deleteCustomerShippingAddress**
> deleteCustomerShippingAddress(customerTokenId, shippingAddressTokenId, opts)

Delete a Customer Shipping Address

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var shippingAddressTokenId = "shippingAddressTokenId_example"; // String | The TokenId of an shipping address.

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
apiInstance.deleteCustomerShippingAddress(customerTokenId, shippingAddressTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **shippingAddressTokenId** | **String**| The TokenId of an shipping address. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerShippingAddress"></a>
# **getCustomerShippingAddress**
> Tmsv2customersEmbeddedDefaultShippingAddress getCustomerShippingAddress(customerTokenId, shippingAddressTokenId, opts)

Retrieve a Customer Shipping Address

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var shippingAddressTokenId = "shippingAddressTokenId_example"; // String | The TokenId of an shipping address.

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
apiInstance.getCustomerShippingAddress(customerTokenId, shippingAddressTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **shippingAddressTokenId** | **String**| The TokenId of an shipping address. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultShippingAddress**](Tmsv2customersEmbeddedDefaultShippingAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerShippingAddressesList"></a>
# **getCustomerShippingAddressesList**
> ShippingAddressListForCustomer getCustomerShippingAddressesList(customerTokenId, opts)

List Shipping Addresses for a Customer

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var opts = { 
  'profileId': "profileId_example", // String | The id of a profile containing user specific TMS configuration.
  'offset': 0, // Number | Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0.
  'limit': 20 // Number | The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerShippingAddressesList(customerTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **offset** | **Number**| Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] [default to 0]
 **limit** | **Number**| The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**ShippingAddressListForCustomer**](ShippingAddressListForCustomer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchCustomersShippingAddress"></a>
# **patchCustomersShippingAddress**
> Tmsv2customersEmbeddedDefaultShippingAddress patchCustomersShippingAddress(customerTokenId, shippingAddressTokenId, patchCustomerShippingAddressRequest, opts)

Update a Customer Shipping Address

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var shippingAddressTokenId = "shippingAddressTokenId_example"; // String | The TokenId of an shipping address.

var patchCustomerShippingAddressRequest = new CyberSource.PatchCustomerShippingAddressRequest(); // PatchCustomerShippingAddressRequest | 

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
apiInstance.patchCustomersShippingAddress(customerTokenId, shippingAddressTokenId, patchCustomerShippingAddressRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **shippingAddressTokenId** | **String**| The TokenId of an shipping address. | 
 **patchCustomerShippingAddressRequest** | [**PatchCustomerShippingAddressRequest**](PatchCustomerShippingAddressRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultShippingAddress**](Tmsv2customersEmbeddedDefaultShippingAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postCustomerShippingAddress"></a>
# **postCustomerShippingAddress**
> Tmsv2customersEmbeddedDefaultShippingAddress postCustomerShippingAddress(customerTokenId, postCustomerShippingAddressRequest, opts)

Create a Customer Shipping Address

Include an existing TMS Customer token id in the request URI. * A Customer token can be created by calling: **POST *_/tms/v2/customers*** 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var postCustomerShippingAddressRequest = new CyberSource.PostCustomerShippingAddressRequest(); // PostCustomerShippingAddressRequest | 

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
apiInstance.postCustomerShippingAddress(customerTokenId, postCustomerShippingAddressRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **postCustomerShippingAddressRequest** | [**PostCustomerShippingAddressRequest**](PostCustomerShippingAddressRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultShippingAddress**](Tmsv2customersEmbeddedDefaultShippingAddress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

