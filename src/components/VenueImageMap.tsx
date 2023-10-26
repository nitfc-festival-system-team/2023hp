import React from "react";

import { useCheckIsMobile } from "@/hooks/checkIsMobile";

export const VenueMap = ({
  onAreaClick,
}: {
  onAreaClick: (standNumber: number) => void;
}) => {
  const [isMobile, device] = useCheckIsMobile();

  return (
    <div style={{ width: "90vw", height: "50vh" }}>
      <object
        type="image/svg+xml"
        data="image/venue_map.svg"
        style={{ width: "100%", height: "100%" }}
      ></object>
    </div>
  );
};
