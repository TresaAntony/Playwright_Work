import { expect, test } from '@playwright/test'

test('Decathlon product', async ({ page }) => {

    await page.goto('https://www.decathlon.in/')

    //Verification - User navigation to Decathlon Home Page - Assertion
    let urlVerification = page.url()
    console.log("Title :", urlVerification);
    expect(urlVerification).toBe('https://www.decathlon.in/')
    console.log("User is navigated to Decathlon Home Page");

    //Verification - Searchbox to be Enabled - Assertion
    let searchboxVer = page.locator('//input[@type="search"]')
    expect(searchboxVer).toBeEnabled()
    await searchboxVer.click()

    await searchboxVer.fill('shoes')
    await searchboxVer.press('Enter')
    await page.waitForTimeout(2000)

    //Verification - Capture and print the page title
    await page.screenshot({ path: 'ScreenShot/Marathon/Decathlon/searchShoe.png' })
    let shoeSearchTitle = await page.title()
    console.log("Shoe Search Title :", shoeSearchTitle);
    expect(shoeSearchTitle).toBe("Search | shoes")

    //Select the Sports category as Running
    page.locator('//button[@aria-controls="sport_pratice_en"]').click()
    let sportRunning = page.getByRole('checkbox', { name: 'Running 29' })
    await expect(sportRunning).toBeEnabled()
    await sportRunning.click()

    //Select the Gender category as Men
    page.locator('//button[@aria-controls="gender_id_en"]').click()
    let genderMen = page.getByRole('checkbox', { name: 'Men 18' })
    expect(genderMen).toBeEnabled()
    await genderMen.click()

    //Select the Shoe Size category as UK 10.5
    page.locator('//button[@aria-controls="indian_size"]').click()
    let shoeSize = page.getByRole('checkbox', { name: 'Uk 10.5 - eu 45 1' })
    expect(shoeSize).toBeEnabled()
    await shoeSize.click()

    //Select the Most Relevant
    let mostRelevant = page.locator('//div[@class="relative"]//button')
    console.log(await mostRelevant.innerText())
    await mostRelevant.click()

    //Select the Price Low to High
    let price = page.getByRole('option', { name: 'Price (low → high)' })
    await price.click()

    //Select the first product
    await page.locator('//div[@data-test-id="product-card-content"]').first().click()

    //Select the size on product details
    //await page.getByRole('button', { name: 'Select size UK 10.5 - EU 45' }).click()
    await page.getByRole('button', { name: 'Select size 10.5' }).click()

    /*
        await page.evaluate(() => {
            setTimeout(() => { debugger; }, 4000);
        });
    */

    //Add to Cart
    await page.getByRole('button', { name: 'Add to cart' }).click()

    await expect(page.getByText('Product(s) added to cart')).toBeVisible({ timeout: 7000 })
    //await expect(page.getByText('Product(s) added to cart')).toBeVisible()
    console.log("Product added to Cart");

    await page.getByRole('button', { name: 'Close', exact: true }).click()
    await page.locator('[data-test-id="header-desktop:cart-icon"]').click()
    let totalValueLoc = page.locator('[data-test-id="cart:cart-checkout-total-cart-value"]')
    const totalValue = await totalValueLoc.innerText()
    console.log("Total Cart Amount Value :",totalValue);
})