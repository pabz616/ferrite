import { test, expect} from '@playwright/test';
import HomePage from '../pages/homePage.ts';
import ProductListPage from '../pages/productListPage.ts';
import GlobalHeader from '../pages/globalHeader.ts';
import CartPage from '../pages/cartPage.ts';
import CustomerInfoPage from '../pages/checkoutCustomerInfoPage.ts';
import OverviewPage from '../pages/checkoutOverviewPage.ts';

import userData from '../data/userData.ts';

let onHomePage: HomePage;
let onProductListPage: ProductListPage;
let onGlobalHeader: GlobalHeader;
let onCartPage: CartPage;
let onCustomerInfoPage: CustomerInfoPage;
let onCheckoutOverviewPage: OverviewPage;

test.beforeEach( async ({ page }) => {
  await page.goto(userData.appUrl);
  onHomePage = new HomePage(page);
  onProductListPage = new ProductListPage(page);
  onGlobalHeader = new GlobalHeader(page);
  onCartPage = new CartPage(page);
  onCustomerInfoPage = new CustomerInfoPage (page);
  onCheckoutOverviewPage = new OverviewPage (page);
});

test.describe('Swag Labs - Checkout Workflow - Purchase Order Summary', () => {
  test('Checkout Overview - Confirm Order Details', async () => {
    await onHomePage.submitLogin(userData.username, userData.password);
    await onProductListPage.clickAddToCart();
    await onGlobalHeader.clickCartIcon();
    await onCartPage.clickCheckout();
    await onCustomerInfoPage.fillForm(userData.userFirstName, userData.userLastName, userData.userZipCode);
    await onCustomerInfoPage.clickContinueButton();
    await onCheckoutOverviewPage.confirmPurchaseDetails;
  });

  test('Checkout Overview - Cancel Purchase', async ({page}) => {
    await onHomePage.submitLogin(userData.username, userData.password);
    await onProductListPage.clickAddToCart();
    await onGlobalHeader.clickCartIcon();
    await onCartPage.clickCheckout();
    await onCustomerInfoPage.fillForm(userData.userFirstName, userData.userLastName, userData.userZipCode);
    await onCustomerInfoPage.clickContinueButton();
    await onCheckoutOverviewPage.cancelPurchase();

    // CLICKING CANCEL BRINGS THE USER BACK TO THE HOME PAGE, CART ITEMS REMAIN
    await expect(page).toHaveURL(userData.appUrl+'inventory.html');
  });

  //TODO Add test to attempt editing quantity page on overview page
});