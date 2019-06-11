# CyberSource.InstrumentIdentifierApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstrumentIdentifier**](InstrumentIdentifierApi.md#createInstrumentIdentifier) | **POST** /tms/v1/instrumentidentifiers | Create an Instrument Identifier
[**deleteInstrumentIdentifier**](InstrumentIdentifierApi.md#deleteInstrumentIdentifier) | **DELETE** /tms/v1/instrumentidentifiers/{tokenId} | Delete an Instrument Identifier
[**getAllPaymentInstruments**](InstrumentIdentifierApi.md#getAllPaymentInstruments) | **GET** /tms/v1/instrumentidentifiers/{tokenId}/paymentinstruments | Retrieve all Payment Instruments
[**getInstrumentIdentifier**](InstrumentIdentifierApi.md#getInstrumentIdentifier) | **GET** /tms/v1/instrumentidentifiers/{tokenId} | Retrieve an Instrument Identifier
[**updateInstrumentIdentifier**](InstrumentIdentifierApi.md#updateInstrumentIdentifier) | **PATCH** /tms/v1/instrumentidentifiers/{tokenId} | Update a Instrument Identifier


<a name="createInstrumentIdentifier"></a>
# **createInstrumentIdentifier**
> TmsV1InstrumentIdentifiersPost200Response createInstrumentIdentifier(profileId, createInstrumentIdentifierRequest)

Create an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var createInstrumentIdentifierRequest = new CyberSource.CreateInstrumentIdentifierRequest(); // CreateInstrumentIdentifierRequest | Please specify either a Card, Bank Account or Enrollable Card


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInstrumentIdentifier(profileId, createInstrumentIdentifierRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **createInstrumentIdentifierRequest** | [**CreateInstrumentIdentifierRequest**](CreateInstrumentIdentifierRequest.md)| Please specify either a Card, Bank Account or Enrollable Card | 

### Return type

[**TmsV1InstrumentIdentifiersPost200Response**](TmsV1InstrumentIdentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="deleteInstrumentIdentifier"></a>
# **deleteInstrumentIdentifier**
> deleteInstrumentIdentifier(profileId, tokenId)

Delete an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInstrumentIdentifier(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getAllPaymentInstruments"></a>
# **getAllPaymentInstruments**
> TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response getAllPaymentInstruments(profileId, tokenId, opts)

Retrieve all Payment Instruments

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var opts = { 
  'offset': 0, // Number | Starting Payment Instrument record in zero-based dataset that should be returned as the first object in the array. Default is 0.
  'limit': 20 // Number | The maximum number of Payment Instruments that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPaymentInstruments(profileId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **offset** | **Number**| Starting Payment Instrument record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] [default to 0]
 **limit** | **Number**| The maximum number of Payment Instruments that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInstrumentIdentifier"></a>
# **getInstrumentIdentifier**
> TmsV1InstrumentIdentifiersPost200Response getInstrumentIdentifier(profileId, tokenId)

Retrieve an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstrumentIdentifier(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 

### Return type

[**TmsV1InstrumentIdentifiersPost200Response**](TmsV1InstrumentIdentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="updateInstrumentIdentifier"></a>
# **updateInstrumentIdentifier**
> TmsV1InstrumentIdentifiersPost200Response updateInstrumentIdentifier(profileId, tokenId, updateInstrumentIdentifierRequest)

Update a Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var updateInstrumentIdentifierRequest = new CyberSource.UpdateInstrumentIdentifierRequest(); // UpdateInstrumentIdentifierRequest | Specify the previous transaction ID to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInstrumentIdentifier(profileId, tokenId, updateInstrumentIdentifierRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **updateInstrumentIdentifierRequest** | [**UpdateInstrumentIdentifierRequest**](UpdateInstrumentIdentifierRequest.md)| Specify the previous transaction ID to update. | 

### Return type

[**TmsV1InstrumentIdentifiersPost200Response**](TmsV1InstrumentIdentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

