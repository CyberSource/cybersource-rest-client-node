# CyberSource.TssV2TransactionsGet200ResponsePointOfSaleInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entryMode** | **String** | Method of entering credit card information into the POS terminal. Possible values:   - contact: Read from direct contact with chip card.  - contactless: Read from a contactless interface using chip data.  - keyed: Manually keyed into POS terminal.  - msd: Read from a contactless interface using magnetic stripe data (MSD).  - swiped: Read from credit card magnetic stripe.  The contact, contactless, and msd values are supported only for EMV transactions. * Applicable only for CTV for Payouts.  | [optional] 
**terminalCapability** | **Number** | POS terminal’s capability. Possible values:   - 1: Terminal has a magnetic stripe reader only.  - 2: Terminal has a magnetic stripe reader and manual entry capability.  - 3: Terminal has manual entry capability only.  - 4: Terminal can read chip cards.  - 5: Terminal can read contactless chip cards.  The values of 4 and 5 are supported only for EMV transactions. * Applicable only for CTV for Payouts.    | [optional] 


