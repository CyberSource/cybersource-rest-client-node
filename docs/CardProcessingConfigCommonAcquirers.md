# CyberSource.CardProcessingConfigCommonAcquirers

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**institutionId** | **String** | Identifier of the acquirer. This number is usually assigned by Visa. | [optional] 
**interbankCardAssociationId** | **String** | Number assigned by MasterCard to banks to identify the member in transactions. | [optional] 
**discoverInstitutionId** | **String** | Assigned by Discover to identify the acquirer. | [optional] 
**countryCode** | **String** | ISO 4217 format. | [optional] 
**fileDestinationBin** | **String** | The BIN to which this capturefile is sent. This field must contain a valid BIN. | [optional] 
**merchantVerificationValue** | **String** | Identify merchants that participate in Select Merchant Fee (SMF) programs. Unique to the merchant. | [optional] 
**merchantId** | **String** | Merchant ID assigned by an acquirer or a processor. Should not be overriden by any other party. | [optional] 
**terminalId** | **String** | The 'Terminal Id' aka TID, is an identifier used for with your payments processor. Depending on the processor and payment acceptance type this may also be the default Terminal ID used for Card Present and Virtual Terminal transactions.  | [optional] 
**allowMultipleBills** | **Boolean** | Allows multiple captures for a single authorization transaction.  | [optional] 
**enableTransactionReferenceNumber** | **Boolean** | To enable merchant to send in transaction reference number (unique reconciliation ID). | [optional] 
**paymentTypes** | [**{String: CardProcessingConfigCommonPaymentTypes}**](CardProcessingConfigCommonPaymentTypes.md) | Valid values are: * VISA * MASTERCARD * AMERICAN_EXPRESS * CUP * EFTPOS * DINERS_CLUB * DISCOVER * JCB  | [optional] 
**currencies** | [**{String: CardProcessingConfigCommonCurrencies}**](CardProcessingConfigCommonCurrencies.md) | Three-character [ISO 4217 ALPHA-3 Standard Currency Codes.](http://apps.cybersource.com/library/documentation/sbc/quickref/currencies.pdf) | [optional] 


