# CyberSource.PostTokenizeResponseErrors

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | The type of error.  Possible Values:   - invalidHeaders   - missingHeaders   - invalidFields   - missingFields   - unsupportedPaymentMethodModification   - invalidCombination   - forbidden   - notFound   - instrumentIdentifierDeletionError   - tokenIdConflict   - conflict   - notAvailable   - serverError   - notAttempted  A \"notAttempted\" error type is returned when the request cannot be processed because it depends on the existence of another token that does not exist. For example, creating a shipping address token is not attempted if the required customer token is missing.  | [optional] 
**message** | **String** | The detailed message related to the type. | [optional] 
**details** | [**[PostTokenizeResponseDetails]**](PostTokenizeResponseDetails.md) |  | [optional] 


