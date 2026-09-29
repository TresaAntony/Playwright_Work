/**
 * FILE UPLOAD - To upload file 
 * if we have <input file> tag use below
 * <input type="file"> .setInputFiles('input[type="file"]',"path")
 * 
 * Event Listner : if we dont have input file tage go for below
 * filechooser  .setFiles()
 * 
 * //Relative Path - starts from Current location -- save the file inside a folder in the workspace and take
 * //Absolute Path - file can be anywhere , We should use path.join() - from config file
 */
import { expect, test } from '@playwright/test'
import path from 'path'

test('File Upload - Multiple Files', async ({ page }) => {
    await page.goto("https://www.leafground.com/file.xhtml")

    let fileUpload = page.locator('(//input[@type="file"])[2]')

    /**
     * RELATIVE PATH 
     */

    let filepath = [
        path.join('Data/home.jpg'),
        path.join('Data/test.jpeg')
    ]
    let noofFiles = await fileUpload.setInputFiles(filepath)
    page.waitForLoadState('domcontentloaded')
    console.log("No of File:", filepath.length);

    for (let index = 0; index < filepath.length; index++) {
        //const element = filepath[index];
        const fileLocator = page.locator('//div[@class="ui-fileupload-filename"]')
        let fileHomeUpload = await fileLocator.nth(index).innerText()
        console.log("File uploaded :", fileHomeUpload);
        
        //Retry Assertion
        expect(fileHomeUpload).toMatch(/home\.jpg|test\.jpeg/);
    }

})


