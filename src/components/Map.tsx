import React, { useState } from "react";

import { standCoords } from "@/db/stand-coords";

export const Map = () => {
  const [clickedArea, setClickedArea] = useState<string | null>(null);
  const [clickedCoords, setClickedCoords] = useState<string | null>(null);

  const handleAreaClick = (e: React.MouseEvent<HTMLAreaElement>) => {
    const areaId = e.currentTarget.id;
    const areaCoords = e.currentTarget.getAttribute("coords");
    setClickedArea(areaId);
    setClickedCoords(areaCoords);
    console.log(areaId.toString());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "auto",
        // maxWidth: "90vw",
        // maxHeight: "100vh",
      }}
    >
      <img src="image/venue_map.jpg" alt="Map" useMap="#map" />
      <map name="map">
        <area
          id="stand1"
          shape="rect"
          coords="622,889,679,946"
          href="#"
          alt="stand1"
          onClick={handleAreaClick}
        />
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
      {clickedArea && (
        <div>
          選択したエリア: {clickedArea}
          <br />
          クリックされた座標: {clickedCoords}
        </div>
      )}
    </div>
  );
};
