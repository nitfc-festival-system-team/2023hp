import React from "react";

export const VerticalLine: React.FC = () => {
  const divStyle: React.CSSProperties = {
    position: "fixed",
    left: "42px",
    top: 0,
    height: "100%",
    width: "1px",
    backgroundColor: "#000",
  };

  const textStyle: React.CSSProperties = {
    position: "fixed",
    left: "0",
    top: "13%",
    writingMode: "vertical-rl",
    textAlign: "center",
    fontSize: "35px",
    fontFamily: "'Open Sans', sans-serif",
  };

  return (
    <>
      <div style={divStyle}></div>
      <div style={textStyle}>NITFC FESTIVAL 2023</div>
    </>
  );
};
