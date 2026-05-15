# CyberSource.Ptsv2paymentsProcessingInformationProgramIndicators

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quickPayment** | **Boolean** | Indicator for when a Quick Payment transaction. A Quick Payment Service (QPS) Transaction is a magnetic stripe-based or contact chip-based face-to-face Mastercard POS transaction that occurs at a Peruvian merchant in an eligible merchant category and for an amount equal or less to the CVM limit.  This field is supported for Mastercard transactions in Peru.  Possible values: - `true`: This is a Quick Payment Service transaction - `false`: This is not a Quick Payment Service transaction  Default: null  | [optional] 
**qrInitiated** | **Boolean** | Indicator that the transaction was made via QR Payment.  This field is supported for Mastercard QR e-commerce payment programs in Peru.  Possible values: - `true`: Transaction was initiated via QR code - `false`: Transaction was not initiated via QR code  Default: null  | [optional] 


