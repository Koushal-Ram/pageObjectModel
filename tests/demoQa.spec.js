import { test } from "@playwright/test";
import DemoQa from "../pages/demoqa";
import { fakerData } from "../utils/utility";
import { DemoQaRadioButton } from "../pages/demoqa";

test("verify demoqa form", async ({ page }) => {
  const demoqa = new DemoQa(page);
  await demoqa.launchDemoQaURL();
  await demoqa.fillTheForm(
    fakerData.name,
    fakerData.email,
    fakerData.currentAddress,
    fakerData.permanentAddress,
  );

  await demoqa.verifyText(
    fakerData.name,
    fakerData.email,
    fakerData.currentAddress,
    fakerData.permanentAddress,
  );
});

test("check box navigation and selection", async ({ page }) => {
  const demoqa = new DemoQa(page);
  await demoqa.launchDemoQaURL();

  const checkBoxPage = new DemoQaRadioButton(page);
  await checkBoxPage.clickCheckBox();
  await checkBoxPage.verifyCheckBoxSelected();
});
