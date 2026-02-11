# Integration Test Plan

## Way2Automation - Simple Form using Playwright w. Typescript

URL - <https://way2automation.com/way2auto_jquery/registration.php#load_box>

GOAL - Vibe coding with google gemini (GG) to parse the elements of a page, build out tests in typescript, and have GG review my work and provide feedback.

## PROCESS

Step-1. Visit the site (URL) and assess the level of effort. This is a simple JQuery form with a lot of components .. shouldn't be too complicated, right?! 

<screenshot goes here >

Step-2. Create an agent in GG then feed it the URL and have it parse the page for the different form elements. This tends to be the most tedious part of building out an automation framework. The prompt I used is the one below.

<prompt goes here >

Step-3. With the page elements established, now we'll build out the page objects using PW best practices for the naming convention.

<code snippet goes here >

Step-4. Build out integration tests, starting with the form to be filled with Faker.js.

<code snippet goes here >

Step-5. Build out additional tests, including assertion for presence of form elements, validation, etc.

Step-6. Run > Debug > Repeat. Push to GIT when all are passing.

<screenshot goes here >

Step-7. Celebrate! We vibe coded and learned a few new things.

<screenshot goes here >