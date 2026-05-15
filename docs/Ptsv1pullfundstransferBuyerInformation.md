# CyberSource.Ptsv1pullfundstransferBuyerInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vatRegistrationNumber** | **String** | Customer's VAT registration number for the individual sender tax identification.  This field flows in ISO field 104, DSID 63 tag 06.  Visa is recommending the use of the following business application identifier (BAI) values  and merchant category code (MCC) combinations to process domestic bill payments, toll payments,  and business-to-business funding transactions as AFTs in Brazil: - BB (Business-to-business) - BP (Non-card bill payment) - FT (Funds transfer) - WT (Wallet transfer)  MCC: 4784  #### Mapping - SCMP API Field: purchaser_vat_registration_number - Simple Order API Field: invoiceHeader_purchaserVATRegistrationNumber - CCS: customer.vatRegistrationNumber  Optional field.  | [optional] 


