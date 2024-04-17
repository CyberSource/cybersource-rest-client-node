# CyberSource.PaymentsProductsDigitalPaymentsSubscriptionInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**selfServiceability** | **String** | Indicates if the organization can enable this product using self service. | [optional] [default to 'NOT_SELF_SERVICEABLE']
**features** | [**{String: PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures}**](PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures.md) | Allowed values are; <table>    <tr>       <td>visaCheckout</td>    </tr>    <tr>       <td>applePay</td>    </tr>    <tr>       <td>samsungPay</td>    </tr>    <tr>        <td>googlePay</td>     </tr> </table>  | [optional] 


<a name="SelfServiceabilityEnum"></a>
## Enum: SelfServiceabilityEnum


* `SELF_SERVICEABLE` (value: `"SELF_SERVICEABLE"`)

* `NOT_SELF_SERVICEABLE` (value: `"NOT_SELF_SERVICEABLE"`)

* `SELF_SERVICE_ONLY` (value: `"SELF_SERVICE_ONLY"`)




