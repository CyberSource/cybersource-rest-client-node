# CyberSource.RefundApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**refundCapture**](RefundApi.md#refundCapture) | **POST** /pts/v2/captures/{id}/refunds | Refund a Capture
[**refundPayment**](RefundApi.md#refundPayment) | **POST** /pts/v2/payments/{id}/refunds | Refund a Payment


<a name="refundCapture"></a>
# **refundCapture**
> PtsV2PaymentsRefundPost201Response refundCapture(refundCaptureRequest, id)

Refund a Capture

Include the capture ID in the POST request to refund the captured amount. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.RefundApi();

var refundCaptureRequest = new CyberSource.RefundCaptureRequest(); // RefundCaptureRequest | 

var id = "id_example"; // String | The capture ID. This ID is returned from a previous capture request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refundCapture(refundCaptureRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refundCaptureRequest** | [**RefundCaptureRequest**](RefundCaptureRequest.md)|  | 
 **id** | **String**| The capture ID. This ID is returned from a previous capture request. | 

### Return type

[**PtsV2PaymentsRefundPost201Response**](PtsV2PaymentsRefundPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="refundPayment"></a>
# **refundPayment**
> PtsV2PaymentsRefundPost201Response refundPayment(refundPaymentRequest, id)

Refund a Payment

Include the payment ID in the POST request to refund the payment amount. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.RefundApi();

var refundPaymentRequest = new CyberSource.RefundPaymentRequest(); // RefundPaymentRequest | 

var id = "id_example"; // String | The payment ID. This ID is returned from a previous payment request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refundPayment(refundPaymentRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **refundPaymentRequest** | [**RefundPaymentRequest**](RefundPaymentRequest.md)|  | 
 **id** | **String**| The payment ID. This ID is returned from a previous payment request. | 

### Return type

[**PtsV2PaymentsRefundPost201Response**](PtsV2PaymentsRefundPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

