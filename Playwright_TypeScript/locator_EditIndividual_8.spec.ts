import { expect, test } from '@playwright/test'

test('Locator Edit Individual', async ({ page }) => {

    await page.goto('https://login.salesforce.com')

    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('#Login').click()
    //await page.waitForTimeout(2000)
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('a[class="al-tab-item"][href="/lightning/o/Individual/home"]').click()

    await page.locator('//a[@title="Individuals"]').click()
    await page.locator('//input[@name="Individual-search-input"]').fill('sadsd')
    await page.locator('//input[@name="Individual-search-input"]').press('Enter')

    // await page.locator('//span[@class="slds-assistive-text" and text()="Show more actions"]').click()
    //await page.locator('//ul[@class="oneActionsRibbon"]//div[@class="uiMenu"]').click() 

    //const menu = page.locator('//ul[contains(@class, "oneActionsRibbon")]//div[contains(@class, "uiMenu")]')
   // await menu.waitFor({ state: 'visible' })
    //await menu.click()

    // If it's a button with text or an aria-label
    //const hoverButton= page.getByRole('button', { description: 'Show 2 more actions' })

    const hoverButton= page.locator('//td[@data-col-key-value="6-lstListViewRowLevelAction-6"]')
    await expect(hoverButton).toBeVisible()
    await hoverButton.hover()
    await hoverButton.click()
    await page.locator('//a[@class="highlightButton" and @title="Edit"]').click()

    await page.locator('//div[@class="uiPopupTrigger" and @data-interactive-uid="2"]').fill('Mr.')

    const firstName = "Pra"

    await page.locator('//input[@placeholder="First Name"]').fill(firstName)

    await page.locator('//button[@title="Save"]/span[text()="Save"]').click()

    const individualEdited = page.locator(`//a[@class="slds-truncate"][contains(@title="${firstName}")]`)
    console.log(await individualEdited.textContent());

    await expect(individualEdited).toBeVisible({ timeout: 5000 })

    console.log("Searched Individual Edited")

})