import { test, expect } from "@playwright/test";
import OrangeHRMLoginPage from "../pages/loginPage";
import { wrongData } from "../utils/utility";

test.beforeEach(async ({ page }) => {
  const login = new OrangeHRMLoginPage(page);
  await login.launchLoginPage();
});

test("verify loginPage with valid credentials", async ({ page }) => {
  const login = new OrangeHRMLoginPage(page);
  await page.waitForTimeout(1000);
  await login.loginWithValidCredentials(
    process.env.ENV_USERNAME,
    process.env.ENV_PASSWORD,
  );
  await login.successLogin();
});

test("verify loginPage with valid Username and wrong password", async ({
  page,
}) => {
  const login = new OrangeHRMLoginPage(page);
  await login.loginWithValidCredentials(
    process.env.ENV_USERNAME,
    wrongData.wrongPassword,
  );
  await login.failedLogin();
});

test("verify loginPage with invalid Username and correct password", async ({
  page,
}) => {
  const login = new OrangeHRMLoginPage(page);
  await login.loginWithValidCredentials(
    wrongData.wrongUserName,
    process.env.ENV_PASSWORD,
  );
  await login.failedLogin();
});

test("verify logout", async ({ page }) => {
  const login = new OrangeHRMLoginPage(page);
  await login.loginWithValidCredentials(
    process.env.ENV_USERNAME,
    process.env.ENV_PASSWORD,
  );
  await login.logout();
});
