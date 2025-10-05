import { test} from '@playwright/test';
import HomePage from '../pages/homePage.ts';
import ProductListPage from '../pages/productListPage';
import GlobalHeader from '../pages/globalHeader.ts'
import CartPage from '../pages/cartPage.ts'

import userData from '../data/userData';

let onHomePage: HomePage;
let onProductListPage: ProductListPage;
let onGlobalHeader: GlobalHeader;
let onCartPage: CartPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  onHomePage = new HomePage(page);
  onProductListPage = new ProductListPage(page);
  onGlobalHeader = new GlobalHeader(page);
  onCartPage = new CartPage(page);
});

test.describe('Swag Labs - Products Added To Cart UI Check', () => {
    test('Cart Page is to spec', async ({ page }) => {
        await onHomePage.submitLogin(userData.username, userData.password);
        await onProductListPage.clickAddToCart;
        await onGlobalHeader.clickCartIcon;
        await onCartPage.checkUI;
        await onCartPage.checkCopy;
        await onCartPage.confirmButtonsAreActionable;
  })
})