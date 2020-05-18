# CyberSource.UserManagementSearchApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**searchUsers**](UserManagementSearchApi.md#searchUsers) | **POST** /ums/v1/users/search | Search User Information


<a name="searchUsers"></a>
# **searchUsers**
> UmsV1UsersGet200Response searchUsers(searchRequest)

Search User Information

This endpoint is to get all the user information depending on the filter criteria passed in request body.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UserManagementSearchApi();

var searchRequest = new CyberSource.SearchRequest(); // SearchRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchUsers(searchRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchRequest** | [**SearchRequest**](SearchRequest.md)|  | 

### Return type

[**UmsV1UsersGet200Response**](UmsV1UsersGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/hal+json;charset=utf-8

