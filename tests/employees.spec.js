import { test } from "@playwright/test";
import OrangeHRMLoginPage from "../pages/loginPage";
import { Employee } from "../pages/employee";

test("verify number of employees", async ({ page }) => {
  const login = new OrangeHRMLoginPage(page);
  const emp = new Employee(page);
  await login.launchLoginPage();
  await login.loginWithValidCredentials(
    process.env.ENV_USERNAME,
    process.env.ENV_PASSWORD,
  );
  await login.successLogin();

  await emp.numberOfEmployees();
});
