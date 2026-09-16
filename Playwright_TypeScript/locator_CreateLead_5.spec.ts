import { expect, test } from '@playwright/test'

test('Locator Create Lead Assignment 1', async ({ page }) => {
    await page.goto('https://login.salesforce.com')

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    //await page.waitForTimeout(2000)
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    await page.locator('[title="App Launcher"]').click()

    await page.locator('[aria-label="View All Applications"]').click()

    await page.locator('one-app-launcher-app-tile[data-name="Sales"]').click()

    await page.locator('one-app-nav-bar-item-root>a[title="Leads"]').click()

    await page.locator('div[title="New"]').click()

    await page.locator('button[aria-label="Salutation"]').click()

    await page.locator('lightning-base-combobox-item[data-value="Mr."]').click()

    await page.locator('input[class="slds-input"][placeholder="Last Name"]').fill("Venkat")

    let lastName = await page.locator('input[class="slds-input"][placeholder="Last Name"]').inputValue();
    console.log("lastName:", lastName);

    await page.locator('input[name="Company"]').fill("Polaris")

    await page.locator('[name="SaveEdit"]').click()

    let primaryField = page.locator('lightning-formatted-name[slot="primaryField"]')

    await expect(primaryField).toContainText(lastName); // Locator Assertion

    console.log("Title Name :", await primaryField.textContent());

})