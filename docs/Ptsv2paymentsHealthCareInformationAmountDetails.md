# CyberSource.Ptsv2paymentsHealthCareInformationAmountDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amountType** | **String** | Total amount that has been spent on healthcare in a transaction. Valid Values for **Visa**: - `healthcare` - Total Amount Healthcare - `healthcare-transit` - Amount Transit - `vision` - Amount Vision/Optical - `prescription` - Amount Prescription/RX - `clinic` - Amount Clinic/Other Qualified Medical - `dental` - Amount Dental   `Note:` -  Prescription, Clinic and dental amounts must be preceded with the total healthcare amount and cannot occur individually.  Vision and Transit must be sent individually and cannot be combined with total healthcare amount or any other amounts. Total Healthcare amount can be sent individually.  Valid Values for **MasterCard**: - `prescription` - Amount Prescription/RX - `eligible-total` - Total Amount Healthcare   `Note:` -  Prescription must be preceded with the total healthcare amount and cannot occur individually. Total Healthcare amount can be sent individually.  | [optional] 
**amount** | **String** | Total Amount that has been spent on the corresponding amountType. This is 13 byte field including sign. If the amount is positive, then it is a debit for the customer. If the amount is negative, then it is a credit for the customer.  | [optional] 


