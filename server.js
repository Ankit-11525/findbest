const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());

// Define the API endpoint for medicine search
app.get("/api/medicine/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const URL = `https://pharmeasy.in/search/all?name=${name}`;
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    const searchResults = [];
    let itemlist = $(".Search_medicineLists__hM5Hk");
    console.log(itemlist.length);
    for (let i = 0; i < itemlist.length; i++) {
      let medicinename = $(itemlist[i]).find("h1").text();
      // console.log(medicinename);
      let medicineurl = await $(itemlist[i]).find("a").attr("href");
      // console.log(medicineurl);
      const result = {
        name: medicinename,
        url: "https://pharmeasy.in"+medicineurl,
      };
      console.log(result);
      searchResults.push(result);
      console.log(searchResults.length);
    }
    console.log(searchResults);

    // Send the search results as JSON
    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
