# CyberSource.Ptsv2paymentsidreversalsClientReferenceInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Merchant-generated order reference or tracking number. It is recommended that you send a unique value for each transaction so that you can perform meaningful searches for the transaction.  #### Used by **Authorization** Required field.  #### PIN Debit Requests for PIN debit reversals need to use the same merchant reference number that was used in the transaction that is being reversed.  Required field for all PIN Debit requests (purchase, credit, and reversal).  #### FDC Nashville Global Certain circumstances can cause the processor to truncate this value to 15 or 17 characters for Level II and Level III processing, which can cause a discrepancy between the value you submit and the value included in some processor reports.  | [optional] 
**pausedRequestId** | **String** | Used to resume a transaction that was paused for an order modification rule to allow for payer authentication to complete. To resume and continue with the authorization/decision service flow, call the services and include the request id from the prior decision call.  | [optional] 
**comments** | **String** | Comments | [optional] 
**partner** | [**Ptsv2paymentsidreversalsClientReferenceInformationPartner**](Ptsv2paymentsidreversalsClientReferenceInformationPartner.md) |  | [optional] 
**applicationName** | **String** | The name of the Connection Method client (such as Virtual Terminal or SOAP Toolkit API) that the merchant uses to send a transaction request to CyberSource.  | [optional] 
**applicationVersion** | **String** | Version of the CyberSource application or integration used for a transaction.  | [optional] 
**applicationUser** | **String** | The entity that is responsible for running the transaction and submitting the processing request to CyberSource. This could be a person, a system, or a connection method.  | [optional] 


