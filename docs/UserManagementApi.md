# CyberSource.UserManagementApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsers**](UserManagementApi.md#getUsers) | **GET** /ums/v1/users | Get user information


<a name="getUsers"></a>
# **getUsers**
> UmsV1UsersGet200Response getUsers(opts)

Get user information

This endpoint is to get all the user information depending on the filter criteria passed in the query.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UserManagementApi();

var opts = { 
  'organizationId': "organizationId_example", // String | This is the orgId of the organization which the user belongs to.
  'userName': "userName_example", // String | User ID of the user you want to get details on.
  'permissionId': "permissionId_example", // String | permission that you are trying to search user on.
  'roleId': "roleId_example" // String | role of the user you are trying to search on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **organizationId** | **String**| This is the orgId of the organization which the user belongs to. | [optional] 
 **userName** | **String**| User ID of the user you want to get details on. | [optional] 
 **permissionId** | **String**| permission that you are trying to search user on. | [optional] 
 **roleId** | **String**| role of the user you are trying to search on. | [optional] 

### Return type

[**UmsV1UsersGet200Response**](UmsV1UsersGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

