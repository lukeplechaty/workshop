"use client";
import { useCounter } from "@/context/CounterContext";
export default function Counter() {
  const { count, dispatch } = useCounter();
  return (
    <>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
}
