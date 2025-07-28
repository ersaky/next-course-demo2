"use client";

import { createContext, useContext } from "react";
const defaultTheme = {
  colors: {
    primary: "green",
    secondary: "red",
  },
};
const ThemeContext = createContext(defaultTheme);
export default function ThemeProvider({ children }) {
  return <ThemeContext value={defaultTheme}>{children}</ThemeContext>;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
