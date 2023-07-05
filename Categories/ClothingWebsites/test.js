const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const getDataAmazon = async (URL) => {
  let data = [];
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "domcontentloaded" });
  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
  await page.setUserAgent(ua);

  await page.waitForSelector(".a-section.a-spacing-base");
  const elements = await page.$$(".a-section.a-spacing-base");

  for (let i = 0; i < elements.length; i++) {
    const name = await page.evaluate(
      (el) =>
        el.querySelector(".a-size-base-plus.a-color-base.a-text-normal")
          .textContent,
      elements[i]
    );

    const link =
      "https://www.amazon.in/" +
      (await page.evaluate(
        (el) => el.querySelector("div > span > a").getAttribute("href"),
        elements[i]
      ));

    const image = await page.evaluate(
      (el) =>
        el.querySelector("div > span > a > div > img").getAttribute("src"),
      elements[i]
    );

    const description = await page.evaluate(
      (el) =>
        el.querySelector(
          "div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small"
        ).textContent,
      elements[i]
    );

    data.push({ name, link, image, description });
  }
  console.log(elements.length);
  console.log(data);
  await browser.close();
};

const medicine = "paracetamol";
const URL = `https://www.amazon.in/s?k=${medicine}&i=hpc&crid=1OSR6C5KJ804W&sprefix=${medicine}%2Chpc%2C195&ref=nb_sb_noss_2`;
console.log(URL);
getDataAmazon(URL);
