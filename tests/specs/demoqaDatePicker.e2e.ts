import { expect } from "@wdio/globals";
import DatePickerPage from "../pageobjects/datePicker.page";

describe("DemoQA Date Picker", () => {
  beforeEach(async () => {
    await browser.url("/date-picker");
    await browser.execute(() => {
      const ads = document.querySelectorAll("iframe");
      ads.forEach((ad) => ad.remove());
    });
  });

  it("should allow selecting a date via calendar", async () => {
    const testDate = "06/20/2025";

    await DatePickerPage.open();
    await DatePickerPage.selectDateViaCalendar(testDate);

    const selected = await DatePickerPage.dateInput.getValue();
    expect(selected).toBe(testDate);
  });
});
