mkdir %~dp0cybersource-rest-client-node
cd %~dp0
java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o cybersource-rest-client-node -c %~dp0cybersource-node-config.json

pause




