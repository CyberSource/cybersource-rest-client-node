# CyberSource.CustomerShippingAddressApi

All URIs are relative to *https://apitest.cybersource.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCustomerShippingAddress**](CustomerShippingAddressApi.md#deleteCustomerShippingAddress) | **DELETE** /tms/v2/customers/{customerId}/shipping-addresses/{shippingAddressId} | Delete a Customer Shipping Address
[**getCustomerShippingAddress**](CustomerShippingAddressApi.md#getCustomerShippingAddress) | **GET** /tms/v2/customers/{customerId}/shipping-addresses/{shippingAddressId} | Retrieve a Customer Shipping Address
[**getCustomerShippingAddressesList**](CustomerShippingAddressApi.md#getCustomerShippingAddressesList) | **GET** /tms/v2/customers/{customerId}/shipping-addresses | List Shipping Addresses for a Customer
[**patchCustomersShippingAddress**](CustomerShippingAddressApi.md#patchCustomersShippingAddress) | **PATCH** /tms/v2/customers/{customerId}/shipping-addresses/{shippingAddressId} | Update a Customer Shipping Address
[**postCustomerShippingAddress**](CustomerShippingAddressApi.md#postCustomerShippingAddress) | **POST** /tms/v2/customers/{customerId}/shipping-addresses | Create a Customer Shipping Address


<a name="deleteCustomerShippingAddress"></a>
# **deleteCustomerShippingAddress**
> deleteCustomerShippingAddress(customerId, shippingAddressId, opts)

Delete a Customer Shipping Address

|  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Deleting a Customers Shipping Address**<br>Your system can use this API to delete an existing Shipping Address for a Customer.<br>If a customer has more than one Shipping Address then the default Shipping Address cannot be deleted without first selecting a [new default Shipping Address](#token-management_customer-shipping-address_update-a-customer-shipping-address_samplerequests-dropdown_make-customer-shipping-address-the-default_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var shippingAddressId = "shippingAddressId_example"; // String | The Id of a shipping address.

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
apiInstance.deleteCustomerShippingAddress(customerId, shippingAddressId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **shippingAddressId** | **String**| The Id of a shipping address. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerShippingAddress"></a>
# **getCustomerShippingAddress**
> PostCustomerShippingAddressRequest getCustomerShippingAddress(customerId, shippingAddressId, opts)

Retrieve a Customer Shipping Address

|  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving a Customer Shipping Address**<br>Your system can use this API to retrieve an existing Shipping Address for a Customer.<br>To perform a payment with a particular Shipping Address simply specify the [Shipping Address Id in the payments request](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-using-tokens_authorization-with-customer-payment-instrument-and-shipping-address-token-id_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var shippingAddressId = "shippingAddressId_example"; // String | The Id of a shipping address.

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
apiInstance.getCustomerShippingAddress(customerId, shippingAddressId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **shippingAddressId** | **String**| The Id of a shipping address. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**PostCustomerShippingAddressRequest**](PostCustomerShippingAddressRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="getCustomerShippingAddressesList"></a>
# **getCustomerShippingAddressesList**
> ShippingAddressListForCustomer getCustomerShippingAddressesList(customerId, opts)

List Shipping Addresses for a Customer

|  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Retrieving all Customer Shipping Addresses**<br>Your system can use this API to retrieve all existing Shipping Addresses for a Customer. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

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
apiInstance.getCustomerShippingAddressesList(customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **offset** | **Number**| Starting record in zero-based dataset that should be returned as the first object in the array. Default is 0. | [optional] [default to 0]
 **limit** | **Number**| The maximum number that can be returned in the array starting from the offset record in zero-based dataset. Default is 20, maximum is 100. | [optional] [default to 20]

### Return type

[**ShippingAddressListForCustomer**](ShippingAddressListForCustomer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="patchCustomersShippingAddress"></a>
# **patchCustomersShippingAddress**
> PatchCustomerShippingAddressRequest patchCustomersShippingAddress(customerId, shippingAddressId, patchCustomerShippingAddressRequest, opts)

Update a Customer Shipping Address

|  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Updating a Customers Shipping Address**<br>Your system can use this API to update an existing Shipping Addresses for a Customer, including selecting a [default Shipping Address](#token-management_customer-shipping-address_update-a-customer-shipping-address_samplerequests-dropdown_make-customer-shipping-address-the-default_liveconsole-tab-request-body) for use in payments. 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var shippingAddressId = "shippingAddressId_example"; // String | The Id of a shipping address.

var patchCustomerShippingAddressRequest = new CyberSource.PatchCustomerShippingAddressRequest(); // PatchCustomerShippingAddressRequest | 

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
apiInstance.patchCustomersShippingAddress(customerId, shippingAddressId, patchCustomerShippingAddressRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **shippingAddressId** | **String**| The Id of a shipping address. | 
 **patchCustomerShippingAddressRequest** | [**PatchCustomerShippingAddressRequest**](PatchCustomerShippingAddressRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 
 **ifMatch** | **String**| Contains an ETag value from a GET request to make the request conditional. | [optional] 

### Return type

[**PatchCustomerShippingAddressRequest**](PatchCustomerShippingAddressRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="postCustomerShippingAddress"></a>
# **postCustomerShippingAddress**
> PostCustomerShippingAddressRequest postCustomerShippingAddress(customerId, postCustomerShippingAddressRequest, opts)

Create a Customer Shipping Address

|  |  |  | | --- | --- | --- | |**Customer Shipping Address**<br>A Customer Shipping Address represents tokenized customer shipping information.<br>A [Customer](#token-management_customer_create-a-customer) can have [one or more Shipping Addresses](#token-management_customer-shipping-address_list-shipping-addresses-for-a-customer), with one allocated as the Customers default for use in payments.|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|**Creating a Customer Shipping Address**<br>Your system can use this API to create an existing Customers default or non default Shipping Address.<br>You can also create additional Customer Shipping Addresses via the [Payments API](#payments_payments_process-a-payment_samplerequests-dropdown_authorization-with-token-create_authorization-create-default-payment-instrument-shipping-address-for-existing-customer_liveconsole-tab-request-body). 

### Example
```javascript
var CyberSource = require('CyberSource');

var apiInstance = new CyberSource.CustomerShippingAddressApi();

var customerId = "customerId_example"; // String | The Id of a Customer.

var postCustomerShippingAddressRequest = new CyberSource.PostCustomerShippingAddressRequest(); // PostCustomerShippingAddressRequest | 

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
apiInstance.postCustomerShippingAddress(customerId, postCustomerShippingAddressRequest, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| The Id of a Customer. | 
 **postCustomerShippingAddressRequest** | [**PostCustomerShippingAddressRequest**](PostCustomerShippingAddressRequest.md)|  | 
 **profileId** | **String**| The Id of a profile containing user specific TMS configuration. | [optional] 

### Return type

[**PostCustomerShippingAddressRequest**](PostCustomerShippingAddressRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

