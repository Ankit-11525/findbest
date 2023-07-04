// This is snapdeal
// TODO: now work on frontend and backend data is ready

const puppeteer = require("puppeteer");

let data = [];
// const url = `https://www.snapdeal.com/search?keyword=${name}` //working fine
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.snapdeal.com/search?keyword=thirt%20for%20men&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy"
  );

  await page.setViewport({ width: 1080, height: 1024 });
  const element = ".col-xs-6.favDp.product-tuple-listing.js-tuple";
  const elements = await page.$$(element);

  for (let i = 0; i < elements.length; i++) {
    const image = await page.evaluate(el => el.querySelector('.product-tuple-image > a > .picture-elem > .product-image').getAttribute('srcset'), elements[i]);
    if(!image) continue;
    const link = await page.evaluate(el => el.querySelector('.product-tuple-image > a').getAttribute('href'), elements[i]);
    const title = await page.evaluate(el => el.querySelector('.product-desc-rating > a > p').getAttribute('title'), elements[i]);
    const price = await page.evaluate(el => el.querySelector('.product-price-row.clearfix > div > span').textContent, elements[i]);
    const discountPrice = await page.evaluate(el => el.querySelector('.lfloat.product-price').textContent, elements[i]);
    const discount = await page.evaluate(el => el.querySelector('.product-discount > span').textContent, elements[i]);

    data.push({link, image, title, price, discountPrice, discount});
  }
 
  console.log(data);

  await browser.close();
})();
