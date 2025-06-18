/// <reference types="@wdio/globals/types" />

describe('DemoQA Alerts', () => {
  it('should trigger alert and accept it', async () => {
    await browser.url('https://demoqa.com/alerts'); // ✅ Correct URL
    const alertBtn = await $('#alertButton');
    await alertBtn.click();

    await browser.acceptAlert();
  });
});
