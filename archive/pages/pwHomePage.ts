import {type Locator, type Page, expect} from "@playwright/test";

export class HomePage{
    //VARIABLES
    readonly page:Page;
    readonly getStartedButton: Locator;
    readonly title: RegExp;


    //CONSTRUCTOR
    constructor(page:Page){
        this.page = page;
        this.getStartedButton = page.getByRole('link', {name: 'Get started'})
        this.title = /Playwright/
    }

    //METHOD
    async clickGetStarted(){
        await this.getStartedButton.click();
    }

    async assertPageTitle(){
        await expect(this.page).toHaveTitle(this.title);
    }

}

export default HomePage;