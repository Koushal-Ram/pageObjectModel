import { expect } from "@playwright/test";
import { demoQaURL } from "../utils/utility";

class DemoQa {
  constructor(page) {
    this.page = page;
    this.fullName = page.getByRole("textbox", { name: "Full Name" });
    this.email = page.getByRole("textbox", { name: "name@example.com" });
    this.currentAddress = page.getByRole("textbox", {
      name: "Current Address",
    });
    this.permanentAddress = page.locator("#permanentAddress");
    this.submitButton = page.getByRole("button", { name: "Submit" });

    this.outputBox = page.locator("#output");
    this.outputName = page.locator("#output #name");
    this.outputEmail = page.locator("#output #email");
    this.outputCurrentAddress = page.locator("#output #currentAddress");
    this.outputPermanentAddress = page.locator("#output #permanentAddress");
  }

  async launchDemoQaURL() {
    await this.page.goto(demoQaURL);
  }

  async fillTheForm(fullname, email, currentaddress, permanentaddress) {
    await this.fullName.fill(fullname);
    await this.email.fill(email);
    await this.currentAddress.fill(currentaddress);
    await this.permanentAddress.fill(permanentaddress);
    await this.submitButton.click();
  }

  async verifyText(fullname, email, currentaddress, permanentaddress) {
    await expect(this.outputBox).toBeVisible();
    await expect(this.outputName).toContainText(`Name:${fullname}`);
    await expect(this.outputEmail).toContainText(`Email:${email}`);
    await expect(this.outputCurrentAddress).toContainText(
      `Current Address :${currentaddress}`,
    );
    await expect(this.outputPermanentAddress).toContainText(
      `Permananet Address :${permanentaddress}`,
    );
  }
}

export class DemoQaRadioButton {
  constructor(page) {
    this.page = page;
    this.checkBoxMenuItem = page.locator("span.text", { hasText: "Check Box" });
    this.plusButton = page.locator("span.rc-tree-switcher");
    this.checkBox = page.getByRole("checkbox", { name: "Select Home" });
    this.resultContainer = page.locator("#result");
  }

  async clickCheckBox() {
    await this.checkBoxMenuItem.click();
    await this.plusButton.click();
    await this.checkBox.click();
  }

  async verifyCheckBoxSelected() {
    await expect(this.resultContainer).toBeVisible();
    await expect(this.resultContainer).toContainText("You have selected :");
  }
}

export default DemoQa;
