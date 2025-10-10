import { type Page, type Locator , expect } from '@playwright/test';
import productData  from '../data/productData.ts';

class OverviewPage {
    readonly page: Page;
    readonly pageTitle: Locator;
    readonly productQuantityLabel: Locator;
    readonly productDescriptionLabel: Locator;
    readonly productQuantity: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly paymentInformationLabel: Locator;
    readonly paymentInformationValue: Locator;
    readonly shippingInformationLabel: Locator;
    readonly shippingInformationValue: Locator;
    readonly productTotalLabel: Locator;
    readonly productTotalValue: Locator;
    readonly salesTax: Locator;
    readonly orderTotal: Locator;
    readonly cancel_button: Locator;
    readonly submit_button: Locator;



    constructor(page: Page) {
        this.page = page;
        this.pageTitle = page.getByTestId('title');
        this.productQuantityLabel = page.getByTestId('cart-quantity-label');
        this.productDescriptionLabel = page.getByTestId('cart-desc-label');
        this.productQuantity = page.getByTestId('item-quantity');
        this.productName = page.getByTestId('inventory-item-name');
        this.productDescription = page.getByTestId('inventory-item-desc');
        this.productPrice = page.getByTestId('inventory-item-price');
        this.paymentInformationLabel = page.getByTestId('payment-info-label');
        this.paymentInformationValue = page.getByTestId('payment-info-value');
        this.shippingInformationLabel = page.getByTestId('shipping-info-label');
        this.shippingInformationValue = page.getByTestId('shipping-info-value');
        this.productTotalLabel = page.getByTestId('total-info-label');
        this.productTotalValue = page.getByTestId('subtotal-label');
        this.salesTax = page.getByTestId('tax-label');
        this.orderTotal = page.getByTestId('total-label');
        this.cancel_button = page.getByTestId('cancel');
        this.submit_button = page.getByTestId('finish'); 
    }


async confirmPurchaseDetails(){
    //PAGE TITLE
    await expect(this.pageTitle).toBeVisible;
    await expect(this.pageTitle).toHaveText('Checkout: Overview')
    
    //ORDER DETAILS
    await expect(this.productQuantityLabel).toBeVisible;
    await expect(this.productQuantityLabel).toHaveText('QTY')

    await expect(this.productDescriptionLabel).toBeVisible;
    await expect(this.productDescriptionLabel).toHaveText('Description');

    await expect(this.productQuantity).toBeVisible;
    await expect(this.productQuantity).toHaveValue('1');

    await expect(this.productName).toBeVisible;
    await expect(this.productName).toHaveText(productData.backpackName);
    await expect(this.productDescription).toBeVisible;
    await expect(this.productDescription).toHaveText(productData.backpackDesc);
    await expect(this.productPrice).toBeVisible;
    await expect(this.productPrice).toHaveText(productData.backpackPrice);

    //PAYMENT DETAILS
    await expect(this.paymentInformationLabel).toBeVisible;
    await expect(this.paymentInformationLabel).toHaveText('Payment Information:');

    await expect(this.paymentInformationValue).toBeVisible;
    await expect(this.paymentInformationValue).toHaveText('SauceCard #31337');

    await expect(this.shippingInformationLabel).toBeVisible;
    await expect(this.shippingInformationLabel).toHaveText('Shipping Information:');

    await expect(this.shippingInformationValue).toBeVisible;
    await expect(this.shippingInformationValue).toHaveText('Free Pony Express Delivery!');

    await expect(this.productTotalLabel).toBeVisible;
    await expect(this.productTotalLabel).toHaveText('Price Total');

    await expect(this.productTotalValue).toBeVisible;
    await expect(this.productTotalValue).toHaveText('Item total: $29.99');
    
    await expect(this.salesTax).toBeVisible;
    await expect(this.salesTax).toHaveText('Tax: $2.40');
    
    await expect(this.orderTotal).toBeVisible;
    await expect(this.orderTotal).toHaveText('Total: $32.39');

    //ACTIONS
    await expect(this.cancel_button).toBeVisible;
    await expect(this.cancel_button).toHaveAttribute('name', 'cancel')
    await expect(this.cancel_button).toBeEnabled;

    await expect(this.submit_button).toBeVisible;
    await expect(this.submit_button).toHaveAttribute('name', 'finish');
    await expect(this.submit_button).toBeEnabled;
  }

async submitPurchase(){ await this.submit_button.click()}

async cancelPurchase(){ await this.cancel_button.click()}
}

export default OverviewPage;