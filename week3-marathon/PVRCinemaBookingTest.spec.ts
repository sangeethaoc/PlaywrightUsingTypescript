import test, {expect, Locator} from '@playwright/test';

test("PVR Cinema Ticket Booking", async ({page}) => {

    await page.goto("https://www.pvrcinemas.com/");
    await page.click("//h6[text()='Chennai']");
    //await page.click("(//div[@class='date-show']/span)[2]");
    await page.click("//span[text()='Select Movie']");
    await page.locator("//ul[@class='p-dropdown-items']/li").nth(0).click(); // choose movie
    await page.locator("//li[@role='option']").nth(1).click(); // choose date
    await page.locator("//li[@role='option']").nth(2).click(); // available screen
    await page.waitForTimeout(2000);
    await page.locator("//li[@role='option']").nth(1).click(); // show time
    await page.click("//button[@type='submit']");
    await page.click("//button[text()='Accept']");
    const seat : Locator = page.locator(".seat-current-pvr").nth(154);
    const seatNumber = await seat.innerText(); 
    await seat.click();
    await expect(page.locator(".seat-number")).toContainText(seatNumber);
    await expect(page.locator(".grand-prices")).toContainText(" 258.92");
    expect(page).toHaveTitle("PVR Cinemas");
    await page.click("//button[text()='Proceed']");
});