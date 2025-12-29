import test, {expect} from "@playwright/test"

test('Create Lead', async ({page}) => {

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("//input[@id,'username']").fill("DemoSalesManager");
    await page.locator("(//input[@class='inputLogin'])[2]']").fill("crmsfa");
    await page.locator("//input[@class='.decorativeSubmit']").click();
    await page.locator("text='CRM/SFA'").click();

});