import { useRouter } from "next/router";

import { Title } from "@/components/Title";
import { FadeAnimationProvider } from "@/components/fadeAnimationProvider";

import React from "react";
import styled, { keyframes } from "styled-components";

export default function Page() {
  const router = useRouter();

  // Keyframesを定義
  const pathMoveAnimation = keyframes`
    0% {
    height: 0;
    top: 0;
    opacity: 0;
    }
    30% {
      height: 30px;
      opacity: 1;
    }
    100% {
      height: 0;
      top: 50px;
      opacity: 0;
    }
  `;

  // Styled-componentsでコンポーネントを定義
  const ScrollDownContainer = styled.div`
    position: relative;
    top: 20px;
    height: 70px;

    & span {
      position: relative;
      left: 0px;
      top: -15px;
      color: #f00;
      font-size: 0.7rem;
      letter-spacing: 0.05em;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 10%;
      width: 1px;
      height: 30px;
      background: #f00;
      animation: ${pathMoveAnimation} 1.4s ease-in-out infinite;
      opacity: 0;
    }
  `;

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
      <ScrollDownContainer>
        <span>Scroll Down</span>
      </ScrollDownContainer>
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
