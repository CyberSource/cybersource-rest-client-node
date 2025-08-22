# CyberSource.DeviceDeAssociationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTerminalAssociation**](DeviceDeAssociationApi.md#deleteTerminalAssociation) | **PATCH** /dms/v2/devices/deassociate | De-associate a device from merchant or account V2
[**postDeAssociateV3Terminal**](DeviceDeAssociationApi.md#postDeAssociateV3Terminal) | **POST** /dms/v3/devices/deassociate | De-associate a device from merchant to account or reseller and from account to reseller


<a name="deleteTerminalAssociation"></a>
# **deleteTerminalAssociation**
> deleteTerminalAssociation(deAssociationRequestBody)

De-associate a device from merchant or account V2

The current association of the device will be removed and will be assigned back to parent in the hierarchy based on internal logic

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DeviceDeAssociationApi();

var deAssociationRequestBody = new CyberSource.DeAssociationRequestBody(); // DeAssociationRequestBody | de association of the deviceId in the request body.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTerminalAssociation(deAssociationRequestBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deAssociationRequestBody** | [**DeAssociationRequestBody**](DeAssociationRequestBody.md)| de association of the deviceId in the request body. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="postDeAssociateV3Terminal"></a>
# **postDeAssociateV3Terminal**
> [InlineResponse2007] postDeAssociateV3Terminal(deviceDeAssociateV3Request)

De-associate a device from merchant to account or reseller and from account to reseller

A device will be de-associated from its current organization and moved up in the hierarchy. The device's new position will be determined by a specified destination, either an account or a portfolio. If no destination is provided, the device will default to the currently logged-in user. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DeviceDeAssociationApi();

var deviceDeAssociateV3Request = [new CyberSource.DeviceDeAssociateV3Request()]; // [DeviceDeAssociateV3Request] | deviceId that has to be de-associated to the destination organizationId.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postDeAssociateV3Terminal(deviceDeAssociateV3Request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceDeAssociateV3Request** | [**[DeviceDeAssociateV3Request]**](DeviceDeAssociateV3Request.md)| deviceId that has to be de-associated to the destination organizationId. | 

### Return type

[**[InlineResponse2007]**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

