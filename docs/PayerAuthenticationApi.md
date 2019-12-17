# CyberSource.PayerAuthenticationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPayerAuthEnrollment**](PayerAuthenticationApi.md#checkPayerAuthEnrollment) | **POST** /risk/v1/authentications | Check payer auth enrollment
[**validateAuthenticationResults**](PayerAuthenticationApi.md#validateAuthenticationResults) | **POST** /risk/v1/authentication-results | Validate authentication results


<a name="checkPayerAuthEnrollment"></a>
# **checkPayerAuthEnrollment**
> RiskV1AuthenticationsPost201Response checkPayerAuthEnrollment(checkPayerAuthEnrollmentRequest)

Check payer auth enrollment

This call verifies that the card is enrolled in a card authentication program.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PayerAuthenticationApi();

var checkPayerAuthEnrollmentRequest = new CyberSource.CheckPayerAuthEnrollmentRequest(); // CheckPayerAuthEnrollmentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkPayerAuthEnrollment(checkPayerAuthEnrollmentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkPayerAuthEnrollmentRequest** | [**CheckPayerAuthEnrollmentRequest**](CheckPayerAuthEnrollmentRequest.md)|  | 

### Return type

[**RiskV1AuthenticationsPost201Response**](RiskV1AuthenticationsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="validateAuthenticationResults"></a>
# **validateAuthenticationResults**
> RiskV1AuthenticationResultsPost201Response validateAuthenticationResults(request)

Validate authentication results

This call retrieves and validates the authentication results from issuer and allows the merchant to proceed with processing the payment. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PayerAuthenticationApi();

var request = new CyberSource.Request(); // Request | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateAuthenticationResults(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**Request**](Request.md)|  | 

### Return type

[**RiskV1AuthenticationResultsPost201Response**](RiskV1AuthenticationResultsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

