# CyberSource.Ptsv1pushfundstransferSenderInformationAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundsSource** | **String** | Source of funds. Possible values:  Chase Paymentech, FDC Compass, Visa Platform Connect:  - &#x60;01&#x60;: Credit card - &#x60;02&#x60;: Debit card - &#x60;03&#x60;: Prepaid card  Chase Paymentech, Visa Platform Connect:  - &#x60;04&#x60;: Cash - &#x60;05&#x60;: Debit or deposit account that is not linked to a Visa card. Includes checking accounts, savings accounts, and proprietary debit or ATM cards. - &#x60;06&#x60;: Credit account that is not linked to a Visa card. Includes credit cards and proprietary lines of credit.  FDC Compass: - &#x60;04&#x60;: Deposit Account  Funds Disbursement This value is most likely 05 to identify that the originator used a deposit account to fund the disbursement.  Credit Card Bill Payment This value must be 02, 03, 04, or 05.  | [optional] 
**_number** | **String** | The account number of the entity funding the transaction. It is the sender&#39;s account number. It can be a debit/credit card account number or bank account number.  Funds disbursements  This field is optional.  All other transactions  This field is required when the sender funds the transaction with a financial instrument, for example debit card. Length:  FDC Compass (&lt;&#x3D; 19) Chase Paymentech (&lt;&#x3D; 16)  | [optional] 


