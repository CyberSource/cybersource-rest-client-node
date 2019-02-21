# CyberSource.TransactionBatchApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ptsV1TransactionBatchesIdGet**](TransactionBatchApi.md#ptsV1TransactionBatchesIdGet) | **GET** /pts/v1/transaction-batches/{id} | Get an individual batch file Details processed through the Offline Transaction Submission Services


<a name="ptsV1TransactionBatchesIdGet"></a>
# **ptsV1TransactionBatchesIdGet**
> PtsV1TransactionBatchesIdGet200Response ptsV1TransactionBatchesIdGet(id)

Get an individual batch file Details processed through the Offline Transaction Submission Services

Provide the search range

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionBatchApi();

var id = "id_example"; // String | The batch id assigned for the template.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ptsV1TransactionBatchesIdGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The batch id assigned for the template. | 

### Return type

[**PtsV1TransactionBatchesIdGet200Response**](PtsV1TransactionBatchesIdGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

