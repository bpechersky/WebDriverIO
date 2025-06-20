import SelectMenuPage from '../pageobjects/selectmenu.page';

describe('DemoQA Select Menu', () => {
    it('should select from old style select', async () => {
        await SelectMenuPage.open();
        await SelectMenuPage.selectOldStyle('Yellow');
        const selectedValue = await SelectMenuPage.oldStyleSelect.getValue();
        expect(selectedValue).toBe('3'); // Yellow = value "3"
    });

    it('should select from single select dropdown', async () => {
        await SelectMenuPage.open();
        await SelectMenuPage.selectSingleDropdown('Group 1, option 2');
        const selected = await SelectMenuPage.getSelectedOptions();
        expect(selected).toContain('Group 1, option 2');
    });

    it('should select multiple options', async () => {
        await SelectMenuPage.open();
        await SelectMenuPage.selectMultiple(['Green', 'Blue']);
        const selected = await SelectMenuPage.getSelectedOptions();
        expect(selected).toContain('Green');
        expect(selected).toContain('Blue');
    });
});
