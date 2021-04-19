cd `dirname $0`

# Delete the previously generated SDK code

rm -rf ../docs
rm -rf ../src/api
rm -rf ../src/model
rm -rf ../test

# Command to generate SDK

java -jar swagger-codegen-cli-2.3.0.jar generate -t cybersource-javascript-template -i cybersource-rest-spec.json -l javascript -o ../  -c cybersource-node-config.json

sed -i -e "s/contentTypes = \['application\/json;charset=utf-8/contentTypes = ['*\/*/g" "../src/api/SecureFileShareApi.js"

git checkout ../README.md

git checkout ../package.json

read -p "Done"