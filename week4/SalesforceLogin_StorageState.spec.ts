import test from '@playwright/test'

test("Salesforce Login - Storage State", async ({page}) => {
    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');
    await page.locator('#password').fill('TestLeaf@2025');
    await page.locator('#Login').click();

    // storage state
    await page.context().storageState({path : "utils/Salesforce_Login.json"})

    
});