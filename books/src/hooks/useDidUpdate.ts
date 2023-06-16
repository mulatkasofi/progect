import { useEffect, useRef } from "react";

export const useDidUpdate = (callback: () => void, deps?: unknown[]) => {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      callback();
    } else {
      isMounted.current = true;
    }
  }, deps);
};
