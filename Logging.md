[![Generic badge](https://img.shields.io/badge/LOGGING-NEW-GREEN.svg)](https://shields.io/)

# Logging in CyberSource REST Client SDK (Node.js)

Since v0.0.35, a new logging framework has been introduced in the SDK. This new logging framework makes use of Winston, and standardizes the logging so that it can be integrated with the logging in the client application. The decision to use Winston for building this logging framework has been taken based on benchmark studies that have been made on various logging platforms supported for Node.js.

[One such study](https://www.loggly.com/blog/benchmarking-popular-node-js-logging-libraries/) performed benchmarking of five logging frameworks on the market &mdash; Log4js, Winston, Bunyan, winston-syslog, and bunyan-syslog. In this study,

> _Winston performed best when logging to the console. Winston and Bunyan both performed best in their own ways when logging to the file system._

## Winston Configuration

In order to leverage the new logging framework, the following configuration settings may be added to the merchant configuration as part of **`LogConfiguration`**:

* enableLog
* logDirectory
* logFileName
* logFileMaxSize
* loggingLevel
* maxLogFiles
* enableMasking

In our [sample Configuration.js](https://github.com/CyberSource/cybersource-rest-samples-node/blob/master/Data/Configuration.js) file, the following lines

```javascript
    'enableLog': EnableLog,
    'logFilename': LogFileName,
    'logDirectory': LogDirectory,
    'logFileMaxSize': LogfileMaxSize
```

have to be replaced by the following lines

```javascript
    'logConfiguration': {
        'enableLog': EnableLog,
        'logFileName': LogFileName,
        'logDirectory': LogDirectory,
        'logFileMaxSize': LogfileMaxSize,
        'loggingLevel': LogLevel,
        'enableMasking': EnableMasking
    }
```

where, `EnableLog`, `LogFileName`, `LogDirectory`, `LogfileMaxSize`, `LogLevel`, and `EnableMasking` are variables to be provided.

### Important Notes

The variable `enableMasking` needs to be set to `true` if sensitive data in the request/response should be hidden/masked.

Sensitive data fields are listed below:

  * Card Security Code
  * Card Number
  * Any field with `number` in the name
  * Card Expiration Month
  * Card Expiration Year
  * Account
  * Routing Number
  * Email
  * First Name & Last Name
  * Phone Number
  * Type
  * Token
  * Signature
