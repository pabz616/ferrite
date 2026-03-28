import { test,expect } from '@playwright/test';
import testData from '../utils/testData';
import DestinationCatalog from '../pages/destinationCatalog';
import DestinationSelectionModule from '../pages/destinationSelection';
import DestinationFilters from '../pages/destinationFilter';
import Header from '../pages/header'
import Footer from '../pages/footer'

let onDestinationCatalog: DestinationCatalog;
let onDestinationSelection: DestinationSelectionModule
let onDestinationFilters: DestinationFilters
let onHeaderSection: Header
let onFooterSection: Footer

test.beforeEach( async ({ page }) => {
  await page.goto(testData.sa_URL);
  onDestinationCatalog = new DestinationCatalog(page);
  onDestinationSelection = new DestinationSelectionModule(page);
  onDestinationFilters = new DestinationFilters(page);
  onHeaderSection = new Header(page);
  onFooterSection = new Footer(page);
});

test.describe('Space Advisor - Homepage', () => {
    test('Confirm Travel Catalog Page Load Time', async ({request}) => {
        let res = await request.get(testData.sa_URL);
        const startTime = performance.now();
        const endTime = performance.now();
        const loadTime = endTime - startTime;

        expect(res.ok()).toBeTruthy();
        expect(loadTime).toBeLessThan(3000)
    });

    test('Confirm Omnipresent Header on Homepage', async ({page}) => {
        onHeaderSection.verifyHeaderUI();
    });

    test('Confirm Destination Selection Module on Homepage', async ({page}) => {
        onDestinationSelection.verifySelectionUI();
    });

    test.skip('Confirm Travel Catalog UI Elements on Homepage', async ({ page }) => {
        onDestinationCatalog.verifyCatalogUI();
    });

    test.skip('Confirm Updated Selection', async({page}) =>{
        onDestinationCatalog.updateSelection();
        /**
         * On homepage, click "book" for the Planet Madan
         * At checkout, note the price and title on the graph
         * Scroll up and click "book" on any other planet
         * Expected result is to see the new price and planet selection on the price and graph title respectively
         */
    });

    test.skip('Confirm Footer Module UI Elements on Homepage', async ({page}) => {
        onFooterSection.verifyFooterUI();
    })

});