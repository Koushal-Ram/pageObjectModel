import { expect } from "@playwright/test";
import { loginPageURL, dashBoardURL } from "../utils/utility";

export class Employee {
  constructor(page) {
    this.page = page;
    this.pimPage = page.locator('a[href="/web/index.php/pim/viewPimModule"]');
    this.numbers = page.locator(".oxd-table-body>div");
  }

  async numberOfEmployees() {
    await this.pimPage.click();
    await expect(this.numbers).toHaveCount(50);
  }
}
