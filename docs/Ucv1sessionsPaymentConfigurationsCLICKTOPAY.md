# CyberSource.Ucv1sessionsPaymentConfigurationsCLICKTOPAY

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoCheckEnrollment** | **Boolean** | Where Click to Pay is the payment type selected by the customer and the customer manually enters their card, the option to enroll their card in Click to Pay will be auto-checked if this field is set to \"true\". <br><br>  This is only available where the merchant and cardholder are based in the following countries and the billing type is set to \"FULL\" or \"PARTIAL\".   - UAE   - Argentina   - Brazil   - Chile   - Colombia   - Kuwait   - Mexico   - Peru   - Qatar   - Saudi Arabia   - Ukraine   - South Africa<br><br>  If false, this is not present or not supported in the market.  Enrollment in Click to Pay is not checked for the customer when completing manual card entry.<br><br> Optional field: This field can be configured through the Merchant Experience Screens in the Business Center.  The configured value may be overridden on a per transaction basis in the uc/v1/sessions API request.  | [optional] 


