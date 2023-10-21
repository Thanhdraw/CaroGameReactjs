import React, { useState } from "react";
import "./Style.css";
const Toggle = () => {
  const [on, setOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    setOn((on) => !on);
    setDarkMode((darkMode) => !darkMode);
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spiner ${on ? "active" : ""}`}></div>
      </div>
    </div>
  );
};

export default Toggle;
