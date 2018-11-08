# CyberSource.TransactionDetailsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](TransactionDetailsApi.md#getTransaction) | **GET** /tss/v2/transactions/{id} | Retrieve a Transaction


<a name="getTransaction"></a>
# **getTransaction**
> TssV2TransactionsGet200Response getTransaction(id)

Retrieve a Transaction

Include the Request ID in the GET request to retrieve the transaction details.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TransactionDetailsApi();

var id = "id_example"; // String | Request ID. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTransaction(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Request ID.  | 

### Return type

[**TssV2TransactionsGet200Response**](TssV2TransactionsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

