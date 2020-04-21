# CyberSource.Ptsv2paymentsAcquirerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquirerBin** | **String** | Acquirer bank ID number that  corresponds to a certificate that Cybersource already has.This ID has this format. 4XXXXX for Visa and 5XXXXX for Mastercard.  | [optional] 
**country** | **String** | Issuers need to be aware of the Acquirer&#39;s Country Code when the Acquirer country differs from the Merchant country and the Acquirer is in the EEA (European Economic Area).  | [optional] 
**password** | **String** | Registered password for the Visa directory server.  | [optional] 
**merchantId** | **String** | Username for the visa directory server that is created when your acquirer sets up your account. This ID might be the same as your merchant ID. the username can be 15 or 23 characters.  | [optional] 


