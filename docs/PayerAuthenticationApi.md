# CyberSource.PayerAuthenticationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**checkPayerAuthEnrollment**](PayerAuthenticationApi.md#checkPayerAuthEnrollment) | **POST** /risk/v1/authentications | Check Payer Auth Enrollment
[**payerAuthSetup**](PayerAuthenticationApi.md#payerAuthSetup) | **POST** /risk/v1/authentication-setups | Setup Payer Auth
[**validateAuthenticationResults**](PayerAuthenticationApi.md#validateAuthenticationResults) | **POST** /risk/v1/authentication-results | Validate Authentication Results


<a name="checkPayerAuthEnrollment"></a>
# **checkPayerAuthEnrollment**
> RiskV1AuthenticationsPost201Response checkPayerAuthEnrollment(checkPayerAuthEnrollmentRequest)

Check Payer Auth Enrollment

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

<a name="payerAuthSetup"></a>
# **payerAuthSetup**
> RiskV1AuthenticationSetupsPost201Response payerAuthSetup(payerAuthSetupRequest)

Setup Payer Auth

A new service for Merchants to get reference_id for Digital Wallets to use in place of BIN number in Cardinal. Set up file while authenticating with Cardinal. This service should be called by Merchant when payment instrument chosen or changes. This service has to be called before enrollment check.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PayerAuthenticationApi();

var payerAuthSetupRequest = new CyberSource.PayerAuthSetupRequest(); // PayerAuthSetupRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.payerAuthSetup(payerAuthSetupRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payerAuthSetupRequest** | [**PayerAuthSetupRequest**](PayerAuthSetupRequest.md)|  | 

### Return type

[**RiskV1AuthenticationSetupsPost201Response**](RiskV1AuthenticationSetupsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="validateAuthenticationResults"></a>
# **validateAuthenticationResults**
> RiskV1AuthenticationResultsPost201Response validateAuthenticationResults(validateRequest)

Validate Authentication Results

This call retrieves and validates the authentication results from issuer and allows the merchant to proceed with processing the payment. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.PayerAuthenticationApi();

var validateRequest = new CyberSource.ValidateRequest(); // ValidateRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.validateAuthenticationResults(validateRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateRequest** | [**ValidateRequest**](ValidateRequest.md)|  | 

### Return type

[**RiskV1AuthenticationResultsPost201Response**](RiskV1AuthenticationResultsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

