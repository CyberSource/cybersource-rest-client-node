'use strict'

function MLEUtility() {}

MLEUtility.prototype.checkIsMLEForAPI = function checkIsMLEForAPI(merchantConfig, isMLESupportedByCybsForApi, operationId) {
    //isMLE for an api is false by default
    var isMLEForAPI=false;

    //check here isMLE True or False
    //if API is part of MLE then add the isMLE global paramter
    if(isMLESupportedByCybsForApi === true && merchantConfig.isMLE === true){
      isMLEForAPI=true;
    }

    //Control the MLE only from map
    if(merchantConfig.mapToControlMLEonAPI !=null && operationId in merchantConfig.mapToControlMLEonAPI){
        if(merchantConfig.mapToControlMLEonAPI[operationId] === true){
          isMLEForAPI=true;
        }
        if(merchantConfig.mapToControlMLEonAPI[operationId] === false){
          isMLEForAPI=false;
        }
    }

    return isMLEForAPI;
}

module.exports = MLEUtility;
