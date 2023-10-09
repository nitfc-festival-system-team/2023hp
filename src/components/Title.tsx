import { useState, useEffect } from "react";
import styles from "../styles/title.module.css";

export const Title = () => {
  const titleText = "福井高専 高専祭".split("");
  // 文字が浮き上がってくる時間の調整;
  const intervaltime = 250;

  const [count, setCount] = useState(0);
  // CSS のプロパティ テキストの行のレイアウトを横書きにするか縦書きにするか、ブロックのフロー方向を設定
  //vertical-rlでは上から下へ垂直に流れ、次の垂直の行は、前の行の左に配置
  type WritingMode = "horizontal-tb" | "vertical-rl" | "vertical-lr";

  const writingModeValue: WritingMode | undefined =
    "vertical-rl" as WritingMode;

  const titleStyle = {
    padding: "20px",
    marginTop: "20px",
    letterSpacing: "10px",
    fontSize: "50px",
    writingMode: writingModeValue,
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <p style={titleStyle}>
        {titleText.map((char, index) => (
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
    </div>
  );
};
