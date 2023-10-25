import React from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/router";

import { stands } from "@/db/stand";
import { StandType } from "@/types/stand";

export const StandList = () => {
  const router = useRouter();

  const { query } = router;
  const selectedStand = Number(query.stand) || 1;
  console.log(selectedStand);

  return (
    <>
      {stands.map((stand: StandType, index) => {
        const isFirstItem = index === 0;
        return (
          <StandItem
            key={index}
            stand={stand}
            isFirstItem={isFirstItem} // 一番上の要素かどうかを伝えるプロパティを追加
            isSelected={stand.number === selectedStand}
          />
        );
      })}
    </>
  );
};

const StandItem = ({
  stand,
  isFirstItem,
  isSelected,
}: {
  stand: StandType;
  isFirstItem: boolean;
  isSelected: boolean;
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (stand.url) {
      router.push(stand.url);
    }
  };

  return (
    <motion.div
      id={stand.number.toString()}
      style={{
        width: "60vw",
        height: "16vw",
        borderBottom: "1.3px solid #000",
        borderTop: isFirstItem ? "1.3px solid #000" : "none",
        display: "flex",
        justifyContent: "space-between", // 左右に均等に配置
        alignItems: "center", // 垂直方向に中央揃え
      }}
      animate={isSelected ? { opacity: [0, 1] } : {}}
      transition={
        isSelected
          ? { duration: 0.1, delay: 0.2, repeat: 2, restDelta: 0.1 }
          : {}
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <span style={{ fontSize: "2.5vw" }}>{stand.number}:&nbsp;</span>
          <span style={{ fontSize: "2.5vw" }}>{stand.organizer}</span>
        </div>
        <span style={{ fontSize: "3.3vw" }}>{stand.name}</span>
        <span style={{ fontSize: "1.7vw" }}>{stand.place}</span>
        {stand.url && (
          <span
            onClick={handleRedirect}
            style={{
              cursor: "pointer",
              filter:
                "invert(8%) sepia(100%) saturate(7044%) hue-rotate(227deg) brightness(100%) contrast(125%)",
              fontSize: "1.5vw",
            }}
          >
            <img
              src="/image/gadget24.png"
              alt="link mark"
              width="3%"
              height="3%"
            />
            {" 露店リンク"}
          </span>
        )}
      </div>
      <img
        src={"/image/stand/" + stand.number + ".png"}
        alt="stand image"
        style={{
          width: "auto",
          height: "10vw",
        }}
      />
    </motion.div>
  );
};
