# CyberSource.CustomerPaymentInstrumentApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomerPaymentInstrument**](CustomerPaymentInstrumentApi.md#deleteCustomerPaymentInstrument) | **DELETE** /tms/v2/customers/{customerId}/payment-instruments/{paymentInstrumentId} | Delete a Customer Payment Instrument
[**getCustomerPaymentInstrument**](CustomerPaymentInstrumentApi.md#getCustomerPaymentInstrument) | **GET** /tms/v2/customers/{customerId}/payment-instruments/{paymentInstrumentId} | Retrieve a Customer Payment Instrument
[**getCustomerPaymentInstrumentsList**](CustomerPaymentInstrumentApi.md#getCustomerPaymentInstrumentsList) | **GET** /tms/v2/customers/{customerId}/payment-instruments | List Payment Instruments for a Customer
[**patchCustomersPaymentInstrument**](CustomerPaymentInstrumentApi.md#patchCustomersPaymentInstrument) | **PATCH** /tms/v2/customers/{customerId}/payment-instruments/{paymentInstrumentId} | Update a Customer Payment Instrument
[**postCustomerPaymentInstrument**](CustomerPaymentInstrumentApi.md#postCustomerPaymentInstrument) | **POST** /tms/v2/customers/{customerId}/payment-instruments | Create a Customer Payment Instrument


<a name="deleteCustomerPaymentInstrument"></a>
# **deleteCustomerPaymentInstrument**
> deleteCustomerPaymentInstrument(customerId, paymentInstrumentId, opts)

Delete a Customer Payment Instrument

|  |  |  | | --- | --- | --- | |**Customer Payment Instrument**<br>A Customer Payment Instrument represents tokenized customer payment information such as expiration date, billing address & card type.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Payment Instruments](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument), with one allocated as the Customers default for use in payments.<br>A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.<br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Deleting a Customers Payment Instrument**<br>Your system can use this API to delete an existing Payment Instrument for a Customer.<br>Any Instrument Identifiers representing the card number will also be deleted if they are not associated with any other Payment Instruments.<br>If a customer has more than one Payment Instrument then the default Payment Instrument cannot be deleted without first selecting a [new default Payment Instrument](#token-management_customer-payment-instrument_update-a-customer-payment-instrument_samplerequests-dropdown_make-customer-payment-instrument-the-default_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var paymentInstrumentId = "paymentInstrumentId_example"; // String | The Id of a payment instrument.

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
apiInstance.deleteCustomerPaymentInstrument(customerId, paymentInstrumentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **paymentInstrumentId** | **String**| The Id of a payment instrument. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerPaymentInstrument"></a>
# **getCustomerPaymentInstrument**
> PostCustomerPaymentInstrumentRequest getCustomerPaymentInstrument(customerId, paymentInstrumentId, opts)

Retrieve a Customer Payment Instrument

|  |  |  | | --- | --- | --- | |**Customer Payment Instrument**<br>A Customer Payment Instrument represents tokenized customer payment information such as expiration date, billing address & card type.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Payment Instruments](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument), with one allocated as the Customers default for use in payments.<br>A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.<br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving a Customer Payment Instrument**<br>Your system can use this API to retrieve an existing Payment Instrument for a Customer.<br>To perform a payment with a particular Payment Instrument simply specify the [Payment Instrument Id in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var paymentInstrumentId = "paymentInstrumentId_example"; // String | The Id of a payment instrument.

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
apiInstance.getCustomerPaymentInstrument(customerId, paymentInstrumentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **paymentInstrumentId** | **String**| The Id of a payment instrument. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**PostCustomerPaymentInstrumentRequest**](PostCustomerPaymentInstrumentRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerPaymentInstrumentsList"></a>
# **getCustomerPaymentInstrumentsList**
> PaymentInstrumentList getCustomerPaymentInstrumentsList(customerId, opts)

List Payment Instruments for a Customer

|  |  |  | | --- | --- | --- | |**Customer Payment Instrument**<br>A Customer Payment Instrument represents tokenized customer payment information such as expiration date, billing address & card type.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Payment Instruments](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument), with one allocated as the Customers default for use in payments.<br>A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.<br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving all Customer Payment Instruments**<br>Your system can use this API to retrieve all existing Payment Instruments for a Customer. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

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
apiInstance.getCustomerPaymentInstrumentsList(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
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

<a name="patchCustomersPaymentInstrument"></a>
# **patchCustomersPaymentInstrument**
> PatchCustomerPaymentInstrumentRequest patchCustomersPaymentInstrument(customerId, paymentInstrumentId, patchCustomerPaymentInstrumentRequest, opts)

Update a Customer Payment Instrument

|  |  |  | | --- | --- | --- | |**Customer Payment Instrument**<br>A Customer Payment Instrument represents tokenized customer payment information such as expiration date, billing address & card type.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Payment Instruments](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument), with one allocated as the Customers default for use in payments.<br>A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.<br>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Updating a Customers Payment Instrument**<br>Your system can use this API to update an existing Payment Instrument for a Customer, including selecting a [default Payment Instrument](#token-management_customer-payment-instrument_update-a-customer-payment-instrument_samplerequests-dropdown_make-customer-payment-instrument-the-default_liveconsole-tab-request-body) for use in payments. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var paymentInstrumentId = "paymentInstrumentId_example"; // String | The Id of a payment instrument.

var patchCustomerPaymentInstrumentRequest = new CyberSource.PatchCustomerPaymentInstrumentRequest(); // PatchCustomerPaymentInstrumentRequest | 

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
apiInstance.patchCustomersPaymentInstrument(customerId, paymentInstrumentId, patchCustomerPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **paymentInstrumentId** | **String**| The Id of a payment instrument. | 
 **patchCustomerPaymentInstrumentRequest** | [**PatchCustomerPaymentInstrumentRequest**](PatchCustomerPaymentInstrumentRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**PatchCustomerPaymentInstrumentRequest**](PatchCustomerPaymentInstrumentRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postCustomerPaymentInstrument"></a>
# **postCustomerPaymentInstrument**
> PostCustomerPaymentInstrumentRequest postCustomerPaymentInstrument(customerId, postCustomerPaymentInstrumentRequest, opts)

Create a Customer Payment Instrument

|  |  |  | | --- | --- | --- | |**Customer Payment Instrument**<br>A Customer Payment Instrument represents tokenized customer payment information such as expiration date, billing address & card type.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Payment Instruments](#token-management_customer-payment-instrument_retrieve-a-customer-payment-instrument), with one allocated as the Customers default for use in payments.<br>A Payment Instrument token does not store the card number. A Payment Instrument is associated with an [Instrument Identifier](#token-management_instrument-identifier_create-an-instrument-identifier) that represents either a payment card number, or in the case of an ACH bank account, the routing and account number.<br><br>**Creating a Customer Payment Instrument**<br>It is recommended you [create a Customer Payment Instrument via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-create-default-payment-instrument-shipping-address-for-existing-customer_liveconsole-tab-request-body), this can be for a zero amount.<br>In Europe: You should perform Payer Authentication alongside the Authorization.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Payment Network Tokens**<br>Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.<br>A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.<br>A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).<br>For more information about Payment Network Tokens see the Developer Guide.<br><br>**Payments with Customers Payment Instrument**<br>To perform a payment with a particular Payment Instrument or Shipping Address specify the [Payment Instrument in the payment request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerPaymentInstrumentApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var postCustomerPaymentInstrumentRequest = new CyberSource.PostCustomerPaymentInstrumentRequest(); // PostCustomerPaymentInstrumentRequest | 

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
apiInstance.postCustomerPaymentInstrument(customerId, postCustomerPaymentInstrumentRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **postCustomerPaymentInstrumentRequest** | [**PostCustomerPaymentInstrumentRequest**](PostCustomerPaymentInstrumentRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**PostCustomerPaymentInstrumentRequest**](PostCustomerPaymentInstrumentRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

