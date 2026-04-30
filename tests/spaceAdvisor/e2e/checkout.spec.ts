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
    test('Purchase a Solo Traveler Package', async ({ page }) => {
        await onDestinationCatalog.selectDestination(1)
        await onCheckoutForm.completeCheckoutForm
        await onCheckoutForm.confirmOrderSummaryUI
        await onCheckoutForm.agreeToTerms
        await onCheckoutForm.placeOrder
    });
    test('Purchase Trip w. Promo Code', async ({ page }) => {
        await onDestinationCatalog.selectDestination(2)
        await onCheckoutForm.completeCheckoutForm
        await onCheckoutForm.enterPromoCode
        await onCheckoutForm.confirmOrderSummaryUI
        await onCheckoutForm.agreeToTerms
        await onCheckoutForm.placeOrder
    });
    test.skip('Purchase a family Package', async ({ page }) => {
    //TODO FIX TEST - Date script is borked!
        onDestinationSelection.selectDateDeparting()
        await onDestinationSelection.selectDateReturning
        await onDestinationSelection.selectFamily()
        await onDestinationCatalog.selectDestination(3)
        await onCheckoutForm.completeCheckoutForm
        await onCheckoutForm.confirmOrderSummaryUI
        await onCheckoutForm.confirmTotal
        await onCheckoutForm.agreeToTerms
        await onCheckoutForm.placeOrder
    });
    test('Purchase a Package Based on Launch Criteria', async ({ page }) => {
        await onDestinationFilters.selectPlanetByName
        await onDestinationCatalog.selectDestination(1)
        await onCheckoutForm.completeCheckoutForm
        await onCheckoutForm.confirmOrderSummaryUI
        await onCheckoutForm.confirmTotal
        await onCheckoutForm.agreeToTerms
        onCheckoutForm.placeOrder
    });
    test('Purchase a Package Based on Color Preferences', async ({ page }) => {
        await onDestinationFilters.selectPlanetByColor
        await onDestinationCatalog.selectDestination(1)
        await onCheckoutForm.completeCheckoutForm
        await onCheckoutForm.confirmOrderSummaryUI
        await onCheckoutForm.confirmTotal
        await onCheckoutForm.agreeToTerms
        await onCheckoutForm.placeOrder
    });
    test('Purchase a Package Based on Price', async ({ page }) => {
        await onDestinationFilters.selectPlanetByPrice
        await onDestinationCatalog.selectDestination(1)
        await onCheckoutForm.completeCheckoutForm
        await onCheckoutForm.confirmOrderSummaryUI
        await onCheckoutForm.confirmTotal
        await onCheckoutForm.agreeToTerms
        await onCheckoutForm.placeOrder
    });
    test('Purchase A Package, Incomplete Checkout', async ({page}) =>{
        await onDestinationCatalog.selectDestination(1)
        await onCheckoutForm.submitIncompleteCheckoutForm
        await onCheckoutForm.confirmRequiredValidationErrorsAreShown
        await onCheckoutForm.confirmCheckoutIsBlocked
    });
});