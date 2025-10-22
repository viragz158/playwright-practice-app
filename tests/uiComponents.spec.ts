import { test, expect } from '@playwright/test';
var basicForm = 'test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    
})

test.describe(' forms layout page', () => {
    test.beforeEach(async({page}) => {
       
        await page.getByText('Forms').click()
        await page.getByText('Form Layout').click()
    })

    test('form input fields', async({page}) =>{
         const basicForm = await page.locator('nb-card').filter({hasText: "Using the Grid"})
        const emailInputField = basicForm.getByRole('textbox', {name: 'Email'})
            await emailInputField.fill('test@test.com')
            await emailInputField.clear()
            await emailInputField.pressSequentially('test@test.com')

            //generic assetion
            const val = await emailInputField.inputValue()
            expect(val).toEqual('test@test.com')

            //locator assertion
            expect(emailInputField).toHaveValue('test@test.com')
    })
})