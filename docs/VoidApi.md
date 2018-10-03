# CyberSource.VoidApi

All URIs are relative to *https://api.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVoid**](VoidApi.md#getVoid) | **GET** /v2/voids/{id} | Retrieve A Void
[**voidCapture**](VoidApi.md#voidCapture) | **POST** /v2/captures/{id}/voids | Void a Capture
[**voidCredit**](VoidApi.md#voidCredit) | **POST** /v2/credits/{id}/voids | Void a Credit
[**voidPayment**](VoidApi.md#voidPayment) | **POST** /v2/payments/{id}/voids | Void a Payment
[**voidRefund**](VoidApi.md#voidRefund) | **POST** /v2/refunds/{id}/voids | Void a Refund


<a name="getVoid"></a>
# **getVoid**
> InlineResponse2015 getVoid(id)

Retrieve A Void

Include the void ID in the GET request to retrieve the void details.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.VoidApi();

var id = "id_example"; // String | The void ID returned from a previous void request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoid(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The void ID returned from a previous void request. | 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="voidCapture"></a>
# **voidCapture**
> InlineResponse2015 voidCapture(voidCaptureRequest, id)

Void a Capture

Include the capture ID in the POST request to cancel the capture.

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

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="voidCredit"></a>
# **voidCredit**
> InlineResponse2015 voidCredit(voidCreditRequest, id)

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

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="voidPayment"></a>
# **voidPayment**
> InlineResponse2015 voidPayment(voidPaymentRequest, id)

Void a Payment

Include the payment ID in the POST request to cancel the payment.

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

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="voidRefund"></a>
# **voidRefund**
> InlineResponse2015 voidRefund(voidRefundRequest, id)

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

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

