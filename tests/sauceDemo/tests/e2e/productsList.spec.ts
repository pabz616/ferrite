import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import ProductListPage from '../pages/productListPage';
import userData from '../data/userData';

let onHomePage: HomePage;
let onProductList: ProductListPage;
test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  onHomePage = new HomePage(page);
  onProductList = new ProductListPage(page)
});
test.describe('Swag Labs - Product List Page UI Check', () => {
    test('Product List Page is to spec', async ({ page }) => {
        await onHomePage.submitLogin(userData.username, userData.password);
        onProductList.checkUI;
  })
    test('Product Name for "Sauce Labs T-Shirt" is unchanged', async ({ page }) => {
        await onHomePage.submitLogin(userData.username, userData.password);
        onProductList.checkProductName;
  })
    test('Product Description for "Sauce Labs Backpack" is free of typos', async ({ page }) => {
        await onHomePage.submitLogin(userData.username, userData.password);
        onProductList.checkProductCopy;
  })

    test('Product Price for "Sauce Lab Fleece Jacket" is unchanged', async ({ page }) => {
        await onHomePage.submitLogin(userData.username, userData.password);
        onProductList.checkProductPrice;
  })

});