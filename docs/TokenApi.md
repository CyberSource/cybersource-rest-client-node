# CyberSource.TokenApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postTokenPaymentCredentials**](TokenApi.md#postTokenPaymentCredentials) | **POST** /tms/v2/tokens/{tokenId}/payment-credentials | Generate Payment Credentials for a TMS Token


<a name="postTokenPaymentCredentials"></a>
# **postTokenPaymentCredentials**
> &#39;String&#39; postTokenPaymentCredentials(tokenId, postPaymentCredentialsRequest, opts)

Generate Payment Credentials for a TMS Token

|  |  |  |     | --- | --- | --- |     |**Token**&lt;br&gt;A Token can represent your tokenized Customer, Payment Instrument or Instrument Identifier information.|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Payment Credentials**&lt;br&gt;Contains payment information such as the network token, generated cryptogram for Visa &amp; MasterCard or dynamic CVV for Amex in a JSON Web Encryption (JWE) response.&lt;br&gt;Your system can use this API to retrieve the Payment Credentials for an existing Customer, Payment Instrument or Instrument Identifier. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TokenApi();

var tokenId = "tokenId_example"; // String | The Id of a token representing a Customer, Payment Instrument or Instrument Identifier.

var postPaymentCredentialsRequest = new CyberSource.PostPaymentCredentialsRequest(); // PostPaymentCredentialsRequest | 

var opts = { 
  'profileId': "profileId_example" // String | The Id of a profile containing user specific TMS configuration.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.postTokenPaymentCredentials(tokenId, postPaymentCredentialsRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| The Id of a token representing a Customer, Payment Instrument or Instrument Identifier. | 
 **postPaymentCredentialsRequest** | [**PostPaymentCredentialsRequest**](PostPaymentCredentialsRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jose;charset=utf-8

