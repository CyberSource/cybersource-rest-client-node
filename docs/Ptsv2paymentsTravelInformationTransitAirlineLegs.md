# CyberSource.Ptsv2paymentsTravelInformationTransitAirlineLegs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrierCode** | **String** | Carrier Code: IATA1 code for the carrier for this leg of the trip.  | [optional] 
**flightNumber** | **String** | Flight number for this leg of the trip.  | [optional] 
**originatingAirportCode** | **String** | IATA1 code for the originating airport for this leg of the trip.  | [optional] 
**_class** | **String** | IATA1 code for the class of service for this leg of the trip.  | [optional] 
**stopoverIndicator** | **Number** | Code that indicates whether a stopover is allowed on this leg of the trip. Possible Values: O(capital letter \&quot;O\&quot;): stopover allowed.  X(capital letter \&quot;X\&quot;): Stopover not allowed.  | [optional] 
**departureDate** | **Number** | Departure date for the first leg of the trip. Format: YYYYMMDD.  | [optional] 
**destinationAirportCode** | **String** | IATA1 code for the destination airport for this leg of the trip.  | [optional] 
**fareBasis** | **String** | Code for the fare basis for this leg of the trip. The fare basis is assigned by the carriers and indicates a particular ticket type, such as business class or discounted/nonrefundable.  | [optional] 
**departTaxAmount** | **String** | Amount of departure tax for this leg of the trip.  | [optional] 
**conjunctionTicket** | **String** | Ticket that contains additional coupons for this leg of the trip on an itinerary that has more than four segments.  | [optional] 
**exchangeTicketNumber** | **String** | New ticket number that is issued when the ticket is exchanged for this leg of the trip.  | [optional] 
**couponNumber** | **String** | Each leg on the ticket requires a separate coupon, and each coupon is identified by the coupon number.  | [optional] 
**departureTime** | **Number** | Time of departure for this leg of the trip. The format is military time and HHMM: If not all zeros, then the hours must be 00-23 and the minutes must be 00-59  | [optional] 
**departureTimeMeridian** | **String** | AM or PM for the departure time. Possible values: - A: 12:00 midnight to 11:59 a.m. - P: 12:00 noon to 11:59 p.m  | [optional] 
**arrivalTime** | **Number** | Time of arrival for this leg of the trip. The format is military time and HHMM: If not all zeros, then the hours must be 00-23 and the minutes must be 00-59  | [optional] 
**arrivalTimeMeridian** | **String** | AM or PM for the arrival time for this leg of the trip. Possible values: - A: 12:00 midnight to 11:59 a.m. - P: 12:00 noon to 11:59 p.m. Format: English characters only  | [optional] 
**endorsementsRestrictions** | **String** | Notes or notations about endorsements and restrictions for this leg of the trip. Endorsements can be notations added by the travel agency, including mandatory government required notations such as value added tax. Restrictions are limitations for the ticket based on the type of fare, such as a nonrefundable tic.  | [optional] 
**totalFareAmount** | **String** | Total fare for this leg of the trip.  | [optional] 
**feeAmount** | **String** | Fee for this leg of the trip, such as an airport fee or country fee.  | [optional] 
**taxAmount** | **String** | Tax for this leg of the trip  | [optional] 


