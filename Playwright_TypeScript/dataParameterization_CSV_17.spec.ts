import { test } from "@playwright/test"
import { parse } from "csv-parse/sync"
import fs from 'fs'
import path from 'path'

//RELATIVE Path
//You will get Buffer value without utf-8,
//With utf-8 it will convert to string

// let value=fs.readFileSync('Data/sflogin.csv','utf-8') 
// console.log(value);

/* without utf-8
 <Buffer 74 63 69 64 2c 75 73 65 72 6e 61 6d 65 2c 70 61 73 73 77 6f 72 64 0d 0a 74 63 30 30 31 2c 64 69 6c 69 70 6b 75 6d 61 72 2e 72 61 6a 65 6e 64 72 61 6e ... 70 more bytes> */

/* csv data
tcid,username,password
tc001,DemoCSR,crmsfa
tc002,DemoCSR2,crmsfa */


//let value: any[] = parse(fs.readFileSync('Utilis/loginData.csv', 'utf-8'), { columns: true, skip_empty_lines: true })
let value:any[] 
value = parse(fs.readFileSync('Utilis/loginData.csv','utf-8'),{columns:true,skip_empty_lines:true})
//or
//let value:any[] = parse(fs.readFileSync(path.join(__dirname, '../../../Data/login.csv'),'utf-8'),{columns:true,skip_empty_lines:true})

test.describe.serial('Run test in serial mode', async () => {

  for (let details of value) {

    test(`To read data from csv file ${details.tcid}`, async ({ page }) => {

      await page.goto('http://leaftaps.com/opentaps/control/main')

      await page.locator('[id="username"]').fill(details.username)
      await page.locator('#password').fill(details.password)
      await page.locator('.decorativeSubmit').click()

    })

  }

})
