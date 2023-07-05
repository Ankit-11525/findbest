import React from "react";
// import medicineimage from 'Categories/Medicine/MedicineImage.png'
const MedicineCard = ({
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
  console.log({ medicineName }, { medicineIMG });
  return (
    <div className="w-auto p-4 border-4 border-sky-900 rounded-lg bg-white shadow-2xl hover:shadow-none">
      <h2 className="card-title mb-2 font-bold text-xl text-sky-900">{medicineName}</h2>
      <div className="flex flex-row">

        <div className="w-2/5 border-r-2 border-sky-700">
          {medicineIMG ? (
            <img
              src={medicineIMG}
              alt="MedicineImage"
              width="200px"
              height="200px"
            />
          ) : (
            <img
              src="https://img.freepik.com/premium-vector/pills-liquids-medicine-children-kawaii-doodle-flat-vector-illustration_609998-86.jpg?w=2000"
              alt="MedicineImage"
              width="200px"
              height="200px"
            />
          )}
        </div>
        <div className="w-3/5 pt-2 ml-4 text-left">
          {/* <p className="card-description">
            <a href={medicineURL} target="_blank" rel="noopener noreferrer">
              {medicineName}
            </a>
          </p> */}

          <div> <span className="font-medium text-sky-900">Quantity :</span> {medicineQnty}</div>
          <div> <span className="font-medium text-sky-900">MRP :</span> {medicineMRP}</div>
          <div> <span className="font-medium text-sky-900">DiscountPrice :</span> {medicineNewPrice}</div>
          <div> <span className="font-medium text-sky-900">You Save :</span> {medicineSavedPrice}</div>
          <a href={medicineURL} target="_blank" rel="noopener noreferrer">
            <button className="card-button mt-1 text-white p-1 rounded-lg bg-sky-900 w-36">More in Detail</button>
          </a>
        </div>
      </div>
      <div className="font-bold pt-2 text-lg text-sky-900">Medicines from {scrapFrom}</div>
    </div>
  );
};

export default MedicineCard;
