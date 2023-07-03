// Ajio
const cheerio = require("cheerio");
const axios = require("axios");
// const request = require("request");

const URL = `https://www.ajio.com/search/?text=tshirt`;
const loadData = async () => {
  const response = await axios.get(URL);
  const html = response.data;
  // console.log(html);
  let $ = cheerio.load(html);
  // console.log(URL);
  let allClasses = $("nameCls");
  console.log(allClasses.length);

  //   for (let i = 0; i < allClasses.length; i++) {
  //     console.log(i);
  //     let name = $(allClasses[i]).text();
  //     console.log(name);
  //   }
};

loadData();
