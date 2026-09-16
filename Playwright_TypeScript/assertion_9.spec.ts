import { expect, test } from '@playwright/test'

test('Locator Create Individials Assignment 3', async ({ page }) => {
    await page.goto('https://leafground.com/input.xhtml')

    //validate a Disabled TextBox with Assertion
    const placeHold =  page.locator('//input[@placeholder="Disabled"]')
    await expect(placeHold).toBeDisabled()

    //Validate Enabled and Editable with Assertion //CLARIFICATION
    const nameText = page.locator('//div[@class="grid formgrid"]//input[1][@placeholder="Babu Manickam"]')
    //await nameText.waitFor({ state: 'visible', timeout: 5000 })
    await expect(nameText).toBeEnabled()
    await expect(nameText).toBeEditable()

    await nameText.fill('Tresa')
    

    //Soft Assertion //HOW SOFT ASSERTION WORKS? THROWS ERROR
    const softAss = page.locator('//input[@value="Chennai"]')
    //await expect(softAss).toBeDisabled()
    await expect.soft(softAss).toBeDisabled()

    console.log("TO CHECK SOFT ASSERTION")

    // Fill Data
    const fillData = page.locator('//input[@value="Can you clear me, please?"]')
    await fillData.fill('')
    await fillData.fill('Playwright Learning')


})