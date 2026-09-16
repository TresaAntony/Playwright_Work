import { expect, test } from '@playwright/test'

test('Locator Edit Lead Assignment 2', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")


    //await page.locator('input').nth(0).fill('democsr2')
    await page.locator('label+input').first().fill('democsr2') //SIBLING - relactionship

    await page.locator('input').nth(1).fill('crmsfa') // nth Concept

    await page.locator('input').nth(2).click() // nth Concept

    await page.locator('#button').click() //CSS selector

    await page.locator('[href="/crmsfa/control/leadsMain"]').click() //CSS selector

    await page.locator('[href="/crmsfa/control/createLeadForm"]').click() //CSS selector

    await page.locator('#createLeadForm_companyName').fill('TestLeaf') //CSS selector - # for id

    await page.locator('tbody tr td>input').nth(2).fill('Annila') //Parent Child

    await page.locator('tbody tr td>input#createLeadForm_lastName').fill('Bab') //Parent Child

    await page.locator('[name="submitButton"]').click()

    //const editLink = page.locator('div.frameSectionExtra a[href^="updateLeadForm"]', { hasText: 'Edit' })

    let editLink = page.locator('div.frameSectionExtra a[href^="updateLeadForm"]')

   // await page.waitForTimeout(2000)

    await expect(editLink).toBeVisible()
    await expect(editLink).toHaveText('Edit')

    await editLink.click();

    //await page.locator('#createLeadForm_companyName').clear()

    await page.locator('#updateLeadForm_companyName').fill('Infosys') //CSS selector - # for id

    await page.locator('[class="smallSubmit"][value="Update"]').click()
    
})