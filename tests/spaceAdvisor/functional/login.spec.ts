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

test.afterEach(async ({ page }) => {
  if (await onHeaderSection.loggedInUser.isVisible()) {
    await onHeaderSection.clickLogOutCTA();
  }
});

test.describe("Space Advisor - Login", () => {
  test("Confirm Login Form UI Elements", async ({ page }) => {
    await onHeaderSection.clickLoginCTA();
    await expect(page).toHaveURL(/\/login/);
    await onLoginSection.verifyLoginUI();
  });

  test("Submit Login Form with valid credentials", async ({ page }) => {
    await onHeaderSection.clickLoginCTA();
    await onLoginSection.submit_login(testData.validUsername, testData.validPassword);
    await onHeaderSection.confirmUserIsAuthenticated();
   });

  test("Submit Login Form with no credentials", async ({ page }) => {
    await onHeaderSection.clickLoginCTA();
    await onLoginSection.submit_login("", "");
    await onLoginSection.confirmRequiredFieldErrors();
   });


});