# CyberSource.PaymentsProductsAlternativePaymentMethodsConfigurationInformationConfigurationsPaymentMethods

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantId** | **String** | Merchant ID for the payment method. This is a unique identifier for the merchant. example. mid12345678  | [optional] 
**logoUrl** | **String** | URL of the logo for the payment method. This is used for branding purposes. example: http://www.test.com  | [optional] 
**redirectSuccessUrl** | **String** | URL to redirect to after a successful transaction. This is where the user will be sent after completing the payment. example: http://www.test.com/success  | [optional] 
**redirectCancelUrl** | **String** | URL to redirect to if the user cancels the transaction. This is where the user will be sent if they choose to cancel the payment. example: http://www.test.com/cancel  | [optional] 
**redirectFailureUrl** | **String** | URL to redirect to if the transaction fails. This is where the user will be sent if there is an error during the payment process. example: http://www.test.com/failure  | [optional] 
**additionalConfigurations** | [**[PaymentsProductsAlternativePaymentMethodsConfigurationInformationConfigurationsAdditionalConfigurations]**](PaymentsProductsAlternativePaymentMethodsConfigurationInformationConfigurationsAdditionalConfigurations.md) | Additional configurations for the payment method. This can include various settings specific to the payment method.  | [optional] 


