# CyberSource.UnifiedriskPaymentCard

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name on the card | [optional] 
**_number** | **String** | Tokenized or masked card number | [optional] 
**cardNetwork** | **String** | Card network: VISA, MASTERCARD, AMEX, etc | [optional] 
**type** | **String** | Card type: CREDIT, DEBIT, PREPAID etc. | [optional] 
**subType** | **String** | Card subtype: GOLD, PLATINUM, etc | [optional] 
**bin** | **String** | Bank Identification Number (first 6 digits) | [optional] 
**expirationMonth** | **String** | Card expiration month | [optional] 
**expirationYear** | **String** | Card expiration year | [optional] 
**issueDate** | **Date** | Date card was issued | [optional] 
**issuerCountry** | **String** | Country where card was issued | [optional] 
**brand** | **String** | Card network: VISA, MASTERCARD, AMEX, etc | [optional] 
**sequenceNumber** | **Number** | Sequence number for cards with same PAN | [optional] 
**last4** | **String** | Last 4 digits of card number | [optional] 
**status** | **String** | Card status: ACTIVE, BLOCKED, CANCELLED | [optional] 
**tokenTransactionType** | **String** | Transaction type that provided the token data | [optional] 
**tokenDetails** | [**UnifiedriskPaymentCardTokenDetails**](UnifiedriskPaymentCardTokenDetails.md) |  | [optional] 
**addedAtCheckout** | **Boolean** | Whether the card was newly entered during checkout | [optional] 
**parDetails** | [**UnifiedriskPaymentCardParDetails**](UnifiedriskPaymentCardParDetails.md) |  | [optional] 
**expiryDate** | **String** | Card expiry date in MMYYYY or MMYY format, used for matching against the expiry date declared during enrollment and to flag expired or about-to-expire cards | [optional] 
**entityId** | **String** | Unique entity identifier for the card as assigned by the card scheme or token service provider, used for lifecycle and risk management | [optional] 
**binEntityId** | **String** | Entity identifier linked to the card's BIN, used to identify the issuing institution or program associated with the card's BIN range | [optional] 
**securityCode** | **String** | Result or presence indicator for Card Security Code (CVV2/CVC2/CID) verification. Indicates whether the security code was present, verified, or matched by the issuer | [optional] 


