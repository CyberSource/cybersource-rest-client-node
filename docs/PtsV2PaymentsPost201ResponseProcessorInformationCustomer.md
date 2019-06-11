# CyberSource.PtsV2PaymentsPost201ResponseProcessorInformationCustomer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**personalIdResult** | **String** | Personal identifier result. This field is supported only for Redecard in Brazil for CyberSource Latin American Processing. If you included &#x60;buyerInformation.personalIdentification[].ID&#x60; in the request, this value indicates whether or not &#x60;buyerInformation.personalIdentification[].ID&#x60; matched a value in a record on file. Returned only when the personal ID result is returned by the processor.  Possible values:   - **Y**: Match  - **N**: No match  - **K**: Not supported  - **U**: Unknown  - **Z**: No response returned **Note** CyberSource Latin American Processing is the name of a specific processing connection that CyberSource supports. In the CyberSource API documentation, CyberSource Latin American Processing does not refer to the general topic of processing in Latin America.The information in this field description is for the specific processing connection called CyberSource Latin American Processing. It is not for any other Latin American processors that CyberSource supports.  | [optional] 


