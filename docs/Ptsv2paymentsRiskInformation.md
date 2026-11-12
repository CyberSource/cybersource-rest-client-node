# CyberSource.Ptsv2paymentsRiskInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**profile** | [**Ptsv2paymentsRiskInformationProfile**](Ptsv2paymentsRiskInformationProfile.md) |  | [optional] 
**eventType** | **String** | Specifies one of the following types of events: - login - account_creation - account_update For regular payment transactions, do not send this field.  | [optional] 
**buyerHistory** | [**Ptsv2paymentsRiskInformationBuyerHistory**](Ptsv2paymentsRiskInformationBuyerHistory.md) |  | [optional] 
**auxiliaryData** | [**[Ptsv2paymentsRiskInformationAuxiliaryData]**](Ptsv2paymentsRiskInformationAuxiliaryData.md) |  | [optional] 
**store** | [**Ptsv2paymentsRiskInformationStore**](Ptsv2paymentsRiskInformationStore.md) |  | [optional] 
**authenticationType** | **String** | • 01 = Static Passcode • 02 = SMS OTP • 03 = Key fob or EMV card reader OTP • 04 = App OTP • 05 = OTP Other • 07 = OOB Biometrics • 08 = OOB Login • 09 = OOB Other • 10 = Other • 11 = Push Confirmation • 12 = Decoupled • 13 = WebAuthn • 14 = SPC • 15 = Behavioural biometrics  | [optional] 
**pickupDays** | **Number** | Number of days between transaction date and rental pickup date  | [optional] 
**externalScore** | [**Ptsv2paymentsRiskInformationExternalScore**](Ptsv2paymentsRiskInformationExternalScore.md) |  | [optional] 


