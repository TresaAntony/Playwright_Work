/**
 * ALERT - Alerts are pop up or dialog bo
 * 
 * Model Alert - We can inspect the Alerts
    * Simple Alert - Ok
    * Confirmation Alert - Ok , Cancel
    * Prompt Alert - Ok Cancel , type
*
* NON-Model Alert - We can inspect the Alert
*   EventListner for Alert - 
*  page.on('dialog',async dialog =>{...})  - Listen and Handle all the Alerts
*  page.once() - Listen to only first occuring alert
 */

import { expect, test } from '@playwright/test'

test('Handle Alerts', async ({ page }) => {

    let msg = "Playwright"
    //Use EventListner to handle the Alert
    page.on('dialog', async (alert) => {


        let alerttype = alert.type()
        console.log(alerttype);

        let alertMessage = alert.message()
        console.log(alertMessage);

        await alert.accept(msg)
    })


    await page.goto("http://leafground.com/alert.xhtml")

    // await page.pause() 

    //PROMPT ALERT - Ok Cancel , type
    await page.locator('//span[text()="Show"]').nth(4).click()

    let confirmMsg = page.locator('#confirm_result')
    await expect(confirmMsg).toHaveText(`User entered name as: ${msg}`)

})