# CyberSource.OAuthApi

All URIs are relative to *https://api-ma.Cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAccessToken**](OAuthApi.md#createAccessToken) | **POST** /oauth2/v3/token | Create access token and refresh token


<a name="createAccessToken"></a>
# **createAccessToken**
> AccessTokenResponse createAccessToken(createAccessTokenRequest, opts)

Create access token and refresh token

This request is used by technology partners to obtain an access token and a refresh token, which are contained in the response.  The partner can then use the access token for authentication when submitting API requests to CyberSource on behalf of the merchant.   The request must include the authorization code that was included in the URL redirect response from CyberSource (see [full documentation](https://developer.cybersource.com/api/developer-guides/OAuth/cybs_extend_intro.html)). Access tokens expire after 15 minutes. The refresh token is used to create a new access token, it expires after one year. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.OAuthApi();

var createAccessTokenRequest = new CyberSource.CreateAccessTokenRequest(); // CreateAccessTokenRequest | Request payload

var opts = { 
  'vCClientCorrelationId': "vCClientCorrelationId_example" // String | We recommended that you submit this header with a unique value in every client request to this endpoint.  It is sent back in the response header and logged both in the request log and response log. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createAccessToken(createAccessTokenRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAccessTokenRequest** | [**CreateAccessTokenRequest**](CreateAccessTokenRequest.md)| Request payload | 
 **vCClientCorrelationId** | **String**| We recommended that you submit this header with a unique value in every client request to this endpoint.  It is sent back in the response header and logged both in the request log and response log.  | [optional] 

### Return type

[**AccessTokenResponse**](AccessTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json;charset=utf-8

