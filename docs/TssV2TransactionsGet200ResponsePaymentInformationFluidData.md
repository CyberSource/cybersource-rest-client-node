# CyberSource.TssV2TransactionsGet200ResponsePaymentInformationFluidData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptor** | **String** | The identifier for a payment solution, which is sending the encrypted payment data for decryption. Valid values: Samsung Pay: RklEPUNPTU1PTi5TQU1TVU5HLklOQVBQLlBBWU1FTlQ= Note: For other payment solutions, the value may be specific to the terminal or device initiatinf the payment. For example, the descriptor for a Bluefin payment encryption would be a device-generated descriptor. Used by Authorization and Standalone Credits. Required for authorizations and standalone credits.  Card Present processing: Format of the encrypted payment data. The value for Bluefin PCI P2PE is `Ymx1ZWZpbg==`. paymentInformation.fluidData.encoding must be `Base64`. The value for Cybersource P2PE decryption depends on the encoding method used and identified in encoding field. If paymentInformation.fluidData.encoding is `Base64`, the value is: `RklEPUVNVi5QQVlNRU5ULkFQSQ==` If paymentInformation.fluidData.encoding is `HEX`, the value is: `4649443D454D562E5041594D454E542E41504`  | [optional] 


