import { fakerEN_IN as faker } from "@faker-js/faker";

export const loginPageURL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

export const dashBoardURL =
  "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";

export const wrongData = {
  wrongUserName: "administration",
  wrongPassword: "admin12345",
};

export const demoQaURL = "https://demoqa.com/text-box";

export const fakerData = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  currentAddress: faker.location.streetAddress(),
  permanentAddress: faker.location.streetAddress(),
};

export const theInternetURL = "https://the-internet.herokuapp.com/dropdown";

export const greenCartURL =
  "https://rahulshettyacademy.com/seleniumPractise/#/";
