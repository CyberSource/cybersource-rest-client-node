# CyberSource.UnifiedriskTerminalCapabilities

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardReading** | **String** | Card reading capabilities of the terminal performing the transaction. ISO 8583:93 bit 22-2; ISO 8583:2003 bit 27-1 CDFL CardOnFile Card information are stored on a file ICPY ICCProximity ICC contactle | [optional] 
**cardWriting** | **String** | Card writing or output capabilities of the terminal performing the transaction. ISO 8583:93 bit 22-10, ISO 8583:2003 bit 27-8_9 ICPY ICCProximity ICC contactless proximity MGST MagneticStripe Magnetic | [optional] 
**cardholderVerification** | **String** | Cardholder verification capabilities performing the transaction at the point of service. ISO 8583:93 bit 22-2, ISO 8583:2003-1 bit 27-2 APKI AccountDigitalSignature Account based digital signature  NO | [optional] 
**online** | **String** | Capability of the terminal to go online OFLN OffLine Off-line only capable ONLN OnLine On-line only capable BOTH BothOnLineAndOffLine Both online and offline | [optional] 
**pinPadInoperative** | **Boolean** | If true then pin pad is inoperative | [optional] 


