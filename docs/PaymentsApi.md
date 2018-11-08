# CyberSource.PaymentsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /pts/v2/payments/ | Process a Payment


<a name="createPayment"></a>
# **createPayment**
> PtsV2PaymentsPost201Response createPayment(createPaymentRequest)

Process a Payment

Authorize the payment for the transaction. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentsApi();

var createPaymentRequest = new CyberSource.CreatePaymentRequest(); // CreatePaymentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPayment(createPaymentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPaymentRequest** | [**CreatePaymentRequest**](CreatePaymentRequest.md)|  | 

### Return type

[**PtsV2PaymentsPost201Response**](PtsV2PaymentsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

