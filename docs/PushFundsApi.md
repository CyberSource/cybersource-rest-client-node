# CyberSource.PushFundsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPushFundsTransfer**](PushFundsApi.md#createPushFundsTransfer) | **POST** /pts/v1/push-funds-transfer | Process a Push Funds Transfer


<a name="createPushFundsTransfer"></a>
# **createPushFundsTransfer**
> PushFunds201Response createPushFundsTransfer(pushFundsRequest, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId)

Process a Push Funds Transfer

Receive funds using an Original Credit Transaction (OCT). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PushFundsApi();

var pushFundsRequest = new CyberSource.PushFundsRequest(); // PushFundsRequest | 

var contentType = "contentType_example"; // String | 

var xRequestid = "xRequestid_example"; // String | 

var vCMerchantId = "vCMerchantId_example"; // String | 

var vCPermissions = "vCPermissions_example"; // String | 

var vCCorrelationId = "vCCorrelationId_example"; // String | 

var vCOrganizationId = "vCOrganizationId_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPushFundsTransfer(pushFundsRequest, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushFundsRequest** | [**PushFundsRequest**](PushFundsRequest.md)|  | 
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCPermissions** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 

### Return type

[**PushFunds201Response**](PushFunds201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

