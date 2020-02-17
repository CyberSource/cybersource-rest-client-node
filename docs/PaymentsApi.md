# CyberSource.PaymentsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayment**](PaymentsApi.md#createPayment) | **POST** /pts/v2/payments | Process a Payment
[**incrementAuth**](PaymentsApi.md#incrementAuth) | **PATCH** /pts/v2/payments/{id} | Increment an Authorization


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

