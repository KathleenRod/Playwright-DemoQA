import { Locator, Page, expect } from '@playwright/test';
import path from 'node:path';

export class UploadDownloadPage {
  private readonly page: Page;
  readonly uploadField: Locator;
  readonly downloadButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.uploadField = page.locator('//input[@id="uploadFile"]');
    this.downloadButton = page.locator('//a[@id="downloadButton"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/upload-download');
  }

  async uploadFile(file: string): Promise<void> {
    const filePath = path.resolve(process.cwd(), 'files', file);
    await this.uploadField.setInputFiles(filePath);
  }

  async downloadFile(file: string): Promise<void> {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadButton.click();
    const download = await downloadPromise;
    await download.saveAs('downloads/' + file);
  }
}