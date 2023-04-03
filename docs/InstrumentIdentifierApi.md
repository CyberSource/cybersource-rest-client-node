# CyberSource.InstrumentIdentifierApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteInstrumentIdentifier**](InstrumentIdentifierApi.md#deleteInstrumentIdentifier) | **DELETE** /tms/v1/instrumentidentifiers/{instrumentIdentifierId} | Delete an Instrument Identifier
[**getInstrumentIdentifier**](InstrumentIdentifierApi.md#getInstrumentIdentifier) | **GET** /tms/v1/instrumentidentifiers/{instrumentIdentifierId} | Retrieve an Instrument Identifier
[**getInstrumentIdentifierPaymentInstrumentsList**](InstrumentIdentifierApi.md#getInstrumentIdentifierPaymentInstrumentsList) | **GET** /tms/v1/instrumentidentifiers/{instrumentIdentifierId}/paymentinstruments | List Payment Instruments for an Instrument Identifier
[**patchInstrumentIdentifier**](InstrumentIdentifierApi.md#patchInstrumentIdentifier) | **PATCH** /tms/v1/instrumentidentifiers/{instrumentIdentifierId} | Update an Instrument Identifier
[**postInstrumentIdentifier**](InstrumentIdentifierApi.md#postInstrumentIdentifier) | **POST** /tms/v1/instrumentidentifiers | Create an Instrument Identifier
[**postInstrumentIdentifierEnrollment**](InstrumentIdentifierApi.md#postInstrumentIdentifierEnrollment) | **POST** /tms/v1/instrumentidentifiers/{instrumentIdentifierId}/enrollment | Enroll an Instrument Identifier for Payment Network Token


<a name="deleteInstrumentIdentifier"></a>
# **deleteInstrumentIdentifier**
> deleteInstrumentIdentifier(instrumentIdentifierId, opts)

Delete an Instrument Identifier

|  |  |  | | --- | --- | --- | |**Instrument Identifiers**&lt;br&gt;An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing &lt;br&gt;and account numbers.&lt;br&gt;The same token Id is returned for a specific card number or bank account &amp; routing number allowing the &lt;br&gt;Instrument Identifier Id to be used for cross-channel payment tracking.&lt;br&gt;An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) &lt;br&gt;or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Deleting an Instrument Identifier**&lt;br&gt;Your system can use this API to delete an existing Instrument Identifier.&lt;br&gt;An Instrument Identifier cannot be deleted if it is linked to any Payment Instruments.&lt;br&gt;You can [retrieve all Payment Instruments associated with an Instrument Identifier](#token-management_instrument-identifier_list-payment-instruments-for-an-instrument-identifier). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierId = "instrumentIdentifierId_example"; // String | The Id of an Instrument Identifier.

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
apiInstance.deleteInstrumentIdentifier(instrumentIdentifierId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierId** | **String**| The Id of an Instrument Identifier. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInstrumentIdentifier"></a>
# **getInstrumentIdentifier**
> Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier getInstrumentIdentifier(instrumentIdentifierId, opts)

Retrieve an Instrument Identifier

|  |  |  | | --- | --- | --- | |**Instrument Identifiers**&lt;br&gt;An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;The same token Id is returned for a specific card number or bank account &amp; routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.&lt;br&gt;An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).&lt;br&gt;&lt;br&gt;**Retrieving an Instrument Identifier**&lt;br&gt;Your system can use this API to retrieve an Instrument Identifier.&lt;br&gt;**Note: the actual card data will be masked.**&lt;br&gt;The Instrument Identifier will also be returned when retrieving a [Customer](#token-management_customer_retrieve-a-customer), [Customer Payment Instrument](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_retrieve-a-payment-instrument).|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Payment Network Tokens**&lt;br&gt;Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.&lt;br&gt;A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.&lt;br&gt;A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).&lt;br&gt;For more information about Payment Network Tokens see the Developer Guide.&lt;br&gt;&lt;br&gt;**Payments with Instrument Identifiers**&lt;br&gt;To perform a payment with an Instrument Identifier simply specify the [Instrument Identifier Id in the payments request along with the expiration date, card type, &amp; billing address](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-instrument-identifier-token-id_liveconsole-tab-request-body).&lt;br&gt;When an Instrument Identifier is used in a payment the **_previousTransactionId_** and **_originalAuthorizedAmount_** values are automatically recorded.&lt;br&gt;These values will be added for you to future Merchant Initiated Transaction payments. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierId = "instrumentIdentifierId_example"; // String | The Id of an Instrument Identifier.

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
apiInstance.getInstrumentIdentifier(instrumentIdentifierId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierId** | **String**| The Id of an Instrument Identifier. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getInstrumentIdentifierPaymentInstrumentsList"></a>
# **getInstrumentIdentifierPaymentInstrumentsList**
> PaymentInstrumentList getInstrumentIdentifierPaymentInstrumentsList(instrumentIdentifierId, opts)

List Payment Instruments for an Instrument Identifier

|  |  |  | | --- | --- | --- | |**Instrument Identifiers**&lt;br&gt;An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing &lt;br&gt;and account numbers.&lt;br&gt;The same token Id is returned for a specific card number or bank account &amp; routing number allowing the &lt;br&gt;Instrument Identifier Id to be used for cross-channel payment tracking.&lt;br&gt;An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) &lt;br&gt;or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Retrieving all Payment Instruments associated with an Instrument Identifier**&lt;br&gt;Your system can use this API to retrieve all Payment Instruments linked to an Instrument Identifier. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierId = "instrumentIdentifierId_example"; // String | The Id of an Instrument Identifier.

var opts = { 
  'profileId': "profileId_example", // String | The Id of a profile containing user specific TMS configuration.
  'offset': 0, // Number | Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0.
  'limit': 20 // Number | The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getInstrumentIdentifierPaymentInstrumentsList(instrumentIdentifierId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierId** | **String**| The Id of an Instrument Identifier. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **offset** | **Number**| Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] [default to 0]
 **limit** | **Number**| The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**PaymentInstrumentList**](PaymentInstrumentList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchInstrumentIdentifier"></a>
# **patchInstrumentIdentifier**
> Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier patchInstrumentIdentifier(instrumentIdentifierId, patchInstrumentIdentifierRequest, opts)

Update an Instrument Identifier

|  |  |  | | --- | --- | --- | |**Instrument Identifiers**&lt;br&gt;An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;The same token Id is returned for a specific card number or bank account &amp; routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.&lt;br&gt;An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Updating an Instrument Identifier**&lt;br&gt;When an Instrument Identifier is used in a payment the **_previousTransactionId_** and **_originalAuthorizedAmount_** values are automatically recorded.&lt;br&gt;These values will be added for you to future Merchant Initiated Transaction payments.&lt;br&gt;Your system can use this API to update these values. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierId = "instrumentIdentifierId_example"; // String | The Id of an Instrument Identifier.

var patchInstrumentIdentifierRequest = new CyberSource.PatchInstrumentIdentifierRequest(); // PatchInstrumentIdentifierRequest | Specify the previous transaction Id to update.

var opts = { 
  'profileId': "profileId_example", // String | The Id of a profile containing user specific TMS configuration.
  'ifMatch': "ifMatch_example" // String | Contains an ETag value from a GET request to make the request conditional.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchInstrumentIdentifier(instrumentIdentifierId, patchInstrumentIdentifierRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierId** | **String**| The Id of an Instrument Identifier. | 
 **patchInstrumentIdentifierRequest** | [**PatchInstrumentIdentifierRequest**](PatchInstrumentIdentifierRequest.md)| Specify the previous transaction Id to update. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postInstrumentIdentifier"></a>
# **postInstrumentIdentifier**
> Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier postInstrumentIdentifier(postInstrumentIdentifierRequest, opts)

Create an Instrument Identifier

|  |  |  | | --- | --- | --- | |**Instrument Identifiers**&lt;br&gt;An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;The same token Id is returned for a specific card number or bank account &amp; routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.&lt;br&gt;An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).&lt;br&gt;&lt;br&gt;**Creating an Instrument Identifier**&lt;br&gt;It is recommended you [create an Instrument Identifier via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-instrument-identifier-token-creation_liveconsole-tab-request-body), this can be for a zero amount.&lt;br&gt;An Instrument Identifier will also be created if you [create a Customer via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-customer-token-creation_liveconsole-tab-request-body)&lt;br&gt;In Europe: You should perform Payer Authentication alongside the Authorization.|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Payment Network Tokens**&lt;br&gt;Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.&lt;br&gt;A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.&lt;br&gt;A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).&lt;br&gt;For more information about Payment Network Tokens see the Developer Guide.&lt;br&gt;&lt;br&gt;**Payments with Instrument Identifiers**&lt;br&gt;To perform a payment with an Instrument Identifier simply specify the [Instrument Identifier Id in the payments request along with the expiration date, card type, &amp; billing address](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-instrument-identifier-token-id_liveconsole-tab-request-body).&lt;br&gt;When an Instrument Identifier is used in a payment the **_previousTransactionId_** and **_originalAuthorizedAmount_** values are automatically recorded.&lt;br&gt;These values will be added for you to future Merchant Initiated Transaction payments. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var postInstrumentIdentifierRequest = new CyberSource.PostInstrumentIdentifierRequest(); // PostInstrumentIdentifierRequest | Specify either a Card, Bank Account or Enrollable Card

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
apiInstance.postInstrumentIdentifier(postInstrumentIdentifierRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postInstrumentIdentifierRequest** | [**PostInstrumentIdentifierRequest**](PostInstrumentIdentifierRequest.md)| Specify either a Card, Bank Account or Enrollable Card | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier**](Tmsv2customersEmbeddedDefaultPaymentInstrumentEmbeddedInstrumentIdentifier.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postInstrumentIdentifierEnrollment"></a>
# **postInstrumentIdentifierEnrollment**
> postInstrumentIdentifierEnrollment(instrumentIdentifierId, postInstrumentIdentifierEnrollmentRequest, opts)

Enroll an Instrument Identifier for Payment Network Token

|  |  |  | | --- | --- | --- | |**Instrument Identifiers**&lt;br&gt;An Instrument Identifier represents either a card number, or in the case of an ACH bank account, the routing and account number.&lt;br&gt;The same token Id is returned for a specific card number or bank account &amp; routing number allowing the Instrument Identifier Id to be used for cross-channel payment tracking.&lt;br&gt;An Instrument Identifier can exist independently but also be associated with a [Customer Payment Instrument](#token-management_customer-payment-instrument_create-a-customer-payment-instrument) or [Standalone Payment Instrument](#token-management_payment-instrument_create-a-payment-instrument).|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Enroll an Instrument Identifier for a Payment Network Token**&lt;br&gt;Your system can use this API to provision a Network token for an existing Instrument Identifier.&lt;br&gt;Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.&lt;br&gt;A Network token can be [provisioned when creating an Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier_samplerequests-dropdown_create-instrument-identifier-card-enroll-for-network-token_liveconsole-tab-request-body).This will occur automatically when creating a [Customer](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-customer-token-creation_liveconsole-tab-request-body), [Payment Instrument](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-create-default-payment-instrument-shipping-address-for-existing-customer_liveconsole-tab-request-body) or [Instrument Identifier](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-instrument-identifier-token-creation_liveconsole-tab-request-body) via the Payments API.&lt;br&gt;For more information about Payment Network Tokens see the Developer Guide. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.InstrumentIdentifierApi();

var instrumentIdentifierId = "instrumentIdentifierId_example"; // String | The Id of an Instrument Identifier.

var postInstrumentIdentifierEnrollmentRequest = new CyberSource.PostInstrumentIdentifierEnrollmentRequest(); // PostInstrumentIdentifierEnrollmentRequest | Specify Enrollable Card details

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
apiInstance.postInstrumentIdentifierEnrollment(instrumentIdentifierId, postInstrumentIdentifierEnrollmentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instrumentIdentifierId** | **String**| The Id of an Instrument Identifier. | 
 **postInstrumentIdentifierEnrollmentRequest** | [**PostInstrumentIdentifierEnrollmentRequest**](PostInstrumentIdentifierEnrollmentRequest.md)| Specify Enrollable Card details | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

