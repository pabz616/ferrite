import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class DestinationCatalog {
    readonly page: Page;
    readonly catalog: Locator;
    readonly loadMoreCTA: Locator;

    getImage(index: number) {
        return this.page.locator(`(//div[@class="theme__content___Fopuf"])${index}`);
    }

    getName(index: number){
        return this.page.locator(`(//div[contains(@class,"GalleryItem__cardTitle___3q1X_")])${index}`);
    }
    getDescription(index: number){
        return this.page.locator(`(//div[contains(@class,"GalleryItem__cardText___2NAwC")])${index}`);
    }
    getPrice(index: number){
        return this.page.locator(`(//span[contains(@class,"GalleryItem__price-tag___3q0Al")])${index}`);
    }
    getSelectButton(index: number){
        return this.page.locator(`(//button[contains(@class,"BookButton__accent___Y-Paf")])${index}`);
    }

    constructor(page: Page) {
        this.page = page;
        this.catalog = page.locator(locators.CATALOG);
        this.loadMoreCTA = page.locator(locators.CATALOG_CTA);
    }

async verifyCatalogUI() {
    await expect(this.catalog).toBeVisible();
    await expect(this.loadMoreCTA).toBeVisible();

        for (let i = 1; i < 7; i++) {
        await expect(this.getImage(i)).toBeVisible;
        await expect(this.getName(i)).toBeVisible;
        await expect(this.getDescription(i)).toBeVisible;
        await expect(this.getPrice(i)).toBeVisible;
        await expect(this.getPrice(i)).not.toHaveText('$0')
        await expect(this.getSelectButton(i)).toBeVisible;
        await expect(this.getSelectButton(i)).toBeEnabled;
        await expect(this.getSelectButton(i)).toHaveText('BOOK')
    }
  }

async selectDestination(index: number) {
    await this.getSelectButton(index).click();
    await expect(this.getSelectButton(index)).toHaveText('BOOKED')
  }
}
export default DestinationCatalog;