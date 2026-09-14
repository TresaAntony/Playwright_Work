
import { test } from "@playwright/test"

/**
 * SELECT DROP DOWN <select><option
 * Select By Value
 * Select by Label
 * Select by Index
 * 
 */


test('learn css selector', async ({ page }) => {

    //http://leaftaps.com/opentaps/control/main
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('[class = "ui-selectonemenu"]').selectOption({ label: "selenium" })
    await page.locator('[class = "ui-selectonemenu"]').selectOption({ index: 2 })

    // Has all drop down values
    let ddvalues = page.locator('[class = "ui-selectonemenu"]>option')
    //dropdown Count
    let ddCount = await ddvalues.count()
    console.log(ddCount)

    //for loop used for iteration
    for (let index = 0; index < ddCount; index++) {
        console.log(ddvalues.nth(index).innerText);
    }
}

)

/**
 * CUSTOM OPTION
 * 
 * For custom option we should go for .click
 * Instead of<select> tag we will also have custom tags for drop down that time use this option
 */
test .only('learn to handle custom dropdowns', async ({ page }) => {
    await page.goto("http://leafground.com/")

    //Selecting the dropdown
    await page.locator('text=Select Country').nth(1).click()

    //Select the desired option from the dropdown

    await page.locator('[data-label="India').click()
}
)
