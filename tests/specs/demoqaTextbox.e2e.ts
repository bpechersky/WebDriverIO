import { expect } from '@wdio/globals';
import TextBoxPage from '../pageobjects/textbox.page';

describe('DemoQA Text Box Form', () => {
    it('should fill and submit the text box form', async () => {
        await TextBoxPage.open();

        const testData = {
            fullName: 'John Doe',
            email: 'johndoe@example.com',
            currentAddress: '123 Main St, San Jose',
            permanentAddress: '456 Market St, San Francisco'
        };

        await TextBoxPage.fillForm(
            testData.fullName,
            testData.email,
            testData.currentAddress,
            testData.permanentAddress
        );
        await TextBoxPage.submit();

        const output = await TextBoxPage.getOutput();

        expect(output.name).toContain(testData.fullName);
        expect(output.email).toContain(testData.email);
        expect(output.currentAddress).toContain(testData.currentAddress);
        expect(output.permanentAddress).toContain(testData.permanentAddress);
    });
});
