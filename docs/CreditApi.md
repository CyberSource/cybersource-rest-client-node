# CyberSource.CreditApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCredit**](CreditApi.md#createCredit) | **POST** /pts/v2/credits/ | Process a Credit


<a name="createCredit"></a>
# **createCredit**
> PtsV2CreditsPost201Response createCredit(createCreditRequest)

Process a Credit

POST to the credit resource to credit funds to a specified credit card.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CreditApi();

var createCreditRequest = new CyberSource.CreateCreditRequest(); // CreateCreditRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCredit(createCreditRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCreditRequest** | [**CreateCreditRequest**](CreateCreditRequest.md)|  | 

### Return type

[**PtsV2CreditsPost201Response**](PtsV2CreditsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

