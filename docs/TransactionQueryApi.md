# CyberSource.TransactionQueryApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQueryApi**](TransactionQueryApi.md#createQueryApi) | **POST** /pts/v2/payouts/transaction-query/{id} | Query Transaction Details


<a name="createQueryApi"></a>
# **createQueryApi**
> InlineResponse2015 createQueryApi(id, body, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, opts)

Query Transaction Details

Query the status and details of payouts transactions including Pull Funds, Push Funds, and Pull Funds Reversals 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionQueryApi();

var id = "id_example"; // String | This is the CyberSource Request ID generated for successfully processed AFT/OCT that needs to be queried. 

var body = new CyberSource.Body1(); // Body1 | 

var contentType = "contentType_example"; // String | 

var xRequestid = "xRequestid_example"; // String | 

var vCMerchantId = "vCMerchantId_example"; // String | 

var vCPermissions = "vCPermissions_example"; // String | 

var vCCorrelationId = "vCCorrelationId_example"; // String | 

var vCOrganizationId = "vCOrganizationId_example"; // String | 

var opts = { 
  'limit': 56, // Number | The maximum number of options to be retrieved from the processor and displayed to the consumer. 
  'offset': 56 // Number | Offset from the first item in the list of options received from the processor. If you want to display the options in multiple lists, this number represents the first option displayed in each list. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createQueryApi(id, body, contentType, xRequestid, vCMerchantId, vCPermissions, vCCorrelationId, vCOrganizationId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| This is the CyberSource Request ID generated for successfully processed AFT/OCT that needs to be queried.  | 
 **body** | [**Body1**](Body1.md)|  | 
 **contentType** | **String**|  | 
 **xRequestid** | **String**|  | 
 **vCMerchantId** | **String**|  | 
 **vCPermissions** | **String**|  | 
 **vCCorrelationId** | **String**|  | 
 **vCOrganizationId** | **String**|  | 
 **limit** | **Number**| The maximum number of options to be retrieved from the processor and displayed to the consumer.  | [optional] 
 **offset** | **Number**| Offset from the first item in the list of options received from the processor. If you want to display the options in multiple lists, this number represents the first option displayed in each list.  | [optional] 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

