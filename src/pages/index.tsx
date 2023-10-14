import { EventHeader } from "@/components/EventOverlay";
import { Title } from "@/components/Title";
import { ScrollView } from "@/components/scrollStyle";
import { FadeAnimationProvider } from "@/components/FadeAnimationProvider";
import { PageTransitionButton } from "@/components/PageTransitionButton";
import { Map } from "@/components/Map";
import { Notice } from "@/components/Notice";
import { Sidebar } from "@/components/VerticalLine";
import { BackGroundImg } from "@/components/BackGround";

import React from "react";

export default function Page() {
  return (
    <>
      <EventHeader />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Sidebar />
        <Title />
        <ScrollView />
        <BackGroundImg />
        <Notice />
        <FadeAnimationProvider>
          <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <PageTransitionButton buttonText={"企画"} nextPage={"schedule"} />
            <PageTransitionButton buttonText={"露店"} nextPage={"stand"} />
          </div>
        </FadeAnimationProvider>
        MAP
        <Map />
      </div>
    </>
  );
}
