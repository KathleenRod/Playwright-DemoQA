import { Locator, Page, expect } from '@playwright/test';
import path from 'node:path';
import { AutoCompletePage } from './AutoCompletePage';


export class PageComplete {
  private readonly page: Page;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly mobileNumberField: Locator;
  readonly subjectsField: Locator;
  readonly currentAddressField: Locator;
  readonly femaleRadioButton : Locator;
  readonly sportsButton : Locator;
  readonly readingButton : Locator;
  readonly uploadPicture: Locator;
  readonly stateField: Locator;
  readonly stateOption: Locator;
  readonly cityField: Locator;
  readonly cityOption: Locator;
  readonly birthdayInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly dayInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameField = page.locator ('//input[@id="firstName"]');
    this.lastNameField = page.locator ('//input[@id="lastName"]');
    this.emailField = page.locator ('//input[@id="userEmail"]');
    this.mobileNumberField = page.locator ('//input[@id="userNumber"]')
    this.subjectsField = page.locator ('//input[@id="subjectsInput"]');
    this.currentAddressField = page.locator ('//textarea[@id="currentAddress"]');
    this.femaleRadioButton = page.locator('//input[@id="gender-radio-2"]');
    this.sportsButton = page.locator('//input[@id="hobbies-checkbox-1"]');
    this.readingButton = page.locator('//input[@id="hobbies-checkbox-2"]');
    this.uploadPicture = page.locator('//input[@id="uploadPicture"]');
    this.stateField = page.locator('//input[@id="react-select-3-input"]');
    this.stateOption = page.locator('(//div[contains(@id,"react-select-3-option-2")])[1]');
    this.cityField = page.locator('//input[@id="react-select-4-input"]');
    this.cityOption = page.locator('(//div[contains(@id,"react-select-4-option-0")])[1]');
    this.birthdayInput = page.locator ('//input[@id="dateOfBirthInput"]');
    this.monthInput = page.locator ('//select[@class="react-datepicker__month-select"]');
    this.yearInput = page.locator ('//select[@class="react-datepicker__year-select"]');
    this.dayInput = page.locator ('//div[@class="react-datepicker__day react-datepicker__day--030"]');
  }

  async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/automation-practice-form');
  }

  async setFirstName(firstName: string = ''): Promise<void> {
    await this.firstNameField.fill(firstName);
  }
  async setLastName(lastName: string = ''): Promise<void> {
    await this.lastNameField.fill(lastName);
  }

  async setEmail(email: string = ''): Promise<void> {
    await this.emailField.fill(email);
  }
    async setMobile(mobile: string = ''): Promise<void> {
    await this.mobileNumberField.fill(mobile);
  }
  
  async setSubject(subject: string = ''): Promise<void> {
    await this.subjectsField.fill(subject);
  }

  async setCurrentAddress(currentAddress: string = ''): Promise<void> {
    await this.currentAddressField.fill(currentAddress);
  }

  async setGender() {

  await this.femaleRadioButton.click();
  }

  async setHobbies(){
    await this.sportsButton.click();
    await this.readingButton.click();
  }

  async setPicture(file: string): Promise<void> {
      const filePath = path.resolve(process.cwd(), 'files', file);
      await this.uploadPicture.setInputFiles(filePath);
    }


    async setState(state: string = ''): Promise<void> {
    await this.stateField.fill(state);
    await this.stateOption.click();
    }
    
    async setCity(city: string = ''): Promise<void> {
    await this.cityField.fill(city);
    await this.cityOption.click();
    }

    async setBirthday(){
        await this.birthdayInput.click();
        await this.monthInput.selectOption('3');
        await this.yearInput.selectOption('1993');
        await this.dayInput.click();
    }


}