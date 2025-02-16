import { test, expect } from '@playwright/test';

test.describe('test suite', () => {

    test('first test', async ({page}) => {
       await page.goto('http://localhost:4200/')
       await page.getByText('Forms').click()
       await page.getByText('Form Layout').click()
    });
})