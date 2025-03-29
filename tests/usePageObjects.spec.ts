import { test, expect } from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutPage } from '../page-objects/FormLayoutPage';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test('navigate to form layout', async({page}) => {
    const navigationPage = new NavigationPage(page);
    const formLayoutPage = new FormLayoutPage(page);
    
    await navigationPage.navigateToFormLayout();
    // const title = await page.locator('nb-card-header').first().textContent();
    // console.log(title)
    // expect(formLayoutPage.formLayoutTitle).toEqual('Inline form');
})