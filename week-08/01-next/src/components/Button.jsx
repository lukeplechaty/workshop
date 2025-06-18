"use client";

import { useState } from "react";

export default function Button() {
  const [counter, setCounter] = useState(0);
  function click() {
    setCounter(counter + 1);
  }
  return (
    <>
      <button onClick={click}>count up</button>
      <p>{counter}</p>
    </>
  );
}
