import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await expect(page).toHaveURL(/.*intro/)
});

test.only('check JAVA page', async ({ page }) => {
  let getStartedLink = page.getByRole('link', {name: 'Get started'})
  let nodeButton = page.getByRole('button', {name: 'Node.js'})
  let navLink = page.getByRole('navigation', {name: 'Main'}).getByText('Java')
  const javaDescription = "Playwright is distributed as a set of Maven modules."
  
  await page.goto('https://playwright.dev/');
  await getStartedLink.click()
  await nodeButton .hover();
  await navLink.click();

  await expect(page).toHaveURL('https://playwright.dev/java/docs/intro')
  await expect(page.getByText('Installing Plawright', {exact:true})).not.toBeVisible()
  await expect(page.getByText(javaDescription )).toBeVisible()

})
