import { useState } from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

export const PageTransitionButton = ({
  buttonText,
  nextPage,
}: {
  buttonText: string;
  nextPage: string;
}) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    router.push("/contents/" + nextPage, undefined, { scroll: false });
  };

  return (
    <div onClick={handleClick}>
      <motion.div
        style={{
          display: "flex",
          alignItems: "center", // 垂直方向の中央寄せ
          justifyContent: "center", // 水平方向の中央寄せ
          cursor: "pointer",
          backgroundColor: "white",
          textAlign: "center",
          verticalAlign: "middle",
          textDecoration: "none",
          position: "relative",
          margin: "auto",
          width: "18vw",
          height: "6vw",
          padding: "0.5vw 5vw",
          fontWeight: "bold",
          borderRadius: "1.2vw",
          color: "#27acd9",
          border: "0.5vw solid #27acd9",
          fontSize: "2.5vw",
        }}
        initial={{
          boxShadow: "0.7vw 0.7vw #27acd9",
        }}
        animate={{
          boxShadow: isClicked ? "0vw 0vw #27acd9" : "0.7vw 0.7vw #27acd9",
        }}
      >
        {buttonText}
      </motion.div>
    </div>
  );
};
