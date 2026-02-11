# Integration Test Plan

## Way2Automation - Simple Form using Playwright w. Typescript

URL - <https://way2automation.com/way2auto_jquery/registration.php#load_box>

GOAL - Vibe coding with IBM Granite (IG) to parse the elements of a page, build out tests in typescript, and have IG review my work and provide feedback.

## PROCESS

Step-1. Visit the site (URL) and assess the level of effort. This is a simple JQuery form with a lot of components .. shouldn't be too complicated, right?!

<screenshot goes here >

Step-2. Create an agent in IG then feed it the URL and have it parse the page for the different form elements. This tends to be the most tedious part of building out an automation framework. The prompt I used is the one below.

```For the following URL, https://way2automation.com/way2auto_jquery/registration.php#load_box, generate a code snippet in javascript that uses all the necessary libraries and scrapes the page for all relevant form elements and presents them in a list```

The response was a comprehensive set of instructions, along with recommendation to use Puppeteer or Cheerio. **Cheerio** is a fast, flexible & elegant library used for parsing and manipulating HTML and XML. The perfect thing for what I want to do.

```npm install cheerio```

I generated a second prompt, this time being a little more explicit. Although I received the same "web scraping should be done responsibly" warning, I got a nice bit of code that I used in the file called, getPageSelectors.js. Below is the prompt.

```Using cheerio, help me generate a script that parses the form input elements from the following URL```

After some massaging of the code and re-runs to get it to work, I had IG optimize the script. The output did exactly what I wanted .. however, because the form repeated the name of the locator a few times, manual verification was necessary. Below is the sample output of the completed script.

<screenshot goes here>

The script can be customized to meet the need of the project, and in the end, parsing the form elements from the page went from a half-day task to seconds.

Step-3. With the page elements established, now we'll build out the page objects using PW best practices for the naming convention. The foundation "slug" is as follows:

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

Step-4. Build out integration tests, starting with the form to be filled with Faker.js. The tests include but not limited to:

```
async confirmRegistrationFormUI() {}
async submitRegistrationForm() {}
async confirmSuccessfullyRegistered() {}
```

Step-5. Run > Debug > Repeat. Push to GIT when all are passing.

<screenshot goes here >

Step-6. Celebrate! We vibe coded and learned a few new things.

<screenshot goes here >
