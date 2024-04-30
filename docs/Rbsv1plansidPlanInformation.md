# CyberSource.Rbsv1plansidPlanInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | Plan code is an optional field, If not provided system generates and assign one  | [optional] 
**name** | **String** | Plan name  | [optional] 
**description** | **String** | Plan description  | [optional] 
**status** | **String** | Updating to `DRAFT` is not allowed from `ACTIVE` and `INACTIVE` status.  Plan Status:  - `DRAFT`  - `ACTIVE`  - `INACTIVE`  | [optional] 
**billingPeriod** | [**GetAllPlansResponsePlanInformationBillingPeriod**](GetAllPlansResponsePlanInformationBillingPeriod.md) |  | [optional] 
**billingCycles** | [**Rbsv1plansPlanInformationBillingCycles**](Rbsv1plansPlanInformationBillingCycles.md) |  | [optional] 


