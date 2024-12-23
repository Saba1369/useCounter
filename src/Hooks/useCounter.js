import { useState } from "react";

const useCounter = (initCount = 0) => {
  const [count, setCount] = useState(initCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(initCount);
  };
  return { count, increment, decrement, reset };
};

export default useCounter;
