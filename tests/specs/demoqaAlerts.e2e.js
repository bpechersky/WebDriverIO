describe('DemoQA Alerts Test', () => {
    it('should handle the alert and verify text', async () => {
        await browser.url('/alerts');

        // OPTIONAL: Remove ad iframes that might be blocking elements
        await browser.execute(() => {
            document.querySelectorAll('iframe').forEach(el => el.remove());
        });

        // Use JS to click alert button (avoids overlay issues)
        await browser.execute(() => {
            document.getElementById('alertButton')?.click();
        });

        // Wait for the alert and validate
        await browser.waitUntil(async () => await browser.isAlertOpen(), {
            timeout: 5000,
            timeoutMsg: 'Expected alert to be present'
        });

        const alertText = await browser.getAlertText();
        expect(alertText).toBe('You clicked a button');


        await browser.acceptAlert();
    });
});
