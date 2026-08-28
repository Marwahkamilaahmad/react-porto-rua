import { test } from "@playwright/test";

test("capture dark & light", async ({ page }) => {
  await page.goto("http://localhost:5174/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "shot-hero-top.png" });

  // Scroll ke projects
  await page.click("a[href='#work']");
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "shot-work.png" });

  // Dark mode full
  await page.click(".theme-toggle");
  await page.waitForTimeout(1500);
  await page.screenshot({ path: "shot-dark-full.png", fullPage: true });

  console.log("captured");
});
