# CyberSource.TokenizationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokenize**](TokenizationApi.md#tokenize) | **POST** /flex/v1/tokens | Tokenize card


<a name="tokenize"></a>
# **tokenize**
> FlexV1TokensPost200Response tokenize(tokenizeRequest)

Tokenize card

Returns a token representing the supplied card details. The token replaces card data and can be used as the Subscription ID in the CyberSource Simple Order API or SCMP API. This is an unauthenticated call that you should initiate from your customer’s device or browser.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TokenizationApi();

var tokenizeRequest = new CyberSource.TokenizeRequest(); // TokenizeRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tokenize(tokenizeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizeRequest** | [**TokenizeRequest**](TokenizeRequest.md)|  | 

### Return type

[**FlexV1TokensPost200Response**](FlexV1TokensPost200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json

