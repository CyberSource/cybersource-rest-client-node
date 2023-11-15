# CyberSource.Ptsv2paymentsTravelInformationVehicleData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connectorType** | **String** | This field will contain connector type values for electric vehicle transactions.  Possible Values: 001 (AC - J1772 Type 1) 002 (AC - Mennekes - Type 2) 003 (AC - GB/T) 100 (DC - CCS1) 101 (DC - CHAdeMO) 102 (DC - CCS2) 103 (DC - GB/T) 200 (NACS – Tesla)  | [optional] 
**chargingReasonCode** | **String** | This field will contain charging reason code values for electric vehicle transactions.  Possible Values: 010 (Other Error) 011 (Connector Lock Failure) 012 (EV Communication Error) 013 (Ground Failure) 014 (High Temperature) 015 (Internal Error) 016 (Over Current Failure) 017 (Over Voltage) 018 (Power Meter Failure) 019 (Power Switch Failure) 020 (Reader Failure) 021 (Reset Failure) 022 (Under Voltage) 023 (Weak Signal) 100 (No Error) 200 (Payment Related Error)  | [optional] 


