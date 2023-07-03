// This is snapdeal
// TODO: now work on frontend and backend data is ready

const puppeteer = require("puppeteer");

let links = [];
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.snapdeal.com/search?keyword=thirt%20for%20men&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy"
  );

  await page.setViewport({ width: 1080, height: 1024 });
//   const element = ".product-tuple-image>a"; //for href working fine
  const element = ".picture-elem>source"; //for image working fine
//   const element = ".product-desc-rating>a"; //for data other than link working fine

  const elements = await page.$$(element);
  const _links = await Promise.all(
    elements.map(async (el) => el.evaluate((el) => el.srcset)) // working for images
    // elements.map(async (el) => el.evaluate((el) => el.href)) // working for links
    // elements.map(async (el) => el.evaluate((el) => el.innerHTML)) //-->working fine all data other than links
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
