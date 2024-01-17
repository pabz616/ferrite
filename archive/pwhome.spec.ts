import {test, type Page } from '@playwright/test'
import { HomePage } from './pages/pwHomePage';
import { TopMenuPage } from './pages/pwTopMenuPage';

const URL = 'https://playwright.dev/'
const getStartedUrl = /.*intro/;

let onHomePage: HomePage;
let onNavBar: TopMenuPage;

test.beforeEach(async ({page}) => {
    await page.goto(URL);
    onHomePage = new HomePage(page);
    onNavBar = new TopMenuPage(page);
})

test.describe('Playwright Website', () =>{
    test('has title', async () => {
        await onHomePage.assertPageTitle();
    });

    test('get started link', async ({page}) => {
        await onHomePage.clickGetStarted();
        await onNavBar.assertPageUrl(getStartedUrl);
    });

    test ('check Java page', async ({page}) => {
        await test.step('Act', async() =>{
            await onHomePage.clickGetStarted();
            await onNavBar.hoverNode();
            await onNavBar.clickJava();
        })

        await test.step('Assert', async() =>{
            await onNavBar.assertPageUrl(getStartedUrl);
            await onNavBar.assertNodeDescriptionNotVisible();
            await onNavBar.assertJavaDescriptionVisible();
        })
    });

});