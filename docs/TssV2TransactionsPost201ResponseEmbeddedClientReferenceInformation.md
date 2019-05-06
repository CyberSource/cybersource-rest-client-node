# CyberSource.TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Client-generated order reference or tracking number. CyberSource recommends that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  For information about tracking orders, see [Getting Started with CyberSource Advanced for the SCMP API](http://apps.cybersource.com/library/documentation/dev_guides/Getting_Started_SCMP/html/wwhelp/wwhimpl/js/html/wwhelp.htm).  **FDC Nashville Global**\\ Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports.  | [optional] 
**applicationName** | **String** | The application name of client which is used to submit the request. | [optional] 
**applicationUser** | **String** | The description for this field is not available. | [optional] 


