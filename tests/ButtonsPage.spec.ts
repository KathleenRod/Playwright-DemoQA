import { test, expect } from '@playwright/test';
import { ButtonsPage } from '../pages/ButtonsPage.js';

test('should double click the button', async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);
  await buttonsPage.goto();
  await buttonsPage.verifyDoubleClickBehaviour();
});

test('should right click the button', async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);
  await buttonsPage.goto();
  await buttonsPage.verifyRightClickBehaviour();
});

test('should click the button', async ({ page }) => {
  const buttonsPage = new ButtonsPage(page);
  await buttonsPage.goto();
  await buttonsPage.verifyClickBehaviour();
});
