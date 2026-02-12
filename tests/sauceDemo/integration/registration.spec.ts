import { test, expect} from '@playwright/test';
import RegistrationForm from '../pages/registrationFormPage';
import registrationData from '../data/registrationData';

let onRegistrationForm: RegistrationForm;

test.beforeEach( async ({ page }) => {
    await page.goto(registrationData.formUrl);
    onRegistrationForm = new RegistrationForm(page);
});

test.describe('Demo - Registration Form', () => {
    test('Registration Form - Validate UI Elements', async ({page}) => {
        await onRegistrationForm.confirmRegistrationFormUI();
    });
    test('Registration Form - Blank Submission', async ({page}) => {
        await onRegistrationForm.blankSubmission();
    });
    test('Registration Form - Successful Submission', async ({page}) => {
        await onRegistrationForm.submitRegistrationForm();
        //OMITTED ASSERTION TO CONFIRM SUCCESSFUL FORM SUBMISSION DUE TO LACK OF FEEDBACK MESSAGES OR PAGE REDIRECTION IN THE PROVIDED HTML
    });
    test('Registration Form - Invalid Email Validation Occurs', async ({page}) => {
        await onRegistrationForm.submitRegistration_InvalidEmail();
    });
    test('Registration Form - Phone Number Validation', async ({page}) => {
        await onRegistrationForm.submitRegistration_InvalidPhoneNumber();
    });
    test('Registration Form - File Upload Validation', async ({page}) => { 
        /* HAS BUGS */ 
    });
    test('Registration Form - Password Strength Enforcement', async ({page}) => {
        await onRegistrationForm.submitRegistration_WeakPassword();
    });
    test('Registration Form - Mismatched Passwords Validation', async ({page}) => {
        await onRegistrationForm.submitMismatchedPasswords();
    });
});