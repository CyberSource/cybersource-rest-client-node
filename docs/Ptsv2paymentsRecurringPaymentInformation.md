# CyberSource.Ptsv2paymentsRecurringPaymentInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endDate** | **String** | The date after which no further recurring authorizations should be performed. Format: `YYYY-MM-DD` **Note** This field is required for recurring transactions.  | 
**frequency** | **Number** | Integer value indicating the minimum number of days between recurring authorizations. A frequency of monthly is indicated by the value 28. Multiple of 28 days will be used to indicate months.  Example: 6 months = 168  Example values accepted (31 days): - 31 - 031 - 0031  **Note** This field is required for recurring transactions.  | 
**numberOfPayments** | **Number** | Total number of payments for the duration of the recurring subscription.  | [optional] 
**originalPurchaseDate** | **String** | Date of original purchase. Required for recurring transactions. Format: `YYYY-MM-DDTHH:MM:SSZ` **Note**: If this field is empty, the current date is used.  | [optional] 
**sequenceNumber** | **Number** | This field is mandatory for Cartes Bancaires recurring transactions on Credit Mutuel-CIC.       This field records recurring sequence, e.g. 1st for initial,  2 for subsequent, 3 etc  | [optional] 
**type** | **String** | This contains the type of recurring payment. Valid Values : 1 - Registration/First transaction 2 - Subsequent transaction 3 - Modification 4 - Cancellation  | [optional] 
**occurrence** | **String** | This value indicates how often a recurring payment occurs. Valid Values : • 01 (Daily) • 02 (Twice weekly) • 03 (Weekly) • 04 (Ten days) • 05 (Fortnightly) • 06 (Monthly) • 07 (Every two months) • 08 (Trimester) • 09 (Quarterly) • 10 (Twice yearly) • 11 (Annually) • 12 (Unscheduled)  | [optional] 
**validationIndicator** | **String** | This tag will contain a value that indicates whether or not the recurring payment transaction has been validated. Valid values : 0- Not validated 1- Validated  | [optional] 
**amountType** | **String** | Indicates recurring amount type agreed by the cardholder Valid Values : 1- Fixed amount recurring payment 2- Recurring payment with maximum amount  | [optional] 
**maximumAmount** | **String** | This API field will contain the maximum amount agreed to by the cardholder. The currency of this amount will be specified in Field 49—Currency Code,Transaction.  | [optional] 
**referenceNumber** | **String** | This will contain a unique reference number for the recurring payment transaction.  | [optional] 


