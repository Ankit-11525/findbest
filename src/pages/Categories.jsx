import { useState, useNavigate } from "react";
import { Link } from "react-router-dom";

const Areas = () => {
  const [value, setValue] = useState("select");
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="min-h-[50vh] bg-amber-600 text-center">
      <div className="text-center">
        <div className="pt-20">
          <p className="text-2xl text-white">Select Your category to compare</p>
          <select
            className="ml-2 mt-5 rounded-lg p-3 appearance-none"
            value={value}
            onChange={handleChange}
          >
            <option value="select">Select Category</option>
            <option value="medical">Medical</option>
            <option value="clothing">Clothing</option>
            <option value="grocery">Grocery</option>
          </select>
        </div>
      </div>
      {value === "select" ? (
        <p className="text-center m-5 text-white text-lg">
          Please select any category
        </p>
      ) : (
        <p className="text-center m-5 text-white text-lg">
          Submit Button to confirm {value} for your product
        </p>
      )}
      <button className="bg-white text-md p-3 rounded-lg">
        <Link
          className="btn"
          to={{
            pathname: `/search-page/${value}`,
            value,
          }}
        >
          SUBMIT
        </Link>
      </button>
      {/* <Button onClick={handleSubmit} text="SUBMIT..." /> */}
    </div>
  );
};

export default Areas;
