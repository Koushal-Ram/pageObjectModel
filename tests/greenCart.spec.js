import { test } from "@playwright/test";
import { greenCart } from "../pages/greenCart";

test("verify number of products", async ({ page }) => {
  const cart = new greenCart(page);

  await cart.launchGreenCart();
  await cart.countProducts();
});
