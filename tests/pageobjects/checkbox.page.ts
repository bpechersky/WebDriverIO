// tests/pageobjects/checkbox.page.ts
/// <reference types="@wdio/globals/types" />

export default class CheckboxPage {
  get expandAllButton() {
    return $('.rct-option-expand-all');
  }

  get desktopCheckbox() {
    return $('label[for="tree-node-desktop"] span.rct-checkbox');
  }

  get resultText() {
    return $('#result');
  }

  async open() {
    await browser.url('https://demoqa.com/checkbox');
  }

  async expandAll() {
    await this.expandAllButton.waitForClickable();
    await this.expandAllButton.click();
  }

  async checkDesktop() {
    await this.desktopCheckbox.waitForClickable();
    await this.desktopCheckbox.click();
  }

  async getResultText(): Promise<string> {
    return (await this.resultText.getText()).toLowerCase();
  }
}
