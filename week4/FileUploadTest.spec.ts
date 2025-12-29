import test, {Locator} from '@playwright/test'

//file Upload - Direct upload and Event Listener

//Direct Upload -> input tag and type = file
test("Direct File Upload", async ({page}) => {
    await page.goto("https://www.leafground.com/file.xhtml");
    const file: Locator = page.locator("//input[@type='file']").first();
    await file.setInputFiles("data/XPath Cheat Sheet.pdf")
});

//file Upload using EventListener -> No input tage and type != file
test("File Upload using Event Listener", async ({page}) => {
    await page.goto("https://www.leafground.com/file.xhtml");
    const fileChooser = page.waitForEvent('filechooser');
    await page.locator("//input[@type='file']").first().click();
    const res = await fileChooser;
    await res.setFiles("data/XPath Cheat Sheet.pdf");
});

// Multiple file upload
test.only("Multiple File Upload", async ({page}) => {
    await page.goto("https://www.leafground.com/file.xhtml");
    const files: Locator = page.locator("//input[@type='file']").nth(1);
    await files.setInputFiles(["data/VarsidCar1.png", "data/VarsidCar2.png"]);
});