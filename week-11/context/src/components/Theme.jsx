"use client";
import { useTheme } from "@/context/ThemeContext";
export default function Theme() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change theme
      </button>
    </>
  );
}
