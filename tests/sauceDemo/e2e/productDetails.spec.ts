import { test} from '@playwright/test';
import HomePage from '../pages/homePage';
import ProductListPage from '../pages/productListPage';
import ProductDetailsPage from '../pages/productDetailsPage';
import userData from '../data/userData';

let onHomePage: HomePage;
let onProductList: ProductListPage;
let onProductDetails: ProductDetailsPage;

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  onHomePage = new HomePage(page);
  onProductList = new ProductListPage(page)
  onProductDetails = new ProductDetailsPage(page)
});

test.describe('Swag Labs - Product Details Page UI Check', () => {
    test('Product Details Page is to spec', async ({ page }) => {
      await onHomePage.submitLogin(userData.username, userData.password);
      await onProductList.clickAddToCart;
      await onProductDetails.checkUI;
    })

    test ('Product Details Price Check', async({page}) => {
      await onHomePage.submitLogin(userData.username, userData.password);
      await onProductList.clickAddToCart;
      await onProductDetails.confirmThePriceIsCorrect;

    });
    
    test('Product Details Page Add To Cart Button Is Actionable', async({ page }) => {
      await onHomePage.submitLogin(userData.username, userData.password);
      await onProductList.clickAddToCart;
      await onProductDetails.checkUI;
    });
});