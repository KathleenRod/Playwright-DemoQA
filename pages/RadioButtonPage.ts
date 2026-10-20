import { Locator, Page, expect } from '@playwright/test';

export class RadioButtonPage {

private readonly page: Page;
readonly yesRadioButton : Locator;
readonly impressiveRadioButton : Locator;
readonly radioButtonOutput : Locator;
readonly noRadioButton : Locator;

constructor(page: Page) {

this.page = page;
this.yesRadioButton = page.locator('//input[@id="yesRadio"]');
this.impressiveRadioButton = page.locator('//input[@id="impressiveRadio"]');
this.radioButtonOutput = page.locator('//p[@class="mt-3"]');
this.noRadioButton = page.locator('//input[@id="noRadio"]');


}

async goto(): Promise<void> {
    await this.page.goto('https://demoqa.com/radio-button');
  }

async checkFields () {
   
  await expect(this.yesRadioButton).not.toBeChecked();
  await expect(this.impressiveRadioButton).not.toBeChecked();

}

async selectCheckYes() {

  await this.yesRadioButton.click();
  await expect(this.yesRadioButton).toBeChecked();
  await expect(this.impressiveRadioButton).not.toBeChecked();
  await expect(this.radioButtonOutput).toHaveText('You have selected Yes');

    }

  async selectCheckImpressive (){ 
  await this.impressiveRadioButton.click();
  await expect(this.yesRadioButton).not.toBeChecked();
  await expect(this.impressiveRadioButton).toBeChecked();
  await expect(this.radioButtonOutput).toHaveText('You have selected Impressive');

    }

  async checkNoButton (){

  await expect(this.noRadioButton).toBeDisabled();
  await expect(this.radioButtonOutput).toBeHidden();

  }

  }


