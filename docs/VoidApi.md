# CyberSource.VoidApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mitVoid**](VoidApi.md#mitVoid) | **POST** /pts/v2/voids/ | Timeout Void
[**voidCapture**](VoidApi.md#voidCapture) | **POST** /pts/v2/captures/{id}/voids | Void a Capture
[**voidCredit**](VoidApi.md#voidCredit) | **POST** /pts/v2/credits/{id}/voids | Void a Credit
[**voidPayment**](VoidApi.md#voidPayment) | **POST** /pts/v2/payments/{id}/voids | Void a Payment
[**voidRefund**](VoidApi.md#voidRefund) | **POST** /pts/v2/refunds/{id}/voids | Void a Refund


<a name="mitVoid"></a>
# **mitVoid**
> PtsV2PaymentsVoidsPost201Response mitVoid(mitVoidRequest)

Timeout Void

This is to void a previous payment, capture, refund, or credit that merchant does not receive a reply(Mostly due to timeout). This is to void a previous payment, capture, refund, or credit that merchant does not receive a reply(Mostly due to Timeout). To use this feature/API, make sure to pass unique value to field - clientReferenceInformation -&gt; transactionId in your payment, capture, refund, or credit API call and use same transactionId in this API request payload to reverse the payment.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VoidApi();

var mitVoidRequest = new CyberSource.MitVoidRequest(); // MitVoidRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mitVoid(mitVoidRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mitVoidRequest** | [**MitVoidRequest**](MitVoidRequest.md)|  | 

### Return type

[**PtsV2PaymentsVoidsPost201Response**](PtsV2PaymentsVoidsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="voidCapture"></a>
# **voidCapture**
> PtsV2PaymentsVoidsPost201Response voidCapture(voidCaptureRequest, id)

Void a Capture

Refund a capture API is only used, if you have requested Capture independenlty using [/pts/v2/payments/{id}/captures](https://developer.cybersource.com/api-reference-assets/index.html#payments_capture) API call. Include the capture ID in the POST request to cancel the capture. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VoidApi();

var voidCaptureRequest = new CyberSource.VoidCaptureRequest(); // VoidCaptureRequest | 

var id = "id_example"; // String | The capture ID returned from a previous capture request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voidCapture(voidCaptureRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voidCaptureRequest** | [**VoidCaptureRequest**](VoidCaptureRequest.md)|  | 
 **id** | **String**| The capture ID returned from a previous capture request. | 

### Return type

[**PtsV2PaymentsVoidsPost201Response**](PtsV2PaymentsVoidsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="voidCredit"></a>
# **voidCredit**
> PtsV2PaymentsVoidsPost201Response voidCredit(voidCreditRequest, id)

Void a Credit

Include the credit ID in the POST request to cancel the credit.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VoidApi();

var voidCreditRequest = new CyberSource.VoidCreditRequest(); // VoidCreditRequest | 

var id = "id_example"; // String | The credit ID returned from a previous credit request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voidCredit(voidCreditRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voidCreditRequest** | [**VoidCreditRequest**](VoidCreditRequest.md)|  | 
 **id** | **String**| The credit ID returned from a previous credit request. | 

### Return type

[**PtsV2PaymentsVoidsPost201Response**](PtsV2PaymentsVoidsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="voidPayment"></a>
# **voidPayment**
> PtsV2PaymentsVoidsPost201Response voidPayment(voidPaymentRequest, id)

Void a Payment

Void a Payment API is only used, if you have requested Authorization and Capture together in [/pts/v2/payments](https://developer.cybersource.com/api-reference-assets/index.html#payments_payments) API call. Include the payment ID in the POST request to cancel the payment. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VoidApi();

var voidPaymentRequest = new CyberSource.VoidPaymentRequest(); // VoidPaymentRequest | 

var id = "id_example"; // String | The payment ID returned from a previous payment request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voidPayment(voidPaymentRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voidPaymentRequest** | [**VoidPaymentRequest**](VoidPaymentRequest.md)|  | 
 **id** | **String**| The payment ID returned from a previous payment request. | 

### Return type

[**PtsV2PaymentsVoidsPost201Response**](PtsV2PaymentsVoidsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="voidRefund"></a>
# **voidRefund**
> PtsV2PaymentsVoidsPost201Response voidRefund(voidRefundRequest, id)

Void a Refund

Include the refund ID in the POST request to cancel the refund.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VoidApi();

var voidRefundRequest = new CyberSource.VoidRefundRequest(); // VoidRefundRequest | 

var id = "id_example"; // String | The refund ID returned from a previous refund request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.voidRefund(voidRefundRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voidRefundRequest** | [**VoidRefundRequest**](VoidRefundRequest.md)|  | 
 **id** | **String**| The refund ID returned from a previous refund request. | 

### Return type

[**PtsV2PaymentsVoidsPost201Response**](PtsV2PaymentsVoidsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

