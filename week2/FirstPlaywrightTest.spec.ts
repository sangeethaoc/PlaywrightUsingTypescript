import test, {chromium} from '@playwright/test'

test('Launch browser', async() => {

    // Launch the browser - browser
    let browser = await chromium.launch({channel : "chrome", headless: false});

    //Launch window - Context
    let context = await browser.newContext();

    // Launch new page
    let page = await context.newPage();

    //Load url
    await page.goto("https://www.facebook.com");

    await page.pause();

});