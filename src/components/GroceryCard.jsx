import React from "react";
// import groceryimage from 'Categories/grocery/groceryImage.png'
const groceryCard = ({
  groceryIMG,
  scrapFrom,
  groceryName,
  groceryURL,
  groceryQnty,
  groceryMRP,
  groceryNewPrice,
  grocerySavedPrice,
}) => {
  // const groceryName={name};
  // const groceryURL={url};
  console.log({ groceryName });
  return (
    <div className="w-auto p-4 border-4 border-amber-500 rounded-lg bg-white shadow-2xl hover:shadow-none">
      <h2 className="card-title mb-2 font-bold text-xl text-sky-900">{groceryName}</h2>
      <div className="flex flex-row">

        <div className="w-2/5 border-r-2 border-amber-500">
          {groceryIMG ? (
            <img
              src={groceryIMG}
              alt="groceryImage"
              width="200px"
              height="200px"
            />
          ) : (
            <img
              src="https://img.freepik.com/premium-vector/pills-liquids-grocery-children-kawaii-doodle-flat-vector-illustration_609998-86.jpg?w=2000"
              alt="groceryImage"
              width="200px"
              height="200px"
            />
          )}
        </div>
        <div className="w-3/5 pt-2 ml-4 text-left">
          {/* <p className="card-description">
            <a href={groceryURL} target="_blank" rel="noopener noreferrer">
              {groceryName}
            </a>
          </p> */}

          <div> <span className="font-medium text-sky-900">Quantity :</span> {groceryQnty}</div>
          <div> <span className="font-medium text-sky-900">MRP :</span> {groceryMRP}</div>
          <div> <span className="font-medium text-sky-900">Discount Price :</span> {groceryNewPrice}</div>
          <div> <span className="font-medium text-sky-900">You Save :</span> {grocerySavedPrice}</div>
          <a href={groceryURL} target="_blank" rel="noopener noreferrer">
            <button className="card-button mt-1 text-white p-1 rounded-lg bg-amber-500 w-36">More in Detail</button>
          </a>
        </div>
      </div>
      <div className="font-bold pt-2 text-lg text-sky-900">grocerys from {scrapFrom}</div>
    </div>
  );
};

export default groceryCard;
