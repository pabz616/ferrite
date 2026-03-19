import { test } from '@playwright/test';
import testData from '../utils/testData';
import DestinationCatalog from '../pages/destinationCatalog';

let onDestinationCatalog: DestinationCatalog;


test.beforeEach( async ({ page }) => {
  await page.goto(testData.sa_URL);
  onDestinationCatalog = new DestinationCatalog (page);

});
test.describe('Space Advisor - Checkout Flow', () => {
    test('Purchase a Solo Traveler Package', async ({ page }) => {
        onDestinationCatalog.verifyCatalogUI();
    };
    test('Purchase a family Package', async ({ page }) => {};
    test('Purchase a Package Based on Launch Criteria', async ({ page }) => {};
    test('Purchase a Package Based on Color Preferences', async ({ page }) => {};
    test('Purchase a Package Based on Price', async ({ page }) => {};
};