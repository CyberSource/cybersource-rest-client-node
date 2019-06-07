# CyberSource.Riskv1decisionsTravelInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actualFinalDestination** | **String** | IATA Code for the actual final destination that the customer intends to travel to. It should be a destination on the completeRoute.  | [optional] 
**completeRoute** | **String** | Concatenation of individual travel legs in the format ORIG1-DEST1[:ORIG2-DEST2...:ORIGn-DESTn], for example, SFO-JFK:JFK-LHR:LHR-CDG. For airport codes, see the IATA Airline and Airport Code Search. Note In your request, send either the complete route or the individual legs (_leg#_orig and _leg#_dest). If you send all the fields, the value of _complete_route takes precedence over that of the _leg# fields.  | [optional] 
**departureTime** | **String** | Departure date and time of the first leg of the trip. Use one of the following formats:   - yyyy-MM-dd HH:mm z   - yyyy-MM-dd hh:mm a z   - yyyy-MM-dd hh:mma z   HH &#x3D; hour in 24-hour format   hh &#x3D; hour in 12-hour format   a &#x3D; am or pm (case insensitive)   z &#x3D; time zone of the departing flight, for example: If the   airline is based in city A, but the flight departs from city   B, z is the time zone of city B at the time of departure. Important For travel information, use GMT instead of UTC, or use the local time zone. Examples 2011-03-20 11:30 PM PDT 2011-03-20 11:30pm GMT 2011-03-20 11:30pm GMT-05:00 Eastern Standard Time: GMT-05:00 or EST Note When specifying an offset from GMT, the format must be exactly as specified in the example. Insert no spaces between the time zone and the offset.  | [optional] 
**journeyType** | **String** | Type of travel, for example one way or round trip. | [optional] 
**legs** | [**[Riskv1decisionsTravelInformationLegs]**](Riskv1decisionsTravelInformationLegs.md) |  | [optional] 


