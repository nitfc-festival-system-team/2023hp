import React from "react";

import { useRouter } from "next/router";

import { useCheckIsMobile } from "@/hooks/checkIsMobile";

import { VenueMap } from "./VenueImageMap";

export const Map = () => {
  const [isMobile, _] = useCheckIsMobile();
  const router = useRouter();

  const handleAreaClick = (standNumber: number) => {
    router.push(`/contents/stand?stand=${standNumber}`);
  };

  const guideText = isMobile ? "タップ" : "クリック";

  return (
    <>
      <h1 style={{ marginTop: "1rem" }}>{"会場図案内"}</h1>
      <p style={{ textAlign: "center" }}>
        {"露店番号を" + guideText + "すると、"}
        <br />
        露店情報を閲覧できます
      </p>
      <br />
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
        <VenueMap onAreaClick={handleAreaClick} />
      </div>
    </>
  );
};
