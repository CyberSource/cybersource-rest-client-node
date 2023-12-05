# CyberSource.PaymentsProductsCardProcessingSubscriptionInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**selfServiceability** | **String** | Indicates if the organization can enable this product using self service. | [optional] [default to &#39;NOT_SELF_SERVICEABLE&#39;]
**features** | [**{String: PaymentsProductsCardProcessingSubscriptionInformationFeatures}**](PaymentsProductsCardProcessingSubscriptionInformationFeatures.md) | This is a map. The allowed keys are below. Value should be an object containing a sole boolean property - enabled. &lt;table&gt;    &lt;tr&gt;       &lt;td&gt;cardPresent&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;       &lt;td&gt;cardNotPresent&lt;/td&gt;    &lt;/tr&gt; &lt;/table&gt;  | [optional] 


<a name="SelfServiceabilityEnum"></a>
## Enum: SelfServiceabilityEnum


* `SELF_SERVICEABLE` (value: `"SELF_SERVICEABLE"`)

* `NOT_SELF_SERVICEABLE` (value: `"NOT_SELF_SERVICEABLE"`)

* `SELF_SERVICE_ONLY` (value: `"SELF_SERVICE_ONLY"`)




