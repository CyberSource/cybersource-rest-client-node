# CyberSource.Riskv1authenticationsetupsPaymentInformationFluidData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **String** | Represents the encrypted payment data BLOB. The entry for this field is dependent on the payment solution a merchant uses.  #### Used by **Authorization and Standalone Credits** Required for authorizations and standalone credits that use Bluefin PCI P2PE.  #### Card Present processing This field represents the encrypted Bluefin PCI P2PE payment data. Obtain the encrypted payment data from a Bluefin-supported device.  | 
**keySerialNumber** | **String** | The encoded or encrypted value that a payment solution returns for an authorization request. For details about the valid values for a key, see [Creating an Online Authorization](https://developer.cybersource.com/api/developer-guides/dita-payments/CreatingOnlineAuth.html)  | [optional] 
**descriptor** | **String** | The identifier for a payment solution, which is sending the encrypted payment data for decryption. Valid values: - Samsung Pay: &#x60;RklEPUNPTU1PTi5TQU1TVU5HLklOQVBQLlBBWU1FTlQ&#x3D;&#x60;  **Note**: For other payment solutions, the value may be specific to the customer&#39;s mobile device. For example, the descriptor for a Bluefin payment encryption would be a device-generated descriptor.  #### Used by **Authorization and Standalone Credits** Required for authorizations and standalone credits that use Bluefin PCI P2PE.  #### Card Present processing Format of the encrypted payment data. The value for Bluefin PCI P2PE is &#x60;Ymx1ZWZpbg&#x3D;&#x3D;&#x60;. Base64 format only. The value for Cybersource P2PE decryption is as follows: &#x60;RklEPUVNVi5QQVlNRU5ULkFQSQ&#x3D;&#x3D;&#x60; if &#x60;paymentInformation.fluidData.encoding&#x60; is \&quot;HEX\&quot; &#x60;4649443D454D562E5041594D454E542E415049&#x60; if &#x60;paymentInformation.fluidData.encoding&#x60; is \&quot;base64\&quot;  | [optional] 
**encoding** | **String** | Encoding method used to encrypt the payment data.  Valid value: Base64  | [optional] 


