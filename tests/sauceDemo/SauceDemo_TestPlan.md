# Test Plan

## Sauce Demo - Swag Labs E-Commerce Web Application

URL - <https://www.saucedemo.com/>

GOAL - Build out an end-to-end test suite with typescript

## SCOPE

The purpose of this plan is to describe in detail, the scope of testing and the different activities performed therein for Swag Labs.

Swag Labs - an extension of SauceDemo.com - is a demo e-commerce application. An active customer (authenticated user) will experience the full breadth and depth of online purchasing as they will be presented with an array of products they can purchase to their liking.

Payment options will be limited, as are the collection of billing and shipping information.
Transactions are not real so there is no risk of making an actual purchase or being charged.

## DELIVERABLE(S)

### Automation Test Suite for the following features

   1. Log in - User authenticates to app
   2. Catalog / Product List Page - User selects item > adds to cart
   3. Filter by Name - User can redisplay PLP, sorted Alphabetically
   4. Product Details Page - not expected
   5. Cart - User selects item for purchase > click icon to View Cart
   6. View Cart - User can see their item purchased and opt to continue or remove item
   7. Customer Info. - User is prompted to enter their Name (First, Last) and Zipcode
   8. Purchase Overview - User is presented with a summary of their purchase for final confirmation (incl. Payment info, shipping info, total price
   9. Order Confirmation - User is presented with a success message upon submission of order
   10. Menu - User can navigate to other sections of the app like - About Page, View Items, Log Out
