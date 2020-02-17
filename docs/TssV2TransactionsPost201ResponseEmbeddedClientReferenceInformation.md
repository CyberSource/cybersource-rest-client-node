# CyberSource.TssV2TransactionsPost201ResponseEmbeddedClientReferenceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Client-generated order reference or tracking number. CyberSource recommends that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  For information about tracking orders, see \&quot;Tracking and Reconciling Your Orders\&quot; in [Getting Started with CyberSource Advanced for the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Getting_Started_SCMP/html/)  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports.  | [optional] 
**applicationName** | **String** | The name of the Connection Method client (such as Virtual Terminal or SOAP Toolkit API) that the merchant uses to send a transaction request to CyberSource.  | [optional] 
**applicationUser** | **String** | The entity that is responsible for running the transaction and submitting the processing request to CyberSource. This could be a person, a system, or a connection method.  | [optional] 


