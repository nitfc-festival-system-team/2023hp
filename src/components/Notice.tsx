import styled from "styled-components";

import { useCheckIsMobile } from "@/features/checkIsMobile";

import NoticeScrollableComponent from "./NoticeScrollableComponent";

const Title = styled.h1`
  font-size: 1em;
  padding: 0 em;
  margin: 0.5em 0.5em;
  border-bottom: 2px solid #000;
  font-size: 1.5em;
`;

const PcWrapper = styled.div`
  width: 55vw;
  height: 20vw;
  margin: 0 0 2em;
  background: #f0f7ff;
  border: dashed 2px #000000; /*点線*/
`;

const MobileWrapper = styled.div`
  width: 80vw;
  height: 30vw;
  margin: 0 0 2em;
  background: #f0f7ff;
  border: dashed 2px #000000; /*点線*/
`;

export const Notice = () => {
  const [isMobile, _] = useCheckIsMobile();

  return (
    <>
      {isMobile ? (
        <div>
          <Title>お知らせ</Title>
          <MobileWrapper>
            <NoticeScrollableComponent />
          </MobileWrapper>
        </div>
      ) : (
        <div>
          <Title>お知らせ</Title>
          <PcWrapper>
            <NoticeScrollableComponent />
          </PcWrapper>
        </div>
      )}
    </>
  );
};
