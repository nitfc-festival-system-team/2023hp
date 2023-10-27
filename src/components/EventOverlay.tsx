import React, { useEffect, useState } from "react";

import styled from "styled-components";

import { schedules } from "@/db/schedule";

const timeOffset = Math.abs(
  //1月
  new Date(1900, 0, 0, 0).getTime() - new Date(1900, 1, 0, 0, 0).getTime(),
);

const timeToDisplay = Math.abs(
  //10分で定義
  new Date(1900, 0, 1, 0, 0).getTime() - new Date(1900, 0, 1, 0, 10).getTime(),
);

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  position: relative;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const HeaderContent = styled.div`
  width: 70%;
`;

const Header = styled.header`
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.2rem;
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.h3`
  margin: 0;
  color: var(--secondary-color);
`;

const Title = styled.h2`
  margin: 0;
  white-space: nowrap;
`;

const ToggleButton = styled.button`
  width: 10%;
  border: none;
  background: white;
  cursor: pointer;
  position: absolute;
  text-align: center;
  right: 4vw;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;

const ArrowIcon = styled.span`
  font-size: 1rem;
`;

export const EventHeader = () => {
  const [now, setTime] = useState(new Date());
  console.log(now);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  });

  //未開催の内、開催時刻が現在時刻に近い順にソート
  const eventSorted = schedules
    .filter((event) => {
      const startTime = event.startDate.getTime() - timeOffset;
      const endTime = event.endDate?.getTime() - timeOffset;

      return startTime > now.getTime() || !endTime || endTime >= now.getTime();
    })
    .sort((a, b) => {
      const diffA = Math.abs(
        a.startDate.getTime() - timeOffset - now.getTime(),
      );
      const diffB = Math.abs(
        b.startDate.getTime() - timeOffset - now.getTime(),
      );
      return diffA - diffB;
    });

  const upcomingEvent = eventSorted[0];

  //現在時刻が開催時刻と終了時刻の合間にあるイベントを取得
  const nowHeld = schedules.filter((event) => {
    const startTime = event.startDate.getTime() - timeOffset;
    const endTime = event.endDate?.getTime() - timeOffset;

    return startTime <= now.getTime() && (!endTime || endTime >= now.getTime());
  });

  const [isHidden, setIsHidden] = useState(false);

  const toggleHeader = () => {
    setIsHidden(!isHidden);
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderContent>
            <Header>
              {!isHidden && upcomingEvent ? (
                <>
                  <SubTitle>
                    {nowHeld.length !== 0 &&
                    Math.abs(
                      upcomingEvent.startDate.getTime() - timeToDisplay,
                    ) > now.getTime()
                      ? "開催中！"
                      : "Next Event"}
                  </SubTitle>
                  {/* 現在開催中のイベントがないor次のイベントまで10分を切っていたら
                  次のイベント、それ以外なら現在開催中のイベントを表示 */}
                  <Title>
                    {nowHeld.length === 0 ||
                    Math.abs(
                      now.getTime() - upcomingEvent.startDate.getTime(),
                    ) <= timeToDisplay
                      ? upcomingEvent.title
                      : nowHeld[0].title}
                  </Title>
                </>
              ) : (
                <></>
              )}
            </Header>
          </HeaderContent>
        </HeaderContainer>
        <ToggleButton onClick={toggleHeader}>
          <ArrowIcon>{isHidden ? "▼" : "▲"}</ArrowIcon>
        </ToggleButton>
      </HeaderWrapper>
      {!isHidden && <div style={{ paddingBottom: "10vh" }} />}
    </>
  );
};
