import { test, expect } from '@playwright/test';

test('check output when the information is valid', async ({ page }) => {


await page.goto('https://demoqa.com/text-box');
  const fullNameField = page.locator ('//input[@id="userName"]');
  const fullEmailField = page.locator ('//input[@id="userEmail"]');
  const fullcurrentAddressField = page.locator ('//textArea[@id="currentAddress"]');
  const fullpermanetAddressField = page.locator ('//textArea[@id="permanentAddress"]')
  const fullNameOutput = page.locator ('//p[@id="name"]');
  const fullEmailOutput = page.locator ('//p[@id="email"]');
  const fullCurrentAddressOutput = page.locator ('//p[@id="currentAddress"]');
  const fullPermanetAdressOutput = page.locator ('//p[@id="permanentAddress"]');
  const summitButton = page.locator('//button[@id="submit"]');
  await page.goto('https://demoqa.com/text-box');
  await fullNameField.fill('Joe Doe');
  await fullEmailField.fill('Joe@qa.com');
  await fullcurrentAddressField.fill('Valencia Spain');
  await fullpermanetAddressField.fill('Madrid Spain');
  // Rellenar los campos sin usar variables
  //await page.locator('//input[@id="userName"]').fill('Joe Doe');
  //await page.locator('//input[@id="userEmail"]').fill('Joe@qa.com');
  //await page.locator('//textArea[@id="currentAddress"]').fill('Valencia Spain');
  //await page.locator('//textArea[@id="permanentAddress"]').fill('Madrid Spain');
  //Comprobar que los campos no se muestren antes de hacer click en submit
  //await expect(page.locator('//p[@id="name"]')).toBeHidden();
  //await expect(page.locator('//p[@id="email"]')).toBeHidden();
  //await expect(page.locator('//p[@id="currentAddress"]')).toBeHidden();
  //await expect(page.locator('//p[@id="permanentAddress"]')).toBeHidden();
  //await page.locator('//button[@id="submit"]').click();
  await summitButton.click();
  await expect(fullNameOutput).toHaveText('Name:Joe Doe');
  await expect(fullEmailOutput).toHaveText('Email:Joe@qa.com');
  await expect (fullCurrentAddressOutput).toHaveText('Current Address :Valencia Spain');
  await expect (fullPermanetAdressOutput).toHaveText('Permananet Address :Madrid Spain');
  //Solo para comprobar que esta visible sin variables
  //await expect(page.locator('//p[@id="name"]')).toBeVisible();
  //await expect(page.locator('//p[@id="email"]')).toBeVisible();
  //await expect(page.locator('//p[@id="currentAddress"]')).toBeVisible();
  //await expect(page.locator('//p[@id="permanentAddress"]')).toBeVisible();
  //Comprobar que lo que se muestra es correcto sin variables
  //await expect(page.locator('//p[@id="name"]')).toHaveText('Name:Joe Doe');
  //await expect(page.locator('//p[@id="email"]')).toHaveText('Email:Joe@qa.com');
  //await expect(page.locator('//p[@id="currentAddress"]')).toHaveText('Current Address :Valencia Spain');
  //await expect(page.locator('//p[@id="permananetAddress"]')).toHaveText('Permananet Address :Madrid Spain');
  await page.waitForTimeout(5000);

});