import { browser, $ } from '@wdio/globals';
import AlertsPage from '../pageobjects/alerts.page';

describe('DemoQA Alerts', () => {
  it('should trigger and accept alert', async () => {
    await AlertsPage.open();
    await AlertsPage.triggerAlert();
    await AlertsPage.acceptAlert();
  });
});
