# CyberSource.TransientTokenDataApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPaymentCredentialsForTransientToken**](TransientTokenDataApi.md#getPaymentCredentialsForTransientToken) | **GET** /flex/v2/payment-credentials/{paymentCredentialsReference} | Get Payment Credentials
[**getTransactionForTransientToken**](TransientTokenDataApi.md#getTransactionForTransientToken) | **GET** /up/v1/payment-details/{transientToken} | Get Transient Token Data


<a name="getPaymentCredentialsForTransientToken"></a>
# **getPaymentCredentialsForTransientToken**
> 'String' getPaymentCredentialsForTransientToken(paymentCredentialsReference)

Get Payment Credentials

Retrieve the Payment data captured by Unified Checkout. This API is used to retrieve the detailed data represented by the Transient Token. This API will return PCI payment data captured by the Unified Checkout platform.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransientTokenDataApi();

var paymentCredentialsReference = "paymentCredentialsReference_example"; // String | The paymentCredentialsReference field contained within the Transient token returned from a successful Unified Checkout transaction 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentCredentialsForTransientToken(paymentCredentialsReference, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentCredentialsReference** | **String**| The paymentCredentialsReference field contained within the Transient token returned from a successful Unified Checkout transaction  | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jwt

<a name="getTransactionForTransientToken"></a>
# **getTransactionForTransientToken**
> getTransactionForTransientToken(transientToken)

Get Transient Token Data

Retrieve the data captured by Unified Checkout. This API is used to retrieve the detailed data represented by the Transient Token. This API will not return PCI payment data (PAN). Include the Request ID in the GET request to retrieve the transaction details.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransientTokenDataApi();

var transientToken = "transientToken_example"; // String | Transient Token returned by the Unified Checkout application. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTransactionForTransientToken(transientToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transientToken** | **String**| Transient Token returned by the Unified Checkout application.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json

