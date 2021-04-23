# CyberSource.Ptsv2paymentsHealthCareInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountType** | **String** | Total amount that has been spent on healthcare in a transaction. Valid Values for **Visa**: - &#x60;healthcare&#x60; - Total Amount Healthcare - &#x60;healthcare-transit&#x60; - Amount Transit - &#x60;vision&#x60; - Amount Vision/Optical - &#x60;prescription&#x60; - Amount Prescription/RX - &#x60;clinic&#x60; - Amount Clinic/Other Qualified Medical - &#x60;dental&#x60; - Amount Dental   &#x60;Note:&#x60; -  Prescription, Clinic and dental amounts must be preceded with the total healthcare amount and cannot occur individually.  Vision and Transit must be sent individually and cannot be combined with total healthcare amount or any other amounts. Total Healthcare amount can be sent individually.  Valid Values for **MasterCard**: - &#x60;prescription&#x60; - Amount Prescription/RX - &#x60;eligible-total&#x60; - Total Amount Healthcare   &#x60;Note:&#x60; -  Prescription must be preceded with the total healthcare amount and cannot occur individually. Total Healthcare amount can be sent individually.  | [optional] 
**amount** | **String** | Total Amount that has been spent on the corresponding amountType. This is 13 byte field including sign. If the amount is positive, then it is a debit for the customer. If the amount is negative, then it is a credit for the customer.  | [optional] 


