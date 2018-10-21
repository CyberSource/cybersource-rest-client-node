'use strict';

var fs = require('fs');
var path = require('path');
var winston = require('winston');
var Constants = require('./Constants');

exports.getLogger = function (merchantConfig) {

  var logFileName = merchantConfig.getLogFileName();
  var LogDirectory = merchantConfig.getLogDirectory();
  var logFileSize = merchantConfig.getLogFileMaxSize();
  var enableLog = merchantConfig.getEnableLog();

  var options = {
    file: {
      level: 'info',
      filename: fileRename(logFileName, LogDirectory, logFileSize),
      handleExceptions: true,
      json: false,
      colorize: false,
      silent: !enableLog
    }
  };

  const logger = new winston.Logger({
    transports: [
      new winston.transports.File(options.file)
    ],
    exitOnError: false, // do not exit on handled exceptions  
  });

  return logger;
}

// Method for file renaming in log rotation
var fileRename = function (fileName, fileDirectory, size) {
  var filePath = path.resolve(fileDirectory + "\\" + fileName + ".log");
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    const fileSizeInBytes = stats.size;
    if (fileSizeInBytes >= size) {
      var date = new Date();
      var dateformat = "";
      dateformat += date.getFullYear();
      dateformat += (date.getMonth() + 1 <= 9) ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
      dateformat += "" + (date.getDate() <= 9) ? '0' + (date.getDate()) : (date.getDate());
      dateformat += (date.getHours() <= 9) ? '0' + (date.getHours()) : (date.getHours());
      dateformat += (date.getMinutes() <= 9) ? '0' + (date.getMinutes()) : (date.getMinutes());
      dateformat += (date.getSeconds() <= 9) ? '0' + (date.getSeconds()) : (date.getSeconds());

      var newFileName = "cybs_" + dateformat + ".log";
      var newPath = fileDirectory + "\\" + newFileName;
      fs.renameSync(filePath, newPath, function (err) {
        if (err) {
          throw err;
        }
        else {
          return filePath;
        }
      });
    }
  }
  return filePath;
}
