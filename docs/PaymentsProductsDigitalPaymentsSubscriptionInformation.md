# CyberSource.PaymentsProductsDigitalPaymentsSubscriptionInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**selfServiceability** | **String** | Indicates if the organization can enable this product using self service.  Possible values: - SELF_SERVICEABLE - NOT_SELF_SERVICEABLE - SELF_SERVICE_ONLY | [optional] [default to 'NOT_SELF_SERVICEABLE']
**features** | [**{String: PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures}**](PaymentsProductsDigitalPaymentsSubscriptionInformationFeatures.md) | Allowed values are; <table>    <tr>       <td>visaCheckout</td>    </tr>    <tr>       <td>applePay</td>    </tr>    <tr>       <td>samsungPay</td>    </tr>    <tr>        <td>googlePay</td>     </tr> </table>  | [optional] 


