import { test, expect } from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Forms').click()
    await page.getByText('Form Layout').click()
})


test.describe('test suite', () => {

    test('Locator syntax rules', async ({page}) => {
        //by tage name
        page.locator('input')
        //by id
        page.locator('#inputEmail1')
        // by class
        page.locator('.shape-rectangle')
        // by attributes
        page.locator('[placeholder="Email"]')
        // by class value (full)
        page.locator('[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]')
        // by combining the selectors
        page.locator('input[placeholder="Email"]')

        //by xpath
        page.locator('//*[@id="inputEmail]')

        // by partial text
        page.locator(':text("Using")')

        //by full text
        page.locator(':text("Using the Grid")')
    });



    test('user facing locators', async ({page}) => {
       await page.getByRole('textbox', {name: 'Email'}).first().click();
    await page.getByRole('button', {name: 'Sign in'}).first().click();
    await page.locator('nb-checkbox', {hasText: 'Remember me'}).first().click();
    // await page.getByRole('link', {name: 'Forgot Password?'}).click();
    // await page.getByRole('combobox', {name: 'Country'}).selectOption('USA');
    // await page.getByRole('radio', {name: 'Male'}).check();
    // await page.getByRole('heading', {name: 'Login Form'}).isVisible();
    // await page.getByRole('alert', {name: 'Error'}).isVisible();
    // await page.getByRole('img', {name: 'User Avatar'}).isVisible();  -- different examples
    });

// getByTestId will only work if tge element have this attribute set

    // test('working with data test id', async ({page}) => {
    //     // Using getByTestId to interact with elements
    //     await page.getByTestId('email-input').fill('test@example.com');
    //     await page.getByTestId('password-input').fill('securePassword123');
    //     await page.getByTestId('login-button').click();
    
    //     // Asserting visibility of an element with data test id
    //     await expect(page.getByTestId('welcome-message')).toBeVisible();
    
    //     // Checking the text content of an element with data test id
    //     const messageText = await page.getByTestId('status-message').textContent();
    //     expect(messageText).toBe('Login successful');
    // }); 
    // The above will fail as the website needs to have the data-testid set for the elements
    
    test('Reusing the locators', async ({page}) => {
        // await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).fill('test@test.com')
       const basicForm = await page.locator('nb-card').filter({hasText: "Basic form"})
       const email = basicForm.getByRole('textbox', {name: "Email"})
       
       await email.fill('test@test.com')
        await basicForm.getByRole('textbox', {name: "Password"}).fill('password')
        await basicForm.locator('nb-checkbox').click()
        await basicForm.getByRole('button').click()

        await expect(email).toHaveValue('test@test.com');
       
    });

    test('Extracting values', async ({page}) => {
        // await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).fill('test@test.com')
       const basicForm = await page.locator('nb-card').filter({hasText: "Basic form"})
       const buttonText = await basicForm.locator('button').textContent()
       expect(buttonText).toEqual('Submit')
       
       const radioBtnLabels = await page.locator('nb-radio').allTextContents
       expect(radioBtnLabels).toContain('Option 1')

       // input value

       const email = basicForm.getByRole('textbox', {name: 'Email'})
       await email.fill('test@test.com')
       const value = await email.inputValue()
       expect(value).toEqual('test@test.com')

       //place holder value assertion

       const placeholdervalue = await email.getAttribute('placeholder')
       expect(placeholdervalue).toEqual('Email')
       
    });

    test('Assertion types in PW', async ({page}) => {
        

        //General assertion
        const val = 5
        expect(val).toEqual(5)


       const basicFormBtn = await page.locator('nb-card').filter({hasText: "Basic form"}).locator('button')
       const buttonText = await basicFormBtn.textContent()
       expect(buttonText).toEqual('Submit')

       // locator assertion
       expect(basicFormBtn).toHaveText('Submit')
       
       // Soft assertion, the automation will still clcik the button even if the soft assertion fais
       expect.soft(basicFormBtn).toHaveText('Submit')
       await basicFormBtn.click()
       
    });
})
