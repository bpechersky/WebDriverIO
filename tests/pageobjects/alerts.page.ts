import { $, browser } from '@wdio/globals';

class AlertsPage {
    get alertButton() {
        return $('#alertButton');
    }

    async open() {
        await browser.url('https://demoqa.com/alerts');
    }

    async triggerAlert() {
        await browser.execute(() => {
            const ad = document.querySelector('iframe[id^="google_ads_iframe"]');
            if (ad) ad.remove();
        });
        await this.alertButton.scrollIntoView();
        await browser.pause(300);
        await this.alertButton.click();
    }

    async acceptAlert() {
        await browser.acceptAlert();
    }
}

export default new AlertsPage();
