mkdir %~dp0cybersource-rest-client-node
cd %~dp0
java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o cybersource-rest-client-node -c %~dp0cybersource-node-config.json

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\CaptureApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\CaptureApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\CreditApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\CreditApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\PaymentsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\PaymentsApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\ProcessAPayoutApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\ProcessAPayoutApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\RefundApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\RefundApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\ReversalApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\ReversalApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\SecureFileShareApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\SecureFileShareApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\TransactionDetailsApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\TransactionDetailsApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\UserManagementApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\UserManagementApi.js"

powershell -Command "(Get-Content .\cybersource-rest-client-node\src\Api\VoidApi.js) | ForEach-Object { $_ -replace 'accepts = \[''application/json', 'accepts = [''application/hal+json' } | Set-Content .\cybersource-rest-client-node\src\Api\VoidApi.js"


pause