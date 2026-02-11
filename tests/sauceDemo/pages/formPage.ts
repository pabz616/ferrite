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

async confirmRegistrationFormUI() {
    //Confirming the presence and attributes of form elements
    await expect(this.firstName_input).toBeVisible();
    await expect(this.firstName_input).toHaveAttribute('type', 'text');
    await expect(this.firstName_input).toHaveAttribute('name', 'firstName');
    await expect(this.firstName_input).toBeEditable();

    await expect(this.lastName_input).toBeVisible();
    await expect(this.lastName_input).toHaveAttribute('type', 'text');
    await expect(this.lastName_input).toHaveAttribute('name', 'lastName');
    await expect(this.lastName_input).toBeEditable();

    //Marital Status Radio Buttons
    await expect(this.maritalStatus_Married).toBeVisible();
    await expect(this.maritalStatus_Married).toHaveAttribute('type', 'radio');
    await expect(this.maritalStatus_Married).toHaveAttribute('name', 'maritalStatus');
    await expect(this.maritalStatus_Married).not.toBeChecked();

    await expect(this.maritalStatus_Single).toBeVisible();
    await expect(this.maritalStatus_Single).toHaveAttribute('type', 'radio');
    await expect(this.maritalStatus_Single).toHaveAttribute('name', 'maritalStatus');
    await expect(this.maritalStatus_Single).not.toBeChecked();

    await expect(this.maritalStatus_Divorced).toBeVisible();
    await expect(this.maritalStatus_Divorced).toHaveAttribute('type', 'radio');
    await expect(this.maritalStatus_Divorced).toHaveAttribute('name', 'maritalStatus');
    await expect(this.maritalStatus_Divorced).not.toBeChecked();

    //Hobby Checkboxes
    await expect(this.hobby_Dance).toBeVisible();
    await expect(this.hobby_Dance).toHaveAttribute('type', 'checkbox');
    await expect(this.hobby_Dance).toHaveAttribute('name', 'hobby');
    await expect(this.hobby_Dance).not.toBeChecked();

    await expect(this.hobby_Reading).toBeVisible();
    await expect(this.hobby_Reading).toHaveAttribute('type', 'checkbox');
    await expect(this.hobby_Reading).toHaveAttribute('name', 'hobby');
    await expect(this.hobby_Reading).not.toBeChecked();

    await expect(this.hobby_Cricket).toBeVisible();
    await expect(this.hobby_Cricket).toHaveAttribute('type', 'checkbox');
    await expect(this.hobby_Cricket).toHaveAttribute('name', 'hobby');
    await expect(this.hobby_Cricket).not.toBeChecked();

    //Country Dropdown
    await expect(this.country_select).toBeVisible();
    await expect(this.country_select).toHaveAttribute('name', 'country');

    //Date of Birth Dropdowns
    await expect(this.dateOfBirth_selectMonth).toBeVisible();
    await expect(this.dateOfBirth_selectMonth).toHaveAttribute('name', 'dobMonth');

    await expect(this.dateOfBirth_selectDay).toBeVisible();
    await expect(this.dateOfBirth_selectDay).toHaveAttribute('name', 'dobDay');

    await expect(this.dateOfBirth_selectYear).toBeVisible();
    await expect(this.dateOfBirth_selectYear).toHaveAttribute('name', 'dobYear');

    //Phone Number Input
    await expect(this.phoneNumber_input).toBeVisible();
    await expect(this.phoneNumber_input).toHaveAttribute('type', 'tel');
    await expect(this.phoneNumber_input).toHaveAttribute('name', 'phoneNumber');
    await expect(this.phoneNumber_input).toBeEditable();

    //Username Input
    await expect(this.username_input).toBeVisible();
    await expect(this.username_input).toHaveAttribute('type', 'text');
    await expect(this.username_input).toHaveAttribute('name', 'username');
    await expect(this.username_input).toBeEditable();

    //Email Address Input
    await expect(this.emailAddress_input).toBeVisible();
    await expect(this.emailAddress_input).toHaveAttribute('type', 'email');
    await expect(this.emailAddress_input).toHaveAttribute('name', 'email');
    await expect(this.emailAddress_input).toBeEditable();

    //Profile Picture File Upload
    await expect(this.profilePicture_input).toBeVisible();
    await expect(this.profilePicture_input).toHaveAttribute('type', 'file');
    await expect(this.profilePicture_input).toHaveAttribute('name', 'profilePicture');

    //About Yourself Textarea
    await expect(this.aboutYourself_input).toBeVisible();
    await expect(this.aboutYourself_input).toHaveAttribute('name', 'aboutYourself');
    await expect(this.aboutYourself_input).toBeEditable();

    //Password Input
    await expect(this.password_input).toBeVisible();
    await expect(this.password_input).toHaveAttribute('type', 'password');
    await expect(this.password_input).toHaveAttribute('name', 'password');
    await expect(this.password_input).toBeEditable();

    //Confirm Password Input
    await expect(this.confirmPassword_input).toBeVisible();
    await expect(this.confirmPassword_input).toHaveAttribute('type', 'password');
    await expect(this.confirmPassword_input).toHaveAttribute('name', 'confirmPassword');
    await expect(this.confirmPassword_input).toBeEditable();

    //Submit Button
    await expect(this.submit_button).toBeVisible();
    await expect(this.submit_button).toHaveAttribute('type', 'submit');
    await expect(this.submit_button).toHaveAttribute('name', 'submit');
    await expect(this.submit_button).toBeEnabled();
}

async submitRegistrationForm() {}

async confirmSuccessfullyRegistered() {}

}

export default RegistrationForm;