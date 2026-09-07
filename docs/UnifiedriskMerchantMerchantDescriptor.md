# CyberSource.UnifiedriskMerchantMerchantDescriptor

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Your merchant name.**Note** For Paymentech processor using Cybersource Payouts, the maximum data length is 22.#### PIN debit Your business name. This name is displayed on the cardholder's statement. When you include more than one consecutive space, extra spaces are removed.When you do not include this value in your PIN debit request, the merchant name from your account is used. **Important** This value must consist of English characters.Optional field for PIN debit credit or PIN debit pu | [optional] 
**url** | **String** | Address of company's website provided by merchant | [optional] 
**email** | **String** | Primary contact email address of the merchant, used for notifications, dispute communications, and merchant verification purposes | [optional] 
**phoneNumber** | **String** | Primary phone number of the merchant in E.164 format (e.g., +14155552671), used for contact and identity verification | [optional] 
**riskProfile** | **String** | Risk classification or category assigned to the merchant based on their industry, transaction patterns, and historical fraud rates (e.g., HIGH, MEDIUM, LOW) | [optional] 
**authorizedSignatories** | **String** | Names or identifiers of individuals authorized to sign agreements and take financial actions on behalf of the merchant entity | [optional] 
**closeDate** | **String** | The date the merchant account was or is scheduled to be closed, in ISO 8601 format (YYYY-MM-DD). Used for tracking merchant lifecycle events | [optional] 
**countryIncorporated** | **String** | The ISO 3166-1 alpha-3 country code where the merchant business is legally incorporated (e.g., GBR, USA, IND) | [optional] 
**creditScore** | **Number** | The merchant's score as assessed by the acquirer or a credit bureau, used for underwriting and risk decisions during merchant onboarding | [optional] 
**dateOfEstablishment** | **String** | The date the merchant's business was formally established or incorporated, in ISO 8601 format (YYYY-MM-DD). Used for business tenure risk assessment | [optional] 
**dateofOwnershipChange** | **String** | The date of the most recent ownership change for the merchant entity, in ISO 8601 format. Ownership changes can indicate elevated risk and require re-underwriting | [optional] 
**ecommerceSupport** | **String** | Indicates whether the merchant supports e-commerce transactions and the level of online payment capability (e.g., FULL, PARTIAL, NONE) | [optional] 
**expectedAverageTicketSize** | [**UnifiedriskMerchantMerchantDescriptorExpectedAverageTicketSize**](UnifiedriskMerchantMerchantDescriptorExpectedAverageTicketSize.md) |  | [optional] 
**expectedAnnualSales** | [**UnifiedriskMerchantMerchantDescriptorExpectedAnnualSales**](UnifiedriskMerchantMerchantDescriptorExpectedAnnualSales.md) |  | [optional] 
**expectedMonthlySales** | [**UnifiedriskMerchantMerchantDescriptorExpectedMonthlySales**](UnifiedriskMerchantMerchantDescriptorExpectedMonthlySales.md) |  | [optional] 
**limitType** | **String** | Defines the type of financial limit applied to the merchant (e.g., SINGLE_TRANSACTION, DAILY, MONTHLY, ANNUAL). Used to enforce risk controls during payment processing | [optional] 
**limitValue** | [**UnifiedriskMerchantMerchantDescriptorLimitValue**](UnifiedriskMerchantMerchantDescriptorLimitValue.md) |  | [optional] 
**hierarchy** | [**UnifiedriskMerchantMerchantDescriptorHierarchy**](UnifiedriskMerchantMerchantDescriptorHierarchy.md) |  | [optional] 
**primaryGoods** | **String** | The primary category of goods or services sold by the merchant (e.g., Electronics, Clothing, Travel Services). Used alongside MCC for granular risk profiling | [optional] 


