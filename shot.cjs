const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

  // Light mode full page
  await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({ path: "shot-light-top.png" });
  await page.screenshot({ path: "shot-light-full.png", fullPage: true });

  // Switch to dark
  await page.click(".theme-toggle");
  await page.waitForTimeout(800);
  await page.screenshot({ path: "shot-dark-full.png", fullPage: true });

  // Scroll to projects section
  await page.click("text=View Work");
  await page.waitForTimeout(1000);
  await page.screenshot({ path: "shot-projects.png", fullPage: false });

  // Open project modal
  await page.click("text=View Details");
  await page.waitForTimeout(900);
  await page.screenshot({ path: "shot-modal.png" });

  await browser.close();
  console.log("done");
})();
