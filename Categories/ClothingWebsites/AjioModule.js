const puppeteer = require("puppeteer");

const getClothesAjio = async (URL) => {
  try {
    let data = [];
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(URL);

    await page.setViewport({ width: 1080, height: 1024 });
    const elements = await page.$$(".item.rilrtl-products-list__item.item");
    for (let i = 0; i < elements.length; i++) {
      const image = await page.evaluate(
        (el) =>
          el.querySelector("a > div > div > div > img").getAttribute("src"),
        elements[i]
      );
      if (!image) continue;

      const li = await page.evaluate(
        (el) => el.querySelector("a").getAttribute("href"),
        elements[i]
      );
      const link = `https://www.ajio.com${li}`;

      const brand = await page.evaluate(
        (el) => el.querySelector("a > div > .contentHolder > div").textContent,
        elements[i]
      );

      const title =
        brand +
        " - " +
        (await page.evaluate(
          (el) =>
            el.querySelector("a > div > .contentHolder > .nameCls").textContent,
          elements[i]
        ));

      const discountPrice = await page.evaluate(
        (el) =>
          el.querySelector("a > div > .contentHolder > div > span").textContent,
        elements[i]
      );

      const price = await page.evaluate(
        (el) =>
          el.querySelector("a > div > .contentHolder > div > div > span")
            .textContent,
        elements[i]
      );

      const discount = await page.evaluate(
        (el) =>
          el.querySelector("a > div > .contentHolder > div > div > .discount")
            .textContent,
        elements[i]
      );

      // const pordArr = prodInfo.split("₹");
      // const title = prod

      data.push({ link, image, title, price, discountPrice, discount });
    }

    await browser.close();
    console.log(data.length);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getClothesAjio;
