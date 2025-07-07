"use client";
import { useUser } from "@/context/UserContext";
export default function User() {
  const { username, setUsername } = useUser();
  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("tom")}>Change Username to tom</button>
    </>
  );
}
