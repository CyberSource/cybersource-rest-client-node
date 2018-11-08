# CyberSource.Ptsv2paymentsPaymentInformationTokenizedCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **String** | Customer’s payment network token value.  | [optional] 
**expirationMonth** | **String** | Two-digit month in which the payment network token expires. &#x60;Format: MM&#x60;. Possible values: 01 through 12.  | [optional] 
**expirationYear** | **String** | Four-digit year in which the payment network token expires. &#x60;Format: YYYY&#x60;.  | [optional] 
**type** | **String** | Type of card to authorize. - 001 Visa - 002 Mastercard - 003 Amex - 004 Discover  | [optional] 
**cryptogram** | **String** | This field is used internally. | [optional] 
**requestorId** | **String** | Value that identifies your business and indicates that the cardholder’s account number is tokenized. This value is assigned by the token service provider and is unique within the token service provider’s database.  &#x60;Note&#x60; This field is supported only for **CyberSource through VisaNet** and **FDC Nashville Global**.  | [optional] 
**transactionType** | **String** | Type of transaction that provided the token data. This value does not specify the token service provider; it specifies the entity that provided you with information about the token.  Set the value for this field to 1. An application on the customer’s mobile device provided the token data.  | [optional] 
**assuranceLevel** | **String** | Confidence level of the tokenization. This value is assigned by the token service provider.  &#x60;Note&#x60; This field is supported only for **CyberSource through VisaNet** and **FDC Nashville Global**.  | [optional] 
**storageMethod** | **String** | Type of technology used in the device to store token data. Possible values:   - 001: Secure Element (SE)  Smart card or memory with restricted access and encryption to prevent data tampering. For storing payment credentials, a SE is tested against a set of requirements defined by the payment networks.  &#x60;Note&#x60; This field is supported only for **FDC Compass**.  - 002: Host Card Emulation (HCE)  Emulation of a smart card by using software to create a virtual and exact representation of the card. Sensitive data is stored in a database that is hosted in the cloud. For storing payment credentials, a database must meet very stringent security requirements that exceed PCI DSS.  &#x60;Note&#x60; This field is supported only for **FDC Compass**.  | [optional] 
**securityCode** | **String** | CVN. | [optional] 


