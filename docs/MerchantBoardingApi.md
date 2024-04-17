# CyberSource.MerchantBoardingApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRegistration**](MerchantBoardingApi.md#getRegistration) | **GET** /boarding/v1/registrations/{registrationId} | Gets all the information on a boarding registration
[**postRegistration**](MerchantBoardingApi.md#postRegistration) | **POST** /boarding/v1/registrations | Create a boarding registration


<a name="getRegistration"></a>
# **getRegistration**
> InlineResponse2002 getRegistration(registrationId)

Gets all the information on a boarding registration

This end point will get all information of a boarding registration 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantBoardingApi();

var registrationId = "registrationId_example"; // String | Identifies the boarding registration to be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRegistration(registrationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registrationId** | **String**| Identifies the boarding registration to be updated | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postRegistration"></a>
# **postRegistration**
> InlineResponse2011 postRegistration(postRegistrationBody, opts)

Create a boarding registration

Create a registration to board merchant  If you have  Card Processing product enabled in your boarding request, select payment processor from Configuration -> Sample Request. You may unselect attributes from the Request Builder tree which you do not need in the request. For VPC, CUP and EFTPOS processors, replace the processor name from VPC or CUP or EFTPOS to the actual processor name in the sample request. e.g. replace VPC with &lt;your vpc processor&gt; 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.MerchantBoardingApi();

var postRegistrationBody = new CyberSource.PostRegistrationBody(); // PostRegistrationBody | Boarding registration data

var opts = { 
  'vCIdempotencyId': "vCIdempotencyId_example" // String | defines idempotency of the request
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postRegistration(postRegistrationBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postRegistrationBody** | [**PostRegistrationBody**](PostRegistrationBody.md)| Boarding registration data | 
 **vCIdempotencyId** | **String**| defines idempotency of the request | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

