import { test, expect } from '@playwright/test';
import { PracticeFormPage } from '../pages/PracticeFormPage.js';

test('should complete the practice form',
  { tag: ['@practice-form-page', '@practice-form-page-a'] }, async ({ page }) => {
  const practiceFormPage = new PracticeFormPage(page);
  await practiceFormPage.goto();

  await practiceFormPage.setFirstName('Joe');
  await practiceFormPage.setLastName('Doe');
  await practiceFormPage.setEmail('joe_doe@email.com');
  await practiceFormPage.setGender('Male');
  await practiceFormPage.setMobile('1234567890');
  await practiceFormPage.setDateOfBirth('2027', 'August', '13');
  await practiceFormPage.setSubject('Computer Science');
  await practiceFormPage.setSubject('English');
  await practiceFormPage.setHobby('Sports');
  await practiceFormPage.setHobby('Music');
  await practiceFormPage.setPicture('pig.png');
  await practiceFormPage.setCurrentAddress('Far Far Away');
  await practiceFormPage.setState('Haryana');
  await practiceFormPage.setCity('Karnal');

  await practiceFormPage.clickSubmit();

  await practiceFormPage.checkTable('Student Name', 'Joe Doe');
  await practiceFormPage.checkTable('Student Email', 'joe_doe@email.com');
  await practiceFormPage.checkTable('Gender', 'Male');
  await practiceFormPage.checkTable('Mobile', '1234567890');
  await practiceFormPage.checkTable('Date of Birth', '13 August,2027');
  await practiceFormPage.checkTable('Subjects', 'Computer Science, English');
  await practiceFormPage.checkTable('Hobbies', 'Sports, Music');
  await practiceFormPage.checkTable('Picture', 'pig.png');
  await practiceFormPage.checkTable('Address', 'Far Far Away');
  await practiceFormPage.checkTable('State and City', 'Haryana Karnal');
});
