import { useState, useEffect } from "react";
import "../styles/title.css";

export const Title = () => {
  const titletxt = "福井高専高専祭".split("");
  // 文字が浮き上がってくる時間の調整;
  const intervaltime = 250;

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, intervaltime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="title">
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
      </p>
      {/* <p>10.27/10.30</p> */}
    </div>
  );
};
