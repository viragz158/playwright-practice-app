import { Page } from '@playwright/test';
export class FormLayoutPage {
    readonly page: Page;
    readonly formLayoutTitle: any;

    constructor(page) {
        this.page = page;
        // this.page.locator('.nb-card-header').textContent();
        // this.formLayoutTitle = this.page.locator('nb-card-header').first().textContent();
    }
    
}

