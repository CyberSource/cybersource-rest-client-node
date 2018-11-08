# CyberSource.FlexTokenApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenize**](FlexTokenApi.md#tokenize) | **POST** /flex/v1/tokens/ | Flex Tokenize card


<a name="tokenize"></a>
# **tokenize**
> FlexV1TokensPost200Response tokenize(opts)

Flex Tokenize card

Returns a token representing the supplied card details. The token replaces card data and can be used as the Subscription ID in the CyberSource Simple Order API or SCMP API. This is an unauthenticated call that you should initiate from your customer’s device or browser.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.FlexTokenApi();

var opts = { 
  'tokenizeRequest': new CyberSource.TokenizeRequest() // TokenizeRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenize(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizeRequest** | [**TokenizeRequest**](TokenizeRequest.md)|  | [optional] 

### Return type

[**FlexV1TokensPost200Response**](FlexV1TokensPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json

