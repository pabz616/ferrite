import { type Page, type Locator , expect } from '@playwright/test';

class CartPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly quantityLabel: Locator;
    readonly descriptionLabel: Locator;
    readonly productQuantity: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly removeButton: Locator;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.locator('//span[@data-test="title"]');
        this.quantityLabel = page.locator('//div[@data-test="cart-quantity-label"]');
        this.descriptionLabel = page.locator('//div[@data-test="cart-desc-label"]');
        this.productQuantity = page.locator('//div[@data-test="item-quantity"]');
        this.productName = page.locator('//div[@data-test="inventory-item-name"]');
        this.productDescription = page.locator('//div[@data-test="inventory-item-desc"]');
        this.productPrice = page.locator('//div[@data-test="inventory-item-price"]');
        this.removeButton = page.locator('//button[contains(.,"Remove")]');
        this.continueShoppingButton = page.locator('//button[contains(.,"Continue Shopping")]');
        this.checkoutButton = page.locator('//button[contains(.,"Checkout")]');
    }


async checkUI(){
    await expect(this.pageTitle).toBeVisible;
    await expect(this.quantityLabel).toBeVisible;
    await expect(this.descriptionLabel).toBeVisible;
    await expect(this.productQuantity).toBeVisible;
    await expect(this.productName).toBeVisible;
    await expect(this.productDescription).toBeVisible;
    await expect(this.productPrice).toBeVisible;
    await expect(this.removeButton).toBeVisible;
    await expect(this.continueShoppingButton).toBeVisible;
    await expect(this.checkoutButton).toBeVisible;
  }

async checkCopy(){
    let cartPageTitle = this.pageTitle.innerText
    let qtyLabel = this.quantityLabel
    let descLabel = this.descriptionLabel
    
    await expect(cartPageTitle).toBe('Your Cart');
    await expect(qtyLabel).toBe('QTY');
    await expect(descLabel).toBe('DESCRIPTION');
}


async confirmButtonsAreActionable(){
    await expect(this.removeButton).toBeEnabled;
    await expect(this.continueShoppingButton).toBeEnabled;
    await expect(this.checkoutButton).toBeEnabled; 
  }

async clickContinueShopping(){await this.continueShoppingButton.click()}

async clickCheckout(){await this.checkoutButton.click()}

async clickRemoveItem(){await this.removeButton.click()}

}

export default CartPage;