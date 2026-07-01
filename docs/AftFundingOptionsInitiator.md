# CyberSource.AftFundingOptionsInitiator

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**originatorInitiatedTransaction** | [**AftFundingOptionsInitiatorOriginatorInitiatedTransaction**](AftFundingOptionsInitiatorOriginatorInitiatedTransaction.md) |  | [optional] 
**type** | **String** | This field indicates whether the transaction is a originator-initiated transaction or sender-initiated transaction.  Valid values: - `sender` - `originator`  Conditional field. If value in this field is `originator`, this field is mandatory for originator-initated transactions.  | [optional] 
**storedCredentialUsed** | **Boolean** | Indicates to an issuing bank whether an originator-initiated transaction came from a card that was already stored on file.  Possible values: - `True` = originator-initiated transaction came from a card that was already stored on file - `False` =  originator-initiated transaction came from a card that was not stored on file  Conditional for MITCOF transactions  | [optional] 
**credentialStoredOnFile** | **Boolean** | Flag that indicates whether the transaction is the first originator-initiated transaction in a series, which means that the customer initiated the previous transaction.   Possible values: - `True`: First originator-initiated transaction - `False`: Not the first originator-initiated transaction  Conditional for MITCOF transactions  | [optional] 


