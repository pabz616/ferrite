import { test } from '@playwright/test';
import testData from '../utils/testData';
import DestinationCatalog from '../pages/destinationCatalog';
import CheckoutModule from '../pages/destinationPurchase';
import DestinationSelectionModule from '../pages/destinationSelection';
import DestinationFilters from '../pages/destinationFilter';

let onDestinationCatalog: DestinationCatalog;
let onCheckoutForm: CheckoutModule
let onDestinationSelection: DestinationSelectionModule
let onDestinationFilters: DestinationFilters


test.beforeEach( async ({ page }) => {
  await page.goto(testData.sa_URL);
  onDestinationCatalog = new DestinationCatalog(page);
  onCheckoutForm = new CheckoutModule(page);
  onDestinationSelection = new DestinationSelectionModule(page)
  onDestinationFilters = new DestinationFilters(page);
});
test.describe('Space Advisor - Checkout Flow', () => {
    test.skip('Confirm Travel Catalog UI Elements', async ({ page }) => {
        onDestinationCatalog.verifyCatalogUI();
        //TODO FIX TEST - Locators are coming in undefined (?)
    });
    test('Purchase a Solo Traveler Package', async ({ page }) => {
        onDestinationCatalog.selectDestination(1)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
    test('Purchase Trip w. Promo Code', async ({ page }) => {
        onDestinationCatalog.selectDestination(2)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.enterPromoCode
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
    test.skip('Purchase a family Package', async ({ page }) => {
    //TODO FIX TEST - Date script is borked!
        onDestinationSelection.selectDateDeparting()
        onDestinationSelection.selectDateReturning
        onDestinationSelection.selectFamily()
        onDestinationCatalog.selectDestination(3)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.confirmTotal
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
    test('Purchase a Package Based on Launch Criteria', async ({ page }) => {
        onDestinationFilters.selectPlanetByName
        onDestinationCatalog.selectDestination(1)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.confirmTotal
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
    test('Purchase a Package Based on Color Preferences', async ({ page }) => {
        onDestinationFilters.selectPlanetByColor
        onDestinationCatalog.selectDestination(1)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.confirmTotal
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
    test('Purchase a Package Based on Price', async ({ page }) => {
        onDestinationFilters.selectPlanetByPrice
        onDestinationCatalog.selectDestination(1)
        onCheckoutForm.completeCheckoutForm
        onCheckoutForm.confirmOrderSummaryUI
        onCheckoutForm.confirmTotal
        onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
});