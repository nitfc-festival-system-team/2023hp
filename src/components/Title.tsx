import { useState, useEffect } from "react";
import styles from "../styles/title.module.css";

export const Title = () => {
  const titletxt = "福井高専 高専祭".split("");
  // 文字が浮き上がってくる時間の調整;
  const intervaltime = 250;

  const [count, setCount] = useState(0);

  const titleStyle = {
    padding: "20px",
    marginTop: "20px",
    letterSpacing: "10px",
    fontSize: "50px",
    writingMode: "vertical-rl",
    fontFamily: "Zen Maru Gothic",
  };

  const spanStyle = {
    animationDuration: "0.25s",
    animationFillMode: "forwards",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, intervaltime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p style={{ ...titleStyle }}>
        {titletxt.map((char, index) => (
          <span
            key={index}
            className={index <= count ? styles.fadeIn : ""}
            style={{
              ...spanStyle,
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
