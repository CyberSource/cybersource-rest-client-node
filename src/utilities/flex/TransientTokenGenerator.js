
'use strict';

function TransientTokenGenerator(jwt)
{
    var splitContents = jwt.split(".");
    if(splitContents.length > 1)
    {
        var encodedString  = splitContents[1];
        var data = new Buffer(encodedString);
        var decodedString =data.toString('base64');
        var transientTokenModel= JSON.parse(decodedString);
        // return JTI string
        return transientTokenModel;
    }

}

module.exports = TransientTokenGenerator;