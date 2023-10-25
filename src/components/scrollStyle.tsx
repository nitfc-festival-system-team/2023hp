import styled, { keyframes } from "styled-components";

import { useCheckIsMobile } from "@/features/checkIsMobile";

// Keyframesを定義
const pathMoveAnimation = keyframes`
0% {
height: 0;
top: 0;
opacity: 0;
}
30% {
  height: 10vw;
  opacity: 1;
}
100% {
  height: 0;
  top: 15vw;
  opacity: 0;
}
`;

const PcScrollDownContainer = () => {
  const ScrollDownContainer = styled.div`
    position: relative;
    top: 50px;
    height: 30vw;

    & span {
      position: relative;
      left: 0px;
      top: -30px;
      color: var(--secondary-color);
      font-size: 1.2vw;
      letter-spacing: 0.05em;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 20%;
      width: 1px;
      height: 30px;
      background: var(--secondary-color);
      animation: ${pathMoveAnimation} 1.4s ease-in-out infinite;
      opacity: 0;
    }
  `;
  return (
    <ScrollDownContainer>
      <span style={{ fontSize: "1.8vw" }}>Scroll Down</span>
    </ScrollDownContainer>
  );
};

const MobileScrollDownContainer = () => {
  const ScrollDownContainer = styled.div`
    position: relative;
    top: 50px;
    height: 30vw;

    & span {
      position: relative;
      left: 0px;
      top: -30px;
      color: #f00;
      font-size: 1.2vw;
      letter-spacing: 0.05em;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 20%;
      width: 1px;
      height: 30px;
      background: #f00;
      animation: ${pathMoveAnimation} 1.4s ease-in-out infinite;
      opacity: 0;
    }
  `;
  return (
    <ScrollDownContainer>
      <span style={{ fontSize: "4vw" }}>Scroll Down</span>
    </ScrollDownContainer>
  );
};

export const ScrollView = () => {
  const [isMobile, _] = useCheckIsMobile();
  return (
    <>{isMobile ? MobileScrollDownContainer() : PcScrollDownContainer()}</>
  );
};
