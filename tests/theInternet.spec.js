import { test } from "@playwright/test";
import { TheInternet } from "../pages/theInternet";

test("verify number of options", async ({ page }) => {
  const dropDown = new TheInternet(page);
  await dropDown.launchTheInternetURL();
  await dropDown.verifyNoOFOptions();
});
