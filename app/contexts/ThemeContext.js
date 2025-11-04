"use client";
import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // create theme state

  // useEffect to check the theme

  // use effect to check for classlist toggle

  // toggle theme function

  return (
    <ThemeContext.Provider value={{}}>
      {/* Pass children into the context */}
    </ThemeContext.Provider>
  );
}

// Export a custom hook with the theme context
