# CyberSource.EnrollmentApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**enrollCard**](EnrollmentApi.md#enrollCard) | **POST** /acp/v1/tokens | Enroll a card


<a name="enrollCard"></a>
# **enrollCard**
> AgenticCardEnrollmentResponse200 enrollCard(agenticCardEnrollmentRequest)

Enroll a card

Enroll a payment card for agentic or e-commerce transactions. This is typically the first step in the Intelligent Commerce payment lifecycle — the agent calls this endpoint to register a consumer's card, creating a tokenized reference that can be used in subsequent purchase instructions and payment credential retrieval. Requires device information, consumer identity, billing details, and payment instrument references. Returns a status of ACTIVE (HTTP 200) if enrollment completes immediately, or PENDING (HTTP 202) with pendingEvents if cardholder authentication is required. Call this endpoint when a consumer wants to add a new payment card or when setting up a card for agentic payment flows.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.EnrollmentApi();

var agenticCardEnrollmentRequest = new CyberSource.AgenticCardEnrollmentRequest(); // AgenticCardEnrollmentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.enrollCard(agenticCardEnrollmentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agenticCardEnrollmentRequest** | [**AgenticCardEnrollmentRequest**](AgenticCardEnrollmentRequest.md)|  | 

### Return type

[**AgenticCardEnrollmentResponse200**](AgenticCardEnrollmentResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

