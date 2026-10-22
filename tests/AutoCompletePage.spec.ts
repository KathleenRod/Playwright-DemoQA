import { test, expect } from '@playwright/test';
import { AutoCompletePage } from '../pages/AutoCompletePage.js';

test('should fill color field and click color option',
  { tag: ['@auto-complete-page', '@auto-complete-page-a'] }, async ({ page }) => {
  const autoCompletePage = new AutoCompletePage(page);
  await autoCompletePage.goto();
  await autoCompletePage.colorField.fill('Black');
  await autoCompletePage.colorOption.click();
});
