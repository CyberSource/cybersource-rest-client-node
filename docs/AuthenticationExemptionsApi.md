# CyberSource.AuthenticationExemptionsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticationExemptions**](AuthenticationExemptionsApi.md#authenticationExemptions) | **POST** /risk/v1/authentication-exemptions | Authentication exemptions service


<a name="authenticationExemptions"></a>
# **authenticationExemptions**
> RiskV1AuthenticationExemptionsPost201Response authenticationExemptions(authenticationExemptionsRequest)

Authentication exemptions service

A new CYBS branded service to connect to VISA’s REST API to enable Visa Transaction Advisor (VTA) as a standalone service for merchants to support PSD2/SCA adoption and exemptions processing startegy in Europe.VTA Provides intelligent risk data to merchants as inputs to their in-house fraud management tools for fraud mitigation on Visa transactions. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AuthenticationExemptionsApi();

var authenticationExemptionsRequest = new CyberSource.AuthenticationExemptionsRequest(); // AuthenticationExemptionsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.authenticationExemptions(authenticationExemptionsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authenticationExemptionsRequest** | [**AuthenticationExemptionsRequest**](AuthenticationExemptionsRequest.md)|  | 

### Return type

[**RiskV1AuthenticationExemptionsPost201Response**](RiskV1AuthenticationExemptionsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

