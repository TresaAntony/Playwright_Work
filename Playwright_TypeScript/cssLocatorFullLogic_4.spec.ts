
import { test } from "@playwright/test"


test('learn css selector', async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //await page.locator('input').nth(0).fill('democsr2')
    await page.locator('label+input').first().fill('democsr2') //SIBLING - relactionship

    await page.locator('input').nth(1).fill('crmsfa') // nth Concept

    await page.locator('input').nth(2).click() // nth Concept

    await page.locator('#button').click() //CSS selector

    await page.locator('[href="/crmsfa/control/leadsMain"]').click() //CSS selector

    await page.locator('[href="/crmsfa/control/createLeadForm"]').click() //CSS selector

    await page.locator('#createLeadForm_companyName').fill('TestLeaf') //CSS selector - # for id

    await page.locator('tbody tr td>input').nth(2).fill('Tresa') //Parent Child

    await page.locator('tbody tr td>input#createLeadForm_lastName').fill('Antony') //Parent Child and CSS Selector together

    await page.locator('#createLeadForm_marketingCampaignId').selectOption({ index: 8 }) //Select DropDown - Based on Index

    await page.locator('//input[@id="createLeadForm_personalTitle"]').fill('Mrs.') // Relative - Attribute Based Xpath

    await page.locator('//input[contains(@name,"ProfTitle")]').fill('QA Lead') // Relative - Partial Attribute Based Xpath

    await page.locator('//input[@id="createLeadForm_annualRevenue"]').fill('Rs.15,00000') // Relative - Attribute Based Xpath

    //Parent Child - All Child of tbody is tr td
    //Immediate Child of td>input
    //CSS Selector input with type [] and Id #

    await page.locator('tbody tr td>input[type="text"]#createLeadForm_departmentName').fill('Testing')

    //Parent Child - All Child of tbody is tr td
    //Immediate Child of td>input
    //CSS Selector input with Id # and Class .
    await page.locator('tbody tr td>input#createLeadForm_primaryPhoneNumber.inputBox').fill('8087546587')

    //.selectOption({value:"LEAD_DIRECTMAIL"})
    let noOfSourceID = page.locator('#createLeadForm_dataSourceId option').count() //Select DropDown - Based on Value
    console.log("noOfSourceID is :", await noOfSourceID);
    for (let i = 0; i < await noOfSourceID; i++) {
        // let sourceIDValue = await page.locator('#createLeadForm_dataSourceId').selectOption({index:i})
        let sourceIDValue = await page.locator('#createLeadForm_dataSourceId option').nth(i).textContent()
        console.log(sourceIDValue)
    }
    await page.locator('[name="submitButton"]').click()


}
)
