# CyberSource.AgentCapabilitiesApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAgentKey**](AgentCapabilitiesApi.md#activateAgentKey) | **POST** /icc/v1/agents/{agentId}/keys/{keyId}/activate | Activate a key
[**addAgentKey**](AgentCapabilitiesApi.md#addAgentKey) | **POST** /icc/v1/agents/{agentId}/keys | Add a key to an agent
[**cancelCheckout**](AgentCapabilitiesApi.md#cancelCheckout) | **POST** /icc/v1/checkout_sessions/{session_id}/cancel | Cancel Checkout ACP
[**cancelPurchaseIntent**](AgentCapabilitiesApi.md#cancelPurchaseIntent) | **PUT** /icc/v1/instructions/{instructionId}/cancel | Cancel a purchase intent
[**completeCheckout**](AgentCapabilitiesApi.md#completeCheckout) | **POST** /icc/v1/checkout_sessions/{session_id}/complete | Complete Checkout ACP
[**confirmTransactionEvents**](AgentCapabilitiesApi.md#confirmTransactionEvents) | **POST** /icc/v1/instructions/{instructionId}/confirmations | Confirm transaction events
[**createCheckoutSession**](AgentCapabilitiesApi.md#createCheckoutSession) | **POST** /icc/v1/checkout_sessions | Create Checkout Session ACP
[**deactivateAgentKey**](AgentCapabilitiesApi.md#deactivateAgentKey) | **DELETE** /icc/v1/agents/{agentId}/keys/{keyId} | Deactivate a key
[**enrollCard**](AgentCapabilitiesApi.md#enrollCard) | **POST** /icc/v1/tokens | Enroll a card
[**getAgent**](AgentCapabilitiesApi.md#getAgent) | **GET** /icc/v1/agents/{agentId} | Get an agent
[**getAgentKey**](AgentCapabilitiesApi.md#getAgentKey) | **GET** /icc/v1/agents/{agentId}/keys/{keyId} | Get a key by agent and key ID
[**getCheckoutSession**](AgentCapabilitiesApi.md#getCheckoutSession) | **GET** /icc/v1/checkout_sessions/{session_id} | Get Checkout Session ACP
[**initiatePurchaseIntent**](AgentCapabilitiesApi.md#initiatePurchaseIntent) | **POST** /icc/v1/instructions | Initiate a purchase intent
[**listAgentKeys**](AgentCapabilitiesApi.md#listAgentKeys) | **GET** /icc/v1/agents/{agentId}/keys | List keys for an agent
[**registerAgent**](AgentCapabilitiesApi.md#registerAgent) | **POST** /icc/v1/agents | Register an agent
[**retrievePaymentCredentials**](AgentCapabilitiesApi.md#retrievePaymentCredentials) | **POST** /icc/v1/instructions/{instructionId}/credentials | Retrieve payment credentials
[**ucpCancelCheckout**](AgentCapabilitiesApi.md#ucpCancelCheckout) | **POST** /icc/v1/checkout-sessions/{session_id}/cancel | Cancel Checkout UCP
[**ucpCompleteCheckout**](AgentCapabilitiesApi.md#ucpCompleteCheckout) | **POST** /icc/v1/checkout-sessions/{session_id}/complete | Complete Checkout UCP
[**ucpCreateCheckoutSession**](AgentCapabilitiesApi.md#ucpCreateCheckoutSession) | **POST** /icc/v1/checkout-sessions | Create Checkout Session UCP
[**ucpGetCheckoutSession**](AgentCapabilitiesApi.md#ucpGetCheckoutSession) | **GET** /icc/v1/checkout-sessions/{session_id} | Get Checkout Session UCP
[**ucpUpdateCheckoutSession**](AgentCapabilitiesApi.md#ucpUpdateCheckoutSession) | **PUT** /icc/v1/checkout-sessions/{session_id} | Update Checkout Session UCP
[**updateAgent**](AgentCapabilitiesApi.md#updateAgent) | **PUT** /icc/v1/agents/{agentId} | Update an agent
[**updateAgentKey**](AgentCapabilitiesApi.md#updateAgentKey) | **PUT** /icc/v1/agents/{agentId}/keys/{keyId} | Update a key
[**updateCheckoutSession**](AgentCapabilitiesApi.md#updateCheckoutSession) | **POST** /icc/v1/checkout_sessions/{session_id} | Update Checkout Session ACP
[**updatePurchaseIntent**](AgentCapabilitiesApi.md#updatePurchaseIntent) | **PUT** /icc/v1/instructions/{instructionId} | Update a purchase intent


<a name="activateAgentKey"></a>
# **activateAgentKey**
> AddAgentKeyResponse201 activateAgentKey(agentId, keyId)

Activate a key

Activate a deactivated key. Raises 404 if agent or key not found, 403 if agent is deactivated.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

[category 1 — Agent_Capabilities] Upload a Base64-encoded public key for an agent.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

<a name="cancelCheckout"></a>
# **cancelCheckout**
> InlineResponse20018 cancelCheckout(sessionId, opts)

Cancel Checkout ACP

Cancels an active ACP checkout session. No charge is made to the buyer.  This call is safe to make multiple times — cancelling an already-cancelled session returns a successful response without error.  Sessions also expire automatically after 30 minutes of inactivity, so explicit cancellation is optional but recommended to release any reserved inventory immediately. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sessionId_example"; // String | The unique identifier of the ACP checkout session to cancel. Obtained from the `id` field in the Create Session response. 

var opts = { 
  'idempotencyKey': "idempotencyKey_example", // String | Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned. 
  'acceptLanguage': "acceptLanguage_example", // String | Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content. 
  'userAgent': "userAgent_example", // String | Client user agent string identifying the AI agent platform and version. 
  'requestId': "requestId_example", // String | Unique request identifier for distributed tracing and debugging. Echoed back in the response headers. 
  'signature': "signature_example", // String | Request signature for payload integrity verification. 
  'timestamp': "timestamp_example", // String | ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection. 
  'aPIVersion': "aPIVersion_example" // String | ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelCheckout(sessionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the ACP checkout session to cancel. Obtained from the `id` field in the Create Session response.  | 
 **idempotencyKey** | **String**| Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned.  | [optional] 
 **acceptLanguage** | **String**| Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content.  | [optional] 
 **userAgent** | **String**| Client user agent string identifying the AI agent platform and version.  | [optional] 
 **requestId** | **String**| Unique request identifier for distributed tracing and debugging. Echoed back in the response headers.  | [optional] 
 **signature** | **String**| Request signature for payload integrity verification.  | [optional] 
 **timestamp** | **String**| ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection.  | [optional] 
 **aPIVersion** | **String**| ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed.  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="cancelPurchaseIntent"></a>
# **cancelPurchaseIntent**
> AgenticCreatePurchaseIntentResponse200 cancelPurchaseIntent(instructionId, agenticCancelPurchaseIntentRequest)

Cancel a purchase intent

Cancel an existing purchase intent (instruction) identified by its instructionId. The agent calls this endpoint when the consumer decides to abandon the purchase before payment credentials have been used. Requires device information and assurance data for identity verification. Returns status CANCELLED (HTTP 200) on success, or PENDING (HTTP 202) with pendingEvents if cardholder authentication is required before cancellation can proceed.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var instructionId = "instructionId_example"; // String | 

var agenticCancelPurchaseIntentRequest = new CyberSource.AgenticCancelPurchaseIntentRequest(); // AgenticCancelPurchaseIntentRequest | Unique identifier for the purchase intent instruction.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelPurchaseIntent(instructionId, agenticCancelPurchaseIntentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instructionId** | **String**|  | 
 **agenticCancelPurchaseIntentRequest** | [**AgenticCancelPurchaseIntentRequest**](AgenticCancelPurchaseIntentRequest.md)| Unique identifier for the purchase intent instruction. | 

### Return type

[**AgenticCreatePurchaseIntentResponse200**](AgenticCreatePurchaseIntentResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="completeCheckout"></a>
# **completeCheckout**
> InlineResponse20017 completeCheckout(sessionId, acpCompleteCheckoutRequest, opts)

Complete Checkout ACP

**Final step of the ACP checkout flow.**  Submits payment and buyer information to place the order with the merchant. On success, the session transitions to `completed` and an `order_id` is returned confirming the merchant accepted the order.  Once completed, the session is immutable — it cannot be updated or cancelled.  **Payment token:** The `payment.token` must be a valid token from the payment provider configured for the merchant (e.g. a tokenized card from Stripe or Braintree). ACG forwards the token to the merchant's payment processor — it is never stored. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sessionId_example"; // String | The unique identifier of the ACP checkout session to complete.

var acpCompleteCheckoutRequest = new CyberSource.AcpCompleteCheckoutRequest(); // AcpCompleteCheckoutRequest | Final buyer and payment details needed to place the order. Both `buyer` and `payment` may have been provided in earlier Create/Update calls; if so, they can be omitted here. At least a valid payment token is required to process the transaction. 

var opts = { 
  'idempotencyKey': "idempotencyKey_example", // String | Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned. 
  'acceptLanguage': "acceptLanguage_example", // String | Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content. 
  'userAgent': "userAgent_example", // String | Client user agent string identifying the AI agent platform and version. 
  'requestId': "requestId_example", // String | Unique request identifier for distributed tracing and debugging. Echoed back in the response headers. 
  'signature': "signature_example", // String | Request signature for payload integrity verification. 
  'timestamp': "timestamp_example", // String | ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection. 
  'aPIVersion': "aPIVersion_example" // String | ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.completeCheckout(sessionId, acpCompleteCheckoutRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the ACP checkout session to complete. | 
 **acpCompleteCheckoutRequest** | [**AcpCompleteCheckoutRequest**](AcpCompleteCheckoutRequest.md)| Final buyer and payment details needed to place the order. Both `buyer` and `payment` may have been provided in earlier Create/Update calls; if so, they can be omitted here. At least a valid payment token is required to process the transaction.  | 
 **idempotencyKey** | **String**| Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned.  | [optional] 
 **acceptLanguage** | **String**| Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content.  | [optional] 
 **userAgent** | **String**| Client user agent string identifying the AI agent platform and version.  | [optional] 
 **requestId** | **String**| Unique request identifier for distributed tracing and debugging. Echoed back in the response headers.  | [optional] 
 **signature** | **String**| Request signature for payload integrity verification.  | [optional] 
 **timestamp** | **String**| ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection.  | [optional] 
 **aPIVersion** | **String**| ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed.  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="confirmTransactionEvents"></a>
# **confirmTransactionEvents**
> AgenticConfirmTransactionEventsResponse202 confirmTransactionEvents(instructionId, agenticConfirmTransactionEventsRequest)

Confirm transaction events

Confirm transaction events for a completed purchase. The agent calls this endpoint after the payment has been submitted to notify the Intelligent Commerce Connect of the transaction outcome. The request includes processor information (transaction type, status, approval codes), order details (shipping, tracking, product information), and merchant information. Returns HTTP 202 acknowledging receipt of the confirmation.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var instructionId = "instructionId_example"; // String | Unique identifier for the purchase intent instruction.

var agenticConfirmTransactionEventsRequest = new CyberSource.AgenticConfirmTransactionEventsRequest(); // AgenticConfirmTransactionEventsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.confirmTransactionEvents(instructionId, agenticConfirmTransactionEventsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instructionId** | **String**| Unique identifier for the purchase intent instruction. | 
 **agenticConfirmTransactionEventsRequest** | [**AgenticConfirmTransactionEventsRequest**](AgenticConfirmTransactionEventsRequest.md)|  | 

### Return type

[**AgenticConfirmTransactionEventsResponse202**](AgenticConfirmTransactionEventsResponse202.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="createCheckoutSession"></a>
# **createCheckoutSession**
> InlineResponse20113 createCheckoutSession(acpCreateCheckoutSessionRequest, opts)

Create Checkout Session ACP

**Step 1 of the ACP checkout flow.**  Initiates a new ACP checkout session with the buyer's cart. ACG validates item availability against the merchant's catalog, calculates initial pricing and tax, and returns a session object with a unique `id`.  **Store the `id`** — every subsequent call in this checkout flow (update, complete, cancel) requires it.  The session remains active for 30 minutes. A new session must be created after expiry.  **Idempotency:** Supply an `Idempotency-Key` header to safely retry this call without creating duplicate sessions. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var acpCreateCheckoutSessionRequest = new CyberSource.AcpCreateCheckoutSessionRequest(); // AcpCreateCheckoutSessionRequest | The cart contents and buyer context for this checkout session. `items` is required. `buyer` and `fulfillment_address` are optional on creation and can be provided via Update Session before completing checkout. 

var opts = { 
  'idempotencyKey': "idempotencyKey_example", // String | Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned. 
  'acceptLanguage': "acceptLanguage_example", // String | Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content. 
  'userAgent': "userAgent_example", // String | Client user agent string identifying the AI agent platform and version. 
  'requestId': "requestId_example", // String | Unique request identifier for distributed tracing and debugging. Echoed back in the response headers. 
  'signature': "signature_example", // String | Request signature for payload integrity verification. 
  'timestamp': "timestamp_example", // String | ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection. 
  'aPIVersion': "aPIVersion_example" // String | ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCheckoutSession(acpCreateCheckoutSessionRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acpCreateCheckoutSessionRequest** | [**AcpCreateCheckoutSessionRequest**](AcpCreateCheckoutSessionRequest.md)| The cart contents and buyer context for this checkout session. `items` is required. `buyer` and `fulfillment_address` are optional on creation and can be provided via Update Session before completing checkout.  | 
 **idempotencyKey** | **String**| Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned.  | [optional] 
 **acceptLanguage** | **String**| Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content.  | [optional] 
 **userAgent** | **String**| Client user agent string identifying the AI agent platform and version.  | [optional] 
 **requestId** | **String**| Unique request identifier for distributed tracing and debugging. Echoed back in the response headers.  | [optional] 
 **signature** | **String**| Request signature for payload integrity verification.  | [optional] 
 **timestamp** | **String**| ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection.  | [optional] 
 **aPIVersion** | **String**| ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed.  | [optional] 

### Return type

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="deactivateAgentKey"></a>
# **deactivateAgentKey**
> deactivateAgentKey(agentId, keyId)

Deactivate a key

Deactivate a key (soft delete). Raises 404 if key not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var agentId = "agentId_example"; // String | Unique agent identifier

var keyId = "keyId_example"; // String | Unique key identifier


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deactivateAgentKey(agentId, keyId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**| Unique agent identifier | 
 **keyId** | **String**| Unique key identifier | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="enrollCard"></a>
# **enrollCard**
> AgenticCardEnrollmentResponse200 enrollCard(agenticCardEnrollmentRequest)

Enroll a card

Enroll a payment card for agentic or e-commerce transactions. This is typically the first step in the Intelligent Commerce payment lifecycle — the agent calls this endpoint to register a consumer's card, creating a tokenized reference that can be used in subsequent purchase instructions and payment credential retrieval. Requires device information, consumer identity, billing details, and payment instrument references. Returns a status of ACTIVE (HTTP 200) if enrollment completes immediately, or PENDING (HTTP 202) with pendingEvents if cardholder authentication is required. Call this endpoint when a consumer wants to add a new payment card or when setting up a card for agentic payment flows.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var agenticCardEnrollmentRequest = new CyberSource.AgenticCardEnrollmentRequest(); // AgenticCardEnrollmentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.enrollCard(agenticCardEnrollmentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agenticCardEnrollmentRequest** | [**AgenticCardEnrollmentRequest**](AgenticCardEnrollmentRequest.md)|  | 

### Return type

[**AgenticCardEnrollmentResponse200**](AgenticCardEnrollmentResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getAgent"></a>
# **getAgent**
> AgentRegistrationResponse201 getAgent(agentId)

Get an agent

[category 1 — Agent_Capabilities] Get agent by ID with all keys. Raises 404 if agent not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

Get a specific key by agent ID and key ID. Raises 404 if key not found.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

<a name="getCheckoutSession"></a>
# **getCheckoutSession**
> InlineResponse20113 getCheckoutSession(sessionId, acpGetCheckoutSessionRequest, opts)

Get Checkout Session ACP

Retrieves the current state of an ACP checkout session, including line items, buyer information,  and current totals.  Use this to: - Verify session status before presenting a checkout summary to the buyer - Resume an interrupted checkout flow - Poll for status after an async operation - Confirm a session has not expired before submitting payment 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sessionId_example"; // String | The unique identifier of the ACP checkout session to retrieve. Obtained from the `id` field in the Create Session response. 

var acpGetCheckoutSessionRequest = null; // Object | Empty request body.

var opts = { 
  'idempotencyKey': "idempotencyKey_example", // String | Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned. 
  'acceptLanguage': "acceptLanguage_example", // String | Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content. 
  'userAgent': "userAgent_example", // String | Client user agent string identifying the AI agent platform and version. 
  'requestId': "requestId_example", // String | Unique request identifier for distributed tracing and debugging. Echoed back in the response headers. 
  'signature': "signature_example", // String | Request signature for payload integrity verification. 
  'timestamp': "timestamp_example", // String | ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection. 
  'aPIVersion': "aPIVersion_example" // String | ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCheckoutSession(sessionId, acpGetCheckoutSessionRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the ACP checkout session to retrieve. Obtained from the `id` field in the Create Session response.  | 
 **acpGetCheckoutSessionRequest** | **Object**| Empty request body. | 
 **idempotencyKey** | **String**| Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned.  | [optional] 
 **acceptLanguage** | **String**| Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content.  | [optional] 
 **userAgent** | **String**| Client user agent string identifying the AI agent platform and version.  | [optional] 
 **requestId** | **String**| Unique request identifier for distributed tracing and debugging. Echoed back in the response headers.  | [optional] 
 **signature** | **String**| Request signature for payload integrity verification.  | [optional] 
 **timestamp** | **String**| ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection.  | [optional] 
 **aPIVersion** | **String**| ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed.  | [optional] 

### Return type

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="initiatePurchaseIntent"></a>
# **initiatePurchaseIntent**
> AgenticCreatePurchaseIntentResponse200 initiatePurchaseIntent(agenticCreatePurchaseIntentRequest)

Initiate a purchase intent

Create a new purchase intent (instruction) for an agentic transaction. The agent calls this endpoint after a card has been enrolled to define what the consumer wants to buy. The request includes payment instrument references, device and assurance data, mandates (spending limits, merchant preferences, and product descriptions), and optional buyer information. Return an instructionId (HTTP 200) if the intent is created immediately, or PENDING (HTTP 202) with pendingEvents if cardholder authentication is required. The instructionId returned is used in all subsequent operations - update, cancel, retrieve credentials, and confirm transaction.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var agenticCreatePurchaseIntentRequest = new CyberSource.AgenticCreatePurchaseIntentRequest(); // AgenticCreatePurchaseIntentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.initiatePurchaseIntent(agenticCreatePurchaseIntentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agenticCreatePurchaseIntentRequest** | [**AgenticCreatePurchaseIntentRequest**](AgenticCreatePurchaseIntentRequest.md)|  | 

### Return type

[**AgenticCreatePurchaseIntentResponse200**](AgenticCreatePurchaseIntentResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="listAgentKeys"></a>
# **listAgentKeys**
> ListAgentKeysResponse200 listAgentKeys(agentId, opts)

List keys for an agent

[category 1 — Agent_Capabilities] List all keys for a specific agent with pagination.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

Register a new AI agent in the VARS. Once registered, the agent can upload public keys that merchants and Visa services use to verify request signatures. Raises 409 if domain, contactEmail, or tokenRequestorId already exists.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

<a name="retrievePaymentCredentials"></a>
# **retrievePaymentCredentials**
> AgenticRetrievePaymentCredentialsResponse200 retrievePaymentCredentials(instructionId, agenticRetrievePaymentCredentialsRequest)

Retrieve payment credentials

Retrieve tokenized payment credentials for a purchase intent to complete the transaction at a merchant. The agent calls this endpoint after a purchase intent has been created and approved, providing transaction-level details including order information, merchant details, payment options, and production information. Returns COMPLETED (HTTP 200) with a signed payload containing encrypted payment credentials (authorization token and JWS-signed payload), or PENDING (HTTP 202) with pendingEvents if additional cardholder authentication is required. The signed payload is used by the merchant's payment processor to complete the transaction.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var instructionId = "instructionId_example"; // String | Unique identifier for the purchase intent instruction.

var agenticRetrievePaymentCredentialsRequest = new CyberSource.AgenticRetrievePaymentCredentialsRequest(); // AgenticRetrievePaymentCredentialsRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrievePaymentCredentials(instructionId, agenticRetrievePaymentCredentialsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instructionId** | **String**| Unique identifier for the purchase intent instruction. | 
 **agenticRetrievePaymentCredentialsRequest** | [**AgenticRetrievePaymentCredentialsRequest**](AgenticRetrievePaymentCredentialsRequest.md)|  | 

### Return type

[**AgenticRetrievePaymentCredentialsResponse200**](AgenticRetrievePaymentCredentialsResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpCancelCheckout"></a>
# **ucpCancelCheckout**
> InlineResponse20114 ucpCancelCheckout(sessionId)

Cancel Checkout UCP

Cancels an active UCP checkout session. No charge is made.  This operation is idempotent — cancelling an already-cancelled session returns a successful response. Sessions also expire automatically after 30 minutes of inactivity. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sess_abc123"; // String | The unique identifier of the UCP checkout session to cancel.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ucpCancelCheckout(sessionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the UCP checkout session to cancel. | 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpCompleteCheckout"></a>
# **ucpCompleteCheckout**
> InlineResponse20114 ucpCompleteCheckout(sessionId, opts)

Complete Checkout UCP

**Final step of the UCP checkout flow.**  Finalizes the session and places the order with the merchant. ACG translates the UCP completion request to the merchant's checkout API.  On success, the session transitions to `completed`. An `order_id` is not returned in the UCP response — use the ACP Complete endpoint if you need order confirmation details.  **Always use an `idempotency-key`** to prevent duplicate orders on network retries. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sess_abc123"; // String | The unique identifier of the UCP checkout session to complete.

var opts = { 
  'idempotencyKey': "a1b2c3d4-e5f6-7890-abcd-ef1234567890", // String | **Strongly recommended.** A unique key that ensures this order is placed exactly once on retries. Lowercase per UCP spec. 
  'ucpCompleteCheckoutRequest': new CyberSource.UcpCompleteCheckoutRequest() // UcpCompleteCheckoutRequest | UCP completion payload containing payment instrument and optional risk signals. If payment context was already provided in the Create or Update call, the body can be omitted. Risk signals are logged for fraud analysis and are not forwarded to the merchant. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ucpCompleteCheckout(sessionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the UCP checkout session to complete. | 
 **idempotencyKey** | **String**| **Strongly recommended.** A unique key that ensures this order is placed exactly once on retries. Lowercase per UCP spec.  | [optional] 
 **ucpCompleteCheckoutRequest** | [**UcpCompleteCheckoutRequest**](UcpCompleteCheckoutRequest.md)| UCP completion payload containing payment instrument and optional risk signals. If payment context was already provided in the Create or Update call, the body can be omitted. Risk signals are logged for fraud analysis and are not forwarded to the merchant.  | [optional] 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpCreateCheckoutSession"></a>
# **ucpCreateCheckoutSession**
> InlineResponse20114 ucpCreateCheckoutSession(ucpCreateCheckoutSessionRequest, opts)

Create Checkout Session UCP

**Step 1 of the UCP checkout flow.**  Creates a new UCP checkout session using Google's Universal Commerce Protocol format. ACG translates the UCP request into the internal ACP format, applies merchant pricing, and returns a UCP-format session response with a session `id`.  UCP uses `line_items` (instead of `items`) and lowercase header names (`idempotency-key`) per the UCP specification.  **Store the `id`** from the response — it is required for all subsequent UCP calls. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var ucpCreateCheckoutSessionRequest = new CyberSource.UcpCreateCheckoutSessionRequest(); // UcpCreateCheckoutSessionRequest | UCP checkout session creation payload containing line items, buyer details, currency, and optional payment, fulfillment, and discount information. 

var opts = { 
  'idempotencyKey': "fc23729f-dc9b-4619-8742-2cf9d7bfdf1b" // String | Client-generated unique key (UUID recommended) to ensure this request is processed exactly once. Lowercase per UCP specification. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ucpCreateCheckoutSession(ucpCreateCheckoutSessionRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ucpCreateCheckoutSessionRequest** | [**UcpCreateCheckoutSessionRequest**](UcpCreateCheckoutSessionRequest.md)| UCP checkout session creation payload containing line items, buyer details, currency, and optional payment, fulfillment, and discount information.  | 
 **idempotencyKey** | **String**| Client-generated unique key (UUID recommended) to ensure this request is processed exactly once. Lowercase per UCP specification.  | [optional] 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpGetCheckoutSession"></a>
# **ucpGetCheckoutSession**
> InlineResponse20114 ucpGetCheckoutSession(sessionId, ucpGetCheckoutSessionRequest)

Get Checkout Session UCP

Retrieves the current state of a UCP checkout session.  Use this to verify session status, retrieve updated totals after a fulfillment change, or resume a session after an interruption. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sess_abc123"; // String | The unique identifier of the UCP checkout session to retrieve. Obtained from the `id` field in the Create Session response. 

var ucpGetCheckoutSessionRequest = null; // Object | Empty request body.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ucpGetCheckoutSession(sessionId, ucpGetCheckoutSessionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the UCP checkout session to retrieve. Obtained from the `id` field in the Create Session response.  | 
 **ucpGetCheckoutSessionRequest** | **Object**| Empty request body. | 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpUpdateCheckoutSession"></a>
# **ucpUpdateCheckoutSession**
> InlineResponse20114 ucpUpdateCheckoutSession(sessionId, ucpUpdateCheckoutSessionRequest, opts)

Update Checkout Session UCP

Modifies an active UCP checkout session and returns the updated session state.  Use this to change line item quantities, update fulfillment address or method, or apply discount codes. Totals are recalculated and returned in the response.  Only the fields you include in the request body are updated. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sess_abc123"; // String | The unique identifier of the UCP checkout session to update.

var ucpUpdateCheckoutSessionRequest = new CyberSource.UcpUpdateCheckoutSessionRequest(); // UcpUpdateCheckoutSessionRequest | UCP session update payload. All fields are optional — only fields you include will be applied. 

var opts = { 
  'idempotencyKey': "a1b2c3d4-e5f6-7890-abcd-ef1234567890" // String | Client-generated unique key for idempotency. Lowercase per UCP spec.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ucpUpdateCheckoutSession(sessionId, ucpUpdateCheckoutSessionRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the UCP checkout session to update. | 
 **ucpUpdateCheckoutSessionRequest** | [**UcpUpdateCheckoutSessionRequest**](UcpUpdateCheckoutSessionRequest.md)| UCP session update payload. All fields are optional — only fields you include will be applied.  | 
 **idempotencyKey** | **String**| Client-generated unique key for idempotency. Lowercase per UCP spec. | [optional] 

### Return type

[**InlineResponse20114**](InlineResponse20114.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateAgent"></a>
# **updateAgent**
> AgentRegistrationResponse201 updateAgent(agentId, agentUpdate)

Update an agent

[category 1 — Agent_Capabilities] Update agent information. Updatable fields are name, domain, description, contactEmail, and agentMetadata. Extra fields (e.g. tokenRequestorId, keys) will return 422 Validation Error. Raises 404 if agent not found, 403 if agent is deactivated, 409 if new domain or contactEmail already exists.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

Update key information. Updatable fields are keyName, publicKey, algorithm, and expirationDate. Raises 404 if agent or key not found, 403 if agent or key is deactivated, 409 if new keyName already exists.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

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

<a name="updateCheckoutSession"></a>
# **updateCheckoutSession**
> InlineResponse20113 updateCheckoutSession(sessionId, acpUpdateCheckoutSessionRequest, opts)

Update Checkout Session ACP

Modifies an active ACP checkout session and returns the updated session state with recalculated totals.  Use this to: - Add, remove, or change quantities of cart items - Apply or remove discount codes - Update the buyer's shipping address or contact details - Trigger re-calculation of shipping costs and tax  Only fields included in the request body are updated — omitted fields retain their current values.  **Idempotency:** Supply an `Idempotency-Key` to safely retry updates without applying them twice. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var sessionId = "sessionId_example"; // String | The unique identifier of the ACP checkout session to update. Obtained from the `id` field in the Create Session response. 

var acpUpdateCheckoutSessionRequest = new CyberSource.AcpUpdateCheckoutSessionRequest(); // AcpUpdateCheckoutSessionRequest | Fields to update. All fields are optional — only included fields are changed. To replace the cart entirely, provide the full `items` array. 

var opts = { 
  'idempotencyKey': "idempotencyKey_example", // String | Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned. 
  'acceptLanguage': "acceptLanguage_example", // String | Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content. 
  'userAgent': "userAgent_example", // String | Client user agent string identifying the AI agent platform and version. 
  'requestId': "requestId_example", // String | Unique request identifier for distributed tracing and debugging. Echoed back in the response headers. 
  'signature': "signature_example", // String | Request signature for payload integrity verification. 
  'timestamp': "timestamp_example", // String | ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection. 
  'aPIVersion': "aPIVersion_example" // String | ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCheckoutSession(sessionId, acpUpdateCheckoutSessionRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**| The unique identifier of the ACP checkout session to update. Obtained from the `id` field in the Create Session response.  | 
 **acpUpdateCheckoutSessionRequest** | [**AcpUpdateCheckoutSessionRequest**](AcpUpdateCheckoutSessionRequest.md)| Fields to update. All fields are optional — only included fields are changed. To replace the cart entirely, provide the full `items` array.  | 
 **idempotencyKey** | **String**| Client-generated unique key to ensure this request is processed exactly once. If a request with the same key was already processed, the original response is returned.  | [optional] 
 **acceptLanguage** | **String**| Preferred language for the response (e.g. `en-US`, `fr-FR`). Passed to the merchant backend for localized content.  | [optional] 
 **userAgent** | **String**| Client user agent string identifying the AI agent platform and version.  | [optional] 
 **requestId** | **String**| Unique request identifier for distributed tracing and debugging. Echoed back in the response headers.  | [optional] 
 **signature** | **String**| Request signature for payload integrity verification.  | [optional] 
 **timestamp** | **String**| ISO 8601 timestamp of when the request was generated. Used in conjunction with Signature for replay protection.  | [optional] 
 **aPIVersion** | **String**| ACP specification version the client is targeting (e.g. `2024-01-01`). When omitted, the latest supported version is assumed.  | [optional] 

### Return type

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updatePurchaseIntent"></a>
# **updatePurchaseIntent**
> AgenticCreatePurchaseIntentResponse200 updatePurchaseIntent(instructionId, agenticUpdatePurchaseIntentRequest)

Update a purchase intent

Update an existing purchase intent (instruction) identified by its instructionId. The agent calls this endpoint when the consumer modifies their order — for example, changing the quantity, updating mandates, switching payment instruments, or changing shipping details. The request body has the same structure as the initiate request. Returns the same instructionId (HTTP 200) on success, or PENDING (HTTP 202) with pendingEvents if additional cardholder authentication is required for the updated intent.

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.AgentCapabilitiesApi();

var instructionId = "instructionId_example"; // String | Unique identifier for the purchase intent instruction.

var agenticUpdatePurchaseIntentRequest = new CyberSource.AgenticUpdatePurchaseIntentRequest(); // AgenticUpdatePurchaseIntentRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePurchaseIntent(instructionId, agenticUpdatePurchaseIntentRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instructionId** | **String**| Unique identifier for the purchase intent instruction. | 
 **agenticUpdatePurchaseIntentRequest** | [**AgenticUpdatePurchaseIntentRequest**](AgenticUpdatePurchaseIntentRequest.md)|  | 

### Return type

[**AgenticCreatePurchaseIntentResponse200**](AgenticCreatePurchaseIntentResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

