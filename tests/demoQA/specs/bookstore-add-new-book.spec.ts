//USING DYNAMIC POM

import { test } from '@playwright/test';
import BookStorePage from '../../demoQA/pages/bookStorePage';
import hooks from '../utils/hooks';
import pages from '../utils/pages';

let onBookStorePage: BookStorePage;

test.beforeEach(async ({ page }) => {
    onBookStorePage = await hooks.beforeEach(page, BookStorePage, pages.bookStorePage);
});
  
test.describe('Books - Dynamic Page Object Model', () => {
    test('Add brand new book', async () => { 
        await onBookStorePage.clickAtSpeakingJSBook();
        await onBookStorePage.checkSpeakingJSIsbn();
    });
});