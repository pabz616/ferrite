import { type Page, type Locator , expect } from '@playwright/test';
import siteCopy from '../data/siteCopy';

class CheckoutConfirmationPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly confirmationGraphic: Locator;
    readonly confirmationMessage: Locator;
    readonly confirmationCopy: Locator;
    readonly home_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByTestId('title');
        this.confirmationGraphic = page.getByTestId('pony-express');
        this.confirmationMessage = page.getByTestId('complete-header');
        this.confirmationCopy = page.getByTestId('complete-text');
        this.home_button = page.getByTestId('back-to-products');
    }

async confirmPageUI(){
    await expect(this.page).toHaveURL('/checkout-complete.html')
    await expect(this.pageTitle).toBeVisible;
    await expect(this.pageTitle).toHaveText(siteCopy.checkoutConfirmationTitle)
    //
    await expect(this.confirmationGraphic).toBeVisible;
    //
    await expect(this.confirmationMessage).toBeVisible;
    await expect(this.confirmationMessage).toHaveText(siteCopy.checkoutConfirmationH1);
    await expect(this.confirmationCopy).toBeVisible;
    await expect(this.confirmationCopy).toHaveText(siteCopy.checkoutConfirmationH2)
    //
    await expect(this.home_button).toBeVisible;
    await expect(this.home_button).toBeAttached;
    await expect(this.home_button).toBeEnabled;
  }
async completeOrder(){await this.home_button.click()}

}

export default CheckoutConfirmationPage;