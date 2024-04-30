# CyberSource.PaymentsProductsPayoutsConfigurationInformationConfigurationsPullfunds

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirerOrganizationId** | **String** | Valid organization in OMS with an organizationInformation.type as \"acquirer\". | [optional] 
**acquiringBIN** | **Number** | This code identifies the financial institution acting as the acquirer of this transaction. The acquirer is the client or system user that signed the originator or installed the unattended cardholder- activated environment. When a processing center operates for multiple acquirers, this code is for the individual client or system user, not a code for the center. | 
**allowCryptoCurrencyPurchase** | **Boolean** | This configuration allows a transaction to be flagged for cryptocurrency funds transfer. | [optional] 
**cardAcceptorId** | **String** | A unique identifier number for the originator of transfers that is unique to the processor or acquirer. | 
**originatorMvv** | **String** | Merchant Verification Value (MVV) is used to identify originators that participate in a variety of programs. The MVV is unique to the merchant. | [optional] 
**originatorNameAbbreviation** | **String** | A 4 character max name abbreviation for the originator. | [optional] 
**cardTerminalId** | **String** | This field contains a code that identifies a terminal at the card acceptor location. This field is used in all messages related to a transaction. If sending transactions from a card not present environment, use the same value for all transactions. | 


