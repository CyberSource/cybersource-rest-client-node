# CyberSource.KeyParameters

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryptionType** | **String** | How the card number should be encrypted in the subsequent Tokenize Card request. Possible values are RsaOaep256 or None (if using this value the card number must be in plain text when included in the Tokenize Card request). The Tokenize Card request uses a secure connection (TLS 1.2+) regardless of what encryption type is specified. | 


