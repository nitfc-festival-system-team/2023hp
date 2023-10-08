import { useRouter } from "next/router";

import { Title } from "@/components/Title";

import { ScrollView } from "@/components/scrollStyle";

import { FadeAnimationProvider } from "@/components/fadeAnimationProvider";

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
      >
        お知らせ
      </h1>
      <FadeAnimationProvider>
        <h1
          onClick={() => {
            router.push("/contents/map");
          }}
        >
          全体マップ
        </h1>
        <h1
          onClick={() => {
            router.push("/contents/schedule");
          }}
        >
          スケジュール
        </h1>
      </FadeAnimationProvider>
    </div>
  );
}
