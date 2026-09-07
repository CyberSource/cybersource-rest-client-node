# CyberSource.UnifiedriskDevicePointOfSale

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attendedIndicator** | **Boolean** | Card acceptor representative in attendance at the point of service during the transaction. When an acceptor's terminal is semi-attended (for example, multiple terminals supervised by a single clerk), | [optional] 
**cardDataEntryMode** | **String** | Entry mode of the card data for the transaction; possible values are: CDFL CardOnFile Card information are stored on a file. ICPY ICCProximity ICC contactless proximity MGST MagneticStripe ICCY ICCCon | [optional] 
**cardPresent** | **Boolean** | Indicates whether the transaction has been initiated by a card physically present (true) or not (false). | [optional] 
**cardholderActivated** | **Boolean** | Indicates whether the automated device was operated solely by the cardholder or not (for example, vending machine, automated fuel dispenser, ATM, kiosk, etc.). | [optional] 
**cardholderPresent** | **String** | Indicates whether the transaction has been initiated in presence of the cardholder or not. It can assume multiple values (e.g. \"cardholder present\", \"cardholder not present telephone\", etc). | [optional] 
**eCommerceData** | **String** | This is a free text field that can be used if additional e-commerce data is available. Please note that this field should not contain any cardholder data or sensitive authentication data (SAD), as def | [optional] 
**eCommerceIndicator** | **Boolean** | Indicates whether the point of service is an e-commerce one (true) or not (false). When true, the cardPresent field is expected to be set to false. | [optional] 
**iccFallbackIndicator** | **Boolean** | Indicates a chip data fallback, where the chip cannot be read due to a technical issue with the chip which results in the technology \"falling back\" from ICC to a magnetic stripe transaction. | [optional] 
**ipAddress** | **String** | IP address of point of service terminal | [optional] 
**magneticStripeFallbackIndicator** | **Boolean** | Indicates a magstripe fallback where the magnetic strip cannot be read which results in the technology \"falling back\" to manually keying the card details into the pos. | [optional] 
**motoIndicator** | **Boolean** | Indicates whether the context of the point of service is a MOTO one (true) or not (false). When true, the cardPresent field is expected to be set to false. | [optional] 
**partialApprovalSupported** | **Boolean** | Indicates whether the point of service supports partial approval or not. true: partial approval is supported false: partial approval is not supported | [optional] 
**securityCharacteristics** | **String** | This fields identifies the security characteristics of the communication link in the card acceptance process; possible values are: CETE CardholderEndToEndEncryption CPTE CardholderPointToPointEncrypti | [optional] 
**storageLocation** | **String** | This field details the location where the payments credentials (tipically a card number or payment token) are stored. This is only applicable to payments where the credentials are stored by or on beha | [optional] 
**unattendedLevelCategory** | **String** | Card scheme defined transaction category level on an unattended terminal. It identifies the type of terminal. The values are typically mandated by the card scheme being used. Examples for Mastercard a | [optional] 


