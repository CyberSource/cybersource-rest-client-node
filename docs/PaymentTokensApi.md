# CyberSource.PaymentTokensApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveOrDeletePaymentToken**](PaymentTokensApi.md#retrieveOrDeletePaymentToken) | **POST** /pts/v2/payment-tokens | Retrieve or Delete Payment Token


<a name="retrieveOrDeletePaymentToken"></a>
# **retrieveOrDeletePaymentToken**
> RetrieveOrDeletePaymentTokenResponse retrieveOrDeletePaymentToken(paymentTokenRequest)

Retrieve or Delete Payment Token

This API can be used in two flavours - for retrieval or deletion of vault id. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentTokensApi();

var paymentTokenRequest = new CyberSource.PaymentTokenRequest(); // PaymentTokenRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveOrDeletePaymentToken(paymentTokenRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentTokenRequest** | [**PaymentTokenRequest**](PaymentTokenRequest.md)|  | 

### Return type

[**RetrieveOrDeletePaymentTokenResponse**](RetrieveOrDeletePaymentTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/json; charset=utf-8
 - **Accept**: application/hal+json

