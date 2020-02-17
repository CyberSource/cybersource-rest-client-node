# CyberSource.TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terminalId** | **String** | Identifier for the terminal at your retail location. You can define this value yourself, but consult the processor for requirements.  #### FDC Nashville Global To have your account configured to support this field, contact CyberSource Customer Support. This value must be a value that FDC Nashville Global issued to you.  For details, see the &#x60;terminal_id&#x60; field description in [Card-Present Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Retail_SCMP_API/html/)  **For Payouts**: This field is applicable for CtV.  | [optional] 
**terminalSerialNumber** | **String** | Terminal serial number assigned by the hardware manufacturer. This value is provided by the client software that is installed on the POS terminal.  CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only on American Express Direct, FDC Nashville Global, and SIX.  For details, see the &#x60;terminal_serial_number&#x60; field description in [Card-Present Processing Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/Retail_SCMP_API/html/)  | [optional] 
**deviceId** | **String** | Value created by the client software that uniquely identifies the POS device. CyberSource does not forward this value to the processor. Instead, the value is forwarded to the CyberSource reporting functionality.  This field is supported only for specific CyberSource integrations. For details, see the &#x60;pos_device_id&#x60; field description in the [Card-Present Processing Using the SCMP API Guide.](https://apps.cybersource.com/library/documentation/dev_guides/Retail_SCMP_API/html/)  | [optional] 
**partner** | [**TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner**](TssV2TransactionsPost201ResponseEmbeddedPointOfSaleInformationPartner.md) |  | [optional] 


