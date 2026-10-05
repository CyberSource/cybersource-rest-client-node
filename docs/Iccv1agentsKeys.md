# CyberSource.Iccv1agentsKeys

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyName** | **String** | Unique name for this key within the agent. Must be unique per agent. | 
**publicKey** | **String** | Base64-encoded public key. Supported formats are PEM (PKCS#8 or PKCS#1) and JWK. | 
**algorithm** | **String** | HTTP Signature signing algorithm (RFC 9421 §3.3 registry). Must match the key type and curve:  - ***rsa-pss-sha256*** — RSA-PSS with SHA-256  - ***rsa-pss-sha512*** — RSA-PSS with SHA-512  - ***ecdsa-p256-sha256*** — ECDSA on P-256 curve with SHA-256  - ***ecdsa-p384-sha384*** — ECDSA on P-384 curve with SHA-384  - ***ed25519*** — EdDSA on Curve25519   Possible values: - rsa-pss-sha256 - rsa-pss-sha512 - ecdsa-p256-sha256 - ecdsa-p384-sha384 - ed25519 | 
**expirationDate** | **Date** | Key expiration date-time in UTC. Defaults to 14 days from registration if omitted. | [optional] 


