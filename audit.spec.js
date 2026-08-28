import { test, expect } from "@playwright/test";

test("portfolio studio audit", async ({ page }) => {
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto("http://localhost:5174/", { waitUntil: "networkidle" });
  await page.waitForTimeout(3500);

  const heroCanvas = await page.locator("#home canvas").count();
  console.log("hero canvas count:", heroCanvas);

  // cek apakah komponen HeroScene mount (div)
  const sceneDiv = await page.locator("#home div[style*=position]").count();
  console.log("positioned divs in hero:", sceneDiv);

  const heading = await page.locator("#about .section-heading").first();
  const headingBox = await heading.boundingBox();
  const h2Box = await heading.locator("h2").first().boundingBox();
  const idxBox = await heading.locator(".section-index").first().boundingBox();
  console.log("heading:", JSON.stringify(headingBox));
  console.log("h2:", JSON.stringify(h2Box));
  console.log("index:", JSON.stringify(idxBox));
  const aligned = idxBox && h2Box ? Math.abs(idxBox.x - h2Box.x) < 4 : false;
  console.log("index & title left-aligned:", aligned);

  await page.click(".theme-toggle");
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "shot-dark.png" });

  console.log("console errors:", errors.length ? errors : "none");
  expect(aligned).toBeTruthy();
});
