import React, { useState } from "react";

import { VenueMap } from "./VenueImageMap";

export const Map = () => {
  const [clickedArea, setClickedArea] = useState<string | null>(null);
  const [clickedCoords, setClickedCoords] = useState<string | null>(null);

  const handleAreaClick = (e: React.MouseEvent<HTMLAreaElement>) => {
    const areaId = e.currentTarget.id;
    const areaCoords = e.currentTarget.getAttribute("coords");
    const strokeId = e.currentTarget.getAttribute("stroke");
    setClickedArea(areaId);
    setClickedCoords(areaCoords);
    console.log(areaId.toString());
    console.log(strokeId?.toString());
  };

  return (
    <>
      <h1 style={{ marginTop: "1rem" }}>{"会場図案内"}</h1>
      <p>{"露店番号を クリック/タップ すると、各露店の詳細に飛びます"}</p>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "overlay",
          width: "80vw",
          height: "80vh",
        }}
      >
        <VenueMap />
      </div>

      {clickedArea && (
        <div>
          選択したエリア: {clickedArea}
          <br />
          クリックされた座標: {clickedCoords}
        </div>
      )}
    </>
  );
};
