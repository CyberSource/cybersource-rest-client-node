# CyberSource.Ptsv2paymentsSenderInformationAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | The account number of the entity funding the transaction. The value for this field can be a payment card account number or bank account number.  | [optional] 
**type** | **String** | Identifies the sender's account type. This field is applicable for AFT transactions.  Valid values are:   - `00` for Other   - `01` for Routing Transit Number (RTN) + Bank Account Number (BAN)   - `02` for International Bank Account Number (IBAN)   - `03` for Card Account   - `04` for Email   - `05` for Phone Number   - `06` for Bank Account Number (BAN) + Bank Identification Code (BIC), also known as a SWIFT code   - `07` for Wallet ID   - `08` for Social Network ID  | [optional] 
**fundsSource** | **String** | Source of funds. Possible Values:  - `01`: Credit.  - `02`: Debit.  - `03`: Prepaid.  - `04`: Deposit Account.  - `05`: Mobile Money Account.  - `06`: Cash.  - `07`: Other.  - `V5`: Debits / deposit access other than those linked to the cardholders' scheme.  - `V6`: Credit accounts other than those linked to the cardholder's scheme.  | [optional] 


