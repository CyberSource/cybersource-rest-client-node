'use strict'

class ExternalLoggerWrapper{

    extLogger;

    constructor(externalLogger) {
        this.extLogger = externalLogger;
    }

    getLogger(){
        return this.extLogger;
    }

    isLoggerEmpty(){
        return typeof this.extLogger === 'undefined'
    }
}

module.exports = ExternalLoggerWrapper;