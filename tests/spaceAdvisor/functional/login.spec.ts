import { test, expect } from "@playwright/test";
import testData from "../utils/testData";
import Login from "../pages/login";
import Header from "../pages/header";


let onLoginSection: Login;
let onHeaderSection: Header;

test.beforeEach(async ({ page }) => {
  await page.goto(testData.sa_URL);
  onHeaderSection = new Header(page);
  onLoginSection = new Login(page);
});

// test.afterEach(async ({ page }) => {
//   await onHeaderSection.clickLogOutCTA();
// });

test.describe("Space Advisor - Login", () => {
  test("Confirm Login Form UI Elements", async ({ page }) => {
    await onHeaderSection.clickLoginCTA();
    await expect(page).toHaveURL(/\/login/);
    await onLoginSection.verifyLoginUI();
  });

  test.skip("Submit Login Form with valid credentials", async ({ page }) => {
    //TODO - FIX - This test is currently failing due locators not being able to find the username and password input fields. This is being investigated.
    await onLoginSection.submit_login(testData.validUsername, testData.validPassword);
    await onHeaderSection.confirmUserIsAuthenticated();
   });
});