import { test, expect } from '@playwright/test'
import { UploadDownloadPage } from '../pages/UploadDownloadPage.js';

test('should upload file',
  { tag: ['@upload-download-page', '@upload-download-page-a'] }, async ({ page }) => {
  const uploadDownloadPage = new UploadDownloadPage(page);
  await uploadDownloadPage.goto();
  await uploadDownloadPage.uploadFile('pig.png');
});

test('should download file',
  { tag: ['@upload-download-page', '@upload-download-page-b'] }, async ({ page }) => {
  const uploadDownloadPage = new UploadDownloadPage(page);
  await uploadDownloadPage.goto();
  await uploadDownloadPage.downloadFile('sampleFile.jpeg');
});
