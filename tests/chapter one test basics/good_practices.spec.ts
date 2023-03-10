import { test, expect } from '@playwright/test';

test.only('has title', async ({ page }) => {
  const url = "https://the-internet.herokuapp.com/";

  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("The Internet");
});

test('has ', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

