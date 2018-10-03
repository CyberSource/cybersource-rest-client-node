# CyberSource.PaymentInstrumentApi

All URIs are relative to *https://api.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentinstrumentsPost**](PaymentInstrumentApi.md#paymentinstrumentsPost) | **POST** /paymentinstruments | Create a Payment Instrument
[**paymentinstrumentsTokenIdDelete**](PaymentInstrumentApi.md#paymentinstrumentsTokenIdDelete) | **DELETE** /paymentinstruments/{tokenId} | Delete a Payment Instrument
[**paymentinstrumentsTokenIdGet**](PaymentInstrumentApi.md#paymentinstrumentsTokenIdGet) | **GET** /paymentinstruments/{tokenId} | Retrieve a Payment Instrument
[**paymentinstrumentsTokenIdPatch**](PaymentInstrumentApi.md#paymentinstrumentsTokenIdPatch) | **PATCH** /paymentinstruments/{tokenId} | Update a Payment Instrument


<a name="paymentinstrumentsPost"></a>
# **paymentinstrumentsPost**
> InlineResponse2016 paymentinstrumentsPost(profileId, body)

Create a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var body = new CyberSource.Body2(); // Body2 | Please specify the customers payment details for card or bank account.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.paymentinstrumentsPost(profileId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **body** | [**Body2**](Body2.md)| Please specify the customers payment details for card or bank account. | 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentinstrumentsTokenIdDelete"></a>
# **paymentinstrumentsTokenIdDelete**
> paymentinstrumentsTokenIdDelete(profileId, tokenId)

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
apiInstance.paymentinstrumentsTokenIdDelete(profileId, tokenId, callback);
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

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentinstrumentsTokenIdGet"></a>
# **paymentinstrumentsTokenIdGet**
> InlineResponse2016 paymentinstrumentsTokenIdGet(profileId, tokenId)

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
apiInstance.paymentinstrumentsTokenIdGet(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentinstrumentsTokenIdPatch"></a>
# **paymentinstrumentsTokenIdPatch**
> InlineResponse2016 paymentinstrumentsTokenIdPatch(profileId, tokenId, body)

Update a Payment Instrument

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentInstrumentApi();

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
apiInstance.paymentinstrumentsTokenIdPatch(profileId, tokenId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of a Payment Instrument. | 
 **body** | [**Body3**](Body3.md)| Please specify the customers payment details. | 

### Return type

[**InlineResponse2016**](InlineResponse2016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

