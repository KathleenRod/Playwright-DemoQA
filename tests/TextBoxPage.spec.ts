import { test, expect } from '@playwright/test';

test('check output when all fields are valid', async ({ page }) => {

  const fullNameField = page.locator('//input[@id="userName"]');
  const emailField = page.locator('//input[@id="userEmail"]');
  const currentAddressField = page.locator('//textarea[@id="currentAddress"]');
  const permanentAddressField = page.locator('//textarea[@id="permanentAddress"]');
  const submitButton = page.locator('//button[@id="submit"]');
  const fullNameOutput = page.locator('//p[@id="name"]');
  const emailOutput = page.locator('//p[@id="email"]');
  const currentAddressOutput = page.locator('//p[@id="currentAddress"]');
  const permanentAddressOutput = page.locator('//p[@id="permanentAddress"]');

  await page.goto('https://demoqa.com/text-box');

  await fullNameField.fill('Joe Doe');
  await emailField.fill('joe_doe@email.com');
  await currentAddressField.fill('Somewhere CLOSE');
  await permanentAddressField.fill('Somewhere FAR');

  await expect(fullNameOutput).toBeHidden();
  await expect(emailOutput).toBeHidden();
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();


  await page.locator('//button[@id="submit"]').click();

  await expect(fullNameOutput).toHaveText('Name:Joe Doe');
  await expect(emailOutput).toHaveText('Email:joe_doe@email.com')
  await expect(currentAddressOutput).toHaveText('Current Address :Somewhere CLOSE');
  await expect(permanentAddressOutput).toHaveText('Permananet Address :Somewhere FAR');



  await page.waitForTimeout(5000);
});

test(' should check output when all fields are valid', async ({ page }) => {

  await page.goto('https://demoqa.com/text-box');

  
  const fullNameField = page.locator('//input[@id="userName"]');
  const emailField = page.locator('//input[@id="userEmail"]');
  const fullNameOutput = page.locator('//p[@id="name"]');
  const emailOutput = page.locator('//p[@id="email"]');
  const currentAddressOutput = page.locator('//p[@id="currentAddress"]');
  const permanentAddressOutput = page.locator('//p[@id="permanentAddress"]');
  const submitButton = page.locator('//button[@id="submit"]');


  await fullNameField.fill('Joe Doe');

  await emailField.fill('joe_doe.email.com');

  await expect(fullNameOutput).toBeHidden();
  await expect(emailOutput).toBeHidden();
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

  await page.locator('//button[@id="submit"]').click();

  await expect(fullNameOutput).toBeHidden();
  await expect(emailOutput).toBeHidden();
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

  await emailField.fill('joe_doe@email.com');

  await page.locator('//button[@id="submit"]').click();

  await expect(fullNameOutput).toHaveText('Name:Joe Doe');
  await expect(emailOutput).toHaveText('Email:joe_doe@email.com')
  await expect(currentAddressOutput).toBeHidden();
  await expect(permanentAddressOutput).toBeHidden();

  await page.waitForTimeout(3000);

 });