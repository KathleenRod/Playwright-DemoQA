import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../pages/TextBoxPage.js';

test('should check output when the information is valid', async ({ page }) => {
const textBoxPage = new TextBoxPage(page);

await textBoxPage.goto();
await textBoxPage.fillFields('Joe Rod', 'joe@qa.com', 'valencia', 'barcelona');
await textBoxPage.checkOutputs('', '', '', '');
await textBoxPage.submitButton.click();
await textBoxPage.checkOutputs('Joe Rod', 'joe@qa.com', 'valencia', 'barcelona');
await page.waitForTimeout(5000);
});

test('should check output when email field is invalid', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.goto();
  await textBoxPage.fillFields('Joe Rod', 'joe_doe!email.com');
  await textBoxPage.checkOutputs();
  await textBoxPage.submitButton.click();
  await textBoxPage.checkOutputs();
  await textBoxPage.fillFields('Joe Rod', 'joe@qa.com');
  await textBoxPage.submitButton.click();
  await textBoxPage.checkOutputs('Joe Rod', 'joe@qa.com');

  await page.waitForTimeout(5000);

});

//NO NECESITAMOS LOS LOCATORS ya que estaran dentro del PAGE OBJECT ( LINEA 5)
//const fullNameField = page.locator ('//input[@id="userName"]');
 // const fullEmailField = page.locator ('//input[@id="userEmail"]');
  //const fullcurrentAddressField = page.locator ('//textArea[@id="currentAddress"]');
  //const fullpermanentAddressField = page.locator ('//textArea[@id="permanentAddress"]')
  //const fullNameOutput = page.locator ('//p[@id="name"]');
  //const fullEmailOutput = page.locator ('//p[@id="email"]');
  //const fullCurrentAddressOutput = page.locator ('//p[@id="currentAddress"]');
  //const fullPermanentAddressOutput = page.locator ('//p[@id="permanentAddress"]');
  //const summitButton = page.locator('//button[@id="submit"]');
  
 
  // esta dentro de la clase fillFields en pageobject
  //await textBoxPage.fullNameField.fill('Joe Doe');
  //await textBoxPage.emailField.fill('Joe@qa.com');
  //await textBoxPage.currentAddressField.fill('Valencia Spain');
  //await textBoxPage.permanentAddressField.fill('Madrid Spain');
  
  
  
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
  
  // esta dentro de la clase checkOutputs en pageobject
  //await expect(textBoxPage.fullNameOutput).toHaveText('Name:Joe Doe');
  //await expect(textBoxPage.emailOutput).toHaveText('Email:Joe@qa.com');
  //await expect (textBoxPage.currentAddressOutput).toHaveText('Current Address :Valencia Spain');
  //await expect (textBoxPage.permanentAddressOutput).toHaveText('Permananet Address :Madrid Spain');
  
  
  
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
  

  

