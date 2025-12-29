import test, {expect} from '@playwright/test'

test('Edit Lead', async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text='CRM/SFA'").click();
    await page.locator("a:has-text('Leads')").click();
    //Find and Edit Lead
    await page.locator("a:has-text('Find Leads')").click();
    await page.locator('input[name="firstName"]').last().fill('Santhya');
    await page.locator("button:has-text('Find Leads')").click();
    await page.locator('div.x-grid3-cell-inner.x-grid3-col-partyId a').first().click();
    await page.locator('div.frameSectionExtra a').nth(2).click();
    await page.locator("#updateLeadForm_companyName").fill("HCL");
    await page.locator("#updateLeadForm_annualRevenue").fill("200000");
    await page.locator("#updateLeadForm_departmentName").fill("Software");
    await page.locator("#updateLeadForm_description").fill("123456");
    await page.locator(".smallSubmit").first().click();
    
     //#viewLead_companyName_sp
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("HCL");
    await expect(page.locator("#viewLead_annualRevenue_sp")).toHaveText("$200,000.00");
    await expect(page.locator("#viewLead_departmentName_sp")).toHaveText("Software");
    await expect(page.locator("#viewLead_description_sp")).toHaveText("123456");
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned");

    console.log("Page Title : "+page.title);
});