const axios = require("axios");
const cheerio = require("cheerio");

const getmedicineAmazonDescription = async (URL) => {
    try {
      //   const URL = `https://www.amazon.in/s?k=aciloc&i=hpc&crid=1OSR6C5KJ804W&sprefix=aciloc%2Chpc%2C195&ref=nb_sb_noss_2`;
      const response = await axios.get(URL);
      const SearchResultArrForAmazonMedicine = [];
      const html = response.data;
      let $ = cheerio.load(html);
      console.log(URL);
      // let allClasses=$(".a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small");
      let allClasses = $(".a-section.a-spacing-base");
      let minlength = allClasses.length;
      if (minlength > 5) minlength = 5;
      for (let i = 0; i < minlength; i++) {
        let medicineName = $(allClasses[i])
          .find(
            ".a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style "
          )
          .find("a")
          .find("span")
          .text();
        let medicinePrice = $(allClasses[i])
          .find(".a-row.a-size-base.a-color-base ")
          .find("a")
          .find(".a-price>.a-offscreen")
          .text();
        let medicineMRP = medicinePrice.split("₹")[2];
        let medicineNewPrice = medicinePrice.split("₹")[1];
        // console.log(
        //   medicinename + " : ₹" + medicineMRP + " : ₹" + medicineDiscountPrice
        // );
        let medicinediscountpercentage = $(allClasses[i])
          .find(".a-row.a-size-base.a-color-base>span")
          .text();
  
        // console.log(medicinediscountpercentage + "\n");
        let deliverydate = $(allClasses[i])
          .find(".a-row.s-align-children-center>span")
          .text();
        // console.log(deliverydate);
        let medicineURL = "https://www.amazon.in"+$(allClasses[i])
          .find(
            ".s-product-image-container.aok-relative.s-text-center.s-image-overlay-grey.puis-image-overlay-grey.s-padding-left-small.s-padding-right-small.puis-spacing-small.s-height-equalized.puis.puis-v3dida7bcja3c91ydclkl88gxns"
          )
          .find("a")
          .attr("href");
        // console.log(medicineURL);
        let medicineIMG = $(allClasses[i])
          .find(".a-section.aok-relative.s-image-square-aspect")
          .find("img")
          .attr("src");
        // console.log(medicineIMG);
        let medicineSavedPrice=medicineMRP-medicineNewPrice;
        let scrapFrom="Amazon.in";
        const SingleSearchResultArrForAmazonMedicine = {
          medicineName,
          medicineURL,
          medicineMRP,
          medicineNewPrice,
          // medicinediscountpercentage,
          medicineSavedPrice,
          // deliverydate,
          
          medicineIMG,
          scrapFrom
        };
      //   console.log(SingleSearchResultArrForAmazonMedicine);
        SearchResultArrForAmazonMedicine.push(
          SingleSearchResultArrForAmazonMedicine
        );
      }
        // console.log(SearchResultArrForAmazonMedicine);
      return SearchResultArrForAmazonMedicine;
    } catch (err) {
      console.error(err);
    }
  };

module.exports = getmedicineAmazonDescription;
