import { createContext, useState } from "react";

// createContext function is used to create a Context object
export const CounterContext = createContext();

// CounterContextProvider : component to provide context values to its children
export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const obj1 = { count, setCount }
  

  return (
    <CounterContext.Provider value={obj1}>
      {children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
