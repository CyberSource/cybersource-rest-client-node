# CyberSource.InstrumentIdentifierApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tmsV1InstrumentidentifiersTokenIdDelete**](InstrumentIdentifierApi.md#tmsV1InstrumentidentifiersTokenIdDelete) | **DELETE** /tms/v1/instrumentidentifiers/{tokenId} | Delete an Instrument Identifier
[**tmsV1InstrumentidentifiersTokenIdGet**](InstrumentIdentifierApi.md#tmsV1InstrumentidentifiersTokenIdGet) | **GET** /tms/v1/instrumentidentifiers/{tokenId} | Retrieve an Instrument Identifier
[**tmsV1InstrumentidentifiersTokenIdPatch**](InstrumentIdentifierApi.md#tmsV1InstrumentidentifiersTokenIdPatch) | **PATCH** /tms/v1/instrumentidentifiers/{tokenId} | Update a Instrument Identifier


<a name="tmsV1InstrumentidentifiersTokenIdDelete"></a>
# **tmsV1InstrumentidentifiersTokenIdDelete**
> tmsV1InstrumentidentifiersTokenIdDelete(profileId, tokenId)

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
apiInstance.tmsV1InstrumentidentifiersTokenIdDelete(profileId, tokenId, callback);
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

<a name="tmsV1InstrumentidentifiersTokenIdGet"></a>
# **tmsV1InstrumentidentifiersTokenIdGet**
> TmsV1InstrumentidentifiersPost200Response tmsV1InstrumentidentifiersTokenIdGet(profileId, tokenId)

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
apiInstance.tmsV1InstrumentidentifiersTokenIdGet(profileId, tokenId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 

### Return type

[**TmsV1InstrumentidentifiersPost200Response**](TmsV1InstrumentidentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="tmsV1InstrumentidentifiersTokenIdPatch"></a>
# **tmsV1InstrumentidentifiersTokenIdPatch**
> TmsV1InstrumentidentifiersPost200Response tmsV1InstrumentidentifiersTokenIdPatch(profileId, tokenId, body)

Update a Instrument Identifier

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var profileId = "profileId_example"; // String | The id of a profile containing user specific TMS configuration.

var tokenId = "tokenId_example"; // String | The TokenId of an Instrument Identifier.

var body = new CyberSource.Body1(); // Body1 | Please specify the previous transaction Id to update.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tmsV1InstrumentidentifiersTokenIdPatch(profileId, tokenId, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The id of a profile containing user specific TMS configuration. | 
 **tokenId** | **String**| The TokenId of an Instrument Identifier. | 
 **body** | [**Body1**](Body1.md)| Please specify the previous transaction Id to update. | 

### Return type

[**TmsV1InstrumentidentifiersPost200Response**](TmsV1InstrumentidentifiersPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

