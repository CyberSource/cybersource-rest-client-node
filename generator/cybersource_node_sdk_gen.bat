@echo off
cd %~dp0

REM Delete the previously generated SDK code

rd /s /q ..\docs
rd /s /q ..\src\api
rd /s /q ..\src\model
rd /s /q ..\test

REM Command to generate SDK

java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

powershell -Command "(Get-Content ..\src\Api\SecureFileShareApi.js) | ForEach-Object { $_ -replace 'contentTypes = \[''\*_\/_\*;charset=utf-8', 'contentTypes = [''*/*;charset=utf-8' } | Set-Content ..\src\Api\SecureFileShareApi.js"

powershell -Command "(Get-Content ..\docs\SecureFileShareApi.md) | ForEach-Object { $_ -replace '\*\*Content-Type\*\*: \*_\/_\*;charset=utf-8', '**Content-Type**: */*;charset=utf-8' } | Set-Content ..\docs\SecureFileShareApi.md"

for %%i in ("..\src\Api\*.js") do (
  powershell -Command "(Get-Content '%%i') -replace 'DESCRIPTION_PLACEHOLDER_beta', 'DISCLAIMER : Cybersource may allow Customer to access, use, and/or test a Cybersource product or service that may still be in development or has not been market-tested (\"Beta Product\") solely for the purpose of evaluating the functionality or marketability of the Beta Product (a \"Beta Evaluation\"). Notwithstanding any language to the contrary, the following terms shall apply with respect to Customer''s participation in any Beta Evaluation (and the Beta Product(s)) accessed thereunder): The Parties will enter into a separate form agreement detailing the scope of the Beta Evaluation, requirements, pricing, the length of the beta evaluation period (\"Beta Product Form\"). Beta Products are not, and may not become, Transaction Services and have not yet been publicly released and are offered for the sole purpose of internal testing and non-commercial evaluation. Customer''s use of the Beta Product shall be solely for the purpose of conducting the Beta Evaluation. Customer accepts all risks arising out of the access and use of the Beta Products. Cybersource may, in its sole discretion, at any time, terminate or discontinue the Beta Evaluation. Customer acknowledges and agrees that any Beta Product may still be in development and that Beta Product is provided \"AS IS\" and may not perform at the level of a commercially available service, may not operate as expected and may be modified prior to release. CYBERSOURCE SHALL NOT BE RESPONSIBLE OR LIABLE UNDER ANY CONTRACT, TORT (INCLUDING NEGLIGENCE), OR OTHERWISE RELATING TO A BETA PRODUCT OR THE BETA EVALUATION (A) FOR LOSS OR INACCURACY OF DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY, (B) ANY CLAIM, LOSSES, DAMAGES, OR CAUSE OF ACTION ARISING IN CONNECTION WITH THE BETA PRODUCT; OR (C) FOR ANY INDIRECT, INCIDENTAL OR CONSEQUENTIAL DAMAGES INCLUDING, BUT NOT LIMITED TO, LOSS OF REVENUES AND LOSS OF PROFITS.' | Set-Content '%%i'"
)
for %%i in ("..\src\Api\*.js") do (
  powershell -Command "(Get-Content '%%i') | Where-Object { $_ -notmatch 'DESCRIPTION_PLACEHOLDER_.*'} | Set-Content '%%i'"
)

git checkout ..\README.md

git checkout ..\package.json

git checkout ..\src\api\OAuthApi.js
git checkout ..\src\model\AccessTokenResponse.js
git checkout ..\src\model\CreateAccessTokenRequest.js
git checkout ..\src\model\BadRequestError.js
git checkout ..\src\model\ResourceNotFoundError.js
git checkout ..\src\model\UnauthorizedClientError.js

git checkout ..\docs\OAuthApi.md
git checkout ..\docs\AccessTokenResponse.md
git checkout ..\docs\CreateAccessTokenRequest.md
git checkout ..\docs\BadRequestError.md
git checkout ..\docs\ResourceNotFoundError.md
git checkout ..\docs\UnauthorizedClientError.md

git checkout ..\test\api\OAuthApi.spec.js
git checkout ..\test\model\AccessTokenResponse.spec.js
git checkout ..\test\model\CreateAccessTokenRequest.spec.js
git checkout ..\test\model\BadRequestError.spec.js
git checkout ..\test\model\ResourceNotFoundError.spec.js
git checkout ..\test\model\UnauthorizedClientError.spec.js

pause