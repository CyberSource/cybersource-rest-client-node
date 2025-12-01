# CyberSource.TokenizedCardApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTokenizedCard**](TokenizedCardApi.md#deleteTokenizedCard) | **DELETE** /tms/v2/tokenized-cards/{tokenizedCardId} | Delete a Tokenized Card
[**getTokenizedCard**](TokenizedCardApi.md#getTokenizedCard) | **GET** /tms/v2/tokenized-cards/{tokenizedCardId} | Retrieve a Tokenized Card
[**postIssuerLifeCycleSimulation**](TokenizedCardApi.md#postIssuerLifeCycleSimulation) | **POST** /tms/v2/tokenized-cards/{tokenizedCardId}/issuer-life-cycle-event-simulations | Simulate Issuer Life Cycle Management Events
[**postTokenizedCard**](TokenizedCardApi.md#postTokenizedCard) | **POST** /tms/v2/tokenized-cards | Create a Tokenized Card


<a name="deleteTokenizedCard"></a>
# **deleteTokenizedCard**
> deleteTokenizedCard(tokenizedCardId, opts)

Delete a Tokenized Card

|  |  |  | | --- | --- | --- | | The Network Token will attempt to be deleted from the card association and if successful the corresponding TMS Network Token will be deleted. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TokenizedCardApi();

var tokenizedCardId = "tokenizedCardId_example"; // String | The Id of a tokenized card.

var opts = { 
  'profileId': "profileId_example" // String | The Id of a profile containing user specific TMS configuration.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTokenizedCard(tokenizedCardId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedCardId** | **String**| The Id of a tokenized card. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getTokenizedCard"></a>
# **getTokenizedCard**
> TokenizedcardRequest getTokenizedCard(tokenizedCardId, opts)

Retrieve a Tokenized Card

|  |  |  | | --- | --- | --- | |**Tokenized Cards**<br>A Tokenized Card represents a network token. Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TokenizedCardApi();

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

[**TokenizedcardRequest**](TokenizedcardRequest.md)

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

var apiInstance = new CyberSource.TokenizedCardApi();

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

<a name="postTokenizedCard"></a>
# **postTokenizedCard**
> TokenizedcardRequest postTokenizedCard(tokenizedcardRequest, opts)

Create a Tokenized Card

|  |  |  | | --- | --- | --- | |**Tokenized cards**<br>A Tokenized card represents a network token. Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.TokenizedCardApi();

var tokenizedcardRequest = new CyberSource.TokenizedcardRequest(); // TokenizedcardRequest | 

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
apiInstance.postTokenizedCard(tokenizedcardRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenizedcardRequest** | [**TokenizedcardRequest**](TokenizedcardRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**TokenizedcardRequest**](TokenizedcardRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

