import { $, $$, browser } from '@wdio/globals';

class SelectMenuPage {
    get oldStyleSelect() {
        return $('#oldSelectMenu');
    }

    get singleSelectDropdown() {
        return $('#withOptGroup input');
    }

    get multiSelectDropdown() {
        return $('#react-select-4-input');
    }

    async open() {
        await browser.url('https://demoqa.com/select-menu');
    }

    async selectOldStyle(value: string) {
        await this.oldStyleSelect.selectByVisibleText(value);
    }

    async selectSingleDropdown(value: string) {
        await this.singleSelectDropdown.setValue(value);
        await browser.keys('Enter');
        await browser.pause(500);
    }

    async selectMultiple(values: string[]) {
        for (const value of values) {
            await this.multiSelectDropdown.setValue(value);
            await browser.keys('Enter');
            await browser.pause(300);
        }
    }

    async getSelectedOptions(): Promise<string[]> {
        const elements = await $$('.css-1uccc91-singleValue, .css-12jo7m5');
        const texts: string[] = [];

        for (const el of elements) {
            texts.push(await el.getText());
        }

        return texts;
    }




}

export default new SelectMenuPage();
