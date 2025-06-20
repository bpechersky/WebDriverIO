// tests/specs/demoqaButtons.e2e.ts
import ButtonsPage from '../pageobjects/buttons.page';

describe('DemoQA Buttons', () => {
    beforeEach(async () => {
        await ButtonsPage.open();
    });

    it('should handle double click', async () => {
        await ButtonsPage.open();
        await ButtonsPage.doubleClick();
        await expect(ButtonsPage.doubleClickMessage).toHaveTextContaining('You have done a double click');
    });


    it('should handle right click', async () => {
        await ButtonsPage.rightClickBtn.click({ button: 'right' });
        await expect(ButtonsPage.rightClickMessage).toHaveTextContaining('You have done a right click');
    });

    it('should handle dynamic click', async () => {
        await ButtonsPage.dynamicClickBtn.click();
        await expect(ButtonsPage.dynamicClickMessage).toHaveTextContaining('You have done a dynamic click');
    });
});
