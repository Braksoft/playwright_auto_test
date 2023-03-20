import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  const url = 'https://the-internet.herokuapp.com/';

  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('The Internet!!');
});

test('add new element', async ({ page }) => {
  const url = 'https://the-internet.herokuapp.com/';

  await page.goto(url);

  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();

  // Expect a text "Delete" -  use Xpath.
  await expect(page.locator('//*[@id="elements"]/button')).toHaveText('Delete');

});

test.only('delete element', async ({ page }) => {
  const url = 'https://the-internet.herokuapp.com/';

  await page.goto(url);

  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).first().click();

  // Expect a return result= 1.
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1)
});