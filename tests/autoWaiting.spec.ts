import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('Auto wait test using expect', async ({ page }) => {

    const successMsg = page.locator('.bg-success')
    const btnText = await successMsg.textContent()
  // Wait for the AJAX response to be loaded

  await expect(btnText).toEqual('Data loaded with AJAX get request.')

});

test('Wait with state', async ({ page }) => {
    
    // Waits for specific element state
    await page.locator('.bg-success').waitFor({ state: 'visible' });
    const text = await page.locator('.bg-success').textContent();
    expect(text).toBe('Data loaded with AJAX get request.');
  });

  test('Wait with custom timeout', async ({ page }) => {
    // Sets custom timeout for the assertion
    await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.', { timeout: 16000 });
  });

  test('Wait using locator', async ({ page }) => {

    // Automatically waits for element to be visible
    const text = await page.locator('.bg-success').textContent();
    expect(text).toBe('Data loaded with AJAX get request.');
  });