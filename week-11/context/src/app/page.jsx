"use client";

import { useTheme } from "@/context/ThemeContext";
import { useUser } from "@/context/UserContext";

export default function Home() {
  const { username, setUsername } = useUser();
  const { theme, setTheme } = useTheme();
  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("tom")}>Change Username to tom</button>
      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change theme
      </button>
    </>
  );
}
