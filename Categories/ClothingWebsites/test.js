// This is myntra
// TODO: now work on frontend and backend data is ready
const puppeteer = require("puppeteer");

let data = [];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.myntra.com/tshirt-for-men?rawQuery=tshirt%20for%20men"
  );

  await page.setViewport({ width: 1080, height: 1024 });
  // const element = ".product-base"; //for href working fine
  // const element = ".product-base .product-productMetaInfo"; //for href working fine
  //   const element = ".product-base .product-ratingsContainer span:not([class])"; //for rating

  const elements = await page.$$(".product-base");
  // const _links = await Promise.all(
  //   // elements.map(async (el) => el.evaluate((el) => el.href)) // working for links 
  //   elements.map(async (el) => el.evaluate((el) => el.innerText)) //-->working fine all data other than links
  //   // product name can be exracted from href link -> site is doin conditional ren
  // );

  for (let i = 0; i < elements.length; i++) {
    // const d = await elements[i].$eval(".product-productMetaInfo", (i) =>
    //   i.innerText
    // );
    // const d = await page.evaluate(el => el.querySelector('.product-productMetaInfo').textContent, elements[i]);

    // const a = await elements[i].$eval("a", (i) => i.getAttribute("href"));

    // const imgCpntainer = await elements[i].$eval(".product-sliderContainer");
    const img = await page.evaluate(el => el.querySelector('a > .product-imageSliderContainer').innerHTML, elements[i]);
    // let listImg = await element.$eval('img.lazyloaded', img => img.getAttribute('src'));



    // data.push(d);
    // links.push(`https://www.myntra.com/`+a);
    images.push(img);


  }
  await browser.close();


  // console.log(links);
  // console.log(data);
  console.log(images.length);
  // const arr = images[0].split('src=');
  // console.log(arr[1].split('class=')[0]);

  images.forEach(image => {
    const arr = image.split('src=');
    if(arr.length > 1) console.log(arr[1].split('class=')[0]);
  })
  console.log(photos);
})();



// for each link do scrapping again
