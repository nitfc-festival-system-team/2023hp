import React from "react";

import { EventHeader } from "@/components/EventOverlay";
import { Title } from "@/components/Title";
import { OpenDate } from "@/components/OpenDate";
import { ScrollView } from "@/components/scrollStyle";
import { PageTransitionButton } from "@/components/PageTransitionButton";
import { Map } from "@/components/Map";
import { Notice } from "@/components/Notice";
import { Sidebar } from "@/components/VerticalLine";
import { BackGroundImg } from "@/components/BackGround";
import { FadeAnimationProvider } from "@/components/FadeAnimationProvider";
import { Footer } from "@/components/Footer";

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
        <OpenDate />
        <ScrollView />
        <BackGroundImg />
        <FadeAnimationProvider>
          <Notice />
          <div
            className="buttonContainer"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              padding: "3vh",
            }}
          >
            <PageTransitionButton buttonText={"企画"} nextPage={"schedule"} />
            <PageTransitionButton buttonText={"露店"} nextPage={"stand"} />
          </div>
          <div
            className="mapContainer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "3vh",
            }}
          >
            <h1>MAP</h1>
            <Map />
          </div>
        </FadeAnimationProvider>
        <Footer />
      </div>
    </>
  );
}
