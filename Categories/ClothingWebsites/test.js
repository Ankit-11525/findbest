const cheerio = require("cheerio");
const axios = require("axios");
// const request = require("request");

const URL = `https://www.myntra.com/tshirt-for-men?rawQuery=tshirt%20for%20men`;
const URL_corona = `https://www.worldometers.info/coronavirus/`;
const Snapdeal_URL = `https://www.snapdeal.com/search?clickSrc=top_searches&keyword=shoes%20for%20men&categoryId=0&vertical=p&noOfResults=20&SRPID=topsearch&sort=rlvncy`;

// // request(URL, cb);

// function cb(error, response, html) {
//   if (error) {
//     console.log("error", error);
//   } else {
//     handlehtml(html);
//   }
// }

// function handlehtml(html) {
//   let $ = cheerio.load(html);
//   let coontentArr = $(".product-base");
//   for (let i = 0; i < coontentArr.length; i++) {
//     let data = $(coontentArr[i]).text();
//     console.log(data);
//   }
// }

const loadData = async () => {
  const response = await axios.get(Snapdeal_URL);
  const html = response.data;
  // console.log(html);
  let $ = cheerio.load(html);
  // console.log(URL);
  let allClasses = $(".product-title");
  console.log(allClasses.length);

  for (let i = 0; i < allClasses.length; i++) {
    let productRatingCount = $(allClasses[i]).text();

    console.log(productRatingCount);
  }
};

loadData();
