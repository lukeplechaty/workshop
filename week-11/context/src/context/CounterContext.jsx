"use client";

import { createContext, useContext, useReducer } from "react";

export const CounterContext = createContext();

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error(`error ${action.type}`);
  }
}

export function CounterProvider({ children }) {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const val = { count, dispatch };
  return (
    <CounterContext.Provider value={val}>{children}</CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
