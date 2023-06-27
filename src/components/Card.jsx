import React from "react";
import "./Cardcss.css";
const Card = ({
  medicineName,
  medicineURL,
  medicineQnty,
  medicineMRP,
  medicineNewPrice,
  medicineSavedPrice
}) => {
  // const medicineName={name};
  // const medicineURL={url};
  // console.log(medicineName,medicineURL);
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">{medicineName}</h2>
        <p className="card-description">
          <a href={medicineURL} target="_blank" rel="noopener noreferrer">
            {medicineName}
          </a>
        </p>
        <div> Quantity : {medicineQnty}</div>
        <div> MRP : {medicineMRP}</div>
        <div> DiscountPrice : {medicineNewPrice}</div>
        <div> You Save  : {medicineSavedPrice}</div>
        <a href={medicineURL} target="_blank" rel="noopener noreferrer">
          <button className="card-button">More in Detail</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
