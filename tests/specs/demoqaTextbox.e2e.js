describe('DemoQA Text Box Test', () => {
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

    it('should fill and submit the form', async () => {
        await browser.url('/text-box');

        await removeAds();

        const nameInput = await $('#userName');
        const emailInput = await $('#userEmail');
        const addressInput = await $('#currentAddress');
        const submitBtn = await $('#submit');

        await nameInput.setValue('Boris Tester');
        await emailInput.setValue('boris@example.com');
        await addressInput.setValue('123 Test Lane');

        await safeClick(submitBtn);

        const outputName = await $('#output #name');
        const outputEmail = await $('#output #email');

        const nameText = await outputName.getText();
        const emailText = await outputEmail.getText();

        console.log('Name Output:', nameText);
        console.log('Email Output:', emailText);

        expect(nameText).toContain('Boris Tester');
        expect(emailText).toContain('boris@example.com');
    });
});
