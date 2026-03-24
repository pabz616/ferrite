import { type Page, type Locator , expect } from '@playwright/test';
import locators from '../pageElements/locators';

class DestinationFilters {
    readonly page: Page;
    readonly filterModuleTitle: Locator;
    readonly filterModuleByline: Locator;
    readonly filterPlanetName: Locator;
    readonly planetName: Locator;
    readonly filterPlanetColor: Locator;
    readonly planetColor: Locator;
    readonly filterPriceRange: Locator;

    getRandomPlanetName(): string {
        const planets: string [] =['Madan', 'Shenji', 'Tongli', 'Flagstaff', 'Sant Cugat Del Valles', 'Shaheying', 'Tayabamba', 'Babahoyo', 'Cuozhou'];
        const randomIndex: number = Math.floor(Math.random() * planets.length);
        return planets[randomIndex];
    }
    
    getRandomPlanetColor(): string {
        const colors: string[] = ['Green', 'Red', 'Blue', 'Brown', 'Purple'];
        const randomIndex: number = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
   }

    constructor(page: Page) {
        const planetName: string = this.getRandomPlanetName();
        const planetColor: string = this.getRandomPlanetColor();
        this.page = page;
        this.filterModuleTitle = page.locator(locators.FILTER_MODULE_TITLE);
        this.filterModuleByline = page.locator(locators.FILTER_MODULE_BYLINE);
        this.filterPlanetName = page.locator(locators.FILTER_LAUNCH_SITE);
        this.planetName = page.locator(`//li[contains(.,"${planetName}}")]`)
        this.filterPlanetColor = page.locator(locators.FILTER_PLANET_COLOR);
        this.planetColor = page.locator(`//li[contains(.,"${planetColor}}")]`)
        this.filterPriceRange = page.locator(locators.FILTER_PRICE_RANGE);
    }

    async confirmDestinationFilterUI(){
        await expect(this.filterPlanetName).toBeVisible();
        await expect(this.filterPlanetColor).toBeVisible();
        await expect(this.filterPriceRange).toBeVisible();
    }

    async selectPlanetByName(){
        await this.filterPlanetName.click()
        await this.planetName.click()
    }

    async selectPlanetByColor(){
        await this.filterPlanetColor.click();
        await this.planetColor.click()
  }

  async selectPlanetByPrice(){
        await this.filterPriceRange.click()
  }
}

export default DestinationFilters;