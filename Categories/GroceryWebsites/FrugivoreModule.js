const axios = require("axios");
const cheerio = require("cheerio");

const getGroceryFrugivoreDescription = async (URL) => {
  try {
    const response = await axios.get(URL);
    const SearchResultArrForFrugivoreGrocery = [];
    const html = response.data;
    let $ = cheerio.load(html);

    let itemlist = $(".col-lg-3.col-md-4.col-sm-6");
    // console.log(itemlist.length);
    let minlength=12;
    if(minlength>=itemlist.length)
    {
      minlength=itemlist.length - itemlist.length%6;
    }
    for (let i = 0; i < minlength; i++) {
      // let groceryName = $(itemlist[i]).find(".d-block.text-blackish.weight500").text();
      // console.log(groceryName);
      let groceryurl = $(itemlist[i]).find("a").attr("href");
      // console.log(groceryurl);
      const fullURL="https://frugivore.in"+groceryurl;
      // console.log(fullURL);
      const SingleGroceryFrugivoreDescription=await getGroceryFrugivoreDescriptionHelper(fullURL);
      // console.log(SingleGroceryDescription);
      SearchResultArrForFrugivoreGrocery.push(SingleGroceryFrugivoreDescription);
      // console.log(searchResults.length);
    }

    // console.log(SearchResultArrForFrugivoreGrocery);
    return SearchResultArrForFrugivoreGrocery;
  } catch (err) {
    console.error(err);
  }
};


const getGroceryFrugivoreDescriptionHelper= async(URL)=>
{
  try {
    // console.log('before :');
    const response = await axios.get(URL);
    // console.log(URL);
    const html = response.data;
    const $ = cheerio.load(html);
    
    // const medicineimagearr=$('.ClickableElement_clickable__ItKj2.ProductImageCarousel_clickableImg__YVeX_');
    // const medicineimage=$(medicineimagearr[0]).find('img').attr('src');
    // console.log("medicineimage : ",medicineimagearr);
    // console.log("medicineimagearr "+medicineimagearr.length);


    const groceryIMG=$('.slideMainImg').find('img').attr('src');
    // console.log("groceryIMG :"+groceryIMG);
    // const medicineIMG=$('.image-gallery-slides').find('img').attr('src');

    const groceryName=$('.productDescHeading').text();
    // console.log("medicinename "+medicineName);
    // const delivarye=$('.Edd_eddDetails__8kgLR>div').text();
    // const date=$(".Edd_eddDetails__8kgLR span").text();
    // console.log("date "+date);

    const groceryURL=URL;

    var groceryMRP=$('.mrptext.strike>span').text();
    groceryMRP = groceryMRP.substr(groceryMRP.indexOf(' ') + 1);
    // console.log(medicineMRP);



    // const groceryofferarray=$('.SavedPricetext.SavedPrice-price');
    // const medicineNewPrice=$(.SavedPricetext.SavedPrice-price).text();
    // const grocerySavedPrice=$(groceryofferarray[1]).text();
    // console.log("medicinenewPrice : ",medicinenewPrice);
    // console.log("medicinesavedPrice : ",medicinesavedPrice);

    const groceryNewPrice=$('.discounttext.discount-price>span:first-of-type').text();

    var grocerySavedPrice=$('.freetext').text();

    if(grocerySavedPrice.length===0)
    {
      grocerySavedPrice="0% Off";
      groceryMRP=groceryNewPrice;
    }
    else{
      grocerySavedPrice = grocerySavedPrice.substr(grocerySavedPrice.indexOf(' ') + 1);
      while(grocerySavedPrice.charAt(0)===' ')
      {
        grocerySavedPrice=grocerySavedPrice.substr(1);
      }
      groceryMRP=groceryMRP.replace(/(\r\n|\n|\r)/gm, "");;
    }

    // const groceryExpectedDate=$('.delivery-type-container>p>span').text();

    const groceryQnty=$('.col-lg-6>div>ul>li:first-of-type>label').text();

    const scrapFrom="Frugivore";







    const SingleGroceryFrugivoreDescription = {
      groceryIMG,
      groceryName,
      groceryURL,      
      groceryMRP,
      groceryNewPrice,
      grocerySavedPrice,
    //   groceryExpectedDate,
      groceryQnty,
      scrapFrom,
    };
    // console.log(SingleGroceryDescription);
    return SingleGroceryFrugivoreDescription;
  }
  catch(error) {
    console.error(error);
  }

}

module.exports = getGroceryFrugivoreDescription;
