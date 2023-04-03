# CyberSource.CustomerApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /tms/v2/customers/{customerId} | Delete a Customer
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /tms/v2/customers/{customerId} | Retrieve a Customer
[**patchCustomer**](CustomerApi.md#patchCustomer) | **PATCH** /tms/v2/customers/{customerId} | Update a Customer
[**postCustomer**](CustomerApi.md#postCustomer) | **POST** /tms/v2/customers | Create a Customer


<a name="deleteCustomer"></a>
# **deleteCustomer**
> deleteCustomer(customerId, opts)

Delete a Customer

|  |  |  | | --- | --- | --- | |**Customers**&lt;br&gt;A Customer represents your tokenized customer information.&lt;br&gt;You should associate the Customer Id with the customer account on your systems.&lt;br&gt;A Customer can have one or more [Payment Instruments](#token-management_customer-payment-instrument_create-a-customer-payment-instrumentl) or [Shipping Addresses](#token-management_customer-shipping-address_create-a-customer-shipping-address) with one allocated as the Customers default.|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Deleting a Customer**&lt;br&gt;Your system can use this API to delete a complete Customer.&lt;br&gt;When a Customer is deleted all associated Payment Instruments &amp; Shipping Addresses are deleted.&lt;br&gt;Any Instrument Identifiers representing the card number will also be deleted if they are not associated with any other Payment Instruments.&lt;br&gt;Note: Individual [Payment Instruments](#token-management_customer-payment-instrument_delete-a-customer-payment-instrument) or [Shipping Addresses](#token-management_customer-shipping-address_delete-a-customer-shipping-address) can be deleted via their own dedicated API resources. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

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
apiInstance.deleteCustomer(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomer"></a>
# **getCustomer**
> TmsV2CustomersResponse getCustomer(customerId, opts)

Retrieve a Customer

|  |  |  | | --- | --- | --- | |**Customers**&lt;br&gt;A Customer represents your tokenized customer information.&lt;br&gt;You should associate the Customer Id with the customer account on your systems.&lt;br&gt;A Customer can have one or more [Payment Instruments](#token-management_customer-payment-instrument_create-a-customer-payment-instrumentl) or [Shipping Addresses](#token-management_customer-shipping-address_create-a-customer-shipping-address) with one allocated as the Customers default.&lt;br&gt;&lt;br&gt;**Retrieving a Customer**&lt;br&gt;When your customer signs into their account, your system can use this API to retrieve the Customers default Payment Instrument and Shipping Address.&lt;br&gt;**Note: the actual card data will be masked.**&lt;br&gt;If your customer wants to see other available Payment Instruments, your system can [retrieve all Payment Instruments](#token-management_customer-payment-instrument_list-payment-instruments-for-a-customer) associated with the Customer.&lt;br&gt;The same applies to [Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer).|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Payment Network Tokens**&lt;br&gt;Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.&lt;br&gt;A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.&lt;br&gt;A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).&lt;br&gt;For more information about Payment Network Tokens see the Developer Guide.&lt;br&gt;&lt;br&gt;**Payments with Customers**&lt;br&gt;To perform a payment with the Customers default details specify the [Customer Id in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-token-id_liveconsole-tab-request-body).&lt;br&gt;To perform a payment with a particular Payment Instrument or Shipping Address &lt;br&gt;specify the [Payment Instrument or Shipping Address Ids in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

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
apiInstance.getCustomer(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**TmsV2CustomersResponse**](TmsV2CustomersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchCustomer"></a>
# **patchCustomer**
> TmsV2CustomersResponse patchCustomer(customerId, patchCustomerRequest, opts)

Update a Customer

|  |  |  | | --- | --- | --- | |**Customers**&lt;br&gt;A Customer represents your tokenized customer information.&lt;br&gt;You should associate the Customer Id with the customer account on your systems.&lt;br&gt;A Customer can have one or more [Payment Instruments](#token-management_customer-payment-instrument_create-a-customer-payment-instrumentl) or [Shipping Addresses](#token-management_customer-shipping-address_create-a-customer-shipping-address) with one allocated as the Customers default.|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Updating a Customer**&lt;br&gt;Your system can use this API to update a Customers details including selecting a  [default Payment Instrument](#token-management_customer_update-a-customer_samplerequests-dropdown_update-customers-default-payment-instrument_liveconsole-tab-request-body) or [default Shipping Address](#token-management_customer_update-a-customer_samplerequests-dropdown_update-customers-default-shipping-address_liveconsole-tab-request-body) for use in payments.&lt;br&gt;Note: Updating a Customers [Payment Instrument](#token-management_customer-payment-instrument_update-a-customer-payment-instrument) or [Shipping Address](#token-management_customer-shipping-address_update-a-customer-shipping-address) details is performed using their own dedicated API resources. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var patchCustomerRequest = new CyberSource.PatchCustomerRequest(); // PatchCustomerRequest | 

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
apiInstance.patchCustomer(customerId, patchCustomerRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **patchCustomerRequest** | [**PatchCustomerRequest**](PatchCustomerRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**TmsV2CustomersResponse**](TmsV2CustomersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postCustomer"></a>
# **postCustomer**
> TmsV2CustomersResponse postCustomer(postCustomerRequest, opts)

Create a Customer

|  |  |  | | --- | --- | --- | |**Customers**&lt;br&gt;A Customer represents your tokenized customer information.&lt;br&gt;You should associate the Customer Id with the customer account on your systems.&lt;br&gt;A Customer can have one or more [Payment Instruments](#token-management_customer-payment-instrument_create-a-customer-payment-instrumentl) or [Shipping Addresses](#token-management_customer-shipping-address_create-a-customer-shipping-address) with one allocated as the Customers default.&lt;br&gt;&lt;br&gt;**Creating a Customer**&lt;br&gt;It is recommended you [create a Customer via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-with-customer-token-creation_liveconsole-tab-request-body), this can be for a zero amount.&lt;br&gt;The Customer will be created with a Payment Instrument and Shipping Address.&lt;br&gt;You can also [add additional Payment Instruments to a Customer via a Payment Authorization](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-create-default-payment-instrument-shipping-address-for-existing-customer_liveconsole-tab-request-body).&lt;br&gt;In Europe: You should perform Payer Authentication alongside the Authorization.|&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;|**Payment Network Tokens**&lt;br&gt;Network tokens perform better than regular card numbers and they are not necessarily invalidated when a cardholder loses their card, or it expires.&lt;br&gt;A Payment Network Token will be automatically created and used in future payments if you are enabled for the service.&lt;br&gt;A Payment Network Token can also be [provisioned for an existing Instrument Identifier](#token-management_instrument-identifier_enroll-an-instrument-identifier-for-payment-network-token).&lt;br&gt;For more information about Payment Network Tokens see the Developer Guide.&lt;br&gt;&lt;br&gt;**Payments with Customers**&lt;br&gt;To perform a payment with the Customers default details specify the [Customer Id in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-token-id_liveconsole-tab-request-body).&lt;br&gt;To perform a payment with a particular Payment Instrument or Shipping Address &lt;br&gt;specify the [Payment Instrument or Shipping Address Ids in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerApi();

var postCustomerRequest = new CyberSource.PostCustomerRequest(); // PostCustomerRequest | 

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
apiInstance.postCustomer(postCustomerRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postCustomerRequest** | [**PostCustomerRequest**](PostCustomerRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**TmsV2CustomersResponse**](TmsV2CustomersResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

