# CyberSource.PaymentsProductsCardProcessingSubscriptionInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **Boolean** |  | [optional] 
**selfServiceability** | **String** | Indicates if the organization can enable this product using self service.  Possible values: - SELF_SERVICEABLE - NOT_SELF_SERVICEABLE - SELF_SERVICE_ONLY | [optional] [default to 'NOT_SELF_SERVICEABLE']
**features** | [**{String: PaymentsProductsCardProcessingSubscriptionInformationFeatures}**](PaymentsProductsCardProcessingSubscriptionInformationFeatures.md) | This is a map. The allowed keys are below. Value should be an object containing a sole boolean property - enabled. <table>    <tr>       <td>cardPresent</td>    </tr>    <tr>       <td>cardNotPresent</td>    </tr> </table>  | [optional] 


