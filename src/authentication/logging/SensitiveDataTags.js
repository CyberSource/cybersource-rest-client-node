'use strict';

exports.getSensitiveDataTags = function () {
    var tags = [];

    // tags.push(["securityCode", "[0-9]{3,4}", "xxxxx"]);
    // tags.push(["number", "(\\p{N}+)(\\p{N}{4})", "xxxxx$2"]);
    // tags.push(["cardNumber", "(\\p{N}+)(\\p{N}{4})", "xxxxx$2"]);
    // tags.push(["expirationMonth", "[0-1][0-9]", "xxxx"]);
    // tags.push(["expirationYear", "2[0-9][0-9][0-9]", "xxxx"]);
    // tags.push(["account", "(\\p{N}+)(\\p{N}{4})", "xxxxx$2"]);
    // tags.push(["routingNumber", "[0-9]+", "xxxxx"]);
    // tags.push(["email", "[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", "xxxxx"]);
    // tags.push(["firstName", "([a-zA-Z]+( )?[a-zA-Z]*'?-?[a-zA-Z]*( )?([a-zA-Z]*)?)", "xxxxx"]);
    // tags.push(["lastName", "([a-zA-Z]+( )?[a-zA-Z]*'?-?[a-zA-Z]*( )?([a-zA-Z]*)?)", "xxxxx"]);
    // tags.push(["phoneNumber", "(\\+[0-9]{1,2} )?\\(?[0-9]{3}\\)?[ .-]?[0-9]{3}[ .-]?[0-9]{4}", "xxxxx"]);
    // tags.push(["type", "[-A-Za-z0-9 ]+", "xxxxx"]);
    // tags.push(["token", "[-.A-Za-z0-9 ]+", "xxxxx"]);
    // tags.push(["signature", "[-.A-Za-z0-9 ]+", "xxxxx"]);

    tags.push("securityCode");
    tags.push("number");
    tags.push("cardNumber");
    tags.push("expirationMonth");
    tags.push("expirationYear");
    tags.push("account");
    tags.push("routingNumber");
    tags.push("email");
    tags.push("firstName");
    tags.push("lastName");
    tags.push("phoneNumber");
    tags.push("type");
    tags.push("token");
    tags.push("signature");
    tags.push("prefix");
    tags.push("bin");

    return tags;
}