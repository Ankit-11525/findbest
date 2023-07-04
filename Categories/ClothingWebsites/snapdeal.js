// This is snapdeal
// TODO: now work on frontend and backend data is ready

const puppeteer = require("puppeteer");

let links = [];
let images = [];
let prodInfo = [];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.snapdeal.com/search?keyword=thirt%20for%20men&santizedKeyword=&catId=&categoryId=0&suggested=false&vertical=&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy"
  );

  await page.setViewport({ width: 1080, height: 1024 });
  const element = ".product-tuple-image"; //for href and image working fine
  const dataEle = ".product-tuple-description";
  const elements = await page.$$(element);
  const data = await page.$$(dataEle);


  for (let i = 0; i < elements.length; i++) {
    // const img = await elements[i].$eval(".picture-elem>source", (i) =>
    //   i.getAttribute("srcset")
    // );
    const img = await page.evaluate(el => el.querySelector('.picture-elem>source').getAttribute('srcset'), elements[i]);

    const a = await elements[i].$eval("a", (i) => i.getAttribute("href"));
    // links.push(a);
    images.push(img);
  }
  for (let i = 0; i < data.length; i++) {
    const d = await data[i].$eval(".product-desc-rating>a", (i) => i.innerText);
    prodInfo.push(d);
  }
  console.log(links.length);
  // console.log(links);
  console.log(images);
  // console.log(prodInfo);

  await browser.close();
})();

// const els = await page.$$("div.parent");

// for (let i = 0; i < els.length; i++) {
//     const img = await els[i].$eval('img', i => i.getAttribute('src'));
//     console.log(img);
//     const link = await els[i].$eval('a', a => a.getAttribute('href'));
//     console.log(link);
// }
