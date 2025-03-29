
import { Page } from '@playwright/test';


export class NavigationPage{

    readonly page: Page;

    constructor(page) {
        this.page = page;
    }

    async navigateToFormLayout() {
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layout').click()
    }
} 