# CyberSource.ProcessAPayoutApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**octCreatePayment**](ProcessAPayoutApi.md#octCreatePayment) | **POST** /pts/v2/payouts/ | Process a Payout


<a name="octCreatePayment"></a>
# **octCreatePayment**
> octCreatePayment(octCreatePaymentRequest)

Process a Payout

Send funds from a selected funding source to a designated credit/debit card account or a prepaid card using an Original Credit Transaction (OCT). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ProcessAPayoutApi();

var octCreatePaymentRequest = new CyberSource.PtsV2PayoutsPostResponse(); // PtsV2PayoutsPostResponse | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.octCreatePayment(octCreatePaymentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **octCreatePaymentRequest** | [**PtsV2PayoutsPostResponse**](PtsV2PayoutsPostResponse.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

