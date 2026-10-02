import { expect, test } from '@playwright/test'
import path from 'path'

test.use(
    {
        storageState: 'Data/sfloginNew.json'
    }
)

test('Sales Force - Marketing - Create Lead', async ({ page }) => {
    /*
        await page.goto('https://login.salesforce.com/')
        await page.locator('#username').fill('tresa.ch5.a4fc6bc07bcb@agentforce.com')
        await page.locator('#Login').click()
        //await page.waitForTimeout(2000)
        await page.locator('#password').fill('Login@1111')
        await page.locator('#Login').click()
    */

    /**
     * Code to Skip Login because of OTP verification for each time
     */
    //await page.goto("https://orgfarm-d9bc8777dc-dev-ed.develop.lightning.force.com/lightning/n/devedapp__Welcome")
    await page.goto("https://orgfarm-d9bc8777dc-dev-ed.develop.lightning.force.com/lightning/page/home")
    await page.waitForLoadState('domcontentloaded')
    console.log(await page.title());


    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('.slds-input').fill('Marketing')
    await page.locator('//mark[contains(text(),"Marketing")]').click()
    await page.locator('//span[contains(text(),"Leads")]').first().click()
    let totalLead = await page.locator('//p[@class="slds-text-align_left kpiDisplayText"]').first().innerText()
    console.log("Total Leads :", totalLead);

    /**
     * New Lead Creation
     */
    await page.locator('//span[contains(text(),"Leads List")]').click()
    await page.getByRole('menuitem', { name: 'New Lead' }).click()

    await page.getByRole('combobox', { name: 'Salutation' }).click()
    await page.getByText('Mrs.', { exact: true }).click()
    let salutationValue = await page.getByRole('combobox', { name: 'Salutation' }).innerText()
    console.log("Salutation :", salutationValue);

    await page.getByRole('textbox', { name: 'First Name' }).fill('Tresa')
    let firstNameValue = await page.getByRole('textbox', { name: 'First Name' }).inputValue()
    console.log("First Name :", firstNameValue);

    await page.getByRole('textbox', { name: 'Last Name' }).fill('Antony')
    let lastNameValue = await page.getByRole('textbox', { name: 'Last Name' }).inputValue()
    console.log("Last Name :", lastNameValue);

    await page.getByRole('textbox', { name: 'Company' }).fill('CNA Company')
    let companyValue = await page.getByRole('textbox', { name: 'Company' }).inputValue()
    console.log("Last Name :", companyValue);

    await page.getByRole('button', { name: 'Save', exact: true }).click()
    /*
        await page.evaluate(() => {
            setTimeout(() => { debugger; }, 4000);
        });
        
    */

    /**
     * To verify Created Success Message
     */
    //await expect(page.locator('//div[@class="slds-hyphenate"]')).toContainText(`Lead "${salutationValue} ${firstNameValue} ${lastNameValue}" was created.`);

    let createMsg = await page.locator('//div[@class="slds-hyphenate"]').innerText()
    console.log("Message displays :", createMsg);
    expect(createMsg).toContain(`Lead "${salutationValue} ${firstNameValue} ${lastNameValue}" was created.`)

    let leadDetails = page.locator('//slot[@name="primaryField"]')
    let enteredLeadDetails = await leadDetails.innerText()
    console.log("Name of the Lead is :", enteredLeadDetails);
    await expect(leadDetails).toHaveText(`${salutationValue} ${firstNameValue} ${lastNameValue}`)
    console.log("Lead got created successfully");

    /**
     * Convert Lead to Opportunity, Contact, and an Account.
     */

    await page.getByRole('button', { name: 'Show more actions' }).click()
    await page.getByText('Convert', { exact: true }).isVisible()
    await page.getByText('Convert', { exact: true }).click()

    /**
     * Convert Lead Dialog - Edit the Opportunity
     */
    let newOpp = 'QA Senior Lead'
    await page.getByRole('button', { name: `${companyValue}-`, exact: true }).click()
    let oppButton = page.getByRole('textbox', { name: 'Opportunity Name *', exact: true })
    await oppButton.clear()
    oppButton.fill(newOpp)

    await page.getByRole('button', { name: 'Convert', exact: true }).click()
    let convertMsg = page.locator('//div[@class="title"]/h2')
    let convertMsgValue = await convertMsg.innerText()
    console.log(convertMsgValue);
    await expect(convertMsg).toHaveText('Your lead has been converted')

    await page.getByRole('button', { name: 'Go to Leads', exact: true }).click()
    await expect(page).toHaveTitle('Lead Intelligence View | Leads | Salesforce')

    /**
     * Search the verified Lead - lead should not be displayed 
     */

    await page.locator('//button[@aria-label="Search"]').click()
    await page.getByRole('combobox', { name: 'Search by object type', exact: true }).click()
    await page.locator('//span[@title="Leads"]').click()
    await page.locator('//input[@class="slds-input"]').click()
    await page.locator('//input[@class="slds-input"]').fill(`${firstNameValue} ${lastNameValue}`)


    await page.locator('//input[@class="slds-input"]').press('Enter')

    //await expect(page.locator('//div[@role="region"]/div/div')).toContainText(`No results for "${searchValue}" in Leads`)
    let noLeadVerification = page.getByText(`No results for "${firstNameValue} ${lastNameValue}" in Leads`)
    await expect(noLeadVerification).toBeVisible()
    let noLeadText = await noLeadVerification.innerText()
    console.log(noLeadText);

    /**
     * Click on Opportunity and Verify
     */

    await page.locator('//span[@class="slds-truncate"]').getByText('Opportunities', { exact: true }).click()

    let oppSearch = page.locator('//input[@name="Opportunity-search-input"]')
    await oppSearch.click()
    await oppSearch.fill(`${newOpp}`)
    await oppSearch.press('Enter')

    let oppName = await page.locator('//th[@class="slds-cell-edit"]').allInnerTexts()
    console.log("Total # of opportunities:", oppName.length);
    let countExact = 0
    let countComb = 0
    for (let index = 0; index < oppName.length; index++) {
        const element = oppName[index];
        console.log(element);

        if (element === newOpp) {
            countExact++
            console.log("Lead converted Opportunity is present - Exact match")
            //await page.locator(`//span[contains(text(),${newOpp})]`).first().click()
            await page.locator('span').getByText(newOpp).first().click()
            break;
        }
        else if (element.includes(newOpp)) {
            countComb++
        }
        else {
            countComb++
        }

    }

    //console.log(`Exact Matches for '${newOpp}': ${countExact}`)
    //console.log(`Other Matches : ${countComb}`)
    if (countExact===0) {
        throw new Error(`Test Failed: Lead converted, but the exact opportunity ${newOpp}' was NOT present in the list.`);
    }

    await expect(page.locator('//lightning-formatted-text[@slot="primaryField"]')).toHaveText(`${newOpp}`)

    /**
     * 
     */
})