# CyberSource.PaymentsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrderRequest**](PaymentsApi.md#createOrderRequest) | **POST** /pts/v2/payment-references/{id}/intents | Create a Payment Order Request
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /pts/v2/payments | Process a Payment
[**createSessionRequest**](PaymentsApi.md#createSessionRequest) | **POST** /pts/v2/payment-references | Create Alternative Payments Sessions Request
[**incrementAuth**](PaymentsApi.md#incrementAuth) | **PATCH** /pts/v2/payments/{id} | Increment an Authorization
[**refreshPaymentStatus**](PaymentsApi.md#refreshPaymentStatus) | **POST** /pts/v2/refresh-payment-status/{id} | Check a Payment Status
[**updateSessionReq**](PaymentsApi.md#updateSessionReq) | **PATCH** /pts/v2/payment-references/{id} | Update Alternative Payments Sessions Request


<a name="createOrderRequest"></a>
# **createOrderRequest**
> PtsV2PaymentsOrderPost201Response createOrderRequest(orderPaymentRequest, id)

Create a Payment Order Request

Create a Payment Order Request

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentsApi();

var orderPaymentRequest = new CyberSource.OrderPaymentRequest(); // OrderPaymentRequest | 

var id = "id_example"; // String | Request identifier number for the order request. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrderRequest(orderPaymentRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderPaymentRequest** | [**OrderPaymentRequest**](OrderPaymentRequest.md)|  | 
 **id** | **String**| Request identifier number for the order request.  | 

### Return type

[**PtsV2PaymentsOrderPost201Response**](PtsV2PaymentsOrderPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="createPayment"></a>
# **createPayment**
> PtsV2PaymentsPost201Response createPayment(createPaymentRequest)

Process a Payment

A payment authorizes the amount for the transaction. There are a number of supported payment features, such as E-commerce and Card Present - Credit Card/Debit Card, Echeck, e-Wallets, Level II/III Data, etc..  A payment response includes the status of the request. It also includes processor-specific information when the request is successful and errors if unsuccessful. See the [Payments Developer Guides Page](https://developer.cybersource.com/docs/cybs/en-us/payments/developer/ctv/rest/payments/payments-intro.html).  Authorization can be requested with Capture, Decision Manager, Payer Authentication(3ds), and Token Creation. 

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
 - **Accept**: application/hal+json;charset=utf-8

<a name="createSessionRequest"></a>
# **createSessionRequest**
> PtsV2PaymentsPost201Response2 createSessionRequest(createSessionReq)

Create Alternative Payments Sessions Request

Create Alternative Payments Sessions Request

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentsApi();

var createSessionReq = new CyberSource.CreateSessionReq(); // CreateSessionReq | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSessionRequest(createSessionReq, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSessionReq** | [**CreateSessionReq**](CreateSessionReq.md)|  | 

### Return type

[**PtsV2PaymentsPost201Response2**](PtsV2PaymentsPost201Response2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="incrementAuth"></a>
# **incrementAuth**
> PtsV2IncrementalAuthorizationPatch201Response incrementAuth(id, incrementAuthRequest)

Increment an Authorization

Use this service to authorize additional charges in a lodging or autorental transaction. Include the ID returned from the original authorization in the PATCH request to add additional charges to that authorization. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentsApi();

var id = "id_example"; // String | The ID returned from the original authorization request.

var incrementAuthRequest = new CyberSource.IncrementAuthRequest(); // IncrementAuthRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.incrementAuth(id, incrementAuthRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID returned from the original authorization request. | 
 **incrementAuthRequest** | [**IncrementAuthRequest**](IncrementAuthRequest.md)|  | 

### Return type

[**PtsV2IncrementalAuthorizationPatch201Response**](PtsV2IncrementalAuthorizationPatch201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="refreshPaymentStatus"></a>
# **refreshPaymentStatus**
> PtsV2PaymentsPost201Response1 refreshPaymentStatus(id, refreshPaymentStatusRequest)

Check a Payment Status

Checks and updates the payment status 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentsApi();

var id = "id_example"; // String | The payment id whose status needs to be checked and updated.

var refreshPaymentStatusRequest = new CyberSource.RefreshPaymentStatusRequest(); // RefreshPaymentStatusRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.refreshPaymentStatus(id, refreshPaymentStatusRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The payment id whose status needs to be checked and updated. | 
 **refreshPaymentStatusRequest** | [**RefreshPaymentStatusRequest**](RefreshPaymentStatusRequest.md)|  | 

### Return type

[**PtsV2PaymentsPost201Response1**](PtsV2PaymentsPost201Response1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateSessionReq"></a>
# **updateSessionReq**
> PtsV2PaymentsPost201Response2 updateSessionReq(createSessionRequest, id)

Update Alternative Payments Sessions Request

Update Alternative Payments Sessions Request

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentsApi();

var createSessionRequest = new CyberSource.CreateSessionRequest(); // CreateSessionRequest | 

var id = "id_example"; // String | The payment ID. This ID is returned from a previous payment request.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateSessionReq(createSessionRequest, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSessionRequest** | [**CreateSessionRequest**](CreateSessionRequest.md)|  | 
 **id** | **String**| The payment ID. This ID is returned from a previous payment request. | 

### Return type

[**PtsV2PaymentsPost201Response2**](PtsV2PaymentsPost201Response2.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

