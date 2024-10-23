# CyberSource.FlexAPIApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateFlexAPICaptureContext**](FlexAPIApi.md#generateFlexAPICaptureContext) | **POST** /flex/v2/sessions | Establish a Payment Session with a Capture Context


<a name="generateFlexAPICaptureContext"></a>
# **generateFlexAPICaptureContext**
> 'String' generateFlexAPICaptureContext(generateFlexAPICaptureContextRequest)

Establish a Payment Session with a Capture Context

To establish a payment session, include the API fields you plan to use in that session in the body of the request.  The system then returns a JSON Web Token (JWT) that includes the capture context.   To determine which fields to include in your capture context, identify the personal information that you wish to isolate from the payment session.  **Capture Context Fields**<br> When making a session request, any fields that you request to be added to the capture context are required by default.  However, you can choose to make a field optional by setting the required parameter to false. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.FlexAPIApi();

var generateFlexAPICaptureContextRequest = new CyberSource.GenerateFlexAPICaptureContextRequest(); // GenerateFlexAPICaptureContextRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateFlexAPICaptureContext(generateFlexAPICaptureContextRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateFlexAPICaptureContextRequest** | [**GenerateFlexAPICaptureContextRequest**](GenerateFlexAPICaptureContextRequest.md)|  | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jwt

