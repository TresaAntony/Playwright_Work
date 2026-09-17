import { expect, test } from '@playwright/test'

test('Locator Edit Lead Assignment 2', async ({ page }) => {

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByRole("textbox",{name:"Username"}).fill('Demosalesmanager')
    await page.getByLabel('Password').fill('crmsfa')
    //await page.getByRole("textbox",{name:'Password'}).fill('crmsfa')
    await page.getByRole("button",{name:'Login'}).click()

    //await page.locator('[id="button"]').click()
    await page.getByRole('link').filter({hasText:'CRM/SFA'}).click()

    await page.getByRole("link",{name:"Leads"}).click()
    await page.getByRole('link',{name:'Create Lead'}).filter({hasText:'Create Lead'}).click()

    await page.locator('#createLeadForm_companyName').fill('CTS')
    await page.locator('#createLeadForm_firstName').fill('Tresa')
    await page.locator('#createLeadForm_lastName').fill('Antony')
    await page.locator('#createLeadForm_personalTitle').fill('Mrs.')
    await page.locator('#createLeadForm_generalProfTitle').fill('QA Lead')
    await page.locator('#createLeadForm_annualRevenue').fill('15,00000')
    await page.locator('#createLeadForm_departmentName').fill('Testing')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('8087475636')
    await page.locator('.smallSubmit').click()






}
)