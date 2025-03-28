import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    await page.getByText('Button Triggering AJAX Request').click()
})

test('Auto wait test', async ({ page }) => {

    const successMsg = page.locator('.bg-success')
    const btnText = await successMsg.textContent()
  // Wait for the AJAX response to be loaded

  await expect(btnText).toEqual('Data loaded with AJAX get request.')

});