import React from 'react';
import '../styles/background.module.css';
export const BackGroundImg = () => { 
  return (
  <div className = "backgroundimg" style={{
    display:"flex",
    flexDirection:"column"
  }}>
    <img src="/image/fireworks/firework.png" 
     style={{
      maxHeight: '30vh',// 高さ
      width: 'auto', // 幅
    position: 'absolute', // 位置の指定
    left: '20vw', // 左方向への移動
    top: '30vh', // 上方向への移動
    zIndex: -2,
     }}/>
     <img src="/image/fireworks/firework.png" 
     style={{
      maxHeight: '40vh',// 高さ
      width: 'auto', // 幅
    position: 'absolute', // 位置の指定
    left: '50vw', // 左方向への移動
    top: '30vh', // 上方向への移動
    zIndex: -2,
     }}/>
  </div>
  );
}