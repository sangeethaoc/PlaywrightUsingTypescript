import test, {expect, Frame, FrameLocator} from '@playwright/test'

test.only("Frames using Index", async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");
    
    //Total Frame count
    const frames : Frame[] = page.frames();
    console.log("Total Frames count : " + frames.length);
    
    //First Frame
    const clickMeButton1 = frames[1].locator('#Click');
    await clickMeButton1.click();
    const clickMeButton1Text = await clickMeButton1.textContent();
    expect(clickMeButton1Text).toEqual("Hurray! You Clicked Me.");
    
    //Nested frame
    const clickMeButton2 =  frames[4].locator('#Click');
    await clickMeButton2.click();
    const clickMeButton2Text = await clickMeButton2.textContent();
    expect(clickMeButton2Text).toEqual("Hurray! You Clicked Me.");
});

test("Frames using FrameLocator", async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");

    //First Frame
    const frame1: FrameLocator = page.frameLocator("(//iframe)[1]");
    await frame1.locator('#Click').click();

    //Nested frame
    const frame3: FrameLocator = page.frameLocator("(//iframe)[3]");
    const frame4: FrameLocator =  frame3.frameLocator('#frame2');
    await frame4.locator('#Click').click();
});

test("Frames using FrameObject", async ({page}) => {
    await page.goto("https://www.leafground.com/frame.xhtml");

    //object -> url or name
    //First Frame
    const frame1: Frame = page.frame({url : "https://www.leafground.com/default.xhtml"});
    await frame1.locator('#Click').click();

    //Nested frame
    const frame3: Frame = page.frame({url : "https://www.leafground.com/page.xhtml"});
    const frame4: FrameLocator =  frame3.frameLocator('#frame2');
    await frame4.locator('#Click').click();
});