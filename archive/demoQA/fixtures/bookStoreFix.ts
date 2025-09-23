import { test as base } from '@playwright/test';
import BookStorePage from '../pages/bookStorePage';
import hooks from '../utils/hooks';
import pages from '../utils/pages';

type MyFixtures = {
  bookPage: BookStorePage;
}

export type Duplicate = {
  isDupe: boolean;
}

export const test = base.extend<MyFixtures & Duplicate>({

  isDupe: false, 

  bookPage: async ({ page, isDupe }, use) => {
    const bookPage = await hooks.beforeEach(page, BookStorePage, pages.bookStorePage);
    
    await use(bookPage);
    
    await bookPage.addToYourCollection(isDupe);
  },
});

export { expect } from '@playwright/test';