# CyberSource.CredentialsApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provisionMppCredentials**](CredentialsApi.md#provisionMppCredentials) | **POST** /icc/v1/mpp/credentials | Provision MPP credentials


<a name="provisionMppCredentials"></a>
# **provisionMppCredentials**
> MppCredentialsResponse200 provisionMppCredentials(mppCredentialsRequest)

Provision MPP credentials

Provisions an encrypted MPP credential for use as the credential payload in an Authorization: Payment header (MPP spec Section 8.2). The caller provides an instrument identifier (referencing a stored card in TMS) and the challenge context from the merchant's 402 response, including the merchant's RSA public encryption key. This service:   1. Calls TMS to retrieve the network token and cryptogram for the instrument.   2. Builds the token plaintext (MPP spec Section 8.3, type: network_token).   3. Encrypts the plaintext using RSA-OAEP with SHA-256 and the merchant's public key.   4. Returns the MPP credential payload fields (MPP spec Section 8.2, Table 4). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CredentialsApi();

var mppCredentialsRequest = new CyberSource.MppCredentialsRequest(); // MppCredentialsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.provisionMppCredentials(mppCredentialsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mppCredentialsRequest** | [**MppCredentialsRequest**](MppCredentialsRequest.md)|  | 

### Return type

[**MppCredentialsResponse200**](MppCredentialsResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

