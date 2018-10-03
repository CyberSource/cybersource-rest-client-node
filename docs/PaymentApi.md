# CyberSource.PaymentApi

All URIs are relative to *https://api.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayment**](PaymentApi.md#createPayment) | **POST** /v2/payments/ | Process a Payment
[**getPayment**](PaymentApi.md#getPayment) | **GET** /v2/payments/{id} | Retrieve a Payment


<a name="createPayment"></a>
# **createPayment**
> InlineResponse201 createPayment(createPaymentRequest)

Process a Payment

Authorize the payment for the transaction. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentApi();

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

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPayment"></a>
# **getPayment**
> InlineResponse2002 getPayment(id)

Retrieve a Payment

Include the payment ID in the GET request to retrieve the payment details.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PaymentApi();

var id = "id_example"; // String | The payment ID returned from a previous payment request. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayment(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The payment ID returned from a previous payment request.  | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

