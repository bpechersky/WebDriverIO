import { $, browser } from '@wdio/globals';

class TextBoxPage {
    get fullNameInput() {
        return $('#userName');
    }

    get emailInput() {
        return $('#userEmail');
    }

    get currentAddressInput() {
        return $('#currentAddress');
    }

    get permanentAddressInput() {
        return $('#permanentAddress');
    }

    get submitButton() {
        return $('#submit');
    }

    get outputName() {
        return $('#name');
    }

    get outputEmail() {
        return $('#email');
    }

    get outputCurrentAddress() {
        return $('#output #currentAddress');
    }

    get outputPermanentAddress() {
        return $('#output #permanentAddress');
    }

    async open() {
        await browser.url('https://demoqa.com/text-box');
    }

    async fillForm(fullName: string, email: string, currentAddress: string, permanentAddress: string) {
        await this.fullNameInput.setValue(fullName);
        await this.emailInput.setValue(email);
        await this.currentAddressInput.setValue(currentAddress);
        await this.permanentAddressInput.setValue(permanentAddress);
    }

    async submit() {
        const submitBtn = await this.submitButton;
        await submitBtn.scrollIntoView();
        await browser.execute("arguments[0].click();", submitBtn);
    }


    async getOutput() {
        return {
            name: await this.outputName.getText(),
            email: await this.outputEmail.getText(),
            currentAddress: await this.outputCurrentAddress.getText(),
            permanentAddress: await this.outputPermanentAddress.getText()
        };
    }
}

export default new TextBoxPage();
