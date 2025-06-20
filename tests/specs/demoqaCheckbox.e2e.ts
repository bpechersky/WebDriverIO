import { browser } from '@wdio/globals';
import RadioPage from '../pageobjects/radio.page';

describe('DemoQA Radio Buttons', () => {
  before(async () => {
    await RadioPage.open();
  });

  it('should select Yes radio and verify result', async () => {
    await RadioPage.selectYes();
    await expect(RadioPage.resultText).toHaveText('Yes');
  });

  it('should select Impressive radio and verify result', async () => {
    await RadioPage.selectImpressive();
    await expect(RadioPage.resultText).toHaveText('Impressive');
  });

  it('should verify No radio is disabled', async () => {
    await expect(RadioPage.noRadio).toBeDisabled();
  });
});
