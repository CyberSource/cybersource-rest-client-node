# CyberSource.TssV2TransactionsGet200ResponsePointOfSaleInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entryMode** | **String** | Method of entering credit card information into the POS terminal. Possible values:   - &#x60;contact&#x60;: Read from direct contact with chip card.  - &#x60;contactless&#x60;: Read from a contactless interface using chip data.  - &#x60;keyed&#x60;: Manually keyed into POS terminal.  - &#x60;msd&#x60;: Read from a contactless interface using magnetic stripe data (MSD).  - &#x60;swiped&#x60;: Read from credit card magnetic stripe.  The contact, contactless, and msd values are supported only for EMV transactions.  For details, see the &#x60;pos_entry_mode&#x60; field description in [Card-Present Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Retail_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 
**terminalCapability** | **Number** | POS terminal’s capability. Possible values:   - &#x60;1&#x60;: Terminal has a magnetic stripe reader only.  - &#x60;2&#x60;: Terminal has a magnetic stripe reader and manual entry capability.  - &#x60;3&#x60;: Terminal has manual entry capability only.  - &#x60;4&#x60;: Terminal can read chip cards.  - &#x60;5&#x60;: Terminal can read contactless chip cards.  The values of 4 and 5 are supported only for EMV transactions. * Applicable only for CTV for Payouts.  For processor-specific details, see the &#x60;terminal_capability&#x60; field description in [Card-Present Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Retail_SCMP_API/html/wwhelp/wwhimpl/js/html/wwhelp.htm)  | [optional] 


