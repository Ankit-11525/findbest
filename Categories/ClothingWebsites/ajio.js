// Ajio
// This is ajio
// TODO: Ajio data done, now can work on frontend and backend
const puppeteer = require("puppeteer");

(async () => {
  let links = [];

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.ajio.com/search/?text=tshirt");

  await page.setViewport({ width: 1080, height: 1024 });
  // const element = ".rilrtl-products-list__link"; //for links
  const element = ".contentHolder"; //for data other than links
  const elements = await page.$$(element);
  const _links = await Promise.all(
    // elements.map(async (el) => el.evaluate((el) => el.href)) // working for links
    elements.map(async (el) => el.evaluate((el) => el.innerText)) //-->working fine all data other than links
  );

  if (_links.length) {
    // If there are any links
    _links.forEach((url) => {
      // Loop through each link
      links.push(url);
      // Add the link to the links array
    });
  }

  console.log(links);
  await browser.close();
})();

// for each link do scrapping again
