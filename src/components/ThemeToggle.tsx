import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className=" dark:text-white">
      {darkMode ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
