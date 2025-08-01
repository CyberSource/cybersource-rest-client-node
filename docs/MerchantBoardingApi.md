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
> InlineResponse2013 postRegistration(postRegistrationBody, opts)

Create a boarding registration

Boarding Product is specifically for resellers who onboard merchants to resell their services to merchants and help integrate REST API into their systems.  The Boarding API is designed to simplify and streamline the onboarding process of merchants by enabling administrators and developers to: 1. Enable and Configure Products: The API helps in adding new products to an existing organization and configuring them to suit specific needs. 2. Update Merchant Information: The API allows for updating an organization's information efficiently. 3. Manage Payment Integration: It provides templates for secure payment integration and management. 

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

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

