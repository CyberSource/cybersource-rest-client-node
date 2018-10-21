
describe("Authentication Test", function () {
    importTest("merchantConfigTest", './tests/com/cybersource/authentication/core/merchantConfigTest.js');
    importTest("digestGeneratorTest", './tests/com/cybersource/authentication/payloadDigest/digestGeneratorTest.js');
    importTest("loggerTest", './tests/com/cybersource/authentication/util/loggerTest.js');
    importTest("cacheTest", './tests/com/cybersource/authentication/util/cacheTest.js');
    importTest("propertiesUtilTest", './tests/com/cybersource/authentication/util/propertiesUtilTest.js');
    importTest("jwtSigTokenTest", './tests/com/cybersource/authentication/jwt/jwtSigTokenTest.js');
    importTest("keyCertificateGeneratorTest", './tests/com/cybersource/authentication/jwt/keyCertificateGeneratorTest.js');
    importTest("httpSigTokenTest", './tests/com/cybersource/authentication/http/httpSigTokenTest.js');
    importTest("signatureParameterGeneratorTest", './tests/com/cybersource/authentication/http/signatureParameterGeneratorTest.js');
    importTest("authorizationTest", './tests/com/cybersource/authentication/core/authorizationTest.js');
    importTest("apiExceptionTest", './tests/com/cybersource/authentication/util/apiExceptionTest.js');
    importTest("utilityTest", './tests/com/cybersource/authentication/util/utilityTest.js');

});

function importTest(name, path) {
    describe(name, function () {
        require(path);
    });
}