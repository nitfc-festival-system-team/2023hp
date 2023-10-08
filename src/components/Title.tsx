import { useState, useEffect } from "react";
import "../styles/title.css";

export const Title = () => {
  const titletxt = "福井高専高専祭".split("");

  const intervaltime = 250;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, intervaltime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="title">
      {titletxt.map((char, index) => (
        <span
          key={index}
          className={index <= count ? "fadeIn" : ""}
          style={{
            animationDelay: `${index * (intervaltime / 1000)}s`,
            opacity: 0,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
