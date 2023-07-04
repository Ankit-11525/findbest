import { useState, useNavigate } from "react";
import { Link } from "react-router-dom";

const Areas = () => {
  const [value, setValue] = useState("select");
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="min-h-[50vh] bg-amber-600">
      <div className="text-center">
        <p>Select Your category to compare</p>
        <select className="ml-2 mt-20" value={value} onChange={handleChange}>
          <option value="select">Select Category:</option>
          <option value="medical">Medical</option>
          <option value="clothing">Clothing</option>
        </select>
      </div>
      {value === "select" ? (
        <p>Please select any category</p>
      ) : (
        <p>Submit Button to confirm {value} for your product</p>
      )}
      <Link
        className="btn"
        to={{
          pathname: `/search-page/${value}`,
          value,
        }}
      >
        SUBMIT
      </Link>
      {/* <Button onClick={handleSubmit} text="SUBMIT..." /> */}
    </div>
  );
};

export default Areas;
