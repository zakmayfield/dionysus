import { useEffect, useState } from 'react';

export function useRotatingText(arr: string[]) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % arr.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [index, arr.length]);

  return arr[index];
}
