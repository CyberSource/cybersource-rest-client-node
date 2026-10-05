# CyberSource.AgentRegistrationApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAgentKey**](AgentRegistrationApi.md#activateAgentKey) | **POST** /icc/v1/agents/{agentId}/keys/{keyId}/activate | Activate a key
[**addAgentKey**](AgentRegistrationApi.md#addAgentKey) | **POST** /icc/v1/agents/{agentId}/keys | Add a key to an agent
[**getAgent**](AgentRegistrationApi.md#getAgent) | **GET** /icc/v1/agents/{agentId} | Get an agent
[**getAgentKey**](AgentRegistrationApi.md#getAgentKey) | **GET** /icc/v1/agents/{agentId}/keys/{keyId} | Get a key by agent and key ID
[**listAgentKeys**](AgentRegistrationApi.md#listAgentKeys) | **GET** /icc/v1/agents/{agentId}/keys | List keys for an agent
[**registerAgent**](AgentRegistrationApi.md#registerAgent) | **POST** /icc/v1/agents | Register an agent
[**updateAgent**](AgentRegistrationApi.md#updateAgent) | **PUT** /icc/v1/agents/{agentId} | Update an agent
[**updateAgentKey**](AgentRegistrationApi.md#updateAgentKey) | **PUT** /icc/v1/agents/{agentId}/keys/{keyId} | Update a key


<a name="activateAgentKey"></a>
# **activateAgentKey**
> AddAgentKeyResponse201 activateAgentKey(agentId, keyId)

Activate a key

**Activate a Key**<br>Activates a deactivated public key, making it available for signature verification.<br><br> Returns **404** if the agent or key is not found, **403** if the agent is deactivated. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var keyId = "keyId_example"; // String | Unique key identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.activateAgentKey(agentId, keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **keyId** | **String**| Unique key identifier | 

### Return type

[**AddAgentKeyResponse201**](AddAgentKeyResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="addAgentKey"></a>
# **addAgentKey**
> AddAgentKeyResponse201 addAgentKey(agentId, keyRequest)

Add a key to an agent

**Add a Key to an Agent**<br>Uploads a new public key for the specified agent. The key is created in ***deactivated*** state and must be explicitly activated via `POST /agents/{agentId}/keys/{keyId}/activate` before it can be used.<br><br> Returns **404** if the agent is not found, **403** if the agent is deactivated. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var keyRequest = new CyberSource.KeyRequest(); // KeyRequest | Key creation request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAgentKey(agentId, keyRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **keyRequest** | [**KeyRequest**](KeyRequest.md)| Key creation request | 

### Return type

[**AddAgentKeyResponse201**](AddAgentKeyResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getAgent"></a>
# **getAgent**
> AgentRegistrationResponse201 getAgent(agentId)

Get an agent

**Get an Agent**<br>Retrieves a single agent by its unique identifier, including all associated public keys.<br><br> Returns **404** if the agent is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgent(agentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 

### Return type

[**AgentRegistrationResponse201**](AgentRegistrationResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getAgentKey"></a>
# **getAgentKey**
> AddAgentKeyResponse201 getAgentKey(agentId, keyId)

Get a key by agent and key ID

**Get a Key**<br>Retrieves a specific public key by agent ID and key ID.<br><br> Returns **404** if the agent or key is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var keyId = "keyId_example"; // String | Unique key identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgentKey(agentId, keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **keyId** | **String**| Unique key identifier | 

### Return type

[**AddAgentKeyResponse201**](AddAgentKeyResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="listAgentKeys"></a>
# **listAgentKeys**
> ListAgentKeysResponse200 listAgentKeys(agentId, opts)

List keys for an agent

**List Keys for an Agent**<br>Returns a paginated list of all public keys associated with the specified agent.<br><br> Returns **404** if the agent is not found. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var opts = { 
  'page': 1, // Number | Page number (1-indexed)
  'pageSize': 30 // Number | Items per page (max 100)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAgentKeys(agentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **page** | **Number**| Page number (1-indexed) | [optional] [default to 1]
 **pageSize** | **Number**| Items per page (max 100) | [optional] [default to 30]

### Return type

[**ListAgentKeysResponse200**](ListAgentKeysResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="registerAgent"></a>
# **registerAgent**
> AgentRegistrationResponse201 registerAgent(agentRequest)

Register an agent

**Register an Agent**<br>Registers a new AI agent in the Visa Agent Registry Service (VARS). Once registered, the agent can upload public keys that merchants and Visa services use to verify request signatures.<br><br> **Key Behavior**<br>If an optional `keys` array is included in the request, those keys are created alongside the agent registration in a single operation.<br> Returns **409 Conflict** if an agent with the same domain already exists. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentRequest = new CyberSource.AgentRequest(); // AgentRequest | Agent registration request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerAgent(agentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentRequest** | [**AgentRequest**](AgentRequest.md)| Agent registration request | 

### Return type

[**AgentRegistrationResponse201**](AgentRegistrationResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateAgent"></a>
# **updateAgent**
> AgentRegistrationResponse201 updateAgent(agentId, agentUpdate)

Update an agent

**Update an Agent**<br>Updates agent information. Only the following fields can be modified: `name`, `domain`, `description`, `contactEmail`, and `agentMetadata`.<br><br> Submitting any other field (e.g., `tokenRequestorId`, `keys`) returns **422 Validation Error**.<br> Returns **404** if the agent is not found, **403** if the agent is deactivated, **409** if the new domain is already registered. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var agentUpdate = new CyberSource.AgentUpdate(); // AgentUpdate | Agent update request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAgent(agentId, agentUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **agentUpdate** | [**AgentUpdate**](AgentUpdate.md)| Agent update request | 

### Return type

[**AgentRegistrationResponse201**](AgentRegistrationResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateAgentKey"></a>
# **updateAgentKey**
> AddAgentKeyResponse201 updateAgentKey(agentId, keyId, keyUpdate)

Update a key

**Update a Key**<br>Updates key information. The following fields can be modified: `keyName`, `publicKey`, `algorithm`, and `expirationDate`.<br><br> **Note:** `publicKey` and `algorithm` must always be updated together.<br> Returns **404** if the agent or key is not found, **403** if the agent or key is deactivated, **409** if the new `keyName` already exists. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentRegistrationApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var keyId = "keyId_example"; // String | Unique key identifier

var keyUpdate = new CyberSource.KeyUpdate(); // KeyUpdate | Key update request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAgentKey(agentId, keyId, keyUpdate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **keyId** | **String**| Unique key identifier | 
 **keyUpdate** | [**KeyUpdate**](KeyUpdate.md)| Key update request | 

### Return type

[**AddAgentKeyResponse201**](AddAgentKeyResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

