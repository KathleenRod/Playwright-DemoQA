import { Locator, Page, expect } from '@playwright/test';

export class CheckBoxPage {
  private readonly page: Page;
  readonly resultOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.resultOutput = page.locator('//div[@id="result"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/checkbox');
  }

  async clickExpandButton(name: string): Promise<void> {
    const expandButton = this.page.locator('//span[contains(@class,"rc-tree-title")][normalize-space()="' + name + '"]/ancestor::div[1]//span[contains(@class,"rc-tree-switcher")]');
    await expandButton.click();
  }

  async clickCheckBox(name: string): Promise<void> {
    const checkBox = this.page.locator('//span[contains(@class,"rc-tree-title")][normalize-space()="' + name + '"]/ancestor::div[1]//span[contains(@class,"rc-tree-checkbox")]');
    await checkBox.check();
  }

  async checkResultOutput(names: string): Promise<void> {
    await expect(this.resultOutput).toHaveText('You have selected :' + names);
  }
}
 
 