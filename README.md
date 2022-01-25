# Node.JS Client SDK for the CyberSource REST API

The CyberSource Node client provides convenient access to the [CyberSource REST API](https://developer.cybersource.com/api/reference/api-reference.html) from your Node application.

## Requirements

* Node.js version 6.17.1 or higher
* A CyberSource account (see _Registration & Configuration_ section below)

## Installation

```shell
    npm install cybersource-rest-client
```

## Registration & Configuration

Use of this SDK and the CyberSource APIs requires having an account on our system. You can find details of getting a test account and creating your keys [here](https://developer.cybersource.com/api/developer-guides/dita-gettingstarted/registration.html)

Remember this SDK is for use in server-side Node applications that access the CyberSource REST API and credentials should always be securely stored and accessed appropriately. 

## SDK Usage Examples and Sample Code

To get started using this SDK, it's highly recommended to download our sample code repository:

* [Cybersource Node.js Sample Code Repository (on GitHub)](https://github.com/CyberSource/cybersource-rest-samples-node)

In that respository, we have comprehensive sample code for all common uses of our API:

Additionally, you can find details and examples of how our API is structured in our API Reference Guide:

* [Developer Center API Reference](https://developer.cybersource.com/api/reference/api-reference.html)

The API Reference Guide provides examples of what information is needed for a particular request and how that information would be formatted. Using those examples, you can easily determine what methods would be necessary to include that information in a request using this SDK.

## MetaKey Support

A Meta Key is a single key that can be used by one, some, or all merchants (or accounts, if created by a Portfolio user) in the portfolio.

The Portfolio or Parent Account owns the key and is considered the transaction submitter when a Meta Key is used, while the merchant owns the transaction.

MIDs continue to be able to create keys for themselves, even if a Meta Key is generated.

Further information on MetaKey can be found in [New Business Center User Guide](https://developer.cybersource.com/library/documentation/dev_guides/Business_Center/New_Business_Center_User_Guide.pdf).

### Switching between the sandbox environment and the production environment

Cybersource maintains a complete sandbox environment for testing and development purposes. This sandbox environment is an exact duplicate of our production environment with the transaction authorization and settlement process simulated. By default, this SDK is configured to communicate with the sandbox environment. To switch to the production environment, set the `runEnvironment` in the SDK Configuration.  See our sample at <https://github.com/CyberSource/cybersource-rest-samples-node/blob/master/Data/Configuration.js>.

```javascript
    // For TESTING use
    const RunEnvironment = "apitest.cybersource.com";
    // For PRODUCTION use
    const RunEnvironment = "api.cybersource.com";
```

API credentials are different for each environment, so be sure to switch to the appropriate credentials when switching environments.

### Logging

[![Generic badge](https://img.shields.io/badge/LOGGING-NEW-GREEN.svg)](https://shields.io/)

Since v0.0.35, a new logging framework has been introduced in the SDK. This new logging framework makes use of Winston, and standardizes the logging so that it can be integrated with the logging in the client application.

More information about this new logging framework can be found in this file : [Logging.md](Logging.md)

## License

This repository is distributed under a proprietary license. See the provided [`LICENSE.txt`](/LICENSE.txt) file.
