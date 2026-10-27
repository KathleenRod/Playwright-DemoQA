import { test, expect } from '@playwright/test';
import { PageComplete } from '../pages/PageComplete.js';

test('Complete the student registration form', async ({ page }) => {
const pageComplete = new PageComplete(page);

await pageComplete.goto();
await pageComplete.setFirstName('Kathleen');
await pageComplete.setLastName('Rodriguez');
await pageComplete.setEmail('Kathleen@qa.com');
await pageComplete.setGender();
await pageComplete.setMobile('+34123456789');
await pageComplete.setBirthday();
await pageComplete.setSubject('Matematica y Quimica');
await pageComplete.setHobbies();
await pageComplete.setPicture('heart.jpg');
await pageComplete.setCurrentAddress('Valencia');
await pageComplete.setState('Haryana');
await pageComplete.setCity('Karnal');
await page.waitForTimeout(5000);
});