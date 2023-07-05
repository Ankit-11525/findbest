import React from "react";
import { Link } from "react-router-dom";

const ClothingCard = ({
  link,
  image,
  title,
  price,
  discountPrice,
  discount,
  scrapFrom,
}) => {
  

  return (
    // <div className="flex flex-col ">
    //   <Link to={link}>
    //     <div className="">
    //       <img src={image} className="h-[200px]" alt="product-img" />
    //     </div>
    //     <h3>{title}</h3>
    //     <h4>{discountPrice}</h4>
    //     {(price === 'Rs. undefined') ? <h4>No discount available</h4> : <h4 className="line-through">{price}</h4>}
    //     {(discount === 'NaN% Off') ? <h4>0% Off</h4> : <h4>{discount}</h4>}
    //     {/* <h4>{discount}</h4> */}
    //   </Link>
    // </div>


<div className="w-auto p-4 border-4 border-pink-500 rounded-lg bg-white shadow-2xl hover:shadow-none">
      <h2 className="card-title mb-2 font-bold text-xl text-sky-900">{title}</h2>
      <div className="flex flex-row">

        <div className="w-2/5 border-r-2 pr-4 border-pink-500">
          {image ? (
            <img
              src={image}
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

          <div> <span className="font-medium text-sky-900">MRP :</span> {discountPrice}</div>
          <div> <span className="font-medium text-sky-900">DiscountPrice :</span>{(price === 'Rs. undefined') ? <h4>No discount available</h4> : <h4 className="line-through">{price}</h4>}</div>
          <div> <span className="font-medium text-sky-900">You Save :</span> {(discount === 'NaN% Off') ? <h4>0% Off</h4> : <h4>{discount}</h4>}</div>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="card-button mt-1 text-white p-1 rounded-lg bg-pink-500 w-36">More in Detail</button>
          </a>
        </div>
      </div>
      <div className="font-bold pt-2 text-lg text-sky-900">grocerys from {scrapFrom}</div>
    </div>
  );
};

export default ClothingCard;
