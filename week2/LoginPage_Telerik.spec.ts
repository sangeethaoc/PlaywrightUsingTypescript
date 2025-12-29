import test from '@playwright/test'

test('Telerik Login - Dropdown demo', async ({page}) => {
    await page.goto("https://www.telerik.com/contact");
    await page.selectOption('#Dropdown-1',{index : 4});
    await page.selectOption('#Dropdown-2',{value : 'Kendo UI'});
    await page.selectOption('#Country-1', {label : 'Albania'});
    await page.waitForTimeout(12000);
});
