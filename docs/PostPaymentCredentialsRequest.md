# CyberSource.PostPaymentCredentialsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentCredentialType** | **String** | The type of payment credentials to be returned. By default, payment credentials include network token and cryptogram or dynamic CVV. If \"NETWORK_TOKEN\" is supplied then only network token card number will be returned and no cryptogram or dynamic CVV will be requested. If \"SECURITY_CODE\" is supplied then dynamic CVV will be requested and returned with the network token card number. Dynamic CVV is only supported for Amex and SCOF. If \"CRYPTOGRAM\" is supplied then cryptogram will be requested and returned with the network token card number. Cryptogram is NOT supported for Amex.  Possible Values:   - NETWORK_TOKEN   - SECURITY_CODE   - CRYPTOGRAM  | [optional] 
**transactionType** | **String** | Specifies the type of transaction for which the network token credentials are required. Possible Values:   - ECOM: Ecommerce transaction. If transactionType is not provided, ECOM is set as the default.   - AFT: Account Funding Transaction. This is only supported for VISA and paymentCredentialType of CRYPTOGRAM.  | [optional] 


