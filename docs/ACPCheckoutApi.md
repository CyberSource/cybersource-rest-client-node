# CyberSource.ACPCheckoutApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCheckout**](ACPCheckoutApi.md#cancelCheckout) | **POST** /icc/v1/checkout_sessions/{session_id}/cancel | Cancel Checkout ACP
[**completeCheckout**](ACPCheckoutApi.md#completeCheckout) | **POST** /icc/v1/checkout_sessions/{session_id}/complete | Complete Checkout ACP
[**createCheckoutSession**](ACPCheckoutApi.md#createCheckoutSession) | **POST** /icc/v1/checkout_sessions | Create Checkout Session ACP
[**getCheckoutSession**](ACPCheckoutApi.md#getCheckoutSession) | **GET** /icc/v1/checkout_sessions/{session_id} | Get Checkout Session ACP
[**updateCheckoutSession**](ACPCheckoutApi.md#updateCheckoutSession) | **POST** /icc/v1/checkout_sessions/{session_id} | Update Checkout Session ACP


<a name="cancelCheckout"></a>
# **cancelCheckout**
> InlineResponse20018 cancelCheckout(sessionId, opts)

Cancel Checkout ACP

Cancels an active ACP checkout session. No charge is made to the buyer.  This call is safe to make multiple times — cancelling an already-cancelled session returns a successful response without error.  Sessions also expire automatically after 30 minutes of inactivity, so explicit cancellation is optional but recommended to release any reserved inventory immediately. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ACPCheckoutApi();

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

<a name="completeCheckout"></a>
# **completeCheckout**
> InlineResponse20017 completeCheckout(sessionId, acpCompleteCheckoutRequest, opts)

Complete Checkout ACP

**Final step of the ACP checkout flow.**  Submits payment and buyer information to place the order with the merchant. On success, the session transitions to `completed` and an `order_id` is returned confirming the merchant accepted the order.  Once completed, the session is immutable — it cannot be updated or cancelled.  **Payment token:** The `payment.token` must be a valid token from the payment provider configured for the merchant (e.g. a tokenized card from Stripe or Braintree). ACG forwards the token to the merchant's payment processor — it is never stored. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ACPCheckoutApi();

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

<a name="createCheckoutSession"></a>
# **createCheckoutSession**
> InlineResponse20112 createCheckoutSession(acpCreateCheckoutSessionRequest, opts)

Create Checkout Session ACP

**Step 1 of the ACP checkout flow.**  Initiates a new ACP checkout session with the buyer's cart. ACG validates item availability against the merchant's catalog, calculates initial pricing and tax, and returns a session object with a unique `id`.  **Store the `id`** — every subsequent call in this checkout flow (update, complete, cancel) requires it.  The session remains active for 30 minutes. A new session must be created after expiry.  **Idempotency:** Supply an `Idempotency-Key` header to safely retry this call without creating duplicate sessions. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ACPCheckoutApi();

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

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="getCheckoutSession"></a>
# **getCheckoutSession**
> InlineResponse20112 getCheckoutSession(sessionId, acpGetCheckoutSessionRequest, opts)

Get Checkout Session ACP

Retrieves the current state of an ACP checkout session, including line items, buyer information,  and current totals.  Use this to: - Verify session status before presenting a checkout summary to the buyer - Resume an interrupted checkout flow - Poll for status after an async operation - Confirm a session has not expired before submitting payment 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ACPCheckoutApi();

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

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="updateCheckoutSession"></a>
# **updateCheckoutSession**
> InlineResponse20112 updateCheckoutSession(sessionId, acpUpdateCheckoutSessionRequest, opts)

Update Checkout Session ACP

Modifies an active ACP checkout session and returns the updated session state with recalculated totals.  Use this to: - Add, remove, or change quantities of cart items - Apply or remove discount codes - Update the buyer's shipping address or contact details - Trigger re-calculation of shipping costs and tax  Only fields included in the request body are updated — omitted fields retain their current values.  **Idempotency:** Supply an `Idempotency-Key` to safely retry updates without applying them twice. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.ACPCheckoutApi();

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

[**InlineResponse20112**](InlineResponse20112.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

