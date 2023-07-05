const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());
const AdblockerPlugin = require("puppeteer-extra-plugin-adblocker");
puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

const getelectronicdesc = async (URL) => {
  let data = [];
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: "domcontentloaded" });
  const ua =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36";
  await page.setUserAgent(ua);

  await page.waitForSelector(
    ".finder_snipet_wrap.finder_snipet_wrap_grid.ng-scope"
  );
  const elements = await page.$$(
    ".finder_snipet_wrap.finder_snipet_wrap_grid.ng-scope"
  );

  let maxlen=12;
  if(elements.length<maxlen){
    maxlen=elements.length
  }

  // console.log(elements.length);
  // console.log(elements)

  for (let i = 0; i < maxlen; i++) {
    
    const image = await page.evaluate(
      (el) =>
        el.querySelector(".product_img>img").getAttribute("src"),
      elements[i]
    );

    let name = await page.evaluate(
      (el) =>
        el.querySelector(".pro_grid_name>a")
          .textContent,
      elements[i]
    );
   
    let price = await page.evaluate(
      (el) =>
        el.querySelector(".pro_grid_price div>div")
          .textContent,
      elements[i]
    );
    let SPEC_SCORE=await page.evaluate(
      (el) =>
        el.querySelector(".rating_box_new_list")
          .textContent,
      elements[i]
    );

    let Status=await page.evaluate(
      (el) =>
        el.querySelector(".notifiy-panel .expected-price>div")
          .textContent,
      elements[i]
    );

    let Ratings=await page.evaluate(
      (el) =>
        el.querySelector(".rating_block>p")
          .textContent,
      elements[i]
    );

    let link=await page.evaluate(
      (el) =>
        el.querySelector("li>span.target_link_new_tab").getAttribute("data-href-url"),
      elements[i]
    );
    const fullURL="https://www.91mobiles.com/"+link;

    name=name.trim();
    price=price.trim();
    SPEC_SCORE=SPEC_SCORE.trim();
    Status=Status.trim();
    Ratings=Ratings.trim();
      const scrapFrom="91mobiles";
    data.push({name,image,price,SPEC_SCORE,Status,Ratings,fullURL,scrapFrom});
  }

  //console.log(data)
  await browser.close();
  
  return data;
};

const URL = "https://www.91mobiles.com/search_page.php?q=iphone";
//getelectronicdesc(URL);

module.exports = getelectronicdesc;