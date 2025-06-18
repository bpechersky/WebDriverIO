/// <reference types="@wdio/globals/types" />
import CheckboxPage from '../pageobjects/checkbox.page';



describe('DemoQA Checkbox (Page Object)', () => {
  it('should expand tree and select "Desktop" checkbox', async () => {
    const page = new CheckboxPage();

    await page.open();
    await page.expandAll();
    await page.checkDesktop();

    const result = await page.getResultText();
    expect(result).toContain('desktop');
  });
});
