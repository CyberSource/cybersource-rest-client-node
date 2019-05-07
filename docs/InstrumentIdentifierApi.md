# CyberSource.InstrumentIdentifierApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstrumentIdentifier**](InstrumentIdentifierApi.md#createInstrumentIdentifier) | **POST** /tms/v1/instrumentidentifiers | Create an Instrument Identifier
[**deleteInstrumentIdentifier**](InstrumentIdentifierApi.md#deleteInstrumentIdentifier) | **DELETE** /tms/v1/instrumentidentifiers/{tokenId} | Delete an Instrument Identifier
[**getAllPaymentInstruments**](InstrumentIdentifierApi.md#getAllPaymentInstruments) | **GET** /tms/v1/instrumentidentifiers/{tokenId}/paymentinstruments | Retrieve all Payment Instruments associated with an Instrument Identifier
[**getInstrumentIdentifier**](InstrumentIdentifierApi.md#getInstrumentIdentifier) | **GET** /tms/v1/instrumentidentifiers/{tokenId} | Retrieve an Instrument Identifier
[**updateInstrumentIdentifier**](InstrumentIdentifierApi.md#updateInstrumentIdentifier) | **PATCH** /tms/v1/instrumentidentifiers/{tokenId} | Update a Instrument Identifier


<a name="createInstrumentIdentifier"></a>
# **createInstrumentIdentifier**
> TmsV1InstrumentIdentifiersPost200Response createInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, createInstrumentIdentifierRequest, opts)

Create an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var createInstrumentIdentifierRequest = new CyberSource.CreateInstrumentIdentifierRequest(); // CreateInstrumentIdentifierRequest | Please specify either a Card, Bank Account or Enrollable Card

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, createInstrumentIdentifierRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **createInstrumentIdentifierRequest** | [**CreateInstrumentIdentifierRequest**](CreateInstrumentIdentifierRequest.md)| Please specify either a Card, Bank Account or Enrollable Card | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

[**TmsV1InstrumentIdentifiersPost200Response**](TmsV1InstrumentIdentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/hal+json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="deleteInstrumentIdentifier"></a>
# **deleteInstrumentIdentifier**
> deleteInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, tokenId, opts)

Delete an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="getAllPaymentInstruments"></a>
# **getAllPaymentInstruments**
> TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response getAllPaymentInstruments(profileId, vCMerchantId, vCCorrelationId, tokenId, opts)

Retrieve all Payment Instruments associated with an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var opts = { 
  'clientApplication': "clientApplication_example", // String | Client application name
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
apiInstance.getAllPaymentInstruments(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **clientApplication** | **String**| Client application name | [optional] 
 **offset** | **Number**| Starting Payment Instrument record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] [default to 0]
 **limit** | **Number**| The maximum number of Payment Instruments that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response**](TmsV1InstrumentIdentifiersPaymentInstrumentsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="getInstrumentIdentifier"></a>
# **getInstrumentIdentifier**
> TmsV1InstrumentIdentifiersPost200Response getInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, tokenId, opts)

Retrieve an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, tokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

[**TmsV1InstrumentIdentifiersPost200Response**](TmsV1InstrumentIdentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

<a name="updateInstrumentIdentifier"></a>
# **updateInstrumentIdentifier**
> TmsV1InstrumentIdentifiersPost200Response updateInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, tokenId, updateInstrumentIdentifierRequest, opts)

Update a Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var vCMerchantId = "vCMerchantId_example"; // String | CyberSource merchant id.

var vCCorrelationId = "vCCorrelationId_example"; // String | The mandatory correlation id passed by upstream (calling) system.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var updateInstrumentIdentifierRequest = new CyberSource.UpdateInstrumentIdentifierRequest(); // UpdateInstrumentIdentifierRequest | Specify the previous transaction ID to update.

var opts = { 
  'clientApplication': "clientApplication_example" // String | Client application name
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateInstrumentIdentifier(profileId, vCMerchantId, vCCorrelationId, tokenId, updateInstrumentIdentifierRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **vCMerchantId** | **String**| CyberSource merchant id. | 
 **vCCorrelationId** | **String**| The mandatory correlation id passed by upstream (calling) system. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **updateInstrumentIdentifierRequest** | [**UpdateInstrumentIdentifierRequest**](UpdateInstrumentIdentifierRequest.md)| Specify the previous transaction ID to update. | 
 **clientApplication** | **String**| Client application name | [optional] 

### Return type

[**TmsV1InstrumentIdentifiersPost200Response**](TmsV1InstrumentIdentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: */*

