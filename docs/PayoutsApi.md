# CyberSource.PayoutsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**octCreatePayment**](PayoutsApi.md#octCreatePayment) | **POST** /pts/v2/payouts | Process a Payout


<a name="octCreatePayment"></a>
# **octCreatePayment**
> PtsV2PayoutsPost201Response octCreatePayment(octCreatePaymentRequest)

Process a Payout

Send funds from a selected funding source to a designated credit/debit card account or a prepaid card using an Original Credit Transaction (OCT). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PayoutsApi();

var octCreatePaymentRequest = new CyberSource.OctCreatePaymentRequest(); // OctCreatePaymentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.octCreatePayment(octCreatePaymentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **octCreatePaymentRequest** | [**OctCreatePaymentRequest**](OctCreatePaymentRequest.md)|  | 

### Return type

[**PtsV2PayoutsPost201Response**](PtsV2PayoutsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

