# CyberSource.PtsV2PaymentsRefundPost201ResponseOrderInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementAmount** | **String** | This is a multicurrency field. It contains the transaction amount (field 4), converted to the Currency used to bill the cardholder's account. This field is returned for OCT transactions.  | [optional] 
**settlementCurrency** | **String** | This is a multicurrency-only field. It contains a 3-digit numeric code that identifies the currency used by the issuer to bill the cardholder's account. This field is returned for OCT transactions.  | [optional] 
**exchangeRate** | **String** | Exchange rate returned by the DCC service. Includes a decimal point and a maximum of 4 decimal places.  | [optional] 
**foreignAmount** | **String** | Set this field to the converted amount that was returned by the DCC provider.  | [optional] 
**foreignCurrency** | **String** | Set this field to the converted amount that was returned by the DCC provider.  | [optional] 


