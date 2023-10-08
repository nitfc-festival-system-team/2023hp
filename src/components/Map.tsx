import Link from "next/link";

import { useRouter } from "next/router";

import { MouseEvent } from "react";

export const Map = () => {
  const router = useRouter();

  const handleAreaClick = (e: MouseEvent) => {
    const target = e.target as HTMLAreaElement; // ターゲット要素をHTMLAreaElement型にキャスト

    if (target.id === "area1") {
      router.push("../pages/index.tsx");
    } else if (target.id === "area2") {
      router.push("../pages/index.tsx");
    }
  };
  return (
    <div>
      <img
        src="./image/campus_map.png"
        // alt="Map"
        className="unko"
        // useMap="#map"
        // onClick={handleAreaClick}
      />
      <map name="map">
        <area id="area1" shape="rect" coords="100,100,200,200" />
        <area id="area2" shape="rect" coords="800,100,900,200" />
      </map>
    </div>
  );
};
