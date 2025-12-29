import { test, expect } from '@playwright/test';

test("Frame And Alert Test - w3schools", async ({ page }) => {
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");

    const frame = page.frameLocator("#iframeResult");
    page.on('dialog', async dialogBox => {
        console.log("Alert message : " + dialogBox.message());
        console.log("Alert type : " + dialogBox.type());
        await dialogBox.accept();
    });
    await frame.getByRole('button', { name: 'Try it' }).click();
    const confirmTextLocator = frame.locator("#demo");
    await expect(confirmTextLocator).toHaveText("You pressed OK!");
});