import BasePage from './base.page';

class ButtonsPage extends BasePage {
    get doubleClickBtn() { return $('#doubleClickBtn'); }
    get rightClickBtn() { return $('#rightClickBtn'); }
    get dynamicClickBtn() { return $('button=Click Me'); }

    get doubleClickMessage() { return $('#doubleClickMessage'); }
    get rightClickMessage() { return $('#rightClickMessage'); }
    get dynamicClickMessage() { return $('#dynamicClickMessage'); }

    async open() {
        await super.open('/buttons');
    }

    async doubleClick() {
        await this.doubleClickBtn.scrollIntoView();
        await this.doubleClickBtn.doubleClick();
        await this.doubleClickMessage.waitForDisplayed({ timeout: 3000 });
    }


    async rightClick() {
        await this.rightClickBtn.click({ button: 'right' });
    }

    async dynamicClick() {
        await this.dynamicClickBtn.scrollIntoView();
        await this.dynamicClickBtn.waitForDisplayed({ timeout: 5000 });

        // Fallback to JS click to bypass iframe blockage
        await browser.execute((btn: HTMLElement) => btn.click(), await this.dynamicClickBtn);
    }


}

export default new ButtonsPage();
