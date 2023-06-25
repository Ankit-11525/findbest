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
      let medicineurl = $(itemlist[i]).find("a").attr("href");
      // console.log(medicineurl);
      const fullURL="https://pharmeasy.in"+medicineurl;
      const result = {
        name: medicinename,
        url:fullURL
      };
      const SingleMedicineDescription=await getmedicineDescription(fullURL);
      // console.log(result);
      searchResults.push(SingleMedicineDescription);
      // console.log(searchResults.length);
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



const getmedicineDescription= async(URL)=>
{
  try {
    // console.log('before :');
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // const medicineimagearr=$('.ClickableElement_clickable__ItKj2.ProductImageCarousel_clickableImg__YVeX_');
    // const medicineimage=$(medicineimagearr[0]).find('img').attr('src');
    // console.log("medicineimage : ",medicineimagearr);
    // console.log("medicineimagearr "+medicineimagearr.length);



    const medicinename=$('.MedicineOverviewSection_medicineName__dHDQi').text();
    // console.log("medicinename "+medicinename);
    // const delivarye=$('.Edd_eddDetails__8kgLR>div').text();
    // const date=$(".Edd_eddDetails__8kgLR span").text();
    // console.log("date "+date);



    const medicineqnty=$('.MedicineOverviewSection_measurementUnit__7m5C3').text();
    // console.log(medicineqnty);



    const medicinemrp=$('.PriceInfo_striked__Hk2U_').text();
    // console.log(medicinemrp);



    const medicineofferarray=$('.DescriptionTable_value__0GUMC');
    const medicinenewPrice=$(medicineofferarray[0]).text();
    const medicinesavedPrice=$(medicineofferarray[1]).text();
    // console.log("medicinenewPrice : ",medicinenewPrice);
    // console.log("medicinesavedPrice : ",medicinesavedPrice);


    const medicineURL=URL;

    const SingleMedicineDescription = {
      // medicineimagearr,
      medicineURL,
      medicinename,
      medicineqnty,
      medicinemrp,
      medicinenewPrice,
      medicinesavedPrice,
    };
    // console.log(SingleMedicineDescription);
    return SingleMedicineDescription;
  }
  catch(error) {
    console.error(error);
    // res.status(500).json({ error: "Internal server error (single product )" });
  }

}