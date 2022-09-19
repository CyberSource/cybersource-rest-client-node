# CyberSource.TssV2TransactionsGet200ResponsePaymentInformationFluidData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptor** | **String** | The identifier for a payment solution, which is sending the encrypted payment data for decryption. Valid values: Samsung Pay: RklEPUNPTU1PTi5TQU1TVU5HLklOQVBQLlBBWU1FTlQ&#x3D; Note: For other payment solutions, the value may be specific to the terminal or device initiatinf the payment. For example, the descriptor for a Bluefin payment encryption would be a device-generated descriptor. Used by Authorization and Standalone Credits. Required for authorizations and standalone credits.  Card Present processing: Format of the encrypted payment data. The value for Bluefin PCI P2PE is &#x60;Ymx1ZWZpbg&#x3D;&#x3D;&#x60;. paymentInformation.fluidData.encoding must be &#x60;Base64&#x60;. The value for Cybersource P2PE decryption depends on the encoding method used and identified in encoding field. If paymentInformation.fluidData.encoding is &#x60;Base64&#x60;, the value is: &#x60;RklEPUVNVi5QQVlNRU5ULkFQSQ&#x3D;&#x3D;&#x60; If paymentInformation.fluidData.encoding is &#x60;HEX&#x60;, the value is: &#x60;4649443D454D562E5041594D454E542E41504&#x60;  | [optional] 


