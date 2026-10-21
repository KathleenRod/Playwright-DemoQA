import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../pages/ButtonsPage.js';

test('should double click the button',
  { tag: ['@buttons-page', '@buttons-page-a'] }, async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);
  await buttonsPage.goto();
  await buttonsPage.verifyDoubleClickBehaviour();
});

test('should right click the button',
  { tag: ['@buttons-page', '@buttons-page-b'] }, async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);
  await buttonsPage.goto();
  await buttonsPage.verifyRightClickBehaviour();
});

test('should click the button',
  { tag: ['@buttons-page', '@buttons-page-c'] }, async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);
  await buttonsPage.goto();
  await buttonsPage.verifyClickBehaviour();
});
