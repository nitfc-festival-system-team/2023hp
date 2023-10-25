import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

const PcScrollIndicator = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / totalHeight;
      setScrollHeight(scrollProgress * 100);
    };

    handleScroll(); // 初期位置を設定

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        top: 0,
        width: "3vw",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: `${scrollHeight}%`,
          transformOrigin: "0% 100%",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

const MobileScrollIndicator = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / totalHeight;
      setScrollHeight(scrollProgress * 100);
    };

    handleScroll(); // 初期位置を設定

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        top: 0,
        width: "6vw",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: `${scrollHeight}%`,
          transformOrigin: "0% 100%",
          backgroundColor: "black",
        }}
      />
    </div>
  );
};

const MobileVerticalLine: React.FC = () => {
  const divStyle: React.CSSProperties = {
    position: "fixed",
    left: "6vw",
    top: 0,
    height: "100%",
    width: "1px",
    backgroundColor: "#000",
  };

  const textStyle: React.CSSProperties = {
    position: "fixed",
    left: "0",
    top: "30vw",
    writingMode: "vertical-rl",
    textAlign: "center",
    fontSize: "6vw",
    whiteSpace: "nowrap",
    fontFamily: "KomorebiFont",
    color: "white",
    mixBlendMode: "difference", // スクロールバーと重なる部分の文字を白くする
  };

  return (
    <>
      <div style={divStyle}></div>
      <div style={textStyle}>
        <span>NITFC FESTIVAL 2023</span>
      </div>
    </>
  );
};

const PcVerticalLine: React.FC = () => {
  const divStyle: React.CSSProperties = {
    position: "fixed",
    left: "3vw",
    top: 0,
    height: "100%",
    width: "1px",
    backgroundColor: "#000",
  };

  const textStyle: React.CSSProperties = {
    position: "fixed",
    left: "0",
    top: "10vw",
    writingMode: "vertical-rl",
    textAlign: "center",
    fontSize: "3vw",
    fontFamily: "KomorebiFont",
    color: "white",
    mixBlendMode: "difference", // スクロールバーと重なる部分の文字を白くする
  };

  return (
    <>
      <div style={divStyle}></div>
      <div style={textStyle}>
        <span>NITFC FESTIVAL 2023</span>
      </div>
    </>
  );
};

export const Sidebar = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const mobile =
      userAgent.includes("iPhone") ||
      userAgent.includes("Android") ||
      userAgent.includes("iPad");

    setIsMobile(mobile);
  }, []);

  return isMobile ? (
    <>
      <MobileScrollIndicator />
      <MobileVerticalLine />
    </>
  ) : (
    <>
      <PcScrollIndicator />
      <PcVerticalLine />
    </>
  );
};
