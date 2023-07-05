const puppeteer = require("puppeteer-extra");

// Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

// Add adblocker plugin to block all ads and trackers (saves bandwidth)
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));


const getClothesMyntra = async (URL) => {
  try {
    let data = [];
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.goto(URL, { waitUntil: "domcontentloaded" });
    const ua =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
    await page.setUserAgent(ua);

    // await page.setViewport({ width: 1080, height: 1024 });
    await page.waitForSelector(".product-base");
    const elements = await page.$$(".product-base");
    let minLength = 6;
    if (minLength > elements.length) minLength = elements.length;
    for (let i = 0; i < minLength; i++) {
      let image = null;
      const imageLink = await page.evaluate(
        (el) => el.querySelector("a > .product-imageSliderContainer").innerHTML,
        elements[i]
      );
      const arr = imageLink.split("src=");
      if (arr.length > 1) {
        const img = arr[1].split("class=")[0];
        const n = img.length;
        image = img.substring(1, n - 2);
      }
      if (!image) continue;

      const li = await page.evaluate(
        (el) => el.querySelector("a").getAttribute("href"),
        elements[i]
      );
      const link = `https://www.myntra.com/` + li;

      const titleHead = await page.evaluate(
        (el) =>
          el.querySelector("a > .product-productMetaInfo > h3").textContent,
        elements[i]
      );
      const titleTail = await page.evaluate(
        (el) =>
          el.querySelector("a > .product-productMetaInfo > h4").textContent,
        elements[i]
      );
      const title = titleHead + " - " + titleTail;

      const combinedPrice = await page.evaluate(
        (el) =>
          el.querySelector("a > .product-productMetaInfo > div > span")
            .textContent,
        elements[i]
      );
      const priceArr = combinedPrice.split("Rs. ");
      const price = "Rs. " + priceArr[2];
      const discountPrice = "Rs. " + priceArr[1];

      const disct = parseInt(
        ((+priceArr[2] - +priceArr[1]) * 100) / +priceArr[2]
      );
      const discount = `${disct}% Off`;
      const scrapFrom = "Myntra";
      data.push({ link, image, title, price, discountPrice, discount, scrapFrom });
    }

    await browser.close();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getClothesMyntra;
