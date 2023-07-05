const axios = require("axios");
const cheerio = require("cheerio");

const getmedicineApollopharmaDescription = async (URL) => {
  try {
    const response = await axios.get(URL);
    const SearchResultArrForpharmaeasynMedicine = [];
    const html = response.data;
    let $ = cheerio.load(html);

    let itemlist = $(".ProductCard_productCardGrid__ZQBc1");
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
      const fullURL="https://www.apollopharmacy.in"+medicineurl;
      // console.log(fullURL);
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
    


    const medicineIMG=$('.image-gallery-slides').find('img').attr('src');
    // console.log(medicineIMG);

    const medicineName=$('.PdpWeb_heading__gUMpv').text();
    // console.log("medicinename "+medicineName);


    // const delivary=$('.MedicineInfoWeb_deliveryTime__d8Rft>span>img').attr('src');
    // const date=$('.MedicineInfoWeb_deliveryTime__d8Rft').text();
    // console.log("date "+date);


    const medicineQnty=$('.MedicineInfoWeb_priceWrap__fJtYD>p').text();
    // console.log(medicineQnty);



    const medicineprice=$('.MedicineInfoWeb_medicinePrice__HPf1s').text();
    // console.log(medicineprice);
    let medicineNewPrice=medicineprice.split(" ")[2];
    medicineNewPrice=medicineNewPrice.split(":")[1];
    medicineNewPrice=medicineNewPrice.split("M")[0];
    // console.log(medicineNewPrice);
    const numericalvalueNewPrice=medicineNewPrice.split("₹")[1];
    // console.log(numericalvalueNewPrice);

    let medicinepercentage=$('.MedicineInfoWeb_offPercentage__dt6wQ').text();
    medicinepercentage=medicinepercentage.split("%")[0];
    // console.log("medicinepercentage : ",medicinepercentage);
    // console.log(numericalvalueNewPrice*(medicinepercentage/100));
    let medicineMRP=Number(numericalvalueNewPrice)+(Number(numericalvalueNewPrice)*(Number(medicinepercentage)/100));
    // medicineMRP=medicineMRP.split("%")[0];
    const medicineSavedPrice=medicineMRP-Number(numericalvalueNewPrice);
    // console.log("medicineMRP : ",medicineMRP);
    // console.log("medicinesavedPrice : ",medicineSavedPrice);


    const medicineURL=URL;
    let scrapFrom="Apollo.in";
    const SingleMedicineDescription = {
      // medicineimagearr,
      medicineIMG,
      medicineName,
      medicineURL,      
      medicineMRP,
      medicineNewPrice,
      medicineSavedPrice,
      scrapFrom,
      medicineQnty,
    };
    // console.log(SingleMedicineDescription);
    return SingleMedicineDescription;
  }
  catch(error) {
    console.error(error);
  }

}

module.exports = getmedicineApollopharmaDescription;
