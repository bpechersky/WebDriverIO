describe('DemoQA Checkbox Test', () => {
    it('should expand the checkbox tree and select "Documents"', async () => {
        await browser.url('/checkbox');

        // Remove ad iframes before interaction
        await browser.execute(() => {
            document.querySelectorAll('iframe').forEach(el => el.remove());
        });

        // Scroll to and click "Expand All" button
        const expandBtn = await $('.rct-option-expand-all');
        await expandBtn.scrollIntoView();
        await browser.pause(500);
        await expandBtn.click();

        // Select "Documents" checkbox
        const documentsCheckbox = await $('label[for="tree-node-documents"] span.rct-checkbox');
        await documentsCheckbox.scrollIntoView();
        await documentsCheckbox.click();

        // Assert result
        const result = await $('#result');
        const resultText = await result.getText();
        console.log('Checkbox Result:', resultText);
        expect(resultText.toLowerCase()).toContain('documents');

    });
});
