import React from "react";

import { useCheckIsMobile } from "@/features/checkIsMobile";

import { VenueMap } from "./VenueImageMap";

export const Map = () => {
  const [isMobile, device] = useCheckIsMobile();
  return (
    <>
      <h1 style={{ marginTop: "1rem" }}>{"会場図案内"}</h1>
      <p style={{ textAlign: "center" }}>
        露店番号を クリック/タップ すると、
        <br />
        各露店の詳細に飛びます
      </p>
      <br />
      <p>{device}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "overlay",
          width: "80vw",
          height: isMobile ? "50vh" : "80vh",
        }}
      >
        <VenueMap />
      </div>
    </>
  );
};
