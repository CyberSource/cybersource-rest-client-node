# CyberSource.TssV2TransactionsGet200ResponseProcessingInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paymentSolution** | **String** | Type of digital payment solution that is being used for the transaction. Possible Values:   - **visacheckout**: Visa Checkout.  - **001**: Apple Pay.  - **005**: Masterpass. Required for Masterpass transactions on OmniPay Direct.  - **006**: Android Pay.  - **008**: Samsung Pay.  | [optional] 
**commerceIndicator** | **String** | Type of transaction. Some payment card companies use this information when determining discount rates. When you omit this field for **Ingenico ePayments**, the processor uses the default transaction type they have on file for you instead of the default value listed here.  | [optional] 
**businessApplicationId** | **String** | The description for this field is not available. | [optional] 
**authorizationOptions** | [**TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions**](TssV2TransactionsGet200ResponseProcessingInformationAuthorizationOptions.md) |  | [optional] 
**bankTransferOptions** | [**TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions**](TssV2TransactionsGet200ResponseProcessingInformationBankTransferOptions.md) |  | [optional] 


