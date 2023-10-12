import styled, { keyframes } from "styled-components";

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
  height: 30vw;

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

export const ScrollView = () => {
  return (
    <ScrollDownContainer>
      <span>Scroll Down</span>
    </ScrollDownContainer>
  );
};
