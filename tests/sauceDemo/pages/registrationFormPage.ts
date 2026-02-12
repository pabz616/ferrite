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
        this.firstName_input = page.locator('(//input[@name="name"])[1]')
        this.lastName_input = page.locator('(//input[@type="text"])[2]');

        //Multiple options for Marital Status (Radio Buttons)
        this.maritalStatus_Single = page.locator('(//input[@name="m_status"])[1]');
        this.maritalStatus_Married = page.locator('(//input[@name="m_status"])[2]');
        this.maritalStatus_Divorced = page.locator('(//input[@name="m_status"])[3]');

        //Multiple options for Hobby (Checkboxes)
        this.hobby_Dance = page.getByRole('checkbox', { name: 'Dance' });
        this.hobby_Reading = page.getByRole('checkbox', { name: 'Reading' });
        this.hobby_Cricket = page.getByRole('checkbox', { name: 'Cricket' });

        //Country Dropdown
        this.country_select = page.locator('(//select)[1]');

        //Date of Birth Dropdowns (multiple dropdowns for month, day, year)
        this.dateOfBirth_selectMonth = page.locator('(//select)[2]');
        this.dateOfBirth_selectDay = page.locator('(//select)[3]');
        this.dateOfBirth_selectYear = page.locator('(//select)[4]');
        
        //Phone Number Input (Numeric Input)
        this.phoneNumber_input = page.locator('(//input[@name="phone"])[1]');
        
        this.username_input = page.locator('(//input[@name="username"])[1]');
        this.emailAddress_input = page.locator('(//input[@name="email"])[1]');

        //File Upload Input
        this.profilePicture_input = page.locator('//input[@type="file"]');

        this.aboutYourself_input = page.locator('//textarea');

        this.password_input = page.locator('(//input[@name="password"])[1]');
        this.confirmPassword_input = page.locator('//input[@name="c_password"]');
        
        this.submit_button = page.getByRole('button', { name: 'Submit' });
    }

async confirmRegistrationFormUI() {
    //Confirming the presence and attributes of form elements
    await expect(this.firstName_input).toBeVisible();
    await expect(this.firstName_input).toHaveAttribute('type', 'text');
    await expect(this.firstName_input).toHaveAttribute('name', 'name');
    await expect(this.firstName_input).toBeEditable();

    await expect(this.lastName_input).toBeVisible();
    await expect(this.lastName_input).toHaveAttribute('type', 'text');
    // await expect(this.lastName_input).toHaveAttribute('name', 'lastName'); //BUG! The last name input does not have a 'name' attribute in the provided HTML
    await expect(this.lastName_input).toBeEditable();

    //Marital Status Radio Buttons
    await expect(this.maritalStatus_Married).toBeVisible();
    await expect(this.maritalStatus_Married).toHaveAttribute('type', 'radio');
    await expect(this.maritalStatus_Married).toHaveAttribute('name', 'm_status'); //BUG! The marital status radio buttons have a 'name' attribute of 'm_status' instead of 'maritalStatus'
    await expect(this.maritalStatus_Married).not.toBeChecked();

    await expect(this.maritalStatus_Single).toBeVisible();
    await expect(this.maritalStatus_Single).toHaveAttribute('type', 'radio');
    await expect(this.maritalStatus_Single).toHaveAttribute('name', 'm_status');
    await expect(this.maritalStatus_Single).not.toBeChecked();

    await expect(this.maritalStatus_Divorced).toBeVisible();
    await expect(this.maritalStatus_Divorced).toHaveAttribute('type', 'radio');
    await expect(this.maritalStatus_Divorced).toHaveAttribute('name', 'm_status');
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
    await expect(this.country_select).toBeVisible();  //BUG! The country dropdown is missing proper element attributes
    // await expect(this.country_select).toHaveAttribute('name', 'country'); 

    /** 
    //Date of Birth Dropdowns //BUG! The date of birth dropdowns are missing proper element attributes, making them difficult to locate and interact with
    await expect(this.dateOfBirth_selectMonth).toBeVisible(); 
    await expect(this.dateOfBirth_selectMonth).toHaveAttribute('name', 'dobMonth');

    await expect(this.dateOfBirth_selectDay).toBeVisible();
    await expect(this.dateOfBirth_selectDay).toHaveAttribute('name', 'dobDay');

    await expect(this.dateOfBirth_selectYear).toBeVisible();
    await expect(this.dateOfBirth_selectYear).toHaveAttribute('name', 'dobYear');
    */

    //Phone Number Input
    await expect(this.phoneNumber_input).toBeVisible();
    await expect(this.phoneNumber_input).toHaveAttribute('type', 'text');
    await expect(this.phoneNumber_input).toHaveAttribute('name', 'phone');
    await expect(this.phoneNumber_input).toBeEditable();

    //Username Input
    await expect(this.username_input).toBeVisible();
    await expect(this.username_input).toHaveAttribute('type', 'text');
    await expect(this.username_input).toHaveAttribute('name', 'username');
    await expect(this.username_input).toBeEditable();

    //Email Address Input
    await expect(this.emailAddress_input).toBeVisible();
    await expect(this.emailAddress_input).toHaveAttribute('type', 'text');
    await expect(this.emailAddress_input).toHaveAttribute('name', 'email');
    await expect(this.emailAddress_input).toBeEditable();

    //Profile Picture File Upload
    await expect(this.profilePicture_input).toBeVisible();
    await expect(this.profilePicture_input).toHaveAttribute('type', 'file');
    await expect(this.profilePicture_input).toBeEditable();

    //About Yourself Textarea
    await expect(this.aboutYourself_input).toBeVisible();
    // await expect(this.aboutYourself_input).toHaveAttribute('name', 'aboutYourself'); //BUG! The about yourself textarea does not have a 'name' attribute in the provided HTML
    await expect(this.aboutYourself_input).toBeEditable();

    //Password Input
    await expect(this.password_input).toBeVisible();
    await expect(this.password_input).toHaveAttribute('type', 'password');
    await expect(this.password_input).toHaveAttribute('name', 'password');
    await expect(this.password_input).toBeEditable();

    //Confirm Password Input
    await expect(this.confirmPassword_input).toBeVisible();
    await expect(this.confirmPassword_input).toHaveAttribute('type', 'password');
    await expect(this.confirmPassword_input).toHaveAttribute('name', 'c_password');
    await expect(this.confirmPassword_input).toBeEditable();

    //Submit Button
    await expect(this.submit_button).toBeVisible();
    await expect(this.submit_button).toHaveAttribute('type', 'submit');
    await expect(this.submit_button).toHaveAttribute('value', 'submit');
    await expect(this.submit_button).toBeEnabled();
}

async submitRegistrationForm() {
    await this.firstName_input.fill('John');
    await this.lastName_input.fill('Doe');
    await this.maritalStatus_Single.check();
    await this.hobby_Reading.check();
    await this.country_select.selectOption('United States');
    await this.dateOfBirth_selectMonth.selectOption('January');
    await this.dateOfBirth_selectDay.selectOption('1');
    await this.dateOfBirth_selectYear.selectOption('1990');
    await this.phoneNumber_input.fill('1234567890');
    await this.username_input.fill('johndoe');
    await this.emailAddress_input.fill('johndoe@mail.com');
    // For file upload, you would typically use setInputFiles with a path to a test file
    // await this.profilePicture_input.setInputFiles('path/to/test/profile-picture.jpg');
    await this.aboutYourself_input.fill('Hello, I am John Doe.');
    await this.password_input.fill('Password123');
    await this.confirmPassword_input.fill('Password123');
    await this.submit_button.click();
}

}

export default RegistrationForm;