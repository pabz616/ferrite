# ferrite

Playwright w. Typescript

## Setup

1. Create a directory, then navigate to it
2. Initialize npm: `npm init -y`
3. Install playwright, choose typescript: `npm init playwright@latest`
4. For API Testing - Fake data: `npm install --save-dev @faker-js/faker`
5. For API Testing - Fake date: `npm install --save-dev luxon`
6. For API Testing - Clean Folder Before Test Run: `npm install --save-dev rimraf`
7. For Accessibility Testing - `npm install @axe-core/playwright`

## PW Commands

1. Run the end-to-end tests: `npx playwright test`
2. Start interactive UI mode: `npx playwright`
3. Run tests in a distinct browser: `npx playwright test --project=chromium`
4. Run a specific test: `npx playwright test <file>`
5. Run tests in debug mode: `npx playwright test --debug`
6. Run tests by tag (make sure you add them to the test description): `npx playwright test --grep "@tag"`

## Create desired structure

Pesonally I like using:

```
..tests
  |_components
    |_test_name.spec.js
  |_api
    |_test_name.spec.js
  |_e2e
    |_page-objects
    |_page-locators
    |_specs
```