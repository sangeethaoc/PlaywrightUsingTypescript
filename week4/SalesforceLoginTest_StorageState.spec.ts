import test from '@playwright/test'

// Use the saved state for this test file
test.use({storageState: 'utils/Salesforce_Login.json'});

test('Create Accounts - Salesforce Login using Storage State', async ({page}) => {
    await page.goto('https://testleaf.lightning.force.com/lightning/page/home');
    await page.locator("//span[text()='Accounts']").click();

});

test('Create Contacts - Salesforce Login using Storage State', async ({page}) => {
    await page.goto('https://testleaf.lightning.force.com/lightning/page/home');
    await page.locator("//span[text()='Contacts']").click();

});

