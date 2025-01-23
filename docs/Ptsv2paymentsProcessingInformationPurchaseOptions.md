# CyberSource.Ptsv2paymentsProcessingInformationPurchaseOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isElectronicBenefitsTransfer** | **Boolean** | Flag that indicates whether this transaction is an EBT transaction. Possible values: - `true` - `false`  #### PIN debit Required field for EBT and EBT voucher transactions that use PIN debit credit or PIN debit purchase; otherwise, not used.  | [optional] 
**type** | **String** | Flag that indicates an EBT voucher transaction. Possible value: - `EBT_VOUCHER`: Indicates the PIN debit transaction is an EBT voucher. - `BUY` - `RENT` - `BOOK` - `SUBSCRIBE` - `DOWNLOAD` - `ORDER` - `CONTINUE`  #### PIN debit Required field for EBT voucher transactions that use PIN debit purchase; otherwise, not used.  | [optional] 
**eligibilityIndicator** | **String** | This field contains installment data defined by MasterCard. Possible values:   - Y = eligible   - N = not eligile  | [optional] 
**benefitAmount** | **String** | Workplace benefit amount. | [optional] 
**benefitType** | **String** | Workplace benefit type. Possible values: - 70 = employee benefit - 4T = transportation / transit - 52 = general benefit - 53 = meal voucher - 54 = fuel - 55 = ecological / sustainability - 58 = philanthropy / patronage / consumption - 59 = gift - 5S = sport / culture - 5T = book / education  | [optional] 


