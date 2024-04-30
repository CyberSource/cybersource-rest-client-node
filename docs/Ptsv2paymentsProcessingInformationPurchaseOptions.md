# CyberSource.Ptsv2paymentsProcessingInformationPurchaseOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isElectronicBenefitsTransfer** | **Boolean** | Flag that indicates whether this transaction is an EBT transaction. Possible values: - `true` - `false`  #### PIN debit Required field for EBT and EBT voucher transactions that use PIN debit credit or PIN debit purchase; otherwise, not used.  | [optional] 
**type** | **String** | Flag that indicates an EBT voucher transaction. Possible value: - `EBT_VOUCHER`: Indicates the PIN debit transaction is an EBT voucher. - `BUY` - `RENT` - `BOOK` - `SUBSCRIBE` - `DOWNLOAD` - `ORDER` - `CONTINUE`  #### PIN debit Required field for EBT voucher transactions that use PIN debit purchase; otherwise, not used.  | [optional] 


