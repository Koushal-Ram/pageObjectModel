import { expect } from "@playwright/test";
import { greenCartURL } from "../utils/utility";

export class greenCart {
  constructor(page) {
    this.page = page;
    this.options = page.locator("//div[@class='products-wrapper']/div/div");
  }

  async launchGreenCart() {
    await this.page.goto(greenCartURL);
  }

  async countProducts() {
    await expect(this.options).toHaveCount(30);
  }
}
