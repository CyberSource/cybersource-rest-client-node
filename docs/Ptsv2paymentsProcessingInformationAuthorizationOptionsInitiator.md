# CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This field indicates whether the transaction is a merchant-initiated transaction or customer-initiated transaction.  Valid values: - **customer** - **merchant**  | [optional] 
**credentialStoredOnFile** | **Boolean** | Indicates to the issuing bank two things: - The merchant has received consent from the cardholder to store their card details on file - The merchant wants the issuing bank to check out the card details before the merchant initiates their first transaction for this cardholder. The purpose of the merchant-initiated transaction is to ensure that the cardholder's credentials are valid (that the card is not stolen or has restrictions) and that the card details are good to be stored on the merchant's file for future transactions.  Valid values: - `true` means merchant will use this transaction to store payment credentials for follow-up merchant-initiated transactions. - `false` means merchant will not use this transaction to store payment credentials for follow-up merchant-initiated transactions.  **NOTE:** The value for this field does not correspond to any data in the TC 33 capture file5.  This field is supported only for Visa transactions on CyberSource through VisaNet.  | [optional] 
**storedCredentialUsed** | **Boolean** | Indicates to an issuing bank whether a merchant-initiated transaction came from a card that was already stored on file.  Possible values: - **true** means the merchant-initiated transaction came from a card that was already stored on file. - **false**  means the merchant-initiated transaction came from a card that was not stored on file.  | [optional] 
**merchantInitiatedTransaction** | [**Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction**](Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction.md) |  | [optional] 


