# CyberSource.Binv1binlookupProcessingInformationPayoutOptions

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**payoutInquiry** | **Boolean** | If `true` then provide attributes related to fund transfer/payouts. If payout information not found then response will have standard account lookup.  Possible values: - true - false  | [optional] 
**networkId** | **String** | The networks specified in this field must be a subset of the information provided during program enrollment    Possible values: - 0020 : Accel/Exchange - 0024 : CU24 - 0003 : Interlink - 0016 : Maestro - 0018 : NYCE - 0027 : NYCE - 0009 : Pulse - 0017 : Pulse - 0019 : Pulse - 0008 : Star - 0010 : Star - 0011 : Star - 0012 : Star - 0015 : Star - 0002 : Visa/PLUS  | [optional] 
**acquirerBin** | **String** | BIN under which the Funds Transfer application is registered. This must match the information provided during enrollment.  | [optional] 


