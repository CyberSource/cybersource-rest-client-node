# CyberSource.UnifiedCheckoutV1CaptureContextApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateUnifiedCheckoutV1CaptureContext**](UnifiedCheckoutV1CaptureContextApi.md#generateUnifiedCheckoutV1CaptureContext) | **POST** /uc/v1/sessions | Generate Unified Checkout V1 Capture Context


<a name="generateUnifiedCheckoutV1CaptureContext"></a>
# **generateUnifiedCheckoutV1CaptureContext**
> 'String' generateUnifiedCheckoutV1CaptureContext(generateUnifiedCheckoutV1CaptureContextRequest)

Generate Unified Checkout V1 Capture Context

Unified Checkout is a powerful product within the Digital Acceptance Suite. Unified Checkout is designed to assist merchants with the adoption and inclusion of digital payments within their payment acceptance page. With Unified Checkout Integration you can add digital payment methods to create familiar, convenient and seamless payment experiences that are designed to reduce checkout friction and increase conversions. Click to Pay Drop-in UI is built on the Unified Checkout platform. For more information about Unified Checkout, see the [Unified Checkout Developer Guides Page](https://developer.cybersource.com/docs/cybs/en-us/unified-checkout/developer/all/rest/unified-checkout/uc-intro.html). For examples on how to integrate Unified Checkout within your webpage please see our [GitHub Unified Checkout Samples](https://github.com/CyberSource/cybersource-unified-checkout-sample-java). Generate Unified Checkout V1 Capture Context Generate a one-time use capture context used for the invocation of Unified Checkout. The Request wil contain all of the parameters for how Unified Checkout will operate within a client webpage. The resulting payload will be a JWT signed object that can be used to initiate Unified Checkout or Click to Pay Drop-in UI within a web page

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UnifiedCheckoutV1CaptureContextApi();

var generateUnifiedCheckoutV1CaptureContextRequest = new CyberSource.GenerateUnifiedCheckoutV1CaptureContextRequest(); // GenerateUnifiedCheckoutV1CaptureContextRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateUnifiedCheckoutV1CaptureContext(generateUnifiedCheckoutV1CaptureContextRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnifiedCheckoutV1CaptureContextRequest** | [**GenerateUnifiedCheckoutV1CaptureContextRequest**](GenerateUnifiedCheckoutV1CaptureContextRequest.md)|  | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jwt

