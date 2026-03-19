import { test } from '@playwright/test';
import testData from '../utils/testData';
import DestinationCatalog from '../pages/destinationCatalog';
import CheckoutModule from '../pages/destinationPurchase';

let onDestinationCatalog: DestinationCatalog;
let onCheckoutForm: CheckoutModule


test.beforeEach( async ({ page }) => {
  await page.goto(testData.sa_URL);
  onDestinationCatalog = new DestinationCatalog (page);
  onCheckoutForm = new CheckoutModule(page);

});
test.describe('Space Advisor - Checkout Flow', () => {
    test('Confirm Travel Catalog UI Elements', async ({ page }) => {
        onDestinationCatalog.verifyCatalogUI();
    });
    test('Purchase a Solo Traveler Package', async ({ page }) => {
        onDestinationCatalog.selectDestination(1)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });

    test('Purchase a family Package', async ({ page }) => {};
    test('Purchase a Package Based on Launch Criteria', async ({ page }) => {};
    test('Purchase a Package Based on Color Preferences', async ({ page }) => {};
    test('Purchase a Package Based on Price', async ({ page }) => {};
};