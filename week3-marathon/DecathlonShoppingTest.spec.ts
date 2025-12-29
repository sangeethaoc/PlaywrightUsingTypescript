import test, {expect, Locator} from '@playwright/test';

test("Decathlon Shopping", async ({page}) => {
    await page.goto("https://www.decathlon.in/");
    await expect(page).toHaveURL("https://www.decathlon.in/");
    await expect(page.getByRole('link', { name: 'Sign In' })).toBeVisible();
    //const searchBox = page.getByPlaceholder('Search For 60+ Sports and 6000+ Products')
    const searchBox = page.locator("//span[@class='!mr-1']").first();
    await expect(searchBox).toBeEnabled();
    await searchBox.click();
    const searchBoxField = page.getByPlaceholder('Search For 60+ Sports and 6000+ Products');
    await searchBoxField.click();
    await searchBoxField.fill("Shoes");
    await searchBoxField.press("Enter");
    await expect(page).toHaveTitle("Search | Shoes");
    await page.click("//span[contains(text(),'Running')]");
    await page.click("//span[contains(text(),'Men')]");
    await page.click("//span[contains(text(),'Uk 10.5')]");
    await page.locator(".swiper-slide").first().click(); //div[@class='swiper-slide']
    await page.click("//div[contains(text(),'UK 10.5 - EU 45')]");
    await page.click("//span[text()='ADD TO CART']"); 
    expect(page.getByText("GO TO CART").isVisible()).toBeTruthy();
});