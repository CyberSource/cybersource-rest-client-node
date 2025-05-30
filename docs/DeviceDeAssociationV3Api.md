# CyberSource.DeviceDeAssociationV3Api

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postDeAssociateV3Terminal**](DeviceDeAssociationV3Api.md#postDeAssociateV3Terminal) | **POST** /dms/v3/devices/deassociate | De-associate a device from merchant to account or reseller and from account to reseller V3


<a name="postDeAssociateV3Terminal"></a>
# **postDeAssociateV3Terminal**
> [InlineResponse2005] postDeAssociateV3Terminal(deviceDeAssociateV3Request)

De-associate a device from merchant to account or reseller and from account to reseller V3

A device will be de-associated from its current organization and moved up in the hierarchy. The device's new position will be determined by a specified destination, either an account or a portfolio. If no destination is provided, the device will default to the currently logged-in user. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.DeviceDeAssociationV3Api();

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

[**[InlineResponse2005]**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=UTF-8
 - **Accept**: application/json;charset=UTF-8

