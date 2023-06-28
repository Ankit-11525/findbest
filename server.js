const express = require("express");
const cors = require("cors");
const getmedicineAmazonDescription=require('./Categories/MedicineWebsites/AmazonModule.js');
const getmedicinepharmaDescription=require('./Categories/MedicineWebsites/PharmaeasyModule.js');
const getmedicineApollopharmaDescription=require('./Categories/MedicineWebsites/ApolloPharmaModule.js');
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());

// Define the API endpoint for medicine search
app.get("/api/medicine/:name", async (req, res) => {
  const { name } = req.params;

  try {
   
    const searchResults = [];


    const URL = `https://www.amazon.in/s?k=${name}&i=hpc&crid=1OSR6C5KJ804W&sprefix=aciloc%2Chpc%2C195&ref=nb_sb_noss_2`;
    let result = await getmedicineAmazonDescription(URL);
    // console.log(result);


    const pharmeasyurl=`https://pharmeasy.in/search/all?name=${name}`;
    let result2=await getmedicinepharmaDescription(pharmeasyurl);
    // console.log(result2);
    const Apollopharmaurl=`https://www.apollopharmacy.in/search-medicines/${name}`;
    let result3=await getmedicineApollopharmaDescription(Apollopharmaurl);


    searchResults.push(result);
    searchResults.push(result2);
    searchResults.push(result3);

    console.log(searchResults);
    res.json(searchResults);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});