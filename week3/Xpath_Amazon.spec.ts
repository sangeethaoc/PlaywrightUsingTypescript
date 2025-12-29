import test, {Locator, expect} from "@playwright/test"

test('Amazon Product - Add to cart', async ({page}) => {
    await page.goto("https://www.amazon.in/");
    const searchBox : Locator = page.locator("//input[@id='twotabsearchtextbox']");
    await searchBox.fill("Iphone");
    await searchBox.press("Enter");
    await page.click("//span[text()='512 GB & above']");
    await page.click("(//button[text()='Add to cart'])[1]");

});

// ClassRoom:
// load the url : https://www.amazon.in/
// 1. Locate the search box using attribute based xpath -> Iphone
// 2. Click on storage -> 512 GB and above
// 3. Click on add to cart button