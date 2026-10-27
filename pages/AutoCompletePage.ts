import { Locator, Page, expect } from '@playwright/test';

export class AutoCompletePage {
  private readonly page: Page;
  readonly colorField: Locator;
  readonly colorOption: Locator;

  constructor(page: Page) {
    this.page = page;
    this.colorField = page.locator('//input[@id="autoCompleteMultipleInput"]');
    this.colorOption = page.locator('(//div[contains(@id,"react-select")])[1]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/auto-complete');
  }
}
