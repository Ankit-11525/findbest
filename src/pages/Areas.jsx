import { useState, useNavigate } from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Areas = () => {
  const [value, setValue] = useState("Area");
  // const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // const handleSubmit = (event) => {
  //   navigate("/search-page",event.target.value);
  // };

  return (
    <div>
      <label>
        Select Your area to compare?
        <select value={value} onChange={handleChange}>
          <option value="Medical">Medical</option>
          <option value="Accessories">Accessories</option>
          <option value="Technologies">Technologies</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
        </select>
      </label>

      <p>Submit Button to confirm {value} for your product </p>
      <Link
          className="btn"
          to={{
            pathname: "/search-page",
            value
          }}
        >
          SUBMIT
        </Link>
      {/* <Button onClick={handleSubmit} text="SUBMIT..." /> */}
    </div>
  );
};

export default Areas;
