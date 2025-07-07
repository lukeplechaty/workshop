"use client";

import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("bob");
  const val = { username, setUsername };
  return <UserContext.Provider value={val}>{children}</UserContext.Provider>;
}

export function useUser() {
  return useContext(UserContext);
}
