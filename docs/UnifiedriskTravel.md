# CyberSource.UnifiedriskTravel

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actualFinalDestination** | **String** | IATA Code for the actual final destination that the customer intends to travel to. It should be a destination on the completeRoute. | [optional] 
**completeRoute** | **String** | Concatenation of individual travel legs in the format ORIG1-DEST1[:ORIG2-DEST2...:ORIGn-DESTn], for example, SFO-JFK:JFK-LHR:LHR-CDG. For airport codes, see the IATA Airline and Airport Code Search. Note In your request, send either the complete route or the individual legs (_leg#_orig and _leg#_dest). If you send all the fields, the value of _complete_route takes precedence over that of the _leg# fields. | [optional] 
**departureTime** | **String** | Departure date and time of the first leg of the trip. Use one of the following formats:   - yyyy-MM-dd HH:mm z   - yyyy-MM-dd hh:mm a z   - yyyy-MM-dd hh:mma z   HH = hour in 24-hour format   hh = hou   | [optional] 
**journeyType** | **String** | Type of travel, for example one way or round trip. | [optional] 
**numberOfPassengers** | **Number** | Number of passengers for whom the ticket was issued. If you do not include this field in your request, CyberSource uses a default value of 1. Required for American Express SafeKey (U.S.) for travel-related requests. | [optional] 
**legs** | **Object** |  | [optional] 
**passengers** | **Object** |  | [optional] 


