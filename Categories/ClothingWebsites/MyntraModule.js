const puppeteer = require("puppeteer");

const getClothesMyntra = async (URL) => {
  try {
    let data = [];
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(URL);

    await page.setViewport({ width: 1080, height: 1024 });

    const elements = await page.$$(".product-base");
    let minLength = 6;
    if(minLength > elements.length) minLength = elements.length
    for (let i = 0; i < minLength; i++) {
      let image = null;
      const imageLink = await page.evaluate(
        (el) => el.querySelector("a > .product-imageSliderContainer").innerHTML,
        elements[i]
      );
      const arr = imageLink.split("src=");
      if (arr.length > 1) {
        image = arr[1].split("class=")[0];
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
      data.push({ link, image, title, price, discountPrice, discount });
    }

    await browser.close();
    console.log(data.length);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getClothesMyntra;
