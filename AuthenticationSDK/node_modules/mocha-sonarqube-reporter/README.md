# mocha-sonarqube-reporter

mocha unit test reporter for sonar (>6.2)

inspired from :
 - [qingguo-yu/mocha-sonar-generic-test-coverage-file](https://github.com/qingguo-yu/mocha-sonar-generic-test-coverage-file)
 - [mageddo/mocha-sonar-generic-test-coverage](https://github.com/mageddo/mocha-sonar-generic-test-coverage)

According to [this page](https://docs.sonarqube.org/display/PLUG/Generic+Test+Coverage), Sonar (> 6.2) not longer use 'generic test coverage',
but ['generic Test Data'](https://docs.sonarqube.org/display/SONAR/Generic+Test+Data).
This reporter provides the new compliant XML structure.

Usage
-----

Install and save to your `devDependencies`

```
npm install --save-dev mocha-sonarqube-reporter
mocha --reporter mocha-sonarqube-reporter testFolder --reporter-options output=xunit.xml
```

On **mocha-test** for use with grunt

	mochaTest: {
		sonar: {
			options: {
				reporter: 'mocha-sonarqube-reporter',
				quiet: true,
				reporterOptions:{
				  output : 'unit-tests.xml' // default to ./xunit.xml
				}
			},
			src: [
				'app/**/*.spec.js'
			]
		}
	}


# Output example

```xml
<testExecutions version="1">
  <file path="testx/ClassOneTest.xoo">
    <testCase name="test1" duration="5"/>
    <testCase name="test2" duration="500">
      <skipped message="short message">other</skipped>
    </testCase>
    <testCase name="test3" duration="100">
      <failure message="short">stacktrace</failure>
    </testCase>
    <testCase name="test4" duration="500">
      <error message="short">stacktrace</error>
    </testCase>
  </file>
</testExecutions>
```

LICENSE
-------

Licensed under the MIT license.
