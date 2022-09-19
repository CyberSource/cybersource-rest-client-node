# CyberSource.TssV2TransactionsGet200ResponseClientReferenceInformationPartner

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**solutionId** | **String** | Identifier for the partner that is integrated to CyberSource.  Send this value in all requests that are sent through the partner solution. CyberSource assigns the ID to the partner.  **Note** When you see a solutionId of 999 in reports, the solutionId that was submitted is incorrect.  | [optional] 
**thirdPartyCertificationNumber** | **String** | Value that identifies the application vendor and application version for a third party gateway. CyberSource provides you with this value during testing and validation. This field is supported only on CyberSource through VisaNet.  #### Used by **Authorization, Authorization Reversal, Capture, Credit, Incremental Authorization, and Void** Optional field.  #### PIN debit Required field for PIN debit credit, PIN debit purchase, or PIN debit reversal request.  | [optional] 


