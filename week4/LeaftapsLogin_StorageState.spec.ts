import test from '@playwright/test'

test("Leaftaps Login - Storage State", async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator('#username').fill('Demosalesmanager');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    const title = await page.title();
    console.log("Page Title : " +title);

    await page.locator("text='CRM/SFA'").click();

    // storage state
    await page.context().storageState({path : "utils/Leaftaps_Login.json"})

    
});