// This is myntra
const puppeteer = require("puppeteer");

(async () => {
  let links = [];

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Go to URL
  await page.goto(
    "https://www.myntra.com/tshirt-for-men?rawQuery=tshirt%20for%20men"
  );

  await page.setViewport({ width: 1080, height: 1024 });
  const element = ".product-base>a"; //for href

  // Get all matching elements
  const elements = await page.$$(element);

  // Wrapped with Promise.all to wait for all promises to resolve before continuing
  const _links = await Promise.all(
    // Get the href attribute of each element
    elements.map(async (el) => el.evaluate((el) => el.href)) 
    // elements.map(async (el) => el.evaluate((el) => el.innerHTML))
  );

  if (_links.length) {
    // If there are any links
    _links.forEach((url) => {
      // Loop through each link
      links.push(url); // Add the link to the links array
    });
  }

  console.log(links);
  await browser.close();
})();
