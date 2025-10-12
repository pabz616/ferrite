import { type Page, type Locator , expect } from '@playwright/test';
import locators from './locators';

class ProductDetailsPage {
    readonly page: Page;
    readonly productImage: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly addToCart_button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productImage = page.locator('//img[@class="inventory_details_img"]');
        this.productName = page.locator('//div[@data-test="inventory-item-name"]');
        this.productDescription = page.locator('//div[@data-test="inventory-item-desc"]');
        this.productPrice = page.locator('//div[@data-test="inventory-item-price"]');
        this.addToCart_button = page.locator(locators.BTN_ADD_TO_CART);
   }

async confirmProductDetailsAreToSpec(){
    await expect(this.page).toHaveTitle(/Swag Labs/);
    await expect (this.productImage).toBeVisible();
    await expect (this.productName).toBeVisible();
    await expect (this.productDescription).toBeVisible();
    await expect (this.productPrice).toBeVisible();
    await expect (this.addToCart_button).toBeVisible();
    await expect (this.addToCart_button).toBeEnabled();
}

async confirmAddToCartButtonIsClickable(){
    await expect (this.addToCart_button).toBeEnabled();
}

async confirmThePriceIsCorrect(){
    let price = this.productPrice.innerText;
    await expect (price).not.toBe(null)
    await expect (price).not.toBe('$1.00')
    await expect (price).not.toBe('-$29.99')
}

async clickAddToCart(){ await this.page.click('//button[@id="add-to-cart"]')}
}

export default ProductDetailsPage;