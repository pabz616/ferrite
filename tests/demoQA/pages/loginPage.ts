import { type Page, type Locator , expect } from '@playwright/test';
import messages from '../utils/messages';

class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly messagePanel: Locator;
  readonly password: Locator;
  readonly userName: Locator;
  readonly errorUSN: Locator;
  readonly errorPWD: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.messagePanel = page.locator('#output');
    this.password = page.getByPlaceholder('Password');
    this.userName = page.getByPlaceholder('UserName');
    this.errorUSN = page.locator('(//input[@class="mr-sm-2 is-invalid form-control"])[1]')
    this.errorPWD = page.locator('(//input[@class="mr-sm-2 is-invalid form-control"])[2]')
  }

  async submitLogin(email: string, password: string) {
    await this.userName.fill(email)
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async checkLoggedIn() {
    await expect(this.page).toHaveURL(/.*profile/);
    await expect(this.page).toHaveTitle(/DEMOQA/);
  }

  async checkInvalidCredentials() {
    await expect(this.messagePanel).toHaveText(messages.login.invalid);
  }

  async confirmInvalidStateForRequiredFields(){
    await expect (this.errorUSN).toBeVisible();
    await expect (this.errorPWD).toBeVisible();
  }
}

export default LoginPage;