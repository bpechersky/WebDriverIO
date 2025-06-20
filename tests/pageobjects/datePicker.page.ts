import type { ChainablePromiseElement } from "webdriverio";

class DatePickerPage {
  public get dateInput(): ChainablePromiseElement<WebdriverIO.Element> {
    return $("#datePickerMonthYearInput");
  }

  public get calendarMonthSelect(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(".react-datepicker__month-select");
  }

  public get calendarYearSelect(): ChainablePromiseElement<WebdriverIO.Element> {
    return $(".react-datepicker__year-select");
  }

  public async open(): Promise<void> {
    await browser.url("https://demoqa.com/date-picker");
  }

  public async selectDateViaCalendar(date: string): Promise<void> {
    const [month, day, year] = date.split("/");
    await this.dateInput.scrollIntoView();
    await this.dateInput.waitForClickable({ timeout: 5000 });
    await this.dateInput.click();

    await this.calendarMonthSelect.selectByIndex(Number(month) - 1);
    await this.calendarYearSelect.selectByVisibleText(year);
    const selector = `.react-datepicker__day--0${day.padStart(
      2,
      "0"
    )}:not(.react-datepicker__day--outside-month)`;
    await $(selector).click();
  }
}

export default new DatePickerPage();
