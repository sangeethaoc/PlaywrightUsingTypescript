import test from '@playwright/test'

test('Dropdown Demo Test', async({page}) => {

    await page.goto("https://www.leafground.com/select.xhtml");
    await page.selectOption('.ui-selectonemenu', {label:'Playwright'});
    await page.selectOption('.ui-selectonemenu', {index:3});

    await page.locator("[id='j_idt87:country_label']").click();
    await page.locator("[id='j_idt87:country_2']").click();

    await page.waitForTimeout(10000);

});