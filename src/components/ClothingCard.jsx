import React from "react";
import { Link } from "react-router-dom";

const ClothingCard = ({
  link,
  image,
  title,
  price,
  discountPrice,
  discount,
}) => {
  

  return (
    <div className="flex flex-col ">
      <Link to={link}>
        <div className="">
          <img src={image} className="h-[200px]" alt="product-img" />
        </div>
        <h3>{title}</h3>
        <h4>{discountPrice}</h4>
        {(price === 'Rs. undefined') ? <h4>No discount available</h4> : <h4 className="line-through">{price}</h4>}
        {(discount === 'NaN% Off') ? <h4>0% Off</h4> : <h4>{discount}</h4>}
        {/* <h4>{discount}</h4> */}
      </Link>
    </div>
  );
};

export default ClothingCard;
