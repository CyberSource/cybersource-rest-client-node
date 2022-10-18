# CyberSource.EMVTagDetailsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmvTags**](EMVTagDetailsApi.md#getEmvTags) | **GET** /tss/v2/transactions/emvTagDetails | Retrieve the EMV Dictionary
[**parseEmvTags**](EMVTagDetailsApi.md#parseEmvTags) | **POST** /tss/v2/transactions/emvTagDetails | Parse an EMV String


<a name="getEmvTags"></a>
# **getEmvTags**
> TssV2GetEmvTags200Response getEmvTags()

Retrieve the EMV Dictionary

Returns the entire EMV tag dictionary

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.EMVTagDetailsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEmvTags(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**TssV2GetEmvTags200Response**](TssV2GetEmvTags200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="parseEmvTags"></a>
# **parseEmvTags**
> TssV2PostEmvTags200Response parseEmvTags(body)

Parse an EMV String

Pass an EMV Tag-Length-Value (TLV) string for parsing.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.EMVTagDetailsApi();

var body = new CyberSource.Body(); // Body | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.parseEmvTags(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body**](Body.md)|  | 

### Return type

[**TssV2PostEmvTags200Response**](TssV2PostEmvTags200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

