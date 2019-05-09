# CyberSource.PaymentInstrumentApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPaymentInstrument**](PaymentInstrumentApi.md#createPaymentInstrument) | **POST** /tms/v1/paymentinstruments | Create a Payment Instrument
[**deletePaymentInstrument**](PaymentInstrumentApi.md#deletePaymentInstrument) | **DELETE** /tms/v1/paymentinstruments/{tokenId} | Delete a Payment Instrument
[**getPaymentInstrument**](PaymentInstrumentApi.md#getPaymentInstrument) | **GET** /tms/v1/paymentinstruments/{tokenId} | Retrieve a Payment Instrument
[**updatePaymentInstrument**](PaymentInstrumentApi.md#updatePaymentInstrument) | **PATCH** /tms/v1/paymentinstruments/{tokenId} | Update a Payment Instrument


<a name="createPaymentInstrument"></a>
# **createPaymentInstrument**
> TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments createPaymentInstrument(profileId, createPaymentInstrumentRequest)

Create a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var createPaymentInstrumentRequest = new CyberSource.CreatePaymentInstrumentRequest(); // CreatePaymentInstrumentRequest | Specify the customer's payment details for card or bank account.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPaymentInstrument(profileId, createPaymentInstrumentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **createPaymentInstrumentRequest** | [**CreatePaymentInstrumentRequest**](CreatePaymentInstrumentRequest.md)| Specify the customer&#39;s payment details for card or bank account. | 

### Return type

[**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="deletePaymentInstrument"></a>
# **deletePaymentInstrument**
> deletePaymentInstrument(profileId, tokenId)

Delete a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePaymentInstrument(profileId, tokenId, callback);
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

<a name="getPaymentInstrument"></a>
# **getPaymentInstrument**
> TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments getPaymentInstrument(profileId, tokenId)

Retrieve a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentInstrument(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 

### Return type

[**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updatePaymentInstrument"></a>
# **updatePaymentInstrument**
> TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments updatePaymentInstrument(profileId, tokenId, updatePaymentInstrumentRequest)

Update a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of a Payment Instrument.

var updatePaymentInstrumentRequest = new CyberSource.UpdatePaymentInstrumentRequest(); // UpdatePaymentInstrumentRequest | Specify the customer's payment details.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePaymentInstrument(profileId, tokenId, updatePaymentInstrumentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 
 **updatePaymentInstrumentRequest** | [**UpdatePaymentInstrumentRequest**](UpdatePaymentInstrumentRequest.md)| Specify the customer&#39;s payment details. | 

### Return type

[**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200ResponseEmbeddedPaymentInstruments.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

