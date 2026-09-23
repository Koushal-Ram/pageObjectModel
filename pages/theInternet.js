import { expect } from "@playwright/test";
import { theInternetURL } from "../utils/utility";

export class TheInternet {
  constructor(page) {
    this.page = page;
    this.dropDownOptions = page.locator("#dropdown option");
  }

  async launchTheInternetURL() {
    await this.page.goto(theInternetURL);
  }

  async verifyNoOFOptions() {
    //await this.dropDownButton.click();
    const options = await this.page.locator("#dropdown option");
    await expect(options).toHaveCount(3);
  }
}
