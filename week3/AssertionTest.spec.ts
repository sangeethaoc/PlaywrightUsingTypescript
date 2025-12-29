import test, {expect, Locator} from '@playwright/test'

test('Assertion Practice - Retry Assertion', async ({page}) => {
    await page.goto("https://leafground.com/input.xhtml");
    const enabled : Locator = page.getByPlaceholder("Babu Manickam");
   // await expect.soft(enabled).toBeDisabled({timeout : 10000});
    await expect(enabled).toBeEnabled({timeout : 10000});
    console.log("Assertion Passed");
});

test.only('Assertion Practice - No Retry Assertion', async ({page}) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const actualTitle : string = await page.title();
    const expectedTitle : string = "Leaftaps - TestLeaf Automation Platform";
    expect.soft(actualTitle).toEqual(expectedTitle);
    console.log("Assertion Passed");
});