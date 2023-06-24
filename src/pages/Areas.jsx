import { useState } from "react";

const Areas = () => {
  const [value, setValue] = useState("Area");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

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

    </div>
  );
};

export default Areas;
