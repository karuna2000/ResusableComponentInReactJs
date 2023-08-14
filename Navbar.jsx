import React, { useState, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const optionRef = useRef();
  const [currentOption, setCurrentOption] = useState("Select Option...");
  const handleOption = (e) => {
    const { innerHTML } = e.target;
    setCurrentOption(innerHTML);
    optionRef.current.classList.toggle("none");
  };
  return (
    <div className="Wrapper">
      <div className="Input-Inner">
        <div className="value">{currentOption}</div>
        <button
          onClick={() => {
            optionRef.current.classList.toggle("none");
          }}
        >
          D
        </button>
        <div
          className="Option-Wrapper none"
          ref={optionRef}
          onClick={handleOption}
        >
          <p>JavaScript</p>
          <p>Python</p>
          <p>SQl</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
