import { type Page, type Locator , expect } from '@playwright/test';


class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly password: Locator;
  readonly userName: Locator;
  readonly errorUSN: Locator;
  readonly errorPWD: Locator;
  readonly errorMsg: Locator;
  readonly errorMsgText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.errorMsg = page.locator('//div[@class="error-message-container error"]');
    this.errorMsgText =  page.locator('//h3');
    this.password = page.getByPlaceholder('Password');
    this.userName = page.getByPlaceholder('UserName');
    this.errorUSN = page.locator('(//input[@class="input_error form_input error"])[1]')
    this.errorPWD = page.locator('(//input[@class="input_error form_input error"])[2]')
  }

async submitLogin(email: string, password: string) {
    await this.userName.fill(email)
    await this.password.fill(password);
    await this.loginButton.click();
}

  async confirmSuccessfullyLoggedIn() {
    await expect(this.page).toHaveURL(/.*profile/);
    await expect(this.page).toHaveTitle(/DEMOQA/);
  }

  async confirmUnsuccessfulLogin(message) {
    await expect (this.errorMsg).toBeVisible();
    await expect(this.errorMsgText).toContainText(message)
  }

  async confirmInvalidStateForRequiredFields(){
    await expect (this.errorUSN).toBeVisible();
    await expect (this.errorPWD).toBeVisible();
    await expect (this.errorMsg).toBeVisible();
  }
}

export default HomePage;