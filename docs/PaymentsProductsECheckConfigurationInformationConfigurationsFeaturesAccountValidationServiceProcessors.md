# CyberSource.PaymentsProductsECheckConfigurationInformationConfigurationsFeaturesAccountValidationServiceProcessors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avsAccountOwnershipService** | **Boolean** | *NEW* Determined in WF eTicket if account has opted into the Account Ownership Service. | [optional] 
**avsAccountStatusService** | **Boolean** | *NEW* Determined in WF eTicket if account has opted into the Account Status Service. | [optional] 
**avsSignedAgreement** | **Boolean** | *NEW* Taken from Addendum Agreement Column in boarding form. | [optional] 
**avsAdditionalId** | **String** | *NEW* Also known as the Additional ID. Taken from the boarding form. | [optional] 
**enableAvs** | **Boolean** | *NEW* | [optional] [default to true]
**avsEntityId** | **String** | *NEW* Also known as the AVS Gateway Entity ID. | [optional] 
**enableAvsTokenCreation** | **Boolean** | *NEW* Applicable if the merchant wants to run AVS on token creation requests only. | [optional] [default to false]


