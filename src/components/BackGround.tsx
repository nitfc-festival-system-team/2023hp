import React from "react";
export const BackGroundImg = () => {
  return (
    <div
    style={{
      display: "flex",
      flexDirection: "column",
    }}
    >
      <img
        src="/image/fireworks/firework.png"
        alt="firework"
        style={{
          maxHeight: "15vh", // 高さ
          width: "auto", // 幅
          position: "absolute", // 位置の指定
          left: "53vw", // 左方向への移動
          top: "40vh", // 上方向への移動
          zIndex: -2,
        }}
      />
      <img
        src="/image/fireworks/firework.png"
        alt="firework"
        style={{
          maxHeight: "21vh", // 高さ
          width: "auto", // 幅
          position: "absolute", // 位置の指定
          left: "55vw", // 左方向への移動
          top: "20vh", // 上方向への移動
          zIndex: -2,
        }}
      />
    </div>
  );
};
