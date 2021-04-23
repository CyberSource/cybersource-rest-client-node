# CyberSource.InstrumentIdentifierApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInstrumentIdentifier**](InstrumentIdentifierApi.md#deleteInstrumentIdentifier) | **DELETE** /tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId} | Delete an Instrument Identifier
[**getInstrumentIdentifier**](InstrumentIdentifierApi.md#getInstrumentIdentifier) | **GET** /tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId} | Retrieve an Instrument Identifier
[**getInstrumentIdentifierPaymentInstrumentsList**](InstrumentIdentifierApi.md#getInstrumentIdentifierPaymentInstrumentsList) | **GET** /tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}/paymentinstruments | List Payment Instruments for an Instrument Identifier
[**patchInstrumentIdentifier**](InstrumentIdentifierApi.md#patchInstrumentIdentifier) | **PATCH** /tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId} | Update an Instrument Identifier
[**postInstrumentIdentifier**](InstrumentIdentifierApi.md#postInstrumentIdentifier) | **POST** /tms/v1/instrumentidentifiers | Create an Instrument Identifier
[**postInstrumentIdentifierEnrollment**](InstrumentIdentifierApi.md#postInstrumentIdentifierEnrollment) | **POST** /tms/v1/instrumentidentifiers/{instrumentIdentifierTokenId}/enrollment | Enroll an Instrument Identifier for Network Tokenization


<a name="deleteInstrumentIdentifier"></a>
# **deleteInstrumentIdentifier**
> deleteInstrumentIdentifier(instrumentIdentifierTokenId, opts)

Delete an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierTokenId = "instrumentIdentifierTokenId_example"; // String | The TokenId of a Instrument Identifier.

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
apiInstance.deleteInstrumentIdentifier(instrumentIdentifierTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierTokenId** | **String**| The TokenId of a Instrument Identifier. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInstrumentIdentifier"></a>
# **getInstrumentIdentifier**
> Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier getInstrumentIdentifier(instrumentIdentifierTokenId, opts)

Retrieve an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierTokenId = "instrumentIdentifierTokenId_example"; // String | The TokenId of a Instrument Identifier.

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
apiInstance.getInstrumentIdentifier(instrumentIdentifierTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierTokenId** | **String**| The TokenId of a Instrument Identifier. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInstrumentIdentifierPaymentInstrumentsList"></a>
# **getInstrumentIdentifierPaymentInstrumentsList**
> PaymentInstrumentList getInstrumentIdentifierPaymentInstrumentsList(instrumentIdentifierTokenId, opts)

List Payment Instruments for an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierTokenId = "instrumentIdentifierTokenId_example"; // String | The TokenId of a Instrument Identifier.

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
apiInstance.getInstrumentIdentifierPaymentInstrumentsList(instrumentIdentifierTokenId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierTokenId** | **String**| The TokenId of a Instrument Identifier. | 
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

<a name="patchInstrumentIdentifier"></a>
# **patchInstrumentIdentifier**
> Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier patchInstrumentIdentifier(instrumentIdentifierTokenId, patchInstrumentIdentifierRequest, opts)

Update an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierTokenId = "instrumentIdentifierTokenId_example"; // String | The TokenId of a Instrument Identifier.

var patchInstrumentIdentifierRequest = new CyberSource.PatchInstrumentIdentifierRequest(); // PatchInstrumentIdentifierRequest | Specify the previous transaction ID to update.

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
apiInstance.patchInstrumentIdentifier(instrumentIdentifierTokenId, patchInstrumentIdentifierRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierTokenId** | **String**| The TokenId of a Instrument Identifier. | 
 **patchInstrumentIdentifierRequest** | [**PatchInstrumentIdentifierRequest**](PatchInstrumentIdentifierRequest.md)| Specify the previous transaction ID to update. | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postInstrumentIdentifier"></a>
# **postInstrumentIdentifier**
> Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier postInstrumentIdentifier(postInstrumentIdentifierRequest, opts)

Create an Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var postInstrumentIdentifierRequest = new CyberSource.PostInstrumentIdentifierRequest(); // PostInstrumentIdentifierRequest | Specify either a Card, Bank Account or Enrollable Card

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
apiInstance.postInstrumentIdentifier(postInstrumentIdentifierRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postInstrumentIdentifierRequest** | [**PostInstrumentIdentifierRequest**](PostInstrumentIdentifierRequest.md)| Specify either a Card, Bank Account or Enrollable Card | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postInstrumentIdentifierEnrollment"></a>
# **postInstrumentIdentifierEnrollment**
> postInstrumentIdentifierEnrollment(instrumentIdentifierTokenId, postInstrumentIdentifierEnrollmentRequest, opts)

Enroll an Instrument Identifier for Network Tokenization

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierTokenId = "instrumentIdentifierTokenId_example"; // String | The TokenId of a Instrument Identifier.

var postInstrumentIdentifierEnrollmentRequest = new CyberSource.PostInstrumentIdentifierEnrollmentRequest(); // PostInstrumentIdentifierEnrollmentRequest | Specify Enrollable Card details

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
apiInstance.postInstrumentIdentifierEnrollment(instrumentIdentifierTokenId, postInstrumentIdentifierEnrollmentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierTokenId** | **String**| The TokenId of a Instrument Identifier. | 
 **postInstrumentIdentifierEnrollmentRequest** | [**PostInstrumentIdentifierEnrollmentRequest**](PostInstrumentIdentifierEnrollmentRequest.md)| Specify Enrollable Card details | 
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

