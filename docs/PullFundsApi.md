# CyberSource.PullFundsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPullFundsRefund**](PullFundsApi.md#createPullFundsRefund) | **POST** /pts/v1/pull-funds-transfer/{id}/refund | Process a Pull Funds Refund
[**createPullFundsReversal**](PullFundsApi.md#createPullFundsReversal) | **POST** /pts/v1/pull-funds-transfer/{id}/reversal | Process a Pull Funds Reversal
[**createPullFundsTransfer**](PullFundsApi.md#createPullFundsTransfer) | **POST** /pts/v1/pull-funds-transfer | Process a Pull Funds Transfer


<a name="createPullFundsRefund"></a>
# **createPullFundsRefund**
> PullFundsRefund201Response createPullFundsRefund(pullFundsRefundRequest, id, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId)

Process a Pull Funds Refund

Refund an Account Funding Transaction (AFT). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PullFundsApi();

var pullFundsRefundRequest = new CyberSource.PullFundsRefundRequest(); // PullFundsRefundRequest | 

var id = "id_example"; // String | The transaction id of a previous Account Funding Transaction. 

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
apiInstance.createPullFundsRefund(pullFundsRefundRequest, id, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pullFundsRefundRequest** | [**PullFundsRefundRequest**](PullFundsRefundRequest.md)|  | 
 **id** | **String**| The transaction id of a previous Account Funding Transaction.  | 
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCPermissions** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 

### Return type

[**PullFundsRefund201Response**](PullFundsRefund201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="createPullFundsReversal"></a>
# **createPullFundsReversal**
> PullFundsReversal201Response createPullFundsReversal(pullFundsReversalRequest, id, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId)

Process a Pull Funds Reversal

Reverse an Account Funding Transaction (AFT). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PullFundsApi();

var pullFundsReversalRequest = new CyberSource.PullFundsReversalRequest(); // PullFundsReversalRequest | 

var id = "id_example"; // String | The transaction id of a previous Account Funding Transaction. 

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
apiInstance.createPullFundsReversal(pullFundsReversalRequest, id, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pullFundsReversalRequest** | [**PullFundsReversalRequest**](PullFundsReversalRequest.md)|  | 
 **id** | **String**| The transaction id of a previous Account Funding Transaction.  | 
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCPermissions** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 

### Return type

[**PullFundsReversal201Response**](PullFundsReversal201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="createPullFundsTransfer"></a>
# **createPullFundsTransfer**
> PullFunds201Response createPullFundsTransfer(pullFundsRequest, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId)

Process a Pull Funds Transfer

Receive funds using an Account Funding Transaction (AFT). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PullFundsApi();

var pullFundsRequest = new CyberSource.PullFundsRequest(); // PullFundsRequest | 

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
apiInstance.createPullFundsTransfer(pullFundsRequest, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pullFundsRequest** | [**PullFundsRequest**](PullFundsRequest.md)|  | 
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCPermissions** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 

### Return type

[**PullFunds201Response**](PullFunds201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

