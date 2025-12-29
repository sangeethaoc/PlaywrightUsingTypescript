import test, {Page} from '@playwright/test'

test("Window Handling - Single Window", async ({context}) => {

    const page = await context.newPage();
    await page.goto("https://www.amazon.in");
    const search = page.locator("#twotabsearchtextbox");
    search.fill("IPhone");
    search.press("Enter");

    //step 1 - create promise
    const promise = context.waitForEvent('page');
    //step 2 - perform action
    await page.locator("//span[text()='iPhone 15 (128 GB) - Black']").first().click();
    //step 3 - switch childpage to resolve
    const childPage = await promise;
    const price = await childPage.locator("//span[@class='a-price-symbol']/following-sibling::span").first().innerText();

    console.log("IPhone 15 Price : " + price);

    childPage.close();

    await page.click("//a[contains(text(),'Today')]");

});

test("Window Handling - Multiple Window", async ({context}) => {
    const page = await context.newPage();
    await page.goto("https://www.leafground.com/window.xhtml");

    //create promise
    const [allWindows] = await Promise.all([
        context.waitForEvent('page'),
        page.click("//span[text()='Open Multiple'")
    ]);

    const pages: Page[] = allWindows.context().pages();
    console.log("Total window count : " + pages.length);

    let dashBoard: any;
    let webTable: any;

    for(let i=0; i < pages.length ; i++){
        const title = await pages[i].title();
        if(title === "Dashboard"){
            dashBoard = pages[i];
        }else if(title === "Web Table"){
            webTable = pages[i];
        }
    }

    dashBoard.locator("//input[@id='email']").fill("Sangeetha@gmail.com");
    dashBoard.waitForEvent(5000);

});

test.only("Window Handling - Single Window 1", async ({context}) => {
    const page = await context.newPage();
    await page.goto("https://www.leafground.com/window.xhtml");

//     Classroom
// https://www.leafground.com/window.xhtml
// -> click on Open button
// -> switch to child page
// -> Child Page -> Enter Message
// -> close childpage
// -> click on open multiple

    //step 1 - create promise
    const promise = context.waitForEvent('page');
    //step 2 - perform action
    await page.click("//span[text()='Open']");
    //step 3 - switch childpage to resolve
    const childPage = await promise;
    await childPage.locator('#message').fill("This is child page interaction");

    childPage.close();
    await page.click("//span[text()='Open Multiple']");

});