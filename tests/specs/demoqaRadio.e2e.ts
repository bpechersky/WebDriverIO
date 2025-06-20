import RadioPage from '../pageobjects/radio.page';

describe('DemoQA Radio Buttons', () => {

    beforeEach(async () => {
        await RadioPage.open();
    });

    it('should select "Yes" and verify the result', async () => {
        await RadioPage.selectYes();
        await expect(RadioPage.resultText).toHaveText('Yes');
    });

    it('should select "Impressive" and verify the result', async () => {
        await RadioPage.selectImpressive();
        await expect(RadioPage.resultText).toHaveText('Impressive');
    });

    it('should verify "No" radio button is disabled', async () => {
        await expect(RadioPage.noRadio).toBeDisabled();
    });

});