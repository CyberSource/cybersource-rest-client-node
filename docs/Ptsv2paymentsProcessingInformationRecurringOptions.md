# CyberSource.Ptsv2paymentsProcessingInformationRecurringOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loanPayment** | **Boolean** | Flag that indicates whether this is a payment towards an existing contractual loan.  Possible values: - **true** Loan payment - **false** (default) Not a loan payment  See \&quot;Visa Debt Repayments,\&quot; page 218, for a list of processors that support this feature.  | [optional] [default to false]
**firstRecurringPayment** | **Boolean** | Flag that indicates whether this transaction is the first in a series of recurring payments.  This field is supported only for **Atos**, **FDC Nashville Global**, and **OmniPay Direct**.  Possible values:  - **true** Indicates this is the first payment in a series of recurring payments  - **false** (default) Indicates this is not the first payment in a series of recurring payments.  For more details, see \&quot;Recurring Payments,\&quot; page 198.  | [optional] [default to false]


