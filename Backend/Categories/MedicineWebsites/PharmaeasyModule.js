const axios = require("axios");
const cheerio = require("cheerio");

const getmedicinepharmaDescription = async (URL) => {
  try {
    const response = await axios.get(URL);
    const SearchResultArrForpharmaeasynMedicine = [];
    const html = response.data;
    let $ = cheerio.load(html);

    let itemlist = $(".Search_medicineLists__hM5Hk");
    // console.log(itemlist.length);
    let minlength=12;
    if(minlength>=itemlist.length)
    {
      minlength=itemlist.length
    }
    for (let i = 0; i < minlength; i++) {
      // let medicinename = $(itemlist[i]).find("h1").text();
      // // console.log(medicinename);
      let medicineurl = $(itemlist[i]).find("a").attr("href");
      // // console.log(medicineurl);
      const fullURL="https://pharmeasy.in"+medicineurl;
      const SingleMedicineDescription=await getmedicineDescriptionPharmaHelper(fullURL);
      SearchResultArrForpharmaeasynMedicine.push(SingleMedicineDescription);
      // console.log(searchResults.length);
    }

    // console.log(SearchResultArrForpharmaeasynMedicine);
    return SearchResultArrForpharmaeasynMedicine;
  } catch (err) {
    console.error(err);
  }
};


const getmedicineDescriptionPharmaHelper= async(URL)=>
{
  try {
    // console.log('before :');
    const response = await axios.get(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // const medicineimagearr=$('.ClickableElement_clickable__ItKj2.ProductImageCarousel_clickableImg__YVeX_');
    // const medicineimagearr=$('.ProductImageCarousel_productImage__yzafa>span').find('img');
    // const medicineIMG=$('.ClickableElement_clickable__ItKj2.ProductImageCarousel_clickableImg__YVeX_ .ProductImageCarousel_productImage__yzafa');
    // console.log("medicineimage : ",medicineIMG);
    // console.log("medicineimagearr "+medicineimagearr.length);



    const medicineName=$('.MedicineOverviewSection_medicineName__dHDQi').text();
    // console.log("medicinename "+medicineName);
    // const delivarye=$('.Edd_eddDetails__8kgLR>div').text();
    // const date=$(".Edd_eddDetails__8kgLR span").text();
    // console.log("date "+date);


    const medicineQnty=$('.MedicineOverviewSection_measurementUnit__7m5C3').text();
    // console.log(medicineQnty);



    const medicineMRP=$('.PriceInfo_striked__Hk2U_').text();
    // console.log(medicineMRP);



    const medicineofferarray=$('.DescriptionTable_value__0GUMC');
    const medicineNewPrice=$(medicineofferarray[0]).text();
    const medicineSavedPrice=$(medicineofferarray[1]).text();
    // console.log("medicinenewPrice : ",medicinenewPrice);
    // console.log("medicinesavedPrice : ",medicinesavedPrice);


    const medicineURL=URL;
    let scrapFrom="Pharmaeasy.in";
    const SingleMedicineDescription = {
      // medicineimagearr,
      medicineName,
      medicineURL,      
      medicineMRP,
      medicineNewPrice,
      medicineSavedPrice,
      scrapFrom,
      // medicineIMG
      medicineQnty,
    };
    // console.log(SingleMedicineDescription);
    return SingleMedicineDescription;
  }
  catch(error) {
    console.error(error);
  }

}

module.exports = getmedicinepharmaDescription;
