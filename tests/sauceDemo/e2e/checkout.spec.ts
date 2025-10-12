import { test, expect} from '@playwright/test';
import HomePage from '../pages/homePage.ts';
import ProductListPage from '../pages/productListPage.ts';
import ProductDetailsPage from '../pages/productDetailsPage.ts'
import GlobalHeader from '../pages/globalHeader.ts';
import CartPage from '../pages/cartPage.ts';
import CustomerInfoPage from '../pages/checkoutCustomerInfoPage.ts';
import OverviewPage from '../pages/checkoutOverviewPage.ts';
import CheckoutConfirmationPage from '../pages/checkoutConfirmationPage.ts'

import userData from '../data/userData.ts';
import productData from '../data/productData.ts';


let onHomePage: HomePage;
let onProductListPage: ProductListPage;
let onProductDetailsPage: ProductDetailsPage;
let onGlobalHeader: GlobalHeader;
let onCartPage: CartPage;
let onCustomerInfoPage: CustomerInfoPage;
let onCheckoutOverviewPage: OverviewPage;
let onCheckoutConfirmationPage: CheckoutConfirmationPage;

test.beforeEach( async ({ page }) => {
  await page.goto(userData.appUrl);
  onHomePage = new HomePage(page);
  onProductListPage = new ProductListPage(page);
  onProductDetailsPage = new ProductDetailsPage(page);
  onGlobalHeader = new GlobalHeader(page);
  onCartPage = new CartPage(page);
  onCustomerInfoPage = new CustomerInfoPage (page);
  onCheckoutOverviewPage = new OverviewPage (page);
  onCheckoutConfirmationPage = new CheckoutConfirmationPage (page);
});

test.describe('Swag Labs - Checkout Workflow - Complete A Purchase', () => {
  test('Purchase an item - From Product List', async ({page}) => {
    ///TODO SELECT A PRODUCT FROM THE HOME PAGE
  });
  test('Purchase an item - From PDP', async ({page}) => {
    await onHomePage.confirmLoginPageUI;
    await onHomePage.submitLogin(userData.username, userData.password);
    await onProductListPage.selectAProduct(productData.backpackName)
    await onProductDetailsPage.clickAddToCart();
    await onGlobalHeader.clickCartIcon();
    await onCartPage.clickCheckout();
    await onCustomerInfoPage.fillForm(userData.userFirstName, userData.userLastName, userData.userZipCode);
    await onCustomerInfoPage.clickContinueButton();
    await onCheckoutOverviewPage.confirmPurchaseDetails;
    await onCheckoutOverviewPage.submitPurchase;
  });
  test('Purchase an item - Check Page To Page UI', async ({page}) => {
    await onHomePage.confirmLoginPageUI;
    await onHomePage.submitLogin(userData.username, userData.password);
    await onProductListPage.confirmProductListUI;
    await onProductListPage.selectAProduct(productData.bikeLightName);
    await onProductDetailsPage.confirmProductDetailsAreToSpec();
    await onProductDetailsPage.clickAddToCart();
    await onGlobalHeader.clickCartIcon();
    await onCartPage.confirmCartPageIsToSpec();
    await onCartPage.clickCheckout();
    await onCustomerInfoPage.checkUI();
    await onCustomerInfoPage.fillForm(userData.userFirstName, userData.userLastName, userData.userZipCode);
    await onCustomerInfoPage.clickContinueButton();
    await onCheckoutOverviewPage.confirmPurchaseDetails;
    await onCheckoutOverviewPage.submitPurchase;
  });
});