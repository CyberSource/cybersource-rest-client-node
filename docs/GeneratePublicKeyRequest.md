# CyberSource.GeneratePublicKeyRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryptionType** | **String** | How the card number should be encrypted in the subsequent Tokenize Card request. Possible values are RsaOaep256 or None (if using this value the card number must be in plain text when included in the Tokenize Card request). The Tokenize Card request uses a secure connection (TLS 1.2+) regardless of what encryption type is specified. | 
**targetOrigin** | **String** | This should only be used if using the Microform implementation. This is the protocol, URL, and if used, port number of the page that will host the Microform. Unless using http://localhost, the protocol must be https://. For example, if serving Microform on example.com, the targetOrigin is https://example.com The value is used to restrict the frame ancestor of the Microform. If there is a mismatch between this value and the frame ancestor, the Microfrom will not load. | [optional] 
**unmaskedLeft** | **Number** | Specifies the number of card number digits to be returned un-masked from the left. For example, setting this value to 6 will return: 411111XXXXXXXXXX Default value: 6 Maximum value: 6 | [optional] 
**unmaskedRight** | **Number** | Specifies the number of card number digits to be returned un-masked from the right. For example, setting this value to 4 will return: 411111XXXXXX1111 Default value: 4 Maximum value: 4 | [optional] 
**enableBillingAddress** | **Boolean** | Specifies whether or not &#39;dummy&#39; address data should be specified in the create token request. If you have &#39;Relaxed AVS&#39; enabled for your MID, this value can be set to False.Default value: true | [optional] 
**currency** | **String** | Three character ISO currency code to be associated with the token. Required for legacy integrations. Default value: USD. | [optional] 
**enableAutoAuth** | **Boolean** | Specifies whether or not an account verification authorization ($0 Authorization) is carried out on token creation. Default is false, as it is assumed a full or zero amount authorization will be carried out in a separate call from your server. | [optional] 


