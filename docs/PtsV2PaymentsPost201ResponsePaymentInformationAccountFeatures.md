# CyberSource.PtsV2PaymentsPost201ResponsePaymentInformationAccountFeatures

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountType** | **String** | Type of account. This value is returned only if you requested a balance inquiry. Possible values:   - **00**: Not applicable or not specified  - **10**: Savings account  - **20**: Checking account  - **30**: Credit card account  - **40**: Universal account  | [optional] 
**accountStatus** | **String** | Possible values:   - **N**: Nonregulated  - **R**: Regulated  &#x60;Note&#x60; This field is returned only for CyberSource through VisaNet.  | [optional] 
**balanceAmount** | **String** | Remaining balance on the account.  | [optional] 
**balanceAmountType** | **String** | Type of amount. This value is returned only if you requested a balance inquiry. The issuer determines the value that is returned. Possible values for deposit accounts:   - **01**: Current ledger (posted) balance.  - **02**: Current available balance, which is typically the ledger balance less outstanding authorizations.  Some depository institutions also include pending deposits and the credit or overdraft line associated with the account. Possible values for credit card accounts:   - **01**: Credit amount remaining for customer (open to buy).  - **02**: Credit limit.  | [optional] 
**currency** | **String** | Currency of the remaining balance on the account. For the possible values, see the ISO Standard Currency Codes.  | [optional] 
**balanceSign** | **String** | Sign for the remaining balance on the account. Returned only when the processor returns this value. Possible values:  | [optional] 
**affluenceIndicator** | **String** | **Chase Paymentech Solutions**  Indicates whether a customer has high credit limits. This information enables you to market high cost items to these customers and to understand the kinds of cards that high income customers are using.  This field is supported for Visa, Mastercard, Discover, and Diners Club. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  **Litle**  Flag that indicates that a Visa cardholder or Mastercard cardholder is in one of the affluent categories. Possible values:   - **AFFLUENT**: High income customer with high spending pattern (&gt;100k USD annual income and &gt;40k USD annual    card usage).  - **MASS AFFLUENT**: High income customer (&gt;100k USD annual income).  **Processor specific maximum length**:   - Chase Paymentech Solutions: 1  - Litle: 13  | [optional] 
**category** | **String** | **CyberSource through VisaNet**  Visa product ID.  **GPN**  Visa or Mastercard product ID.  **Litle**  Type of card used in the transaction. The only possible value is:   - PREPAID: Prepaid Card  **RBS WorldPay Atlanta**  Type of card used in the transaction. Possible values:   - **B**: Business Card  - **O**: Noncommercial Card  - **R**: Corporate Card  - **S**: Purchase Card  - **Blank**: Purchase card not supported  **Maximum length for processors**:   - CyberSource through VisaNet: 3  - GPN: 3  - Litle: 7  - RBS WorldPay Atlanta: 1  | [optional] 
**commercial** | **String** | Indicates whether the card is a commercial card, which enables you to include Level II data in your transaction requests. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**group** | **String** | Type of commercial card. This field is supported only for CyberSource through VisaNet. Possible values:   - **B**: Business card  - **R**: Corporate card  - **S**: Purchasing card  - **0**: Noncommercial card  | [optional] 
**healthCare** | **String** | Indicates whether the card is a healthcare card. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**payroll** | **String** | Indicates whether the card is a payroll card. This field is supported for Visa, Discover, Diners Club, and JCB on **Chase Paymentech Solutions**. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**level3Eligible** | **String** | Indicates whether the card is eligible for Level III interchange fees, which enables you to include Level III data in your transaction requests. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**pinlessDebit** | **String** | Indicates whether the card is a PINless debit card. This field is supported for Visa and Mastercard on **Chase Paymentech Solutions**. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**signatureDebit** | **String** | Indicates whether the card is a signature debit card. This information enables you to alter the way an order is processed. For example, you might not want to reauthorize a transaction for a signature debit card, or you might want to perform reversals promptly for a signature debit card. This field is supported for Visa, Mastercard, and Maestro (International) on Chase Paymentech Solutions. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**prepaid** | **String** | Indicates whether the card is a prepaid card. This information enables you to determine when a gift card or prepaid card is presented for use when establishing a new recurring, installment, or deferred billing relationship.  This field is supported for Visa, Mastercard, Discover, Diners Club, and JCB on Chase Paymentech Solutions. Possible values:   - **Y**: Yes  - **N**: No  - **X**: Not applicable / Unknown  | [optional] 
**regulated** | **String** | Indicates whether the card is regulated according to the Durbin Amendment. If the card is regulated, the card issuer is subject to price caps and interchange rules. This field is supported for Visa, Mastercard, Discover, Diners Club, and JCB on Chase Paymentech Solutions. Possible values:   - **Y**: Yes (assets greater than 10B USD)  - **N**: No (assets less than 10B USD)  - **X**: Not applicable / Unknown  | [optional] 


<a name="BalanceSignEnum"></a>
## Enum: BalanceSignEnum


* `PLUS` (value: `"+"`)

* `MINUS` (value: `"-"`)




