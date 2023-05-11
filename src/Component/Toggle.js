import React from "react";
import { useState, useEffect } from "react";
import './Toggle.css'


export default function Toggle({language,handleLanguageChange}) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" 
  );

  useEffect(() => {
    if (
      localStorage.darkMode === "dark" ||
      (!("darkMode" in localStorage) &&
        window.matchMedia("(prefers-color-scheme :dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="modeSwitch">
        <label className="toggle-switch">
          <input
            type="checkbox"
            className="toggle-switch-checkbox"
            onChange={handleToggle}
            checked={darkMode === false ? false : true}
          />
          </label>
          <div className="modeText">
            {darkMode ? "LIGHT MODE" : "DARK MODE"}
          </div>
          <div className="modeText">|</div>
          <div className="modeText">
            {language === "en" ? (
              <span id="lang" onClick={handleLanguageChange}>
                TÜRKÇE
              </span>
            ) : (
              <span id="lang" onClick={handleLanguageChange}>
                ENGLISH
              </span>
            )}
          </div>
        </div>
      </div>
    
  );
}