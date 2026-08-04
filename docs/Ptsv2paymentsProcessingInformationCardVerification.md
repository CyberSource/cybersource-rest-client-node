# CyberSource.Ptsv2paymentsProcessingInformationCardVerification

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkAVS** | **String** | Verification control flag to opt-in or opt-out of Address Verification Service (AVS) for a transaction.  Possible values: - `Y`: Enable AVS verification for this transaction - `N`: Disable AVS verification for this transaction  #### Used by **Authorization** Optional field for controlling AVS verification at the transaction level.  #### API Ticket ACCAPI-2156  | [optional] 
**checkANI** | **String** | Verification control flag to opt-in or opt-out of Address Name Inquiry (ANI) for a transaction.  Possible values: - `Y`: Enable ANI verification for this transaction - `N`: Disable ANI verification for this transaction  #### Used by **Authorization** Optional field for controlling ANI verification at the transaction level.  #### API Ticket ACCAPI-2156  | [optional] 


