import React from "react";
export const BackGroundImg = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute", // 位置の指定
        width: "100vw",
        height: "61vw",
        maxHeight: "45vh",
        top: "20vh",
        zIndex: -2,
      }}
    >
      <img
        src="/image/fireworks/firework.png"
        alt="firework"
        style={{
          maxHeight: "20vh", // 高さ
          height: "25vw",
          maxWidth: "20vh", // 高さ
          width: "25vw", // 幅
          position: "absolute", // 位置の指定
          left: "50vw", // 左方向への移動
          bottom: "0%", // 下から何％か
        }}
      />
      <img
        src="/image/fireworks/firework.png"
        alt="firework"
        style={{
          maxHeight: "30vh", // 高さ
          height: "40vw",
          maxWidth: "30vh",
          width: "40vw", // 幅
          position: "absolute", // 位置の指定
          left: "55vw", // 左方向への移動
          top: "0%", // divの上はじ
        }}
      />
    </div>
  );
};
