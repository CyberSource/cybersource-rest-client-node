# CyberSource.Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiator

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | This field indicates whether the transaction is a merchant-initiated transaction or customer-initiated transaction.  Valid values: - **customer** - **merchant**  | [optional] 
**credentialStoredOnFile** | **Boolean** | Flag that indicates whether merchant intends to use this transaction to store payment credentials for follow-up merchant-initiated transactions.  Valid values: - &#x60;true&#x60; means merchant will use this transaction to store payment credentials for follow-up merchant-initiated transactions. - &#x60;false&#x60; means merchant will not use this transaction to store payment credentials for follow-up merchant-initiated transactions.  See \&quot;Merchant-Initiated Transactions,\&quot; page 177.  **NOTE:** The value for this field does not correspond to any data in the TC 33 capture file5. This field is supported only for Visa transactions on CyberSource through VisaNet.  | [optional] 
**storedCredentialUsed** | **Boolean** | Flag that indicates whether merchant is intend to use this transaction to store payment credential for follow-up merchant-initiated transactions or not.  Possible values: - **true** - **false**  | [optional] 
**merchantInitiatedTransaction** | [**Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction**](Ptsv2paymentsProcessingInformationAuthorizationOptionsInitiatorMerchantInitiatedTransaction.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `customer` (value: `"customer"`)

* `merchant` (value: `"merchant"`)




