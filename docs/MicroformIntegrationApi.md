# CyberSource.MicroformIntegrationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateCaptureContext**](MicroformIntegrationApi.md#generateCaptureContext) | **POST** /microform/v2/sessions | Generate Capture Context


<a name="generateCaptureContext"></a>
# **generateCaptureContext**
> &#39;String&#39; generateCaptureContext(generateCaptureContextRequest)

Generate Capture Context

This API is used to generate the Capture Context data structure for the Microform Integration.  Microform is a browser-based acceptance solution that allows a seller to capture payment information is a secure manner from their website.  For more information about Flex Microform transactions, see the [Flex Developer Guides Page](https://developer.cybersource.com/api/developer-guides/dita-flex/SAFlexibleToken.html). For examples on how to integrate Flex Microform within your webpage please see our [GitHub Flex Samples](https://github.com/CyberSource?q&#x3D;flex&amp;type&#x3D;&amp;language&#x3D;) This API is a server-to-server API to generate the capture context that can be used to initiate instance of microform on a acceptance page.  The capture context is a digitally signed JWT that provides authentication, one-time keys, and the target origin to the Microform Integration application. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MicroformIntegrationApi();

var generateCaptureContextRequest = new CyberSource.GenerateCaptureContextRequest(); // GenerateCaptureContextRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateCaptureContext(generateCaptureContextRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateCaptureContextRequest** | [**GenerateCaptureContextRequest**](GenerateCaptureContextRequest.md)|  | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jwt

