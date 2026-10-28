import { Locator, Page, expect } from '@playwright/test';
import path from 'node:path';

export class PracticeFormPage {
  private readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly mobileField: Locator;
  readonly subjectField: Locator;
  readonly subjectOption: Locator;
  readonly pictureField: Locator;
  readonly currentAddressField: Locator;
  readonly stateButton: Locator;
  readonly cityButton: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator('//input[@id="firstName"]');
    this.lastNameField = page.locator('//input[@id="lastName"]');
    this.emailField = page.locator('//input[@id="userEmail"]');
    this.mobileField = page.locator('//input[@id="userNumber"]');
    this.subjectField = page.locator('//input[@id="subjectsInput"]');
    this.subjectOption = page.locator('(//div[contains(@id,"react-select")])[1]');
    this.pictureField = page.locator('//input[@id="uploadPicture"]');
    this.currentAddressField = page.locator('//textarea[@id="currentAddress"]');
    this.stateButton = page.locator('//div[@id="state"]');
    this.cityButton = page.locator('//div[@id="city"]');
    this.submitButton = page.locator('//button[@id="submit"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async setFirstName(firstName: string): Promise<void> {
    await this.firstNameField.fill(firstName);
  }

  async setLastName(lastName: string): Promise<void> {
    await this.lastNameField.fill(lastName);
  }

  async setEmail(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  async setGender(gender: string): Promise<void> {
    const genderButton = this.page.locator('//input[@value="' + gender + '"]');
    await genderButton.click();
  }

  async setMobile(mobile: string): Promise<void> {
    await this.mobileField.fill(mobile);
  }

  async setDateOfBirth(year: string, month: string, day: string): Promise<void> {
    // Opening the date picker
    await this.page.locator('//input[@id="dateOfBirthInput"]').click();

    // Selecting the year
    await this.page.locator('//select[contains(@class,"react-datepicker__year-select")]').selectOption({ label: year });

    // Selecting the month
    await this.page.locator('//select[contains(@class,"react-datepicker__month-select")]').selectOption({ label: month });

    // Selecting the day
    await this.page.locator('(//div[contains(@class,"react-datepicker__day")][normalize-space()="' + day + '"])[last()]').click();
  }

  async setSubject(subject: string): Promise<void> {
    await this.subjectField.fill(subject);
    await this.subjectOption.click();
  }

  async setHobby(hobby: string): Promise<void> {
    const hobbyButton = this.page.locator('//div[normalize-space()="' + hobby + '"]//input');
    await hobbyButton.click();
  }

  async setPicture(picture: string): Promise<void> {
    const filePath = path.resolve(process.cwd(), 'files', picture);
    await this.pictureField.setInputFiles(filePath);
  }

  async setCurrentAddress(currentAddress: string): Promise<void> {
    await this.currentAddressField.fill(currentAddress);
  }

  async setState(state: string): Promise<void> {
    await this.stateButton.click();
    const stateOption = this.page.locator('//div[contains(@id,"react-select")][normalize-space()="' + state + '"]');
    await stateOption.click();
  }

  async setCity(city: string): Promise<void> {
    await this.cityButton.click();
    const cityOption = this.page.locator('//div[contains(@id,"react-select")][normalize-space()="' + city + '"]');
    await cityOption.click();
  }

  async clickSubmit(): Promise<void> {
    await this.submitButton.click();
  }

  async checkTable(label: string, value: string): Promise<void> {
    const locator = this.page.locator('//td[normalize-space()="' + label + '"]/ancestor::tr[1]//td[2]');
    await expect.soft(locator).toHaveText(value);
  }
}
