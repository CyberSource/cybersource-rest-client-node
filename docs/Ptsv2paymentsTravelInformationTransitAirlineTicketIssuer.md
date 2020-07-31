# CyberSource.Ptsv2paymentsTravelInformationTransitAirlineTicketIssuer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **String** | IATA2 airline code. Format: English characters only. Required for Mastercard; optional for all other card types.  | [optional] 
**name** | **String** | Name of the ticket issuer. If you do not include this field, CyberSource uses the value for your merchant name that is in the CyberSource merchant configuration database.  | [optional] 
**address** | **String** | Address of the company issuing the ticket.  | [optional] 
**locality** | **String** | City in which the transaction occurred. If the name of the city exceeds 18 characters, use meaningful abbreviations. Format: English characters only. Optional request field.  | [optional] 
**administrativeArea** | **String** | State in which transaction occured.  | [optional] 
**postalCode** | **String** | Zip code of the city in which transaction occured.  | [optional] 
**country** | **String** | Country in which transaction occured.  | [optional] 


