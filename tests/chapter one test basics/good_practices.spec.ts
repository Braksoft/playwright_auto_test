import { test, expect } from '@playwright/test';

test.beforeEach(async ({page})=> {
  const url = 'https://the-internet.herokuapp.com/';
  await page.goto(url);

})

test('has title', async ({ page }) => {
  // Expect a title "The Internet!!" 
  await expect(page).toHaveTitle('The Internet!!');
});

test('add new element', async ({ page }) => {
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();

  // Expect a text "Delete" -  use Xpath.
  await expect(page.locator('//*[@id="elements"]/button')).toHaveText('Delete');
});

test('delete element', async ({ page }) => {
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).first().click();

  // Expect a return result= 1. --here you can look for another method
  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(1)
});

test.only('basic auth', async ({ page }) => {
  await page.getByRole('link', { name: 'Basic Auth' }).click();
  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  // Expect text on page after basic auth "Congratulations! You must have the proper credentials."
  await expect (page.getByText('Congratulations! You must have the proper credentials.')).toHaveText("Congratulations! You must have the proper credentials.");
});

