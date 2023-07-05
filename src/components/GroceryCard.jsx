import React from "react";
// import groceryimage from 'Categories/grocery/groceryImage.png'
const groceryCard = ({
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
    <div className="flex flex-col w-96 items-center p-2 border-2 border-amber-600">
      <div className="items-center">
        {/* <div>grocerys from {scrapFrom}</div> */}
        <h2 className="card-title">{groceryName}</h2>

        {/* {groceryIMG ? (
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
        )} */}

        <p className="card-description">
          <a href={groceryURL} target="_blank" rel="noopener noreferrer">
            {groceryName}
          </a>
        </p>

        <div> Quantity : {groceryQnty}</div>
        <div> MRP : {groceryMRP}</div>
        <div> DiscountPrice : {groceryNewPrice}</div>
        <div> You Save : {grocerySavedPrice}</div>
        <a href={groceryURL} target="_blank" rel="noopener noreferrer">
          <button className="card-button">More in Detail</button>
        </a>
      </div>
    </div>
  );
};

export default groceryCard;
