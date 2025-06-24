const winston = require('winston');
const { format } = require('winston');
const DataMasker = require('./SensitiveDataMasker');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');
const ExternalLoggerWrapper = require('../logging/ExternalLoggerWrapper');

const maskedLoggingFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${DataMasker.maskSensitiveData(message)}`;
});

const unmaskedLoggingFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${JSON.stringify(message)}`;
});

exports.getLogger = function (merchantConfig, loggerCategory = 'UnknownCategoryLogger') {
  return exports.getLoggerFromLogConfig(merchantConfig.getLogConfiguration(), loggerCategory);
}

exports.getLoggerFromLogConfig = function (logConfig, loggerCategory = 'UnknownCategoryLogger') {

  if (logConfig.isExternalLoggerSet() && logConfig.getExternalLogger()
    && logConfig.getExternalLogger().getLogger()
    && logConfig.getExternalLogger() instanceof ExternalLoggerWrapper) {
    let logger = logConfig.getExternalLogger().getLogger();
    return logger;
  }
  var enableLog = logConfig.isLogEnabled();
  var enableMasking = logConfig.isMaskingEnabled();
  var loggerCategoryRandomiser = Math.floor(Math.random() * (1000000000 - 100 + 1)) + 100;

  loggerCategory = loggerCategory + loggerCategoryRandomiser;

  var newLogger;

  if (enableLog) {
    var appTransports = createTransportFromConfig(logConfig);

    var loggingLevel = logConfig.getLoggingLevel();

    newLogger = winston.loggers.get(loggerCategory, {
      level: loggingLevel,
      format: combine(
        label({ label: loggerCategory }),
        timestamp(),
        enableMasking ? maskedLoggingFormat : unmaskedLoggingFormat
      ),
      transports: appTransports
    });
  } else {
    newLogger = winston.loggers.get(loggerCategory, {
      level: loggingLevel,
      format: combine(
        label({ label: loggerCategory }),
        timestamp(),
        enableMasking ? maskedLoggingFormat : unmaskedLoggingFormat
      ),
      transports: [new winston.transports.Console({
        silent: !enableLog
      })]
    });
  }

  return newLogger;
}


function createTransportFromConfig(logConfig) {
  var transports = [];

  var enableLog = logConfig.isLogEnabled();
  var loggingLevel = logConfig.getLoggingLevel();
  var maxLogFiles = logConfig.getMaxLogFiles();
  var logFileName = logConfig.getLogFileName();
  var logDirectory = logConfig.getLogDirectory();

  transports.push(new winston.transports.DailyRotateFile({
    level: loggingLevel,
    filename: logFileName + '-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    dirname: logDirectory,
    maxFiles: maxLogFiles,
    silent: !enableLog
  }));

  return transports;
}