import { type Page, type Locator , expect } from '@playwright/test';
import locators from './locators';
import productData from '../data/productData';

class ProductListPage {
    readonly page: Page;
    readonly addToCartButton: Locator;
    
    getProductImage(id: number) {
        return this.page.locator(`//a[@data-test="item-${id}-img-link"]`);
    }
    getProductName(index: number){
        return this.page.locator(`(//div[@data-test="inventory-item-name"])${index}`);
    }
    getProductDescription(index: number){
        return this.page.locator(`(//div[@data-test="inventory-item-desc"])${index}`);
    }
    getProductPrice(index: number){
        return this.page.locator(`(//div[@data-test="inventory-item-price"])${index}`);
    }
    getAddToCartButton(index: number){
        return this.page.locator(`(//button[@class="btn btn_primary btn_small btn_inventory "])${index}`);
    }

    constructor(page: Page) {
        this.page = page;
        this.addToCartButton = page.locator(locators.BTN_PLP_ADD_TO_CART)
    }
async confirmProductListUI(){
    for (let i = 1; i < 7; i++) {
        await expect(this.getProductImage(i)).toBeVisible;
        await expect(this.getProductName(i)).toBeVisible;
        await expect(this.getProductDescription(i)).toBeVisible;
        await expect(this.getProductPrice(i)).toBeVisible;
        await expect(this.getAddToCartButton(i)).toBeVisible;
    }
  }
async checkProductName(){
    let expectedProductName = "Sauce Labs t-shirt"
    let actualProductName = this.getProductName(6).innerText();
    await expect(actualProductName).toEqual(expectedProductName);

}

async selectAProduct(productName: string){
    await this.page.getByText(productName).click();
}
async checkProductCopy(){
   let actualCopy = this.getProductDescription(1).innerText();
   await expect(actualCopy).toEqual(productData.backpackDesc);
}
async confirmAddToCartButtonIsClickable(){
    for (let i = 1; i < 7; i++) {
    await expect(this.getAddToCartButton(i)).toBeEnabled;
    }
}
async checkProductPrice(){
    let actualPrice = this.getProductPrice(4).innerText();

    await expect(actualPrice).toEqual(productData.jacketPrice);

}
async clickAddToCart(){await this.addToCartButton.click()}
}




export default ProductListPage;