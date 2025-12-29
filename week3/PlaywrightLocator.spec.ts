import test from '@playwright/test'

test('Playwright Locator Test', async({page}) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");
    await page.getByRole("link", {name : "Forgot login info?"}).click();
    await page.getByRole("button", {name : "Log In"}).click();
    await page.getByAltText("ParaBank").click();
    await page.getByText("ParaBank").click();
    await page.getByText("Locations").first().click();
});

test.only('Playwright Locator Test using Label', async({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.getByLabel('Username').fill("DemoSalesManager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text='CRM/SFA'").click();
    });