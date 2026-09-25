import { test } from '@playwright/test'

test('Window Handling', async ({ page, context }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.locator('#username').fill('demosalesmanager')
    await page.locator('#password').fill('crmsfa')
    await page.getByRole('button', { name: 'Login' }).click()

    await page.locator('.crmsfa').click()
    await page.locator('//a[contains(text(),"Leads")]').click()

    await page.locator('//a[contains(text(),"Merge Leads")]').click()

    //Event Listner before click action
    let pagePromise = context.waitForEvent('page')
    /**
     * FROM LEAD
     */
    await page.locator('(//img[@src="/images/fieldlookup.gif"])[1]').click()

    //Wait for child page to get loaded
    let childPageFieldLookUp = await pagePromise
    await childPageFieldLookUp.waitForLoadState('domcontentloaded')
    //Get child page title
    let childpageFieldTitle = await childPageFieldLookUp.title()
    console.log("Field Child Page Title :", childpageFieldTitle);

    let leadId = childPageFieldLookUp.locator('(//a[@class="linktext"])[1]')
    let firstLeadId = await leadId.innerText()
    console.log("First Lead ID :", firstLeadId);

    await leadId.click()

    //await page.bringToFront()

    let fromLead = page.locator('#ComboBox_partyIdFrom')
    let fromLeadValue = await fromLead.inputValue()

    console.log("From Lead text box containd Lead ID :", fromLeadValue);

    /**
     * TO LEAD
     */
    //Event Listner before click action
    let pagePromise2 = context.waitForEvent('page')


    await page.locator('(//img[@src="/images/fieldlookup.gif"])[2]').click()

    //Wait for child page to get loaded
    let childPageFieldLookUp2 = await pagePromise2
    await childPageFieldLookUp2.waitForLoadState('domcontentloaded')
    //Get child page title
    let childpageFieldTitle2 = await childPageFieldLookUp2.title()
    console.log("Field Child Page Title To Lead:", childpageFieldTitle2);

    let leadId2 =  childPageFieldLookUp2.locator('(//a[@class="linktext"])[6]')
    let toLeadId = await leadId2.innerText()
    console.log("To Lead ID :", toLeadId);

    await leadId2.click()

    //await page.bringToFront()

    let toLead = page.locator('#ComboBox_partyIdTo')
    let toLeadValue = await toLead.inputValue()

    console.log("To Lead text box containd Lead ID :", toLeadValue);

    /**
     * Event Listner for Popup
     */

    page.on('dialog', async (alert) => {

        let alertType = alert.type()
        console.log("Alert type is :", alertType);

        let alertMessage = alert.message()
        console.log("Alert message is :", alertMessage);

        await alert.accept()

    })
    await page.locator('.buttonDangerous').click()

    await page.waitForLoadState('domcontentloaded')
    let pageTitle = await page.title()
    console.log("Page Title :", pageTitle);
    await page.waitForTimeout(6000)

})