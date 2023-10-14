import React from "react";
export const BackGroundImg = () => {
  return (
    <div
      style={{
        flex: 1,
        alignItems: 'center',
    justifyContent: 'center',
      }}
    >
      <img
        src="/image/fireworks/firework.png"
        style={{
          maxHeight: "50vh", // 高さ
          width: "auto", // 幅
          position: "absolute", // 位置の指定
          left: "55vW", // 左方向への移動
          top: "0vh", // 上方向への移動
          zIndex: -2,

        }}
      />
      <img
        src="/image/fireworks/firework.png"
        style={{
          maxHeight: "30vh", // 高さ
          width: "auto", // 幅
          position: "absolute", // 位置の指定
          left: "50vw", // 左方向への移動
          top: "45vh", // 上方向への移動
          zIndex: -2,
        }}
      />
    </div>
  );
};
