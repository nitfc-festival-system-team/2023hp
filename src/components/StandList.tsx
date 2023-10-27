import React, { useEffect, useRef } from "react";

import { useRouter } from "next/router";

import { stands } from "@/db/stand";
import { StandType } from "@/types/stand";

export const StandList = () => {
  const router = useRouter();
  const { query } = router;
  const selectedStand = Number(query.stand) || 1;

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedStand]);

  return (
    <>
      {stands.map((stand: StandType, index) => {
        const isFirstItem = index === 0;
        return (
          <StandItem
            key={index}
            stand={stand}
            isFirstItem={isFirstItem}
            isSelected={stand.number === selectedStand}
            scrollRef={scrollRef}
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
  scrollRef,
}: {
  stand: StandType;
  isFirstItem: boolean;
  isSelected: boolean;
  scrollRef: React.RefObject<HTMLDivElement>;
}) => {
  const router = useRouter();

  const handleRedirect = () => {
    if (stand.url) {
      router.push(stand.url);
    }
  };

  return (
    <div
      id={stand.number.toString()}
      ref={isSelected ? scrollRef : null}
      style={{
        width: "60vw",
        height: "16vw",
        borderBottom: "1.3px solid #000",
        borderTop: isFirstItem ? "1.3px solid #000" : "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
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
        <span
          style={{
            fontSize: "3.3vw",
            animation: stand.number === 14 ? "rainbow 1s infinite" : "none",
          }}
        >
          {stand.name}
        </span>
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
    </div>
  );
};
