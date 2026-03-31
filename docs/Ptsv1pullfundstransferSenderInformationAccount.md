# CyberSource.Ptsv1pullfundstransferSenderInformationAccount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fundsSource** | **String** | Source of funds. Possible values: - `01`: Credit card, - `02`: Debit card, - `03`: Prepaid card, - `04`: Cash, - `05`: Debit or deposit account that is not linked to a Visa card. Includes checking accounts, savings, - `06`: Credit account that is not linked to a Visa card. Includes credit cards and proprietary lines, - `07`: Mobile wallet account, - `08`: Other source of funds.  | [optional] 
**_number** | **String** | - Cross-border: Account number of the recipient account being funded by the AFT, is mandatory in cross-border Money Transfer AFTs. - Domestic: Optional in domestic AFTs. - Europe Domestic and intra-EEA cross-border: Account number of the recipient account being funded is mandatory in domestic and intra-EEA Money Transfer AFTs. In an AFT, this field contains the account number of the Recipient Account being funded by the AFT. Note: Inclusion of this tag is conditional; Sender Information reference number or Sender account number are required. If this tag is not included, Sender Reference number must be present and contain a reference number for the recipient account.  | [optional] 


