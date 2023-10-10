import { useRouter } from "next/router";

import { EventHeader } from "@/components/EventOverlay";
import { Title } from "@/components/Title";
import { ScrollView } from "@/components/scrollStyle";
import { FadeAnimationProvider } from "@/components/fadeAnimationProvider";
import { PageTransitionButton } from "@/components/PageTransitionButton";
import { Map } from "@/components/Map";
import { Notice } from "@/components/Notice";
import { VerticalLine } from "@/components/VerticalLine";

import React from "react";

export default function Page() {
  const router = useRouter();

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
    </>
  );
}
