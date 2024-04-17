# CyberSource.Ptsv1pushfundstransferSenderInformationAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundsSource** | **String** | Source of funds. Possible values:  Chase Paymentech, FDC Compass, Visa Platform Connect:  - `01`: Credit card - `02`: Debit card - `03`: Prepaid card  Chase Paymentech, Visa Platform Connect:  - `04`: Cash - `05`: Debit or deposit account that is not linked to a Visa card. Includes checking accounts, savings accounts, and proprietary debit or ATM cards. - `06`: Credit account that is not linked to a Visa card. Includes credit cards and proprietary lines of credit.  FDC Compass: - `04`: Deposit Account  Funds Disbursement This value is most likely 05 to identify that the originator used a deposit account to fund the disbursement.  Credit Card Bill Payment This value must be 02, 03, 04, or 05.  | [optional] 
**_number** | **String** | The account number of the entity funding the transaction. It is the sender's account number. It can be a debit/credit card account number or bank account number.  Funds disbursements  This field is optional.  All other transactions  This field is required when the sender funds the transaction with a financial instrument, for example debit card. Length:  FDC Compass (<= 19) Chase Paymentech (<= 16)  | [optional] 


