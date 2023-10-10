import React, { useState } from "react";

export const Map = () => {
  const [clickedArea, setClickedArea] = useState<string | null>(null);
  const [clickedCoords, setClickedCoords] = useState<string | null>(null);

  const handleAreaClick = (e: React.MouseEvent<HTMLAreaElement>) => {
    const areaId = e.currentTarget.id;
    const areaCoords = e.currentTarget.getAttribute("coords");
    setClickedArea(areaId);
    setClickedCoords(areaCoords);
    if (areaId === "area1") {
      console.log("area1");
    } else if (areaId === "area2") {
      console.log("お前はarea2を押したんだぞ");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        //レスポンシブ対応
        width: "100%",
      }}
    >
      <img
        src="/image/campus_map.gif"
        alt="Map"
        useMap="#map"
        style={{
          maxWidth: "80vw", // 画像の幅が親要素に合わせる
          height: "auto", // アスペクト比を保つ
        }}
      />
      <map name="map">
        <area
          id="area1"
          shape="rect"
          coords="10,20,100,80"
          onClick={handleAreaClick}
        />
        <area
          id="area2"
          shape="rect"
          coords="110,20,200,80"
          onClick={handleAreaClick}
        />
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
