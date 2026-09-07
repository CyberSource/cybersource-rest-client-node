# CyberSource.UnifiedriskAuthentication

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationId** | **String** | Unique identifier assigned to an authentication attempt | [optional] 
**method** | **String** | Authentication method used during the authentication/MFA process | [optional] 
**mfaSuccessful** | **Boolean** | Whether multi-factor authentication was completed successfully | [optional] 
**phoneNumber** | **String** | Phone number used for authentication (e.g., SMS/voice MFA) | [optional] 
**email** | **String** | Email address used for authentication (e.g., verification code delivery) | [optional] 
**other** | **String** | Additional authentication-related information not captured by other fields | [optional] 
**threeDSRequestorId** | **String** | Unique identifier assigned to the 3D Secure requestor (typically the merchant or payment service provider) by the directory server for authentication routing | [optional] 
**threeDSRequestorName** | **String** | The business or brand name of the 3D Secure requestor as registered with the card network directory server | [optional] 
**challenge** | [**UnifiedriskAuthenticationChallenge**](UnifiedriskAuthenticationChallenge.md) |  | [optional] 
**decoupledIndicator** | **String** | Indicates whether decoupled authentication is requested or supported, allowing the cardholder to authenticate outside the main transaction flow. Values - \"Y\" (supported and preferred), \"N\" (do not use) | [optional] 
**decoupledMaxTime** | **String** | Maximum time in minutes allowed for the cardholder to complete a decoupled authentication, after which the session expires | [optional] 
**threeRIIndicator** | **String** | Indicates the reason for the 3DS Requestor Initiated (3RI) transaction - a merchant-initiated authentication without active cardholder participation. Values defined by EMVCo 3DS specification | [optional] 
**authenticationIndicator** | **String** | Indicates the type of authentication request being made, such as payment authentication, non-payment authentication, or recurring/installment transactions | [optional] 
**authenticationDate** | **String** | The date and time when the cardholder completed authentication, used for tracking authentication timing and fraud analysis | [optional] 
**languagePreference** | **[String]** | The cardholder's preferred language for the authentication challenge interface, expressed as an IETF BCP 47 language tag (e.g., en-US, fr-FR) | [optional] 
**spcSupport** | **String** | Indicates whether the merchant's environment supports the Secure Payment Confirmation (SPC) protocol for frictionless authentication using FIDO2/WebAuthn credentials | [optional] 
**spcIncompleteIndicator** | **String** | Indicates the reason why an SPC (Secure Payment Confirmation) transaction was not completed, helping distinguish cardholder-initiated abandonment from technical failures | [optional] 
**version** | **String** | The 3D Secure protocol version used for this authentication attempt (e.g., \"2.1.0\", \"2.2.0\"), which determines which fields and features are supported | [optional] 


