"use client";
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // create theme state
const [theme , setTheme] = useState("");
  // useEffect to check the theme
useEffect(() => {
  const storedTheme = localStorage.getItem("theme");
  if(storedTheme){
    setTheme(storedTheme);
  }
})
  // use effect to check for classlist toggle
useEffect(() => {
  if(theme === "Dark"){
    document.documentElement.classList.add("dark");
  }  else{
    document.documentElement.classList.remove("dark");
  }
}, [theme])
  // toggle theme function
  function toggleTheme(){
    setTheme((prev) => {
      const newTheme = prev === "Light" ? "Dark" : "Light";
      localStorage.setItem("theme", newTheme);
      
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Pass children into the context */}
      {children}
    </ThemeContext.Provider>
  );
}

// Export a custom hook with the theme context
export function useTheme() {
  if (!useContext(ThemeContext)) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return useContext(ThemeContext);
}