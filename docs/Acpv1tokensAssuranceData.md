# CyberSource.Acpv1tokensAssuranceData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**verificationType** | **String** | Type of the verification data.   Possible values:   - `CARDHOLDER` (Default)   - `DEVICE`  | [optional] 
**verificationEntity** | **String** | Entity performing the verification.   Possible value:     - `10` - VISA (Default)  | [optional] 
**verificationEvents** | **[String]** | Event where the verification occurred.   Possible values:     - `01` - Payment transaction   - `02` - Add card/Card enrollment   - `03` - Profile access   - `04` - Account verification  | [optional] 
**verificationMethod** | **String** | Method of the verification.   Possible values:     - `02` - App-based authentication   - `04` - One-time passcode   - `21` - Visa Token Service step-up: Device binding   - `22` - Visa Token Service step-up: Cardholder verification   - `23` - FIDO2  | 
**verificationResults** | **String** | Result of the verification.   Possible values:     - `01` - Verified   - `02` - Not Verified   - `03` - Not performed   - `04` - Not required   - `21` - Not allowed  | 
**verificationTimestamp** | **String** | Date and time the verification occurred. UTC time in Unix epoch format. | 
**authenticationContext** | [**Acpv1tokensAuthenticationContext**](Acpv1tokensAuthenticationContext.md) |  | [optional] 
**authenticatedIdentities** | [**Acpv1tokensAuthenticatedIdentities**](Acpv1tokensAuthenticatedIdentities.md) |  | [optional] 
**additionalData** | **String** | Additional data related to assurance. | [optional] 


