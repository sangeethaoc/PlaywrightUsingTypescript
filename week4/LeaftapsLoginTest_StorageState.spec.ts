import test from '@playwright/test'

// Use the saved state for this test file
test.use({storageState: 'utils/Leaftaps_Login.json'});

test('Create Contacts - Leaftaps Login using Storage State', async ({page}) => {
    await page.goto('http://leaftaps.com/crmsfa/control/contactsMain');
    await page.locator("//a[text()='Contacts']").click();
    await page.locator("//a[text()='Create Contact']").click();
    await page.locator("#firstNameField").fill("Sangeetha");

});

test('Create Accounts - Leaftaps Login using Storage State', async ({page}) => {
    await page.goto('http://leaftaps.com/crmsfa/control/accountsMain');
    await page.locator("//a[text()='Accounts']").click();
    await page.locator("//a[text()='Create Account']").click();
    await page.locator("#accountName").fill("Sangeetha");

});