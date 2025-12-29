import test from '@playwright/test'

test("Launch browser using Page Fixture",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.waitForTimeout(3000)
});