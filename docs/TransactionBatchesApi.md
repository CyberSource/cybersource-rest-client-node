# CyberSource.TransactionBatchesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransactionBatchDetails**](TransactionBatchesApi.md#getTransactionBatchDetails) | **GET** /pts/v1/transaction-batch-details | Filters batch response. 
[**getTransactionBatchId**](TransactionBatchesApi.md#getTransactionBatchId) | **GET** /pts/v1/transaction-batches/{id} | Get individual batch file
[**getTransactionBatches**](TransactionBatchesApi.md#getTransactionBatches) | **GET** /pts/v1/transaction-batches | Get a list of batch files


<a name="getTransactionBatchDetails"></a>
# **getTransactionBatchDetails**
> getTransactionBatchDetails(transactionBatchId, opts)

Filters batch response. 

Filters batch response. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionBatchesApi();

var transactionBatchId = "transactionBatchId_example"; // String | Transaction Batch Id, this is unique.

var opts = { 
  'uploadDate': new Date("2013-10-20"), // Date | Date in which the original batch file was uploaded. Date must be in ISO-8601 format.
  'status': "status_example" // String | Allows you to filter by rejected response. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTransactionBatchDetails(transactionBatchId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionBatchId** | **String**| Transaction Batch Id, this is unique. | 
 **uploadDate** | **Date**| Date in which the original batch file was uploaded. Date must be in ISO-8601 format. | [optional] 
 **status** | **String**| Allows you to filter by rejected response.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: text/vnd.cybersource.map-csv

<a name="getTransactionBatchId"></a>
# **getTransactionBatchId**
> PtsV1TransactionBatchesIdGet200Response getTransactionBatchId(id)

Get individual batch file

Provide the search range

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionBatchesApi();

var id = "id_example"; // String | The batch id assigned for the template.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionBatchId(id, callback);
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

<a name="getTransactionBatches"></a>
# **getTransactionBatches**
> PtsV1TransactionBatchesGet200Response getTransactionBatches(startTime, endTime)

Get a list of batch files

Provide the search range

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionBatchesApi();

var startTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZZ 

var endTime = new Date("2013-10-20T19:20:30+01:00"); // Date | Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd'T'HH:mm:ss.SSSZZ 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransactionBatches(startTime, endTime, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | **Date**| Valid report Start Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ  | 
 **endTime** | **Date**| Valid report End Time in **ISO 8601 format** Please refer the following link to know more about ISO 8601 format. - https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html#anchor14   **Example date format:**   - yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSZZ  | 

### Return type

[**PtsV1TransactionBatchesGet200Response**](PtsV1TransactionBatchesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json

