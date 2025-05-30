# CyberSource.PaymentsProductsAlternativePaymentMethodsConfigurationInformationConfigurations

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCategoryCode** | **String** | Merchant Category Code (MCC) is a four-digit number assigned to a business by credit card companies when the business first starts accepting credit cards as a form of payment. The MCC is used to classify the business by the type of goods or services it provides.  | [optional] 
**processors** | [**{String: PaymentsProductsAlternativePaymentMethodsConfigurationInformationConfigurationsProcessors}**](PaymentsProductsAlternativePaymentMethodsConfigurationInformationConfigurationsProcessors.md) | This is a map. The allowed keys are below. Value should be an object containing a sole boolean property - enabled. <table>   <tr>     <td>klarna</td>   </tr>   <tr>     <td>payPal</td>   </tr>   <tr>     <td>alipay</td>   </tr>   <tr>     <td>bancontact</td>   </tr>   <tr>     <td>giropay</td>   </tr>   <tr>     <td>ideal</td>   </tr> </table>  | [optional] 


