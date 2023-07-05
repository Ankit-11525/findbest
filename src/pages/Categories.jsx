import { useState, useNavigate } from "react";
import { Link } from "react-router-dom";

const Areas = () => {
  const [value, setValue] = useState("select");
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-stone-300 text-center h-screen">
      <div className=" flex flex-col items-center h-2/6 rounded-3xl  w-2/5 bg-white" >
        <div className="text-center">
          <div className="pt-10 flex flex-col items-center">
            <p className="text-2xl text-black">Select Your category to compare</p>
            <select
              className="ml-2 mt-5 text-xl text-center p-3 appearance-none border-4 border-stone-300 w-4/5 rounded-full hover:border-sky-900 hover:text-sky-900"
              value={value}
              onChange={handleChange}
            >
              <option value="select">Select Category</option>
              <option value="Medical">Medical</option>
              <option value="Clothing">Clothing</option>
              <option value="Grocery">Grocery</option>
              <option value="smartphone">Smartphone</option>
            </select>
          </div>
        </div>
        {value === "select" ? (
          <p className="text-center m-5 text-black text-lg">
            Please select any category
          </p>
        ) : (
          <p className="text-center m-5 text-black text-lg">
            Submit Button to confirm <span className="text-sky-900 font-bold">{value}</span> for your product
          </p>
        )}
        <button className="bg-stone-300 hover:bg-sky-900 hover:text-white w-4/12 text-md p-3 rounded-full">
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
    </div>
  );
};

export default Areas;