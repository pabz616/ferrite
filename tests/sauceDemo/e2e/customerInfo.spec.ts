import { test} from '@playwright/test';
import HomePage from '../pages/homePage.ts';
import ProductListPage from '../pages/productListPage';
import GlobalHeader from '../pages/globalHeader.ts';
import CartPage from '../pages/cartPage.ts';
import CustomerInfoPage from '../pages/checkoutCustomerInfoPage.ts';


import userData from '../data/userData';

let onHomePage: HomePage;
let onProductListPage: ProductListPage;
let onGlobalHeader: GlobalHeader;
let onCartPage: CartPage;
let onCustomerInfoPage: CustomerInfoPage;

test.beforeEach( async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  onHomePage = new HomePage(page);
  onProductListPage = new ProductListPage(page);
  onGlobalHeader = new GlobalHeader(page);
  onCartPage = new CartPage(page);
  onCustomerInfoPage = new CustomerInfoPage (page);
});

test.describe('Swag Labs - Checkout Workflow - Customer Information (KYC)', () => {
    test('Customer Information Page is to spec', async () => {
        await onHomePage.submitLogin(userData.username, userData.password);
        await onProductListPage.clickAddToCart;
        await onGlobalHeader.clickCartIcon;
        await onCartPage.clickCheckout;
        await onCustomerInfoPage.checkUI;
  })
    test('Customer Information Page - Validation Occurs For Required Data', async () => {
        await onHomePage.submitLogin(userData.username, userData.password);
        await onProductListPage.clickAddToCart;
        await onGlobalHeader.clickCartIcon;
        await onCartPage.clickCheckout;
        await onCustomerInfoPage.clickContinueButton;
        await onCustomerInfoPage.confirmValidationForRequiredFields;
  })
    test('Customer Information Page - Clear Validation Errors', async () => {
        await onHomePage.submitLogin(userData.username, userData.password);
        await onProductListPage.clickAddToCart;
        await onGlobalHeader.clickCartIcon;
        await onCartPage.clickCheckout;
        await onCustomerInfoPage.clickContinueButton;
        await onCustomerInfoPage.confirmValidationForRequiredFields;
        await onCustomerInfoPage.closeValidationErrorMessage;
        await onCustomerInfoPage.confirmValidationErrorsAreCleared;
  })

      test('Customer Information Page - Validation Occurs For Invalid Zipcode', async () => {
        await onHomePage.submitLogin(userData.username, userData.password);
        await onProductListPage.clickAddToCart;
        await onGlobalHeader.clickCartIcon;
        await onCartPage.clickCheckout;
        await onCustomerInfoPage.fillForm(userData.userFirstName, userData.userLastName,'NaN');
        await onCustomerInfoPage.confirmValidationForInvalidZipCode;
  })

  //TODO - Additional tests for different values. At the moment the form will accept any value at all inputs (bug!)

    test.only('Customer Information Page - Data Persists In The Inputs', async ({page}) => {
        await onHomePage.submitLogin(userData.username, userData.password);
        await onProductListPage.clickAddToCart;
        await onGlobalHeader.clickCartIcon;
        await onCartPage.clickCheckout;
        await onCustomerInfoPage.fillForm(userData.userFirstName, userData.userLastName, userData.userZipCode);
        await page.reload();
        // await onCustomerInfoPage.confirmFormDataPersists(userData.userFirstName, userData.userLastName, userData.userZipCode);
  })

//TODO - Write bug for data not persisting in the inputs

})