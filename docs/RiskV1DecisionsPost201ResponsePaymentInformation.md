# CyberSource.RiskV1DecisionsPost201ResponsePaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binCountry** | **String** | Country (two-digit country code) associated with the BIN of the customer's card used for the payment. Returned if the information is available. Use this field for additional information when reviewing orders. This information is also displayed in the details page of the CyberSource Business Center.  | [optional] 
**accountType** | **String** | Type of payment card account. This field can refer to a credit card, debit card, or prepaid card account type.  | [optional] 
**issuer** | **String** | Name of the bank or entity that issued the card account.  | [optional] 
**scheme** | **String** | Subtype of card account. This field can contain one of the following values: - Maestro International - Maestro UK Domestic - MasterCard Credit - MasterCard Debit - Visa Credit - Visa Debit - Visa Electron  **Note** Additional values may be present.  | [optional] 
**bin** | **String** | Credit card BIN (the first six digits of the credit card).Derived either from the `cc_bin` request field or from the first six characters of the `customer_cc_num` field.  | [optional] 


