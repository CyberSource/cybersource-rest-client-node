# CyberSource.PaymentInstrumentApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletePaymentInstrument**](PaymentInstrumentApi.md#deletePaymentInstrument) | **DELETE** /tms/v1/paymentinstruments/{paymentInstrumentTokenId} | Delete a Payment Instrument
[**getPaymentInstrument**](PaymentInstrumentApi.md#getPaymentInstrument) | **GET** /tms/v1/paymentinstruments/{paymentInstrumentTokenId} | Retrieve a Payment Instrument
[**patchPaymentInstrument**](PaymentInstrumentApi.md#patchPaymentInstrument) | **PATCH** /tms/v1/paymentinstruments/{paymentInstrumentTokenId} | Update a Payment Instrument
[**postPaymentInstrument**](PaymentInstrumentApi.md#postPaymentInstrument) | **POST** /tms/v1/paymentinstruments | Create a Payment Instrument


<a name="deletePaymentInstrument"></a>
# **deletePaymentInstrument**
> deletePaymentInstrument(paymentInstrumentTokenId, opts)

Delete a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

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
apiInstance.deletePaymentInstrument(paymentInstrumentTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentInstrumentTokenId** | **String**| The TokenId of a payment instrument. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getPaymentInstrument"></a>
# **getPaymentInstrument**
> Tmsv2customersEmbeddedDefaultPaymentInstrument getPaymentInstrument(paymentInstrumentTokenId, opts)

Retrieve a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

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
apiInstance.getPaymentInstrument(paymentInstrumentTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentInstrumentTokenId** | **String**| The TokenId of a payment instrument. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrument**](Tmsv2customersEmbeddedDefaultPaymentInstrument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchPaymentInstrument"></a>
# **patchPaymentInstrument**
> Tmsv2customersEmbeddedDefaultPaymentInstrument patchPaymentInstrument(paymentInstrumentTokenId, patchPaymentInstrumentRequest, opts)

Update a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var paymentInstrumentTokenId = "paymentInstrumentTokenId_example"; // String | The TokenId of a payment instrument.

var patchPaymentInstrumentRequest = new CyberSource.PatchPaymentInstrumentRequest(); // PatchPaymentInstrumentRequest | 

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
apiInstance.patchPaymentInstrument(paymentInstrumentTokenId, patchPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentInstrumentTokenId** | **String**| The TokenId of a payment instrument. | 
 **patchPaymentInstrumentRequest** | [**PatchPaymentInstrumentRequest**](PatchPaymentInstrumentRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrument**](Tmsv2customersEmbeddedDefaultPaymentInstrument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postPaymentInstrument"></a>
# **postPaymentInstrument**
> Tmsv2customersEmbeddedDefaultPaymentInstrument postPaymentInstrument(postPaymentInstrumentRequest, opts)

Create a Payment Instrument

Include an existing TMS Instrument Identifier id in the request body. * An Instrument Identifier token can be created by calling: **POST *_/tms/v1/instrumentidentifiers*** 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var postPaymentInstrumentRequest = new CyberSource.PostPaymentInstrumentRequest(); // PostPaymentInstrumentRequest | 

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
apiInstance.postPaymentInstrument(postPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postPaymentInstrumentRequest** | [**PostPaymentInstrumentRequest**](PostPaymentInstrumentRequest.md)|  | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrument**](Tmsv2customersEmbeddedDefaultPaymentInstrument.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

