import { useRouter } from "next/router";

import { Title } from "@/components/Title";

import { ScrollView } from "@/components/scrollStyle";

import { FadeAnimationProvider } from "@/components/fadeAnimationProvider";
import { PageTransitionButton } from "@/components/PageTransitionButton";

import React from "react";

export default function Page() {
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Title />
      <ScrollView />
      <h1
        onClick={() => {
          router.push("/contents/notice");
        }}
        style={{ padding: "5rem" }}
      >
        お知らせ
      </h1>
      <FadeAnimationProvider>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <PageTransitionButton buttonText={"企画"} nextPage={"schedule"} />
          <PageTransitionButton buttonText={"露店"} nextPage={"stand"} />
        </div>
      </FadeAnimationProvider>
    </div>
  );
}
