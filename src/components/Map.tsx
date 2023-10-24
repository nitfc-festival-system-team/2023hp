import React, { useState } from "react";

import { standCoords } from "@/db/stand-coords";

import { VenueMap } from "./VenueMap";

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
          width: "80vw",
          height: "auto",
        }}
      >
        <img
          src="image/_venue_map.svg"
          alt="Map"
          useMap="#map"
          style={{ width: "100%", height: "100%" }}
        />

        <map name="map">
          {Object.keys(standCoords).map((key) => (
            <area
              shape="rect"
              id={key}
              key={key}
              coords={standCoords[key].coords}
              onClick={handleAreaClick}
            />
          ))}
        </map>
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
