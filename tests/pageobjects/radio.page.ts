import { $, browser } from '@wdio/globals';

class RadioPage {
    get yesLabel() {
        return $('label[for="yesRadio"]');
    }

    get impressiveLabel() {
        return $('label[for="impressiveRadio"]');
    }

    get noRadio() {
        return $('#noRadio'); // This is disabled
    }

    get resultText() {
        return $('.text-success');
    }

    async open() {
        await browser.url('https://demoqa.com/radio-button');
    }

    async selectYes() {
        await this.yesLabel.scrollIntoView();
        await this.yesLabel.click();
    }

    async selectImpressive() {
        await this.impressiveLabel.scrollIntoView();
        await this.impressiveLabel.click();
    }

    async getResultText() {
        return await this.resultText.getText();
    }

    async isNoRadioDisabled() {
        return !(await this.noRadio.isEnabled());
    }
}

export default new RadioPage();
