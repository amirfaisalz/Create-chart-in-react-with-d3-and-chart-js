import React, { useState } from "react";

export default function Dropdown(props) {
  const [countries] = useState([
    { label: "--- Filter by Country ---", value: "" },
    { label: "german", value: "german" },
    { label: "poland", value: "poland" },
    { label: "russia", value: "russia" },
    { label: "uk", value: "uk" },
    { label: "usa", value: "usa" }
  ]);
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>{value}</h1>
      <select onChange={(e) => setValue(e.target.value)}>
        {countries.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}
