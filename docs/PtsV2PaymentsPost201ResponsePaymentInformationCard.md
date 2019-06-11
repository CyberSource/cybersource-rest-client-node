# CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suffix** | **String** | Last four digits of the cardholder’s account number. This field is returned only for tokenized transactions. You can use this value on the receipt that you give to the cardholder.  **Note** This field is returned only for CyberSource through VisaNet and FDC Nashville Global.  #### CyberSource through VisaNet The value for this field corresponds to the following data in the TC 33 capture file: - Record: CP01 TCRB - Position: 85 - Field: American Express last 4 PAN return indicator.  | [optional] 


