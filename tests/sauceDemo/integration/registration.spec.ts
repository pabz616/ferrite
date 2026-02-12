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
});