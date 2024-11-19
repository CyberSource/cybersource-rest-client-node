# CyberSource.Ptsv1pushfundstransferPointOfServiceInformationEmv

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardSequenceNumber** | **String** | Number assigned to a specific card when two or more cards are associated with the same primary account number.  This value enables issuers to distinguish among multiple cards that are linked to the same account.  This value can also act as a tracking tool when reissuing cards.  When this value is available, it is provided by the chip reader.  When the chip reader does not provide this value, do not include this field in your request.  When sequence number is not provided via this API field, the value is extracted from EMV tag 5F34 for Mastercard transactions. To enable this feature please call support.  Note Card present information about EMV applies only to credit card processing and PIN debit processing.  All other card present information applies only to credit card processing.  | [optional] 


