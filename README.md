# Node.JS SDK for the CyberSource REST API


## Installation

#### npm

```shell
npm install CyberSource
```


## Requirements  
* Node.js version 4.8.4 or higher
* A CyberSource account (see _Registration & Configuration_ section below)



## Registration & Configuration
Use of this SDK and the CyberSource APIs requires having an account on our system. You can find details of getting a test account and creating your keys [here](https://developer.cybersource.com/api/developer-guides/dita-gettingstarted/registration.html)


Once you have your keys simply load them into the appropriate variables in your code, as per the below sample code dealing with the authentication part of the API request. In our sample

#### To set your API credentials for an API request: 
```javascript
const MerchantSecretKey = "yBJxy6LjM2TmcPGu+GaJrHtkke25fPpUX+UY6/L/1tE=";
const MerchantKeyId = "08c94330-f618-42a3-b09d-e1e43be5efda";
```

An authentication test sample is provided and can be run with the following command:
`node sample/test.js`  

You should never include your Login ID and Transaction Key directly in a file that's in a publically accessible portion of your website. A better practice would be to define these in a constants file, and then reference those constants in the appropriate place in your code.

### Switching between the sandbox environment and the production environment
Authorize.Net maintains a complete sandbox environment for testing and development purposes. This sandbox environment is an exact duplicate of our production environment with the transaction authorization and settlement process simulated. By default, this SDK is configured to communicate with the sandbox environment. To switch to the production environment, call `setEnvironment` on the controller variable before execute. For example:
```javascript
// For PRODUCTION use
ctrl.setEnvironment(SDKConstants.endpoint.production);
```

API credentials are different for each environment, so be sure to switch to the appropriate credentials when switching environments.


## SDK Usage Examples and Sample Code
To get started using this SDK, it's highly recommended to download our sample code repository:
* [Authorize.Net Node.js Sample Code Repository (on GitHub)](https://github.com/AuthorizeNet/sample-code-node)

In that respository, we have comprehensive sample code for all common uses of our API:

Additionally, you can find details and examples of how our API is structured in our API Reference Guide:
* [Developer Center API Reference](http://developer.authorize.net/api/reference/index.html)

The API Reference Guide provides examples of what information is needed for a particular request and how that information would be formatted. Using those examples, you can easily determine what methods would be necessary to include that information in a request using this SDK.


## Building & Testing the SDK

### Running the SDK Tests
`mocha`

### Run Particular Tests  
`mocha test/<testfile>`

### Testing Guide
For additional help in testing your own code, Authorize.Net maintains a [comprehensive testing guide](http://developer.authorize.net/hello_world/testing_guide/) that includes test credit card numbers to use and special triggers to generate certain responses from the sandbox environment.


## License
This repository is distributed under a proprietary license. See the provided [`LICENSE.txt`](/LICENSE.txt) file.
