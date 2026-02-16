# Integration Test Plan

## Way2Automation - Simple Form using Playwright w. Typescript

URL - <https://way2automation.com/way2auto_jquery/registration.php#load_box>

## REQUIRED

**axios** a promise-based HTTP Client for node.js and the browser
```npm install axios```

**Cheerio** a fast, flexible & elegant library used for parsing and manipulating HTML and XML. The perfect thing for what I want to do.
```npm install cheerio```

***Faker.js** an awesome library to generate fake (but realistic) data for testing & development.
```npm install --save-dev @faker-js/faker```

## PROCESS

1. Visit the site (URL) and assess the level of effort.

2. Create an agent in IG then feed it the URL and have it parse the page for the different form elements.

```For the following URL, https://way2automation.com/way2auto_jquery/registration.php#load_box, generate a code snippet in javascript that uses all the necessary libraries and scrapes the page for all relevant form elements and presents them in a list```

3. Install the required libraries and reference them in the file, ```getPageSelectors.js.```

4. Use the following (more explicit) prompt to get the script for the page being tested:

```Using cheerio, help me generate a script that parses the form input elements from the following URL```

5. With the page elements established, build out the page objects using PW best practices for the naming convention. The foundation "slug" is as follows:

```
class RegistrationForm {
    readonly page: Page;
    //locators identified for the form fields go here

    constructor(page: Page) {
    //application of PW naming convention for the locators goes here
    }

async confirmRegistrationFormUI() {}
async submitRegistrationForm() {}
async confirmSuccessfullyRegistered() {}
}

export default RegistrationForm;
```

6. Build out integration tests, starting with the form to be filled with Faker.js. Below is a sample list:

```
async confirmRegistrationFormUI() {}
async submitRegistrationForm() {}
async confirmSuccessfullyRegistered() {}
```
