# CyberSource.PaymentTokensApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveOrDeletePaymentToken**](PaymentTokensApi.md#retrieveOrDeletePaymentToken) | **POST** /pts/v2/payment-tokens | Retrieve or Delete Payment Token


<a name="retrieveOrDeletePaymentToken"></a>
# **retrieveOrDeletePaymentToken**
> InlineResponse201 retrieveOrDeletePaymentToken(request)

Retrieve or Delete Payment Token

This API can be used in two flavours - for retrieval or deletion of vault id. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentTokensApi();

var request = new CyberSource.Request(); // Request | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveOrDeletePaymentToken(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)|  | 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

