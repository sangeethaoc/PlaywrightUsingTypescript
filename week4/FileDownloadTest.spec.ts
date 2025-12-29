import test, {Locator} from '@playwright/test'

//file download
test("File download", async ({page}) => {
    await page.goto("https://www.leafground.com/file.xhtml");

    const fileDownload = page.waitForEvent('download');

    await page.locator("//span[text()='Download']").click();

    const fdl =  await fileDownload;

    await fdl.saveAs("data/TL logo.png");

    //await fdl.saveAs("data/" + fdl.suggestedFilename());

});