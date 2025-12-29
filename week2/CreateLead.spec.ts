import test, {expect} from "@playwright/test"

test('Create Lead', async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("DemoSalesManager");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.locator("text='CRM/SFA'").click();
    await page.locator("a:has-text('Leads')").click();
    await page.locator("a:has-text('Create Lead')").click();
    //#createLeadForm_companyName
    await page.locator("#createLeadForm_companyName").fill("HCL");
    //#createLeadForm_firstNameLocal
    await page.locator("#createLeadForm_firstName").fill("Santhya");
    //#createLeadForm_lastNameLocal
    await page.locator("#createLeadForm_lastName").fill("Devi");
    //#createLeadForm_personalTitle
    await page.locator("#createLeadForm_personalTitle").fill("Mrs");
    //#createLeadForm_generalProfTitle
    await page.locator("#createLeadForm_generalProfTitle").fill("Engineer");
    //#createLeadForm_annualRevenue
    await page.locator("#createLeadForm_annualRevenue").fill("100000");
    //#createLeadForm_departmentName
    await page.locator("#createLeadForm_departmentName").fill("Software");
    //#createLeadForm_primaryPhoneNumber
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("123456");
    //.smallSubmit
    await page.locator(".smallSubmit").click();

    //#viewLead_companyName_sp
    await expect(page.locator("#viewLead_companyName_sp")).toContainText("HCL");
    //#viewLead_firstName_sp
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Santhya");
    //#viewLead_lastName_sp
    await expect(page.locator("#viewLead_lastName_sp")).toHaveText("Devi");
    //viewLead_statusId_sp
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned");

    console.log("Page Title : "+page.title);

});