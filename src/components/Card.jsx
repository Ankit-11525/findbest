import React from "react";
import "./Cardcss.css";
// import medicineimage from 'Categories/Medicine/MedicineImage.png'
const Card = ({
  scrapFrom,
  medicineIMG,
  medicineName,
  medicineURL,
  medicineQnty,
  medicineMRP,
  medicineNewPrice,
  medicineSavedPrice,
}) => {
  // const medicineName={name};
  // const medicineURL={url};
  console.log({medicineName},{medicineIMG});
  return (
    <div className="card">
      <div className="card-content">
        <div>Medicines from {scrapFrom}</div>
        <h2 className="card-title">{medicineName}</h2>

        {medicineIMG ? (
          <img src={medicineIMG} alt="MedicineImage" width="200px" height="200px"/>
        ) : (
          <img
            src="https://img.freepik.com/premium-vector/pills-liquids-medicine-children-kawaii-doodle-flat-vector-illustration_609998-86.jpg?w=2000"
            alt="MedicineImage"
            width="200px" height="200px"
          />
        )}

        <p className="card-description">
          <a href={medicineURL} target="_blank" rel="noopener noreferrer">
            {medicineName}
          </a>
        </p>
        
        <div> Quantity : {medicineQnty}</div>
        <div> MRP : {medicineMRP}</div>
        <div> DiscountPrice : {medicineNewPrice}</div>
        <div> You Save : {medicineSavedPrice}</div>
        <a href={medicineURL} target="_blank" rel="noopener noreferrer">
          <button className="card-button">More in Detail</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
