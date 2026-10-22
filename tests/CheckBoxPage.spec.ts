import { test, expect } from '@playwright/test';
import { CheckBoxPage } from '../pages/CheckBoxPage.js';

test('should check result output after clicking checkboxes',
  { tag: ['@check-box-page', '@check-box-page-a'] }, async ({ page }) => {
  const checkBoxPage = new CheckBoxPage(page);
  await checkBoxPage.goto();
  await checkBoxPage.clickExpandButton('Home');
  await checkBoxPage.clickCheckBox('Desktop');
  await checkBoxPage.clickExpandButton('Documents');
  await checkBoxPage.clickExpandButton('WorkSpace');
  await checkBoxPage.clickCheckBox('Angular');
  await checkBoxPage.checkResultOutput('desktopnotescommandsangular');
});
