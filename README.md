
# Node.JS Client SDK for the CyberSource REST API

## Description

The CyberSource Node client provides convenient access to the [CyberSource REST API](https://developer.cybersource.com/api/reference/api-reference.html) from your Node application.

## System Requirements

* Node.js version 14.21.3 or higher.

## Installation

```shell
    npm install cybersource-rest-client
```

## Account Registration and Configuration

* Account Registration

Follow the first step mentioned in [Getting Started with CyberSource REST SDKs](https://developer.cybersource.com/hello-world/rest-api-sdks.html#gettingstarted) to create a sandbox account.

* Configuration

Follow the second step mentioned in [Getting Started with CyberSource REST SDKs](https://developer.cybersource.com/hello-world/rest-api-sdks.html#gettingstarted) to configure the SDK by inputting your credentials.

> **⚠️ HTTP Signature Deprecation Notice:** HTTP Signature authentication is being deprecated. **JWT with Shared Secret** is the recommended migration path — it uses the same `merchantKeyId` and `merchantsecretKey` credentials, requires only two property changes, and enables MLE (Message Level Encryption) support that HTTP Signature does not provide.

## Authentication Configuration

To set your API credentials for an API request, configure the following information in your configuration object:

### For HTTP Signature authentication (⚠️ Deprecated — migrate to JWT with Shared Secret)

```javascript
var merchantConfig = {
    authenticationType: 'http_signature',
    merchantID: 'testrest',
    runEnvironment: 'apitest.cybersource.com',
    merchantKeyId: 'your_merchant_key_id',
    merchantsecretKey: 'your_merchant_secret_key',
    enableLog: true,
    logDirectory: './log',
    logFilename: 'cybs'
};
```

### For JWT authentication (with P12 certificate)

```javascript
var merchantConfig = {
    authenticationType: 'jwt',
    merchantID: 'testrest',
    runEnvironment: 'apitest.cybersource.com',
    keyAlias: 'testrest',
    keyPass: 'testrest',
    keyFileName: 'testrest',
    keysDirectory: './resource',
    enableLog: true,
    logDirectory: './log',
    logFilename: 'cybs'
};
```

### For JWT authentication with Shared Secret (Recommended migration from HTTP Signature)

Uses the **same** `merchantKeyId` and `merchantsecretKey` credentials as HTTP Signature. Only two properties change:

```javascript
var merchantConfig = {
    authenticationType: 'jwt',
    jwtKeyType: 'SHARED_SECRET',
    merchantID: 'testrest',
    runEnvironment: 'apitest.cybersource.com',
    merchantKeyId: 'your_merchant_key_id',
    merchantsecretKey: 'your_merchant_secret_key',
    enableLog: true,
    logDirectory: './log',
    logFilename: 'cybs'
};
```

### For using MetaKey

MetaKey can be used for HTTP Signature, JWT (P12), and JWT with Shared Secret authentication.

#### For HTTP Signature Authentication (⚠️ Deprecated)

```javascript
var merchantConfig = {
    authenticationType: 'http_signature',
    merchantID: '<transacting merchantID>',
    merchantKeyId: '<MetaKey Portfolio KeyId>',
    merchantsecretKey: '<MetaKey Portfolio Shared Secret Key>',
    useMetaKey: true,
    portfolioID: '<Portfolio ID>'
};
```

#### For JWT Authentication (P12)

```javascript
var merchantConfig = {
    authenticationType: 'jwt',
    merchantID: '<transacting merchantID>',
    keyAlias: '<Portfolio ID>',
    keyPass: '<MetaKey Portfolio P12 File Password>',
    keyFileName: '<MetaKey Portfolio P12 File Name>',
    keysDirectory: '<keysDirectory>',
    useMetaKey: true
};
```

#### For JWT Authentication with Shared Secret (Recommended)

```javascript
var merchantConfig = {
    authenticationType: 'jwt',
    jwtKeyType: 'SHARED_SECRET',
    merchantID: '<transacting merchantID>',
    merchantKeyId: '<MetaKey Portfolio KeyId>',
    merchantsecretKey: '<MetaKey Portfolio Shared Secret Key>',
    useMetaKey: true,
    portfolioID: '<Portfolio ID>'
};
```

#### Response MLE with MetaKey

When Response MLE is enabled (`enableResponseMleGlobally: true`) and MetaKey is in use (`useMetaKey: true`), the Response MLE configuration must use the **portfolio's** response MLE key — not the transacting merchant's. Specifically:

- `responseMlePrivateKeyFilePath` (or the `responseMlePrivateKey` object) must point to the **portfolio's** response MLE private key.
- `responseMleKID` — the KID value associated with the **portfolio's** response MLE certificate.
  - **Optional** when `responseMlePrivateKeyFilePath` points to a CyberSource-generated P12 file (SDK auto-fetches from P12).
  - **Required** when using PEM format files (`.pem`, `.key`, `.p8`) or when providing `responseMlePrivateKey` object directly.

```javascript
var merchantConfig = {
    // ... other MetaKey configuration ...
    enableResponseMleGlobally: true,
    responseMlePrivateKeyFilePath: '/path/to/portfolio/response/mle/private/key.p12',
    responseMlePrivateKeyFilePassword: 'portfolio_private_key_password'
    // responseMleKID is optional when using a CyberSource-generated P12 file (auto-fetched from P12)
    // Required when using PEM files or responseMlePrivateKey object
    // responseMleKID: '<Portfolio Response MLE KID>'
};
```

> **Important:** The response MLE private key (and KID, if applicable) must belong to the portfolio (parent account), since in MetaKey mode the portfolio is the transaction submitter and the response is encrypted using the portfolio's MLE certificate.

## How to Use

To get started using this SDK, it's highly recommended to download our sample code repository:

* [Cybersource Node.js Sample Code Repository (on GitHub)](https://github.com/CyberSource/cybersource-rest-samples-node)

In that respository, we have comprehensive sample code for all common uses of our API:

Additionally, you can find details and examples of how our API is structured in our API Reference Guide:

* [Developer Center API Reference](https://developer.cybersource.com/api/reference/api-reference.html)

The API Reference Guide provides examples of what information is needed for a particular request and how that information would be formatted. Using those examples, you can easily determine what methods would be necessary to include that information in a request using this SDK.

### Example using Sample Code Application

* Add the [CyberSource REST client as a dependency](https://github.com/CyberSource/cybersource-rest-samples-node/blob/2dceb63f2fc5eb01150d1c7a9d935b291f52012f/package.json#L16C5-L16C41) in your Node.JS project.
* Configure your credentials in a [Config Object](https://github.com/CyberSource/cybersource-rest-samples-node/blob/2dceb63f2fc5eb01150d1c7a9d935b291f52012f/Data/Configuration.js#L40C1-L70C2).
* Create an instance of [ApiClient](https://github.com/CyberSource/cybersource-rest-samples-node/blob/2dceb63f2fc5eb01150d1c7a9d935b291f52012f/Samples/Payments/Payments/simple-authorizationinternet.js#L11).
* Use the created ApiClient instance to call CyberSource APIs. For example [SimpleAuthorizationInternet](https://github.com/CyberSource/cybersource-rest-samples-node/blob/2dceb63f2fc5eb01150d1c7a9d935b291f52012f/Samples/Payments/Payments/simple-authorizationinternet.js#L56C3-L71C6)

For more detailed examples, refer to the [cybersource-rest-samples-node](https://github.com/CyberSource/cybersource-rest-samples-node) repository.

### Switching between Test environment and Production environment

CyberSource maintains a complete sandbox environment for testing and development purposes. This sandbox environment is an exact duplicate of our production environment with the transaction authorization and settlement process simulated. By default, this SDK is configured to communicate with the sandbox environment. To switch to the production environment, set the `runEnvironment` in the SDK Configuration.  See our sample at <https://github.com/CyberSource/cybersource-rest-samples-node/blob/master/Data/Configuration.js>.

```javascript
    // For TESTING use
    const RunEnvironment = "apitest.cybersource.com";
    // For PRODUCTION use
    const RunEnvironment = "api.cybersource.com";
```

API credentials are different for each environment, so be sure to switch to the appropriate credentials when switching environments.

## Logging

[![Generic badge](https://img.shields.io/badge/LOGGING-NEW-GREEN.svg)](https://shields.io/)

Since v0.0.35, a new logging framework has been introduced in the SDK. This new logging framework makes use of Winston, and standardizes the logging so that it can be integrated with the logging in the client application.

More information about this new logging framework can be found in this file : [Logging.md](Logging.md)

## Features

### Message Level Encryption (MLE) Feature
[![Generic badge](https://img.shields.io/badge/MLE-NEW-GREEN.svg)](https://shields.io/)

This feature provides an implementation of Message Level Encryption (MLE) for APIs provided by CyberSource, integrated within our SDK. This feature ensures secure communication by encrypting messages at the application level before they are sent over the network.

More information about this new MLE feature can be found in this file : [MLE.md](MLE.md)

### MetaKey Support

A Meta Key is a single key that can be used by one, some, or all merchants (or accounts, if created by a Portfolio user) in the portfolio.

The Portfolio or Parent Account owns the key and is considered the transaction submitter when a Meta Key is used, while the merchant owns the transaction.

MIDs continue to be able to create keys for themselves, even if a Meta Key is generated.

Further information on MetaKey can be found in [New Business Center User Guide](https://developer.cybersource.com/library/documentation/dev_guides/Business_Center/New_Business_Center_User_Guide.pdf).

## How to Contribute

* Fork the repo and create your branch from `master`.
* If you've added code that should be tested, add tests.
* Ensure the test suite passes.
* Submit your pull request! (Ensure you have [synced your fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) with the original repository before initiating the PR).


## Need Help?

For any help, you can reach out to us at our [Discussion Forum](https://community.developer.cybersource.com/t5/cybersource-APIs/bd-p/api).

## Disclaimer

CyberSource may allow Customer to access, use, and/or test a CyberSource product or service that may still be in development or has not been market-tested (“Beta Product”) solely for the purpose of evaluating the functionality or marketability of the Beta Product (a “Beta Evaluation”). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer’s participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period (“Beta Product Form”). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer’s use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. CyberSource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided “AS IS” and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.

## License

This repository is distributed under a proprietary license. See the provided [`LICENSE.txt`](/license.txt) file
