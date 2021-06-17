# CyberSource.Ptsv2paymentsRiskInformationAuxiliaryData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **String** | Fields that you can use to send additional data to Risk services. **Warning** Auxiliary fields are not intended to and MUST NOT be used to capture personally identifying information. Accordingly, merchants are prohibited from capturing, obtaining, and/or transmitting any personally identifying information in or via the auxiliary data fields. Personally identifying information includes, but is not limited to, address, credit card number, social security number, driver&#39;s license number, state-issued identification number, passport number, and card verification numbers (CVV, CVC2, CVV2, CID, CVN). In the event CyberSource discovers that a merchant is capturing and/or transmitting personally identifying information via the auxiliary data fields, whether or not intentionally, CyberSource WILL immediately suspend the merchant&#39;s account, which will result in a rejection of any and all transaction requests submitted by the merchant after the point of suspension.  | [optional] 
**value** | **String** | String value for the key | [optional] 


