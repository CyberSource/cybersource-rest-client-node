# CyberSource.CustomerPaymentInstrumentApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomerPaymentInstrument**](CustomerPaymentInstrumentApi.md#deleteCustomerPaymentInstrument) | **DELETE** /tms/v2/customers/{customerTokenId}/payment-instruments/{paymentInstrumentTokenId} | Delete a Customer Payment Instrument
[**getCustomerPaymentInstrument**](CustomerPaymentInstrumentApi.md#getCustomerPaymentInstrument) | **GET** /tms/v2/customers/{customerTokenId}/payment-instruments/{paymentInstrumentTokenId} | Retrieve a Customer Payment Instrument
[**getCustomerPaymentInstrumentsList**](CustomerPaymentInstrumentApi.md#getCustomerPaymentInstrumentsList) | **GET** /tms/v2/customers/{customerTokenId}/payment-instruments | List Payment Instruments for a Customer
[**patchCustomersPaymentInstrument**](CustomerPaymentInstrumentApi.md#patchCustomersPaymentInstrument) | **PATCH** /tms/v2/customers/{customerTokenId}/payment-instruments/{paymentInstrumentTokenId} | Update a Customer Payment Instrument
[**postCustomerPaymentInstrument**](CustomerPaymentInstrumentApi.md#postCustomerPaymentInstrument) | **POST** /tms/v2/customers/{customerTokenId}/payment-instruments | Create a Customer Payment Instrument


<a name="deleteCustomerPaymentInstrument"></a>
# **deleteCustomerPaymentInstrument**
> deleteCustomerPaymentInstrument(customerTokenId, paymentInstrumentTokenId, opts)

Delete a Customer Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var paymentInstrumentTokenId = "paymentInstrumentTokenId_example"; // String | The TokenId of a payment instrument.

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
apiInstance.deleteCustomerPaymentInstrument(customerTokenId, paymentInstrumentTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **paymentInstrumentTokenId** | **String**| The TokenId of a payment instrument. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerPaymentInstrument"></a>
# **getCustomerPaymentInstrument**
> Tmsv2customersEmbeddedDefaultPaymentInstrument getCustomerPaymentInstrument(customerTokenId, paymentInstrumentTokenId, opts)

Retrieve a Customer Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var paymentInstrumentTokenId = "paymentInstrumentTokenId_example"; // String | The TokenId of a payment instrument.

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
apiInstance.getCustomerPaymentInstrument(customerTokenId, paymentInstrumentTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **paymentInstrumentTokenId** | **String**| The TokenId of a payment instrument. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrument**](Tmsv2customersEmbeddedDefaultPaymentInstrument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerPaymentInstrumentsList"></a>
# **getCustomerPaymentInstrumentsList**
> PaymentInstrumentList getCustomerPaymentInstrumentsList(customerTokenId, opts)

List Payment Instruments for a Customer

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

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
apiInstance.getCustomerPaymentInstrumentsList(customerTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **offset** | **Number**| Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] [default to 0]
 **limit** | **Number**| The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**PaymentInstrumentList**](PaymentInstrumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchCustomersPaymentInstrument"></a>
# **patchCustomersPaymentInstrument**
> Tmsv2customersEmbeddedDefaultPaymentInstrument patchCustomersPaymentInstrument(customerTokenId, paymentInstrumentTokenId, patchCustomerPaymentInstrumentRequest, opts)

Update a Customer Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var paymentInstrumentTokenId = "paymentInstrumentTokenId_example"; // String | The TokenId of a payment instrument.

var patchCustomerPaymentInstrumentRequest = new CyberSource.PatchCustomerPaymentInstrumentRequest(); // PatchCustomerPaymentInstrumentRequest | 

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
apiInstance.patchCustomersPaymentInstrument(customerTokenId, paymentInstrumentTokenId, patchCustomerPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **paymentInstrumentTokenId** | **String**| The TokenId of a payment instrument. | 
 **patchCustomerPaymentInstrumentRequest** | [**PatchCustomerPaymentInstrumentRequest**](PatchCustomerPaymentInstrumentRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrument**](Tmsv2customersEmbeddedDefaultPaymentInstrument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postCustomerPaymentInstrument"></a>
# **postCustomerPaymentInstrument**
> Tmsv2customersEmbeddedDefaultPaymentInstrument postCustomerPaymentInstrument(customerTokenId, postCustomerPaymentInstrumentRequest, opts)

Create a Customer Payment Instrument

Include an existing TMS Customer &amp; Instrument Identifier token id in the request. * A Customer token can be created by calling: **POST *_/tms/v2/customers*** * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerTokenId = "customerTokenId_example"; // String | The TokenId of a customer.

var postCustomerPaymentInstrumentRequest = new CyberSource.PostCustomerPaymentInstrumentRequest(); // PostCustomerPaymentInstrumentRequest | 

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
apiInstance.postCustomerPaymentInstrument(customerTokenId, postCustomerPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerTokenId** | **String**| The TokenId of a customer. | 
 **postCustomerPaymentInstrumentRequest** | [**PostCustomerPaymentInstrumentRequest**](PostCustomerPaymentInstrumentRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrument**](Tmsv2customersEmbeddedDefaultPaymentInstrument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

