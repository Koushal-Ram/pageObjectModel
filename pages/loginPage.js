import { expect } from "@playwright/test";
import { loginPageURL, dashBoardURL } from "../utils/utility";

class OrangeHRMLoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.locator(
      ".oxd-text.oxd-text--p.oxd-alert-content-text",
    );
    this.logoutOption = page.locator(".oxd-userdropdown-tab");
    this.logoutButton = page.getByRole("menuitem", { name: "Logout" });
  }

  async launchLoginPage() {
    await this.page.goto(loginPageURL);
  }

  async loginWithValidCredentials(username, password) {
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async successLogin() {
    await expect(this.page).toHaveURL(dashBoardURL);
  }

  async failedLogin() {
    await expect(this.errorMessage).toBeVisible();
  }

  async logout() {
    await this.page.waitForURL(dashBoardURL, { timeout: 10000 });
    await this.logoutOption.click();
    await this.logoutButton.click();
    await expect(this.page).toHaveURL(loginPageURL);
  }
}

export default OrangeHRMLoginPage;
