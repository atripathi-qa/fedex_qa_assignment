# Cypress e2e tests
This repo contains e2e tests written in Mocha & Cypress for the Star Wars Search web application. Star wars enthusiast can search for there favourite characters and planet on this page. 

**Install project dependencies**

```
npm install
```
To get started with the Cypress test framework for the UI tests

- Clone the repository. [tests scripts are in the cypress/e2e folder]
- The latest version of the Chrome browser installed in your machine.
- Run `npm install` to download all the dependencies (if you haven't already or skip this step).
- Run `npm run e2e` to start the server and run the test. After the test execution, HTML report is generated in the **mochawesome-report** folder. 
- Run `ngx cypress open` to open the application 

**Contribution guidelines for the test framework**

- **cypress.config.js**: This is the config file for the execution of the tests.
- **testdata.json**: This file is added in the cypress/fixtures folder which consist of the test data being used in the tests.
- **pageobjects:** This folder consist of the *.js file as it increases the readibility of the code.
- **reporter-config.json**: This is the config file to enable mochawesome and junit reporters.
- **mochawesome.json**: This file is generated after the tests are executed, which will generate a combined HTML report in the **mochawesome-report** folder.


**Tests related informtion**

**cypress/e2e/search-page.spec.js** consist of 5 tests. Out of the 5 tests, 1 test is failing. Screenshots will be added in the cypress/screenshots folder after the test run fails.
Scenario: Search for either a person or a planet, clear input field and search. Above Scenario gets failed when clear the 'input field' and press search button.
