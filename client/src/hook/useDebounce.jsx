import { useCallback, useEffect, useRef, useState } from "react";

export function useDebouce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 100);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
export function useDebounceFunction(callback, delay) {
  const timeoutRef = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay || 100);
    },
    [callback, delay]
  );

  return debouncedCallback;
}
