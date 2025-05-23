# CyberSource.Ptsv2paymentsBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchantCustomerId** | **String** | Your identifier for the customer.  When a subscription or customer profile is being created, the maximum length for this field for most processors is 30. Otherwise, the maximum length is 100.  #### Comercio Latino For recurring payments in Mexico, the value is the customer's contract number. Note Before you request the authorization, you must inform the issuer of the customer contract numbers that will be used for recurring transactions.  #### Worldpay VAP For a follow-on credit with Worldpay VAP, CyberSource checks the following locations, in the order given, for a customer account ID value and uses the first value it finds: 1. `customer_account_id` value in the follow-on credit request 2. Customer account ID value that was used for the capture that is being credited 3. Customer account ID value that was used for the original authorization If a customer account ID value cannot be found in any of these locations, then no value is used.  | [optional] 
**dateOfBirth** | **String** | Recipient's date of birth. **Format**: `YYYYMMDD`.  This field is a `pass-through`, which means that CyberSource ensures that the value is eight numeric characters but otherwise does not verify the value or modify it in any way before sending it to the processor. If the field is not required for the transaction, CyberSource does not forward it to the processor.  | [optional] 
**vatRegistrationNumber** | **String** | Customer's government-assigned tax identification number.  #### Tax Calculation Optional for international and value added taxes only. Not applicable to U.S. and Canadian taxes.  | [optional] 
**companyTaxId** | **String** | Company's tax identifier. This is only used for eCheck service.  ** TeleCheck ** Contact your TeleCheck representative to find out whether this field is required or optional.  ** All Other Processors ** Not used.  | [optional] 
**personalIdentification** | [**[Ptsv2paymentsBuyerInformationPersonalIdentification]**](Ptsv2paymentsBuyerInformationPersonalIdentification.md) |  | [optional] 
**hashedPassword** | **String** | The merchant's password that CyberSource hashes and stores as a hashed password.  | [optional] 
**gender** | **String** | Customer's gender. Possible values are F (female), M (male),O (other). | [optional] 
**language** | **String** | language setting of the user.  Supports 2-character language codes (e.g., en, fr) and 5-character locale values (e.g., en-US, fr-CA).  | [optional] 
**noteToSeller** | **String** | Note to the recipient of the funds in this transaction | [optional] 
**mobilePhone** | **Number** | Cardholder's mobile phone number. **Important** Required for Visa Secure transactions in Brazil. Do not use this request field for any other types of transactions.  | [optional] 
**walletId** | **String** | The one-time identification code of the Alipay wallet user.  It is scanned from the barcode that is shown by the mobile application.  | [optional] 


