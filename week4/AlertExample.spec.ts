import test from '@playwright/test'

test('Leafground Login - Alert Example using page.once', async ({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml");
   
    //Simple Alert - Accept
    page.once('dialog', alertType => {
        const type = alertType.type();
        console.log("type : "+type);
        console.log("Message : " + alertType.message());
        if(type === 'alert'){
            alertType.accept();
        }else if(type === 'confirm'){
            alertType.accept();
        }else if(type === 'prompt'){
            alertType.accept("Sangeetha");
        }
    })
    await page.locator("(//span[text()='Show'])").first().click();
    
    
    //Confirm Alert - Accept
    page.once('dialog', alertType => {
        const type = alertType.type();
        console.log("type : "+type);
        console.log("Message : " + alertType.message());
        if(type === 'alert'){
            alertType.accept();
        }else if(type === 'confirm'){
            alertType.accept();
        }else if(type === 'prompt'){
            alertType.accept("Sangeetha");
        }
    })
    await page.locator("(//span[text()='Show'])").nth(1).click();

    //Prompt Alert - Type your name and Accept
    page.once('dialog', alertType => {
        const type = alertType.type();
        console.log("type : "+type);
        console.log("Message : " + alertType.message());
        if(type === 'alert'){
            alertType.accept();
        }else if(type === 'confirm'){
            alertType.accept();
        }else if(type === 'prompt'){
            alertType.accept("Sangeetha");
        }
    })
    await page.locator("(//span[text()='Show'])").nth(4).click();
    //await page.waitForTimeout(5000);

});

test('Leafground Login - Alert Example using page.on', async ({page}) => {

    await page.goto("https://www.leafground.com/alert.xhtml");
   
    page.on('dialog', alertType => {
        const type = alertType.type();
        console.log("type : "+type);
        console.log("Message : " + alertType.message());
        if(type === 'alert'){
            alertType.accept();
        }else if(type === 'confirm'){
            alertType.accept();
        }else if(type === 'prompt'){
            alertType.accept("Sangeetha");
        }
    })
    //Simple Alert
    await page.locator("(//span[text()='Show'])").first().click();
    //Confirm Alert
    await page.locator("(//span[text()='Show'])").nth(1).click();
    //Prompt Alert
    await page.locator("(//span[text()='Show'])").nth(4).click();
    //await page.waitForTimeout(5000);

});

test.only("Sweet Alert", async ({page}) => {
    await page.goto("https://www.leafground.com/alert.xhtml");
    //Sweet Alert
    await page.locator("//span[text()='Show']").nth(3).click();
    //await page.locator("//span[@class='ui-icon ui-icon-closethick']").nth(1).click();
    await page.locator('.ui-icon.ui-icon-closethick').nth(1).click();
});