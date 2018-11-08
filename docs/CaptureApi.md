# CyberSource.CaptureApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capturePayment**](CaptureApi.md#capturePayment) | **POST** /pts/v2/payments/{id}/captures | Capture a Payment


<a name="capturePayment"></a>
# **capturePayment**
> PtsV2PaymentsCapturesPost201Response capturePayment(capturePaymentRequest, id)

Capture a Payment

Include the payment ID in the POST request to capture the payment amount.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CaptureApi();

var capturePaymentRequest = new CyberSource.CapturePaymentRequest(); // CapturePaymentRequest | 

var id = "id_example"; // String | The payment ID returned from a previous payment request. This ID links the capture to the payment. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.capturePayment(capturePaymentRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **capturePaymentRequest** | [**CapturePaymentRequest**](CapturePaymentRequest.md)|  | 
 **id** | **String**| The payment ID returned from a previous payment request. This ID links the capture to the payment.  | 

### Return type

[**PtsV2PaymentsCapturesPost201Response**](PtsV2PaymentsCapturesPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

