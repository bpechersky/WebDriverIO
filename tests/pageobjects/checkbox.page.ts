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
  // Remove obstructing iframes (ads)
  await browser.execute(() => {
    document.querySelectorAll('iframe').forEach(e => e.remove());
  });

  // Pause briefly to allow layout to settle
  await browser.pause(500); // stabilize layout

  // Scroll into view to ensure visibility
  await this.expandAllButton.scrollIntoView();

  // Click the "Expand all" button
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
