import { test, expect } from '@playwright/test';

test('should double click the button', async ({ page }) => {

const yesRadioButton = page.locator('//input[@id="yesRadio"]');
const impressiveRadioButton = page.locator('//input[@id="impressiveRadio"]');
const radioButtonOutput = page.locator('//p[@class="mt-3"]');

 
await page.goto('https://demoqa.com/radio-button');

//Check that the yes and impressive buttons are unchecked
await expect(yesRadioButton).not.toBeChecked();
await expect (impressiveRadioButton).not.toBeChecked();

//Click the yes radio button
await yesRadioButton.click();

//Check that the yes radio button is checked and the impressive is not
await expect(yesRadioButton).toBeChecked();
await expect(impressiveRadioButton).not.toBeChecked();
await expect(radioButtonOutput).toHaveText('You have selected Yes')

//Click the impressive radio button
await impressiveRadioButton.click();

//Check that the impressive radio button is checked and the yes is not
await expect(yesRadioButton).not.toBeChecked();
await expect(impressiveRadioButton).toBeChecked();
await expect(radioButtonOutput).toHaveText('You have selected Impressive')

await page.waitForTimeout(3000);
});

test('should not click radio buttons', async ({ page }) => {
const noRadioButton = page.locator('//input[@id="noRadio"]');
const radioButtonOutput = page.locator('//p[@class="mt-3"]');

await page.goto('https://demoqa.com/radio-button');

await expect(noRadioButton).toBeDisabled();

await expect(radioButtonOutput).toBeHidden();

await page.waitForTimeout(3000);

});