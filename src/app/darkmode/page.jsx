"use client";

import { useState } from "react";

export default function DarkLightMode() {
  const [darkMode, setDarkMode] = useState(false);

  const darkmode = () => {
    setDarkMode(true);
  };
  const lightmode = () => {
    setDarkMode(false);
  };

  const changeTheme = () => {
    darkmode();
    lightmode();
  };
  return (
    <div className="w-full h-screen" style={{ backgroundColor: darkMode ? "black" : "white" }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-emerald-500 w-[100px] h-[50px]"
      >
        Change color
      </button>
    </div>
  );
}
