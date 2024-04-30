# CyberSource.Ptsv2paymentsProcessingInformationRecurringOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**loanPayment** | **Boolean** | Flag that indicates whether this is a payment towards an existing contractual loan.  Possible values: - `true`: Loan payment - `false`: (default) Not a loan payment  For processor-specific details, see `debt_indicator` field description in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] [default to false]
**firstRecurringPayment** | **Boolean** | Flag that indicates whether this transaction is the first in a series of recurring payments.  This field is supported only for **Atos**, **FDC Nashville Global**, and **OmniPay Direct**.  Possible values:  - `true` Indicates this is the first payment in a series of recurring payments  - `false` (default) Indicates this is not the first payment in a series of recurring payments.  For details, see `auth_first_recurring_payment` field description and \"Recurring Payments\" in [Credit Card Services Using the SCMP API.](https://apps.cybersource.com/library/documentation/dev_guides/CC_Svcs_SCMP_API/html/)  | [optional] [default to false]


