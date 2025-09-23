import { type Page, type Locator , expect } from '@playwright/test';

class ProductDetailsPage {
    readonly page: Page;
    readonly productImage: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;

    constructor(page: Page) {
    this.page = page;
    this.productImage = page.locator('//img[@class="inventory_details_img"]"]');
    this.productName = page.locator('//div[@data-test="inventory-item-name"]"]');
    this.productDescription = page.locator('//div[@data-test="inventory-item-desc"]"]');
    this.productPrice = page.locator('//div[@data-test="inventory-item-price"]"]');
    this.addToCartButton = page.locator('//button[@data-test="add-to-cart"]"]');
   }

async checkUI(){
    await expect(this.page).toHaveTitle(/Swag Labs/);
    await expect (this.productImage).toBeVisible();
    await expect (this.productName).toBeVisible();
    await expect (this.productDescription).toBeVisible();
    await expect (this.productPrice).toBeVisible();
    await expect (this.addToCartButton).toBeVisible();
}

async confirmAddToCartButtonIsClickable(){
    await expect (this.addToCartButton).toBeEnabled();
}

async confirmThePriceIsCorrect(){
    let price = this.productPrice.innerText;
    await expect (price).not.toBe(null)
    await expect (price).not.toBe('$1.00')
    await expect (price).not.toBe('-$29.99')
}

async clickAddToCart(){
    this.addToCartButton.click();
}

}

export default ProductDetailsPage;