import { useState, useEffect } from "react";
import "../styles/title.css";

export const Title = () => {
  const titletxt = "福井高専高専祭".split("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="title">
      {titletxt.map((char, index) => (
        <span
          key={index}
          className={index <= count ? "fadeIn" : ""}
          style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};
