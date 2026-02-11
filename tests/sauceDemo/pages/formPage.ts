import { type Page, type Locator , expect } from '@playwright/test';

class RegistrationForm {
    readonly page: Page;
    readonly firstName_input: Locator;
    readonly lastName_input: Locator;
    readonly maritalStatus_Married: Locator;
    readonly maritalStatus_Single: Locator;
    readonly maritalStatus_Divorced: Locator;
    readonly hobby_Dance: Locator;
    readonly hobby_Reading: Locator;
    readonly hobby_Cricket: Locator;
    readonly country_select: Locator;
    readonly dateOfBirth_selectMonth: Locator;
    readonly dateOfBirth_selectDay: Locator;
    readonly dateOfBirth_selectYear: Locator;
    readonly phoneNumber_input: Locator;
    readonly username_input: Locator;
    readonly emailAddress_input: Locator;
    readonly profilePicture_input: Locator;
    readonly aboutYourself_input: Locator;
    readonly password_input: Locator;
    readonly confirmPassword_input: Locator;
    readonly submit_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstName_input = page.getByLabel('First Name');
        this.lastName_input = page.getByLabel('Last Name');

        //Multiple options for Marital Status (Radio Buttons)
        this.maritalStatus_Married = page.getByRole('radio', { name: 'Married' });
        this.maritalStatus_Single = page.getByRole('radio', { name: 'Single' });
        this.maritalStatus_Divorced = page.getByRole('radio', { name: 'Divorced' });

        //Multiple options for Hobby (Checkboxes)
        this.hobby_Dance = page.getByRole('checkbox', { name: 'Dance' });
        this.hobby_Reading = page.getByRole('checkbox', { name: 'Reading' });
        this.hobby_Cricket = page.getByRole('checkbox', { name: 'Cricket' });

        //Country Dropdown
        this.country_select = page.getByRole('combobox', { name: 'Country' });

        //Date of Birth Dropdowns (multiple dropdowns for month, day, year)
        this.dateOfBirth_selectMonth = page.getByRole('combobox', { name: 'Date of Birth Month' });
        this.dateOfBirth_selectDay = page.getByRole('combobox', { name: 'Date of Birth Day' });
        this.dateOfBirth_selectYear = page.getByRole('combobox', { name: 'Date of Birth Year' });
        
        //Phone Number Input (Numeric Input)
        this.phoneNumber_input = page.getByLabel('Phone Number');
        
        this.username_input = page.getByLabel('Username');
        this.emailAddress_input = page.getByLabel('Email');

        //File Upload Input
        this.profilePicture_input = page.getByLabel('Your Profile Picture');

        this.aboutYourself_input = page.getByLabel('About Yourself');
        this.password_input = page.getByLabel('Password');
        this.confirmPassword_input = page.getByLabel('Confirm Password');
        this.submit_button = page.getByRole('button', { name: 'Submit' });
    }

async confirmRegistrationFormUI() {}
async submitRegistrationForm() {}
async confirmSuccessfullyRegistered() {}
}

export default RegistrationForm;