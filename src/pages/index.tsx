import { EventHeader } from "@/components/EventOverlay";
import { Title } from "@/components/Title";
import { ScrollView } from "@/components/scrollStyle";
import { PageTransitionButton } from "@/components/PageTransitionButton";
import { Map } from "@/components/Map";
import { Notice } from "@/components/Notice";
import { VerticalLine } from "@/components/VerticalLine";
import { ScrollIndicator } from "@/components/ScrollIndicator";

import React from "react";
import { FadeAnimationProvider } from "@/components/FadeAnimationProvider";

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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <PageTransitionButton buttonText={"企画"} nextPage={"schedule"} />
            <PageTransitionButton buttonText={"露店"} nextPage={"stand"} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            MAP
            <Map />
          </div>
        </FadeAnimationProvider>
      </div>
      <ScrollIndicator />
    </>
  );
}
