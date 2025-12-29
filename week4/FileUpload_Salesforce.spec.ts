import {test, expect} from '@playwright/test'

// Use the saved state for this test file
test.use({storageState: 'utils/Salesforce_Login.json'});

test("File Upload - Salesforce Application", async ({page}) => {

    await page.goto('https://testleaf.lightning.force.com/lightning/page/home');
    await page.click(".slds-icon-waffle");
    await page.waitForTimeout(5000);
    await page.getByText('View All', {exact : true}).nth(2).click();
    const searchBox =  page.getByPlaceholder("Search apps or items...");
    searchBox.click();
    searchBox.fill("Accounts");
    //await page.getByPlaceholder("Search apps or items...").fill("Accounts").click();
    //await page.waitForTimeout(5000);
    await page.click("//a[@data-label='Accounts']");
    await page.getByRole('button', {name : "New"}).click();
    await page.locator("input[name='Name']").fill("Sangeetha");
    await page.getByRole('combobox', { name: 'Type' }).click();
    await page.getByRole('option', { name: 'Prospect' }).click();
    await page.getByRole('combobox', {name : "Industry"}).click();
    await page.getByRole('option', {name : "Banking"}).click();
    await page.click("button[name='SaveEdit']");
    const toastMessage =  page.locator(".toastMessage");
    await expect(toastMessage).toBeVisible(); // Auto-retry assertion - Checks frequently and fails after 5s.
    await expect(toastMessage).toContainText('Account "Sangeetha" was created.');

    // Scroll to the bottom of the page
    await page.keyboard.press('End');
    // await page.evaluate(async () => {
    // window.scrollTo(0, document.body.scrollHeight);
    // });
  
    // ... after scrolling ...

    // Target the button specifically within the Notes & Attachments section to avoid duplicates
    const fileUploadButton = page.getByTitle("Upload Files").first();

    // Trigger the file chooser
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        fileUploadButton.click(),
    ]);

    await fileChooser.setFiles("data/XPath Cheat Sheet.pdf");
    
    await page.click("//span[text()='Done']");
    const toastMessage1 =  page.locator(".toastMessage").first();
    await expect(toastMessage1).toBeVisible(); // Auto-retry assertion - Checks frequently and fails after 5s.
    await expect(toastMessage1).toContainText("1 file was added to the Account.");
});