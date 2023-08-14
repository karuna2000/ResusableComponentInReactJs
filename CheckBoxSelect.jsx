import React, { useState, useRef } from "react";
import "./Navbar.css";

const CheckBoxSelect = () => {
  const optionRef = useRef();
  const [currentOption, setCurrentOption] = useState([]);

  const handleOption = (e) => {
    const { type, value, checked } = e.target;
    if (type === "checkbox" && checked) {
      setCurrentOption((prev) => [...prev, value]);
    }
    if (type === "checkbox" && !checked && currentOption.includes(value)) {
      const newOptions = currentOption.filter((ele) => ele !== value);
      setCurrentOption(newOptions);
    }
  };

  const handleRemove = (event) => {
    const value = event.target.dataset["value"];
    const newOptions = currentOption.filter((ele) => ele !== value);
    setCurrentOption(newOptions);
  };

  //   checked = {currentOption.includes(value)}

  return (
    <div className="Wrapper">
      <div className="Input-Inner">
        <div
          className="value"
          onClick={() => {
            optionRef.current.classList.toggle("none");
          }}
        >
          {currentOption.length > 0
            ? currentOption.map(
                (item, index) =>
                  index < 2 && (
                    <span className="option">
                      {item}
                      <span
                        className="remove"
                        data-value={item}
                        onClick={handleRemove}
                      >
                        d
                      </span>
                    </span>
                  )
              )
            : "Select Options .."}
          {currentOption.length > 2 && "..."}
        </div>
        <button>D</button>
        <div
          className="Option-Wrapper none"
          ref={optionRef}
          onClick={handleOption}
        >
          <p>
            <input type="checkbox" value="JavaScript" />
            <label>JavScript</label>
          </p>
          <p>
            <input type="checkbox" value="Python" />
            <label>Python</label>
          </p>
          <p>
            <input type="checkbox" value="SQL" />
            <label>SQL</label>
          </p>
          <p>
            <input type="checkbox" value="Java" />
            <label>Java</label>
          </p>
          <p>
            <input type="checkbox" value="Django" />
            <label>Django</label>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckBoxSelect;
