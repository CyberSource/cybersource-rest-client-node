# CyberSource.NetworkTokensApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCardArtAsset**](NetworkTokensApi.md#getCardArtAsset) | **GET** /tms/v2/tokens/{instrumentIdentifierId}/{tokenProvider}/assets/{assetType} | Retrieve Card Art
[**getTokenizedCard**](NetworkTokensApi.md#getTokenizedCard) | **GET** /tms/v2/tokenized-cards/{tokenizedCardId} | Retrieve a Tokenized Card
[**postIssuerLifeCycleSimulation**](NetworkTokensApi.md#postIssuerLifeCycleSimulation) | **POST** /tms/v2/tokenized-cards/{tokenizedCardId}/issuer-life-cycle-event-simulations | Simulate Issuer Life Cycle Management Events
[**postTokenPaymentCredentials**](NetworkTokensApi.md#postTokenPaymentCredentials) | **POST** /tms/v2/tokens/{tokenId}/payment-credentials | Generate Payment Credentials v2
[**postTokenPaymentCredentialsV3**](NetworkTokensApi.md#postTokenPaymentCredentialsV3) | **POST** /tms/v3/tokens/{tokenId}/payment-credentials | Generate Payment Credentials Latest Version v3
[**postTokenizedCard**](NetworkTokensApi.md#postTokenizedCard) | **POST** /tms/v2/tokenized-cards | Create a Tokenized Card
[**postTokenizedCardDelete**](NetworkTokensApi.md#postTokenizedCardDelete) | **POST** /tms/v2/tokenized-cards/{tokenizedCardId}/delete | Delete a Tokenized Card


<a name="getCardArtAsset"></a>
# **getCardArtAsset**
> InlineResponse2002 getCardArtAsset(instrumentIdentifierId, tokenProvider, assetType)

Retrieve Card Art

Retrieves Card Art for a specific Instrument Identifier. The Card Art is a visual representation of the cardholder's payment card. Card Art is only available if a Network Token is successfully provisioned. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

var instrumentIdentifierId = "instrumentIdentifierId_example"; // String | The Id of an Instrument Identifier.

var tokenProvider = "tokenProvider_example"; // String | The token provider.

var assetType = "assetType_example"; // String | The type of asset.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCardArtAsset(instrumentIdentifierId, tokenProvider, assetType, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierId** | **String**| The Id of an Instrument Identifier. | 
 **tokenProvider** | **String**| The token provider. | 
 **assetType** | **String**| The type of asset. | 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getTokenizedCard"></a>
# **getTokenizedCard**
> InlineResponse2001 getTokenizedCard(tokenizedCardId, opts)

Retrieve a Tokenized Card

|**Tokenized Cards**<br>A Tokenized Card represents a network token. Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires. This API returns the details of a tokenized card stored in TMS. You can use this API to check the status of a tokenized card and retrieve details such as the last four digits of the underlying card, expiration date, and card type. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

var tokenizedCardId = "tokenizedCardId_example"; // String | The Id of a tokenized card.

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
apiInstance.getTokenizedCard(tokenizedCardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedCardId** | **String**| The Id of a tokenized card. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postIssuerLifeCycleSimulation"></a>
# **postIssuerLifeCycleSimulation**
> postIssuerLifeCycleSimulation(profileId, tokenizedCardId, postIssuerLifeCycleSimulationRequest)

Simulate Issuer Life Cycle Management Events

**Lifecycle Management Events**<br>Simulates an issuer life cycle manegement event for updates on the tokenized card. The events that can be simulated are: - Token status changes (e.g. active, suspended, deleted) - Updates to the underlying card, including card art changes, expiration date changes, and card number suffix. **Note:** This is only available in CAS environment. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

var profileId = "profileId_example"; // String | The Id of a profile containing user specific TMS configuration.

var tokenizedCardId = "tokenizedCardId_example"; // String | The Id of a tokenized card.

var postIssuerLifeCycleSimulationRequest = new CyberSource.PostIssuerLifeCycleSimulationRequest(); // PostIssuerLifeCycleSimulationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postIssuerLifeCycleSimulation(profileId, tokenizedCardId, postIssuerLifeCycleSimulationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | 
 **tokenizedCardId** | **String**| The Id of a tokenized card. | 
 **postIssuerLifeCycleSimulationRequest** | [**PostIssuerLifeCycleSimulationRequest**](PostIssuerLifeCycleSimulationRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postTokenPaymentCredentials"></a>
# **postTokenPaymentCredentials**
> 'String' postTokenPaymentCredentials(tokenId, postPaymentCredentialsRequest, opts)

Generate Payment Credentials v2

**Note**: This resource will be replace by [payment credentials version 3](#/paths/~1tms~1v3~1tokens~1{tokenId}~1payment-credentials/post). The SDK will remain available for now; however, it will no longer be documented or maintain in the Developer Centre.<br> **Token**<br>A Token can represent your tokenized Customer, Payment Instrument, Instrument Identifier or Tokenized Card information.<br> **Payment Credentials**<br>Contains payment information such as the network token, generated cryptogram for Visa & MasterCard or dynamic CVV for Amex in a JSON Web Encryption (JWE) response.<br>Your system can use this API to retrieve the Payment Credentials for an existing Customer, Payment Instrument, Instrument Identifier or Tokenized Card.<br>Optionally, **authenticated identities** information from Passkey authentication can be provided to potentially achieve liability shift, which may result in the return of an e-commerce indicator of 5 if successful. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

var tokenId = "tokenId_example"; // String | The Id of a token representing a Customer, Payment Instrument or Instrument Identifier.

var postPaymentCredentialsRequest = new CyberSource.PostPaymentCredentialsRequest1(); // PostPaymentCredentialsRequest1 | 

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
 **postPaymentCredentialsRequest** | [**PostPaymentCredentialsRequest1**](PostPaymentCredentialsRequest1.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jose;charset=utf-8

<a name="postTokenPaymentCredentialsV3"></a>
# **postTokenPaymentCredentialsV3**
> InlineResponse2011 postTokenPaymentCredentialsV3(tokenId, postPaymentCredentialsRequest, opts)

Generate Payment Credentials Latest Version v3

**Payment Credentials**<br>Contains payment information such as the network token, generated TAVV cryptogram for Visa & MasterCard, dynamic CVV for Amex, or DTVV cryptogram for VISA. This latest version (v3) returns the Primary Account Number details, if the network token is not present. The response is provided in JSON Web Encryption (JWE) format. <br>Your system can use this API to retrieve the Payment Credentials for an existing Customer, Payment Instrument, Instrument Identifier or Tokenized Card.<br>Optionally, **authenticated identities** information from Passkey authentication can be provided to potentially achieve liability shift, which may result in the return of an e-commerce indicator of 5 if successful. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

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
apiInstance.postTokenPaymentCredentialsV3(tokenId, postPaymentCredentialsRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenId** | **String**| The Id of a token representing a Customer, Payment Instrument or Instrument Identifier. | 
 **postPaymentCredentialsRequest** | [**PostPaymentCredentialsRequest**](PostPaymentCredentialsRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/jose;charset=utf-8

<a name="postTokenizedCard"></a>
# **postTokenizedCard**
> InlineResponse2001 postTokenizedCard(postTokenizedCardRequest, opts)

Create a Tokenized Card

**Tokenized cards**<br>A Tokenized card represents a network token. Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires. This API submits a request to the card association to create a network token. If successful, a tokenized card will be created in TMS to represent the network token. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

var postTokenizedCardRequest = new CyberSource.PostTokenizedCardRequest(); // PostTokenizedCardRequest | 

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
apiInstance.postTokenizedCard(postTokenizedCardRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postTokenizedCardRequest** | [**PostTokenizedCardRequest**](PostTokenizedCardRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postTokenizedCardDelete"></a>
# **postTokenizedCardDelete**
> postTokenizedCardDelete(tokenizedCardId, opts)

Delete a Tokenized Card

This API attempts to delete a network token from the card association with a specified reason. | If successful, the corresponding tokenized card will be deleted. | The reason for deletion can be specified to provide context for the deletion operation. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.NetworkTokensApi();

var tokenizedCardId = "tokenizedCardId_example"; // String | The Id of a tokenized card.

var opts = { 
  'profileId': "profileId_example", // String | The Id of a profile containing user specific TMS configuration.
  'postTokenizedCardDeleteRequest': new CyberSource.TmsTokenizedCardDeleteRequest() // TmsTokenizedCardDeleteRequest | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postTokenizedCardDelete(tokenizedCardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedCardId** | **String**| The Id of a tokenized card. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **postTokenizedCardDeleteRequest** | [**TmsTokenizedCardDeleteRequest**](TmsTokenizedCardDeleteRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

