import { type Page, type Locator , expect } from '@playwright/test';

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
        this.addToCartButton = page.locator('//button[@id="add-to-cart-sauce-labs-backpack"]')
    }
async checkUI(){
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
async checkProductCopy(){
   let expectedCopy = "Carry all the things with this sleek, streamlined sly pack that melds uncompromising style with unequaled laptop and tablet protection."
   let actualCopy = this.getProductDescription(1).innerText();
   await expect(actualCopy).toEqual(expectedCopy);
}
async confirmAddToCartButtonIsClickable(){
        for (let i = 1; i < 7; i++) {
        await expect(this.getAddToCartButton(i)).toBeEnabled;
    }

}
async checkProductPrice(){
    let expectedPrice = "$49.99"
    let actualPrice = this.getProductPrice(4).innerText();
    console.log(actualPrice)
    await expect(actualPrice).toEqual(expectedPrice);

}
async clickAddToCart(){
    await this.addToCartButton.click()
}
}



export default ProductListPage;