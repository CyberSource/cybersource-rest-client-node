# CyberSource.Tmsv2TokenizedCardMetadataIssuerCapabilities

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deviceBindingSupported** | **Boolean** | Indicates if the issuer supports device binding.  | [optional] 
**cardholderVerificationSupported** | **Boolean** | Indicates if the issuer participates in step-up authentication that requires cardholder verification.  | [optional] 
**trustedBeneficiaryEnrollmentSupported** | **Boolean** | Indicates if the issuer supports trusted beneficiary enrollment. e.g allowing cardholders to designate trusted merchants or payment recipients that can be exempt from step-up authentication.  | [optional] 
**delegatedAuthenticationSupported** | **Boolean** | Indicates if the issuer supports delegated authentication. e.g allowing approved thrird parties to perform authentication on behalf of the issuer.  | [optional] 
**oboDeviceBindingSupported** | **Boolean** | Indicates if the issuer supports on-behalf-of device binding. e.g allowing approved third parties to perform device binding on behalf of the issuer.  | [optional] 
**tokenLcmNotificationsSupported** | **Boolean** | Indicates if the issuer supports receiving token lifecycle management notifications. e.g receiving updates on changes to the token's status or attributes.  | [optional] 
**fpanLcmNotificationsSupported** | **Boolean** | Indicates if the issuer supports receiving PAN lifecycle management notifications. e.g receiving updates on changes to the underlying card's status or attributes.  | [optional] 


