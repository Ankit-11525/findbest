// This is myntra
// TODO: now work on frontend and backend data is ready
const puppeteer = require("puppeteer");

let links = [];
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.myntra.com/tshirt-for-men?rawQuery=tshirt%20for%20men"
  );

  await page.setViewport({ width: 1080, height: 1024 });
//   const element = ".product-base>a"; //for href working fine
  const element = ".product-base .product-productMetaInfo"; //for data working fine
  //   const element = ".product-base .product-ratingsContainer span:not([class])"; //for rating

  const elements = await page.$$(element);
  const _links = await Promise.all(
    // elements.map(async (el) => el.evaluate((el) => el.href)) // working for links 
    elements.map(async (el) => el.evaluate((el) => el.innerText)) //-->working fine all data other than links
    // product name can be exracted from href link -> site is doin conditional ren
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
