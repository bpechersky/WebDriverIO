/// <reference types="@wdio/globals/types" />

describe('DemoQA Alerts', () => {
  it('should trigger alert and accept it', async () => {
    await browser.url('https://demoqa.com/alerts');

    // Remove any interfering ads or overlays
    await browser.execute(() => {
      const blockers = document.querySelectorAll('iframe, .adsbygoogle, [id*="ad"], [class*="ad"], .fc-ab-root, .fc-dialog-container, .fc-dialog-overlay, .popup, .overlay, #fixedban, #adplus-anchor, div[role="dialog"]');
      blockers.forEach(el => el.remove());
    });

    await browser.pause(500); // allow DOM to stabilize

    const alertButton = await $('#alertButton');
    await alertButton.scrollIntoView();
    await alertButton.click();

    await browser.acceptAlert();
  });
});
