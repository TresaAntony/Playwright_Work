
import { test } from "@playwright/test"

test('Basic CSS Selector', async ({ page }) => {

/**
 * aria-label
 * Id ----> use #
 * Name
 * Class -----> use .
 * attribute value ----> input[id="username"]
 */
    await page.goto("https://login.salesforce.com/")
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('[name="Login"]').click()

    await page.locator('[id="password"]').fill('TestLeaf@2025')
    await page.locator('#Login').click()

    //TO LOAD THE PAGE FULLY WAIT AND TO GET TITLE
    await page.waitForLoadState("domcontentloaded")
    await page.waitForTimeout(3000)
    let pageTitle = await page.title() //This shows Promise so await is required
    console.log("TITLE : ", pageTitle);

    //let pageUrl = await page.url() //This DOES NOT shows Promise so await is not required
    let pageUrl = page.url()
    console.log("Page Url is :", pageUrl);

}

)