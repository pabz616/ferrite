import { type Page, type Locator , expect } from '@playwright/test';

class CustomerInfoPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly fname_input: Locator;
    readonly lname_input: Locator;
    readonly zipcode_input: Locator;
    readonly cancel_button: Locator;
    readonly continue_button: Locator;
    readonly requiredFirstName: Locator;
    readonly requiredLastName: Locator;
    readonly requiredZipPostalCode: Locator;
    readonly errorMessage: Locator;
    readonly closeErrorMessage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('//span[@class="title"]');
        this.fname_input = page.locator('//input[@id="first-name"]'); //page.getByTestId('firstName');
        this.lname_input = page.locator('//input[@id="last-name"]');
        this.zipcode_input = page.getByPlaceholder('Zip/Postal Code');;
        this.cancel_button = page.getByRole('button', { name: 'cancel' });
        this.continue_button = page.getByRole('button', { name: 'continue' });

        this.requiredFirstName = page.locator('(//input[@class="input_error form_input error"])[1]')
        this.requiredLastName = page.locator('(//input[@class="input_error form_input error"])[2]')
        this.requiredZipPostalCode = page.locator('(//input[@class="input_error form_input error"])[3]')
        this.errorMessage = page.locator('//div[@class="error-message-container error"]/h3')
        this.closeErrorMessage = page.getByTestId('error-button')
    }

    /**
     * Fills the form fields with the provided user details.
     * @param fname The first name string.
     * @param lname The last name string.
     * @param zip The zip code string.
     */


async checkUI(){
    await expect(this.pageTitle).toBeVisible;
    await expect(this.pageTitle).toHaveText('Checkout: Your Information');

    await expect(this.fname_input).toBeVisible;
    await expect(this.fname_input).toBeEmpty;
    await expect(this.fname_input).toHaveAttribute('placeholder', 'First Name');


    await expect(this.lname_input).toBeVisible;
    await expect(this.lname_input).toBeEmpty;
    await expect(this.lname_input).toHaveAttribute('placeholder', 'Last Name');

    await expect(this.zipcode_input).toBeVisible;
    await expect(this.zipcode_input).toBeEmpty;
    await expect(this.zipcode_input).toHaveAttribute('placeholder', 'Zip/Postal Code');

    await expect(this.cancel_button).toBeVisible;
    await expect(this.cancel_button).toBeEnabled;

    await expect(this.continue_button).toBeVisible;
    await expect(this.continue_button).toBeEnabled;
  }

async confirmValidationForRequiredFields(){
    await expect(this.requiredFirstName).toBeVisible;
    await expect(this.requiredLastName).toBeVisible;
    await expect(this.requiredZipPostalCode).toBeVisible;
    await expect(this.errorMessage).toBeVisible;
    await expect(this.errorMessage.innerText).toContain('Error: First Name is required')
}

async confirmValidationForInvalidZipCode(){
    await expect(this.errorMessage.innerText).toContain('Error: Postal Code is required')
}

async closeValidationErrorMessage(){
    await this.closeErrorMessage.click()
}

async confirmValidationErrorsAreCleared(){
    await expect(this.requiredFirstName).not.toBeVisible;
    await expect(this.requiredLastName).not.toBeVisible
    await expect(this.requiredZipPostalCode).not.toBeVisible
    await expect(this.errorMessage).not.toBeVisible

}

async fillForm(fname: string, lname: string, zip: string){
    await this.fname_input.fill(fname)
    await this.lname_input.fill(lname)
    await this.zipcode_input.fill(zip)
}

async confirmFormDataPersists(first: string, last: string, zip: string){

    await expect(this.requiredFirstName).toHaveValue(first);
    await expect(this.requiredLastName).toHaveValue(last);
    await expect(this.requiredZipPostalCode).toHaveValue(zip);
}

async clickContinueButton(){await this.continue_button.click()}

async clickCancelButton(){await this.cancel_button.click()}
}

export default CustomerInfoPage;