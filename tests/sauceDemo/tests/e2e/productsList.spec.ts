import { test, expect } from '@playwright/test';
import HomePage from '../pages/homePage';
import ProductListPage from '../pages/productListPage';
import userData from '../data/userData';

let onHomePage: HomePage;
let onProductList: ProductListPage;
test.describe('Swag Labs - Product List Page UI Check', () => {
    test('Product List Page is to spec', async ({ page }) => {
        onHomePage = new HomePage(page);
        onProductList = new ProductListPage(page);

        await page.goto('https://www.saucedemo.com/');
        await onHomePage.submitLogin(userData.username, userData.password);
        onProductList.checkUI;
  })
});