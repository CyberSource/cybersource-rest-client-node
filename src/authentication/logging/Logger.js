const winston = require('winston');
const { format } = require('winston');
const { combine, timestamp, label, printf } = format;
require('winston-daily-rotate-file');

const loggingFormat = printf(({ level, message, label, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] [${label}] : ${message}`;
});

exports.getLogger = function (merchantConfig, loggerCategory = 'UnknownCategoryLogger') {

  var appTransports = createTransportFromConfig(merchantConfig);

  var loggingLevel = merchantConfig.getLoggingLevel();

  return winston.loggers.get(loggerCategory, {
    level: loggingLevel,
    format: combine(
      label({ label: loggerCategory }),
      timestamp(),
      loggingFormat
    ),
    transports: appTransports
  });
}

function createTransportFromConfig(mConfig) {
  
  var transports = [];

  var loggingLevel = mConfig.getLoggingLevel();
  var maxLogFiles = mConfig.getMaxLogFiles();
  var logFileName = mConfig.getLogFileName();
  var logDirectory = mConfig.getLogDirectory();
  var enableLog = mConfig.getEnableLog();  

  if(enableLog)
  {
    transports.push(new winston.transports.DailyRotateFile({
      level: loggingLevel,
      filename: logFileName + '-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      zippedArchive: true,
      dirname: logDirectory,
      maxFiles: maxLogFiles,
      silent: !enableLog
    }));
  }
  else
  {
    transports.push(new winston.transports.Console({
      silent: !enableLog
    }));
  }

  return transports;
}