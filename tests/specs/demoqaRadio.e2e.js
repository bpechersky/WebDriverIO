describe('DemoQA Radio Button Test', () => {
    async function removeAds() {
        await browser.execute(() => {
            document.querySelectorAll('iframe').forEach(el => el.remove());
        });
    }

    async function safeClick(element, retries = 3) {
        for (let i = 0; i < retries; i++) {
            try {
                await removeAds();
                await element.scrollIntoView();
                await browser.pause(500);
                await element.click();
                return;
            } catch (error) {
                if (i === retries - 1) throw error;
                console.warn(`Click intercepted, retrying... [${i + 1}/${retries}]`);
                await browser.pause(1000);
            }
        }
    }

    it('should select the "Impressive" radio button and verify result', async () => {
        await browser.url('/radio-button');

        const impressiveRadio = await $('label[for="impressiveRadio"]');
        await safeClick(impressiveRadio);

        const result = await $('.text-success');
        const text = await result.getText();
        console.log('Radio button result:', text);
        expect(text).toBe('Impressive');
    });
});
