import { useEffect, useState } from "react";

export const Clock = (num: number) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, num * 1000);
    return () => clearInterval(interval);
  });

  return time;
};
