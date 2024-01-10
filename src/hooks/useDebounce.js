import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debounceValue, setDebouceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouceValue(value), delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
}
