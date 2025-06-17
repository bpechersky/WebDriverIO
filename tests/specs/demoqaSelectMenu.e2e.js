describe('DemoQA Select Menu Test', () => {
    it('should select an option from old style dropdown', async () => {
        await browser.url('/select-menu');

        const dropdown = await $('#oldSelectMenu');
        await dropdown.selectByVisibleText('Purple');

        const selected = await $('#oldSelectMenu').getValue();
        expect(selected).toBe('4'); // 'Purple' corresponds to value '4'
    });
});
