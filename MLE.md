[![Generic badge](https://img.shields.io/badge/MLE-NEW-GREEN.svg)](https://shields.io/)

# Message Level Encryption (MLE) Feature

This feature provides an implementation of Message Level Encryption (MLE) for APIs provided by CyberSource, integrated within our SDK. This feature ensures secure communication by encrypting messages at the application level before they are sent over the network.

## Configuration

### Global MLE Configuration

In the `merchantConfig` object, set the `useMLEGlobally` variable to enable or disable MLE for all supported APIs for the Rest SDK.

- **Variable**: `useMLEGlobally`
- **Type**: `boolean`
- **Default**: `false`
- **Description**: Enables MLE globally for all APIs when set to `true`. If set to `true`, it will enable MLE for all API calls that support MLE by CyberSource, unless overridden by `mapToControlMLEonAPI`.

### API-level MLE Control

Optionally, you can control the MLE feature at the API level using the `mapToControlMLEonAPI` variable in the `merchantConfig` object.

- **Variable**: `mapToControlMLEonAPI`
- **Type**: `Map<string, boolean>`
- **Description**: Overrides the global MLE setting for specific APIs. The key is the function name of the API in the SDK, and the value is a boolean indicating whether MLE should be enabled (`true`) or disabled (`false`) for that specific API call.

### MLE Key Alias

Another optional parameter for MLE is `mleKeyAlias`, which specifies the key alias used to retrieve the MLE certificate from the JWT P12 file.

- **Variable**: `mleKeyAlias`
- **Type**: `string`
- **Default**: `CyberSource_SJC_US`
- **Description**: By default, CyberSource uses the `CyberSource_SJC_US` public certificate to encrypt the payload. However, users can override this default value by setting their own key alias.

## Notes
- If `useMLEGlobally` is set to true, it will enable MLE for all API calls that support MLE by CyberSource, unless overridden by mapToControlMLEonAPI.
- If `mapToControlMLEonAPI` is not provided or does not contain a specific API function name, the global useMLEGlobally setting will be applied.
- The `mleKeyAlias` parameter is optional and defaults to CyberSource_SJC_US if not specified by the user. Users can override this default value by setting their own key alias.

## Example Configuration

```json
{
  "merchantConfig": {
    "useMLEGlobally": true //globally MLE will be enabled for all MLE supported APIs
  }
}
```
Or 

```json
{
  "merchantConfig": {
    "useMLEGlobally": true, //globally MLE will be enabled for all MLE supported APIs
    "mapToControlMLEonAPI": {
      "apiFunctionName1": false, //if want to disable the particular api from list of MLE supported APIs
      "apiFunctionName2": true //if want to enable MLE on API which is not in the list of supported MLE APIs for used version of Rest SDK
    },
    "mleKeyAlias": "Custom_Key_Alias" //optional if any custom value provided by Cybs
  }
}
```
Or

```json
{
  "merchantConfig": {
    "useMLEGlobally": false, //globally MLE will be disabled for all APIs
    "mapToControlMLEonAPI": {
      "apiFunctionName1": true, //if want to enable MLE for API1
      "apiFunctionName2": true //if want to enable MLE for API2
    },
    "mleKeyAlias": "Custom_Key_Alias" //optional if any custom value provided by Cybs
  }
}
```

In the above examples:
- MLE is enabled/disabled globally (`useMLEGlobally` is true/false).
- `apiFunctionName1` will have MLE disabled/enabled based on value provided.
- `apiFunctionName2` will have MLE enabled.
- `mleKeyAlias` is set to `Custom_Key_Alias`, overriding the default value.

Please refer given link for sample codes with MLE:
https://github.com/CyberSource/cybersource-rest-samples-node/tree/master/Samples/MLEFeature

## Additional Information

### API Support
- MLE is initially designed to support a few APIs.
- It can be extended to support more APIs in the future based on requirements and updates.
### Authentication Type
- MLE is only supported with `JWT (JSON Web Token)` authentication type within the SDK.
### Using the SDK
To use the MLE feature in the SDK, configure the `merchantConfig` object as shown above and pass it to the SDK initialization.

## Contact
For any issues or further assistance, please open an issue on the GitHub repository or contact our support team.
