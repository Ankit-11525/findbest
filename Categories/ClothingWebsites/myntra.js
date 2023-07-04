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

  const elements = await page.$$(".product-base");

  for (let i = 0; i < elements.length; i++) {
 
    const img = await page.evaluate(el => el.querySelector('a > .product-imageSliderContainer').innerHTML, elements[i]);
 
    // images.forEach(image => {
    //   const arr = image.split('src=');
    //   if(arr.length > 1) console.log(arr[1].split('class=')[0]);
    // })


  }
  await browser.close();


  

  console.log(photos);
})();



// for each link do scrapping again
