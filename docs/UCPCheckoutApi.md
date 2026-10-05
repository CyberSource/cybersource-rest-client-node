# CyberSource.UCPCheckoutApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ucpCancelCheckout**](UCPCheckoutApi.md#ucpCancelCheckout) | **POST** /icc/v1/checkout-sessions/{session_id}/cancel | Cancel Checkout UCP
[**ucpCompleteCheckout**](UCPCheckoutApi.md#ucpCompleteCheckout) | **POST** /icc/v1/checkout-sessions/{session_id}/complete | Complete Checkout UCP
[**ucpCreateCheckoutSession**](UCPCheckoutApi.md#ucpCreateCheckoutSession) | **POST** /icc/v1/checkout-sessions | Create Checkout Session UCP
[**ucpGetCheckoutSession**](UCPCheckoutApi.md#ucpGetCheckoutSession) | **GET** /icc/v1/checkout-sessions/{session_id} | Get Checkout Session UCP
[**ucpUpdateCheckoutSession**](UCPCheckoutApi.md#ucpUpdateCheckoutSession) | **PUT** /icc/v1/checkout-sessions/{session_id} | Update Checkout Session UCP


<a name="ucpCancelCheckout"></a>
# **ucpCancelCheckout**
> InlineResponse20113 ucpCancelCheckout(sessionId)

Cancel Checkout UCP

Cancels an active UCP checkout session. No charge is made.  This operation is idempotent — cancelling an already-cancelled session returns a successful response. Sessions also expire automatically after 30 minutes of inactivity. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UCPCheckoutApi();

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

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpCompleteCheckout"></a>
# **ucpCompleteCheckout**
> InlineResponse20113 ucpCompleteCheckout(sessionId, opts)

Complete Checkout UCP

**Final step of the UCP checkout flow.**  Finalizes the session and places the order with the merchant. ACG translates the UCP completion request to the merchant's checkout API.  On success, the session transitions to `completed`. An `order_id` is not returned in the UCP response — use the ACP Complete endpoint if you need order confirmation details.  **Always use an `idempotency-key`** to prevent duplicate orders on network retries. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UCPCheckoutApi();

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

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpCreateCheckoutSession"></a>
# **ucpCreateCheckoutSession**
> InlineResponse20113 ucpCreateCheckoutSession(ucpCreateCheckoutSessionRequest, opts)

Create Checkout Session UCP

**Step 1 of the UCP checkout flow.**  Creates a new UCP checkout session using Google's Universal Commerce Protocol format. ACG translates the UCP request into the internal ACP format, applies merchant pricing, and returns a UCP-format session response with a session `id`.  UCP uses `line_items` (instead of `items`) and lowercase header names (`idempotency-key`) per the UCP specification.  **Store the `id`** from the response — it is required for all subsequent UCP calls. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UCPCheckoutApi();

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

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpGetCheckoutSession"></a>
# **ucpGetCheckoutSession**
> InlineResponse20113 ucpGetCheckoutSession(sessionId, ucpGetCheckoutSessionRequest)

Get Checkout Session UCP

Retrieves the current state of a UCP checkout session.  Use this to verify session status, retrieve updated totals after a fulfillment change, or resume a session after an interruption. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UCPCheckoutApi();

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

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

<a name="ucpUpdateCheckoutSession"></a>
# **ucpUpdateCheckoutSession**
> InlineResponse20113 ucpUpdateCheckoutSession(sessionId, ucpUpdateCheckoutSessionRequest, opts)

Update Checkout Session UCP

Modifies an active UCP checkout session and returns the updated session state.  Use this to change line item quantities, update fulfillment address or method, or apply discount codes. Totals are recalculated and returned in the response.  Only the fields you include in the request body are updated. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.UCPCheckoutApi();

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

[**InlineResponse20113**](InlineResponse20113.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/hal+json;charset=utf-8

