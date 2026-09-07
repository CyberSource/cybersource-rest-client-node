# CyberSource.UnifiedriskMerchant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categoryCode** | **String** | Merchant category code (MCC) related to the type of services or goods the merchant provides for the transaction. It is strongly recommended that this conforms to an international standard such as ISO | [optional] 
**merchantId** | **String** | Identifier of the merchant in a transaction. This should be fully unique; two different merchants should not have the same merchantId. It is also essential that this merchantId is consistent over time | [optional] 
**name** | **String** | Name of the merchant in merchantId. This should include enough information to clearly identify the merchant, whenever possible. | [optional] 
**currency** | **String** | Merchant's local currency (ISO 4217 3-letter code). Used for currency conversion calculations. | [optional] 
**merchantDescriptor** | [**UnifiedriskMerchantMerchantDescriptor**](UnifiedriskMerchantMerchantDescriptor.md) |  | [optional] 
**address** | [**UnifiedriskMerchantAddress**](UnifiedriskMerchantAddress.md) |  | [optional] 
**industryOfBusiness** | **String** | Industry sector or vertical the merchant operates in (e.g., RETAIL, HOSPITALITY, HEALTHCARE, FINANCIAL_SERVICES). Provides broader business context beyond the MCC | [optional] 
**status** | **String** | Current operational status of the merchant account (e.g., ACTIVE, SUSPENDED, TERMINATED, PENDING_REVIEW). Drives eligibility checks during transaction processing | [optional] 
**type** | **String** | Classification of the merchant's business type (e.g., SOLE_TRADER, PARTNERSHIP, LIMITED_COMPANY, NON_PROFIT). Used for regulatory and underwriting purposes | [optional] 
**tradingAddress** | [**UnifiedriskMerchantTradingAddress**](UnifiedriskMerchantTradingAddress.md) |  | [optional] 
**referenceNumber** | **String** | An external or internal reference number associated with the merchant, used for cross-system reconciliation (e.g., CRM ID, acquirer reference, banking platform reference) | [optional] 
**merchantDefinedData** | **String** | Free-form merchant-provided data for risk assessment, allowing supplementary information not captured by standard fields (e.g., loyalty tier, custom risk flags) | [optional] 
**merchantSellerId** | **String** | Unique identifier assigned to this merchant as a seller within a marketplace or platform (e.g., Amazon Marketplace seller ID). Used to distinguish sub-merchants in aggregator models | [optional] 


