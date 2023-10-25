import React from "react";

import { useCheckIsMobile } from "@/features/checkIsMobile";

export const VenueMap = ({
  onAreaClick,
}: {
  onAreaClick: (standNumber: number) => void;
}) => {
  const [isMobile, device] = useCheckIsMobile();

  return (
    <>
      <img
        src="image/venue_map.png"
        useMap="#ImageMap"
        alt="venue-map"
        style={{
          translate: isMobile
            ? device === "iPad"
              ? "30% 20%"
              : "32% 25%"
            : "8vw 30vh",
          scale: isMobile ? "0.9" : "1",
        }}
      />
      <map name="ImageMap">
        <area
          shape="rect"
          coords="270,387,297,412"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(1)}
        />
        <area
          shape="rect"
          coords="271,412,297,436"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(2)}
        />
        <area
          shape="rect"
          coords="273,457,299,481"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(3)}
        />
        <area
          shape="rect"
          coords="272,481,298,504"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(4)}
        />
        <area
          shape="rect"
          coords="184,384,209,418"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(5)}
        />
        <area
          shape="rect"
          coords="184,418,208,450"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(6)}
        />
        <area
          shape="rect"
          coords="183,455,210,487"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(7)}
        />
        <area
          shape="rect"
          coords="182,487,210,520"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(8)}
        />
        <area
          shape="rect"
          coords="213,590,251,611"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(9)}
        />
        <area
          shape="rect"
          coords="177,589,212,613"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(10)}
        />
        <area
          shape="rect"
          coords="327,628,365,653"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(11)}
        />
        <area
          shape="rect"
          coords="368,628,405,652"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(12)}
        />
        <area
          shape="rect"
          coords="92,961,126,995"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(13)}
        />
        <area
          shape="rect"
          coords="484,629,520,653"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(14)}
        />
        <area
          shape="rect"
          coords="523,629,560,652"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(15)}
        />
        <area
          shape="rect"
          coords="559,629,597,651"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(16)}
        />
        <area
          shape="rect"
          coords="605,603,631,629"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(17)}
        />
        <area
          shape="rect"
          coords="605,578,631,604"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(18)}
        />
        <area
          shape="rect"
          coords="604,550,630,579"
          href="#/contents/stand"
          alt=""
          onClick={() => onAreaClick(19)}
        />
        <area
          shape="rect"
          coords="605,523,632,551"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(20)}
        />
        <area
          shape="rect"
          coords="605,495,632,524"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(21)}
        />
        <area
          shape="rect"
          coords="605,470,630,496"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(22)}
        />
        <area
          shape="rect"
          coords="605,443,631,472"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(23)}
        />
        <area
          shape="rect"
          coords="605,416,631,444"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(24)}
        />
        <area
          shape="rect"
          coords="605,388,631,417"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(25)}
        />
        <area
          shape="rect"
          coords="605,361,630,389"
          alt=""
          style={{ cursor: "pointer" }}
          onClick={() => onAreaClick(26)}
        />
      </map>
    </>
  );
};
