import { EventHeader } from "@/components/EventOverlay";
import { Title } from "@/components/Title";
import { ScrollView } from "@/components/scrollStyle";
import { FadeAnimationProvider } from "@/components/FadeAnimationProvider";
import { PageTransitionButton } from "@/components/PageTransitionButton";
import { Map } from "@/components/Map";
import { Notice } from "@/components/Notice";
import { VerticalLine } from "@/components/VerticalLine";
import { ScrollIndicator } from "@/components/ScrollIndicator";

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
        <VerticalLine />
        <Title />
        <ScrollView />
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
      <ScrollIndicator />
    </>
  );
}
