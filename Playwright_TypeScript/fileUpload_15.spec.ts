import {expect, test} from '@playwright/test'
import path from 'path'
test('File upload',async({page})=>{

    await page.goto('https://login.salesforce.com/')
    await page.locator('#username').fill('tresa.ch5.a4fc6bc07bcb@agentforce.com')
    await page.locator('#Login').click()
    //await page.waitForTimeout(2000)
    await page.locator('#password').fill('Login@1111')
    await page.locator('#Login').click()
    await page.locator('[title="App Launcher"]').click()
    await page.locator('[aria-label="View All Applications"]').click()
    await page.locator('.slds-input').fill('Accounts')
    await page.locator('//mark[contains(text(),"Accounts")]').click()
    await page.locator('//div[@title="New"]').click()
    let nameValue = 'RR'
    await page.locator('//input[@name="Name"]').fill(nameValue)

    await page.getByRole('combobox',{name:'Rating'}).click()
    await page.locator('(//span[@part="input-button-value"])[1]').press('ArrowDown')
    await page.locator('(//span[@part="input-button-value"])[1]').press('ArrowDown')
    await page.locator('(//span[@part="input-button-value"])[1]').press('Enter')

    await page.getByRole('combobox',{name:'Type'}).click()
    await page.getByText('Prospect',{exact: true}).click()

    await page.getByRole('combobox',{name:'Industry'}).click()
    await page.getByText('Banking',{exact:true}).click()
    

    await page.getByRole('combobox',{name:'Ownership'}).click()
    await page.getByText('Public',{exact:true}).click()

    await page.locator('//button[@name="SaveEdit"]').click()

    await expect(page.getByText(/was created\./)).toBeVisible();

    /**
     * UPLOAD FILE
     */
    //Create the EVENT LISTNER

    let fileUpRef = page.waitForEvent('filechooser')
    await page.locator('//span[@part="button"]').click()
    const upload = await fileUpRef
    await upload.setFiles(path.join(__dirname, '../../Data/checkFileUpload.docx'))
    console.log("Directory name of Current spec file", __dirname);
    
    await page.locator('//span[@dir="ltr"]').click()
    await expect(page.getByText(/ file was added to the Account\./)).toBeVisible()

})