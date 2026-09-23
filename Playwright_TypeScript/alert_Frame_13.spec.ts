import { expect, test } from '@playwright/test'
import { log } from 'node:console'
test("Alert and Frame", async ({ page }) => {

    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')

    /**
     * Outer Frame
     */
    let iframeElem = page.frameLocator('//iframe[@id="iframeResult"]')

    /**
     * Alert - to be handled before click
     */
    page.on('dialog', async (alert) => {

        let alertType = alert.type()
        console.log("Alert type is :",alertType);

        let alertMessage = alert.message()
        console.log("Alert message is :",alertMessage);

        await alert.accept()

    })

    await iframeElem.locator('//button[text()="Try it"]').click()

    /**
     * Verify text
     */
    let alerText = iframeElem.locator('#demo')
    const afterClick = await alerText.innerText()
    console.log(afterClick);

    expect (alerText).toHaveText('You pressed OK!')
})