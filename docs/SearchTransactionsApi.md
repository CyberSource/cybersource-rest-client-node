# CyberSource.SearchTransactionsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSearch**](SearchTransactionsApi.md#createSearch) | **POST** /tss/v2/searches | Create a search request
[**getSearch**](SearchTransactionsApi.md#getSearch) | **GET** /tss/v2/searches/{id} | Get Search results


<a name="createSearch"></a>
# **createSearch**
> TssV2TransactionsPost201Response createSearch(createSearchRequest)

Create a search request

Create a search request. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SearchTransactionsApi();

var createSearchRequest = new CyberSource.TssV2TransactionsPostResponse(); // TssV2TransactionsPostResponse | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSearch(createSearchRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSearchRequest** | [**TssV2TransactionsPostResponse**](TssV2TransactionsPostResponse.md)|  | 

### Return type

[**TssV2TransactionsPost201Response**](TssV2TransactionsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getSearch"></a>
# **getSearch**
> TssV2TransactionsPost201Response getSearch(id)

Get Search results

Include the Search ID in the GET request to retrieve the search results.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.SearchTransactionsApi();

var id = "id_example"; // String | Search ID.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSearch(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Search ID. | 

### Return type

[**TssV2TransactionsPost201Response**](TssV2TransactionsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

