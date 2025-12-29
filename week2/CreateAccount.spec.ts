import test, {expect} from '@playwright/test'

test('Create Account Salesforce Login', async ({page}) => {

    await page.goto('https://login.salesforce.com');
    await page.getByLabel("Username").fill('dilipkumar.rajendran@testleaf.com');
    await page.getByLabel("Password").fill('TestLeaf@2025');
    await page.locator('#Login').click();
    
    await page.waitForTimeout(5000);
    console.log("Page Title : " + await page.title());
    
    await expect(page).toHaveTitle('Home | Salesforce');// Non - retry assertions - Fails immediately if match is incorrect
    console.log("URL of the page : "+ page.url());

    await page.locator(".slds-icon-waffle").click();
    await page.waitForTimeout(5000);
    await page.getByText('View All', {exact : true}).nth(2).click();
    //await page.click("//button[text()='View All']");
    await page.getByPlaceholder("Search apps or items...").fill("Service");
    await page.locator("(//mark[text()='Service'])[1]").click();
    await page.locator("[title='Accounts']").click();
    await page.getByRole('button', { name: 'New' }).click();
    await page.locator("//input[@name='Name']").fill("Acc_San");
    await page.click("//button[@name='SaveEdit']");
    const toastMessage =  page.locator(".toastMessage");
    await expect(toastMessage).toBeVisible(); // Auto-retry assertion - Checks frequently and fails after 5s.
    await expect(toastMessage).toContainText('Account "Acc_San" was created.');
});