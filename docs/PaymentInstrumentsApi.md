# CyberSource.PaymentInstrumentsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet**](PaymentInstrumentsApi.md#tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet) | **GET** /tms/v1/instrumentidentifiers/{tokenId}/paymentinstruments | Retrieve all Payment Instruments associated with an Instrument Identifier
[**tmsV1PaymentinstrumentsPost**](PaymentInstrumentsApi.md#tmsV1PaymentinstrumentsPost) | **POST** /tms/v1/paymentinstruments | Create a Payment Instrument
[**tmsV1PaymentinstrumentsTokenIdDelete**](PaymentInstrumentsApi.md#tmsV1PaymentinstrumentsTokenIdDelete) | **DELETE** /tms/v1/paymentinstruments/{tokenId} | Delete a Payment Instrument
[**tmsV1PaymentinstrumentsTokenIdGet**](PaymentInstrumentsApi.md#tmsV1PaymentinstrumentsTokenIdGet) | **GET** /tms/v1/paymentinstruments/{tokenId} | Retrieve a Payment Instrument
[**tmsV1PaymentinstrumentsTokenIdPatch**](PaymentInstrumentsApi.md#tmsV1PaymentinstrumentsTokenIdPatch) | **PATCH** /tms/v1/paymentinstruments/{tokenId} | Update a Payment Instrument


<a name="tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet"></a>
# **tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet**
> TmsV1InstrumentidentifiersPaymentinstrumentsGet200Response tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet(profileId, tokenId, opts)

Retrieve all Payment Instruments associated with an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentsApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var opts = { 
  'offset': "offset_example", // String | Starting Payment Instrument record in zero-based dataset that should be returned as the first object in the array. Default is 0.
  'limit': "20" // String | The maximum number of Payment Instruments that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tmsV1InstrumentidentifiersTokenIdPaymentinstrumentsGet(profileId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **offset** | **String**| Starting Payment Instrument record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] 
 **limit** | **String**| The maximum number of Payment Instruments that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**TmsV1InstrumentidentifiersPaymentinstrumentsGet200Response**](TmsV1InstrumentidentifiersPaymentinstrumentsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="tmsV1PaymentinstrumentsPost"></a>
# **tmsV1PaymentinstrumentsPost**
> TmsV1PaymentinstrumentsPost201Response tmsV1PaymentinstrumentsPost(profileId, body)

Create a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentsApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var body = new CyberSource.Body2(); // Body2 | Please specify the customers payment details for card or bank account.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tmsV1PaymentinstrumentsPost(profileId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **body** | [**Body2**](Body2.md)| Please specify the customers payment details for card or bank account. | 

### Return type

[**TmsV1PaymentinstrumentsPost201Response**](TmsV1PaymentinstrumentsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="tmsV1PaymentinstrumentsTokenIdDelete"></a>
# **tmsV1PaymentinstrumentsTokenIdDelete**
> tmsV1PaymentinstrumentsTokenIdDelete(profileId, tokenId)

Delete a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentsApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.tmsV1PaymentinstrumentsTokenIdDelete(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="tmsV1PaymentinstrumentsTokenIdGet"></a>
# **tmsV1PaymentinstrumentsTokenIdGet**
> TmsV1PaymentinstrumentsGet200Response tmsV1PaymentinstrumentsTokenIdGet(profileId, tokenId)

Retrieve a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentsApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tmsV1PaymentinstrumentsTokenIdGet(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 

### Return type

[**TmsV1PaymentinstrumentsGet200Response**](TmsV1PaymentinstrumentsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="tmsV1PaymentinstrumentsTokenIdPatch"></a>
# **tmsV1PaymentinstrumentsTokenIdPatch**
> TmsV1PaymentinstrumentsGet200Response tmsV1PaymentinstrumentsTokenIdPatch(profileId, tokenId, body)

Update a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentsApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.

var body = new CyberSource.Body3(); // Body3 | Please specify the customers payment details.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tmsV1PaymentinstrumentsTokenIdPatch(profileId, tokenId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 
 **body** | [**Body3**](Body3.md)| Please specify the customers payment details. | 

### Return type

[**TmsV1PaymentinstrumentsGet200Response**](TmsV1PaymentinstrumentsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

