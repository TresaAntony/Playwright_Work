import { expect, test } from '@playwright/test'

test('Locator Create Individials Assignment 3', async ({ page }) => {
    await page.goto('https://login.salesforce.com')

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    //await page.waitForTimeout(2000)
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    await page.locator('[title="App Launcher"]').click()

    await page.locator('[aria-label="View All Applications"]').click()

    await page.locator('a[class="al-tab-item"][href="/lightning/o/Individual/home"]').click()

    // await page.locator('slds-assistive-text', {hasText: 'Individuals List'}).click()

    const dropdownArrow = page.locator('a[title="Individuals"] + one-app-nav-bar-item-dropdown a[role="button"]')

    await dropdownArrow.click()

    const newIndividualBtn = page.locator('span.slds-truncate', { hasText: 'New Individual' })

    await expect(newIndividualBtn).toBeVisible()
    await newIndividualBtn.click()

    const lastName = "Bjiunka"
    await page.locator('//input[@placeholder="Last Name"]').fill(lastName)
    await page.locator('//button[@title="Save"]/span[text()="Save"]').click()
    
    const individualCreated = page.locator(`//div[@title="${lastName}"]/preceding::div[1][text()="Individual"]`)
    console.log(await individualCreated.textContent());

    await expect(individualCreated).toBeVisible({timeout:5000})

    console.log("New Individual Created")
    //div[@title=${}]/span[@class="uiOutputText"]/preceding::div[1][text()="Individual"]

})